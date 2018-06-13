// Vendors
import React,{ Component } from 'react';
import {
    View,
    Text,
    ImageBackground
} from 'react-native';
import { connect } from 'react-redux';

// Components
import DefaultToast from '../../components/UI/DefaultToast';
import LoadListItem from '../../components/LoadListItem';

// Styles
import styles from './styles';

// Actions
import { resetDocumentSaved } from './actions';

class HomeScreen extends Component {
    constructor (props) {
        super(props);

        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    state = {
        homeDocuments: 0,
        isToastSuccessful: false,
        showToast: false,
        toastStatus: ''
    }

    componentDidMount() {
        this.showToast();
    }

    onNavigatorEvent = event => {
        if (event.type === "ScreenChangedEvent") {
            if (event.id && event.id === "willAppear") {
                this.props.resetDocumentSaved();
            }
        }
    }

    showToast = () => {
        // Initial Load
        if (this.props.homeDocuments.length === 0) {
            return;
        }
        // Successful Load
        else if (this.props.homeDocuments.length > this.state.homeDocuments) {
            this.setState({
                ...this.state,
                homeDocuments: this.props.homeDocuments.length,
                isToastSuccessful: true,
                showToast: true,
                toastStatus: 'Successful'
            }, this.hideToast)
        }
        // Failed Load
        else if (this.props.homeDocuments.length === this.state.homeDocuments) {
            this.setState({
                ...this.state,
                homeDocuments: this.props.homeDocuments.length,
                isToastSuccessful: false,
                showToast: true,
                toastStatus: 'Error'
            }, this.hideToast)
        }
    }

    hideToast = () => {
        setTimeout(() => {
            this.setState({
                ...this.state,
                showToast: false
            })
        }, 3000);
    }

    render () {
        const { isToastSuccessful, showToast } = this.state;

        return (
            <View style={styles.homeMainContainer}>
                <View style={styles.toastContainer}>
                <DefaultToast
                    showToast={showToast}
                    valid={isToastSuccessful}
                >Upload {this.state.toastStatus}</DefaultToast>
            </View>
            {this.props.homeDocuments.map((document) => {
                return (
                    <LoadListItem
                        key={document.id}
                        document={document}
                        navigator={this.props.navigator}
                    />
                );
            })}
        </View>
    );
  }
}

const mapStateToProps = state => ({
    homeDocuments: state.homeDocuments
});

const mapDispatchToProps = dispatch => {
    return {
        resetDocumentSaved: () => dispatch(resetDocumentSaved())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
