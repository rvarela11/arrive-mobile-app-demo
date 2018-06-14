// Vendors
import React,{ Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    FlatList
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
        isToastSuccessful: false,
        showToast: false,
        toastStatus: ''
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
      this.showToast(prevProps.homeDocuments, prevState.showToast);
    }

    onNavigatorEvent = event => {
        if (event.type === "ScreenChangedEvent") {
            if (event.id && event.id === "willAppear") {
                this.props.resetDocumentSaved();
            }
        }
    }

    showToast = (prevPropsHomeDocuments, prevStateShowToast) => {

        if (this.props.homeDocuments.length > prevPropsHomeDocuments.length) {
          // Successful Load
            this.setState({
                ...this.state,
                isToastSuccessful: true,
                showToast: true,
                toastStatus: 'Successful'
            }, this.hideToast);
        } else if (this.props.homeDocuments.length === prevPropsHomeDocuments.length && this.state.showToast === prevStateShowToast) {
            // Failed Load
            this.setState({
                ...this.state,
                isToastSuccessful: false,
                showToast: true,
                toastStatus: 'Error'
            }, this.hideToast);
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

    _keyExtractor = (item, index) => item.id;

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
            <FlatList
              data={this.props.homeDocuments}
              keyExtractor={this._keyExtractor}
              renderItem={({item}) => {
                return (
                  <LoadListItem
                      key={item.id}
                      document={item}
                      navigator={this.props.navigator}
                  />
                );
              }}
            />
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
