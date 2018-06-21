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
import LoadList from '../../components/LoadList';
import NoDocumentsContainer from '../../components/NoDocumentsContainer';

// Styles
import styles from './styles';

// Actions
import { resetDocumentSaved } from './actions';

// Utility
import { findDocById } from '../../utility/toast-helper';

class HomeScreen extends Component {
    constructor (props) {
        super(props);

        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    state = {
        editedDocumentID: 0,
        isToastBeingEdited: false,
        isToastSuccessful: false,
        showToast: false,
        toastStatus: ''
    }

    componentDidUpdate(prevProps, prevState) {
      this.showToast(prevProps.homeDocuments, prevState);
    }

    onNavigatorEvent = event => {
        if (event.type === "ScreenChangedEvent") {
            if (event.id && event.id === "willAppear") {
                this.props.resetDocumentSaved();
            }
        }
    }

    showToast = (prevPropsHomeDocuments, prevState) => {
        const { homeDocuments } = this.props;
        const { editedDocumentID, isToastBeingEdited, showToast } = this.state;

        // Getting the document that is being edited
        const prevDoc = findDocById(prevPropsHomeDocuments, editedDocumentID);
        const propsDoc = findDocById(homeDocuments, editedDocumentID);
        const areDocumentsEqual = JSON.stringify(prevDoc) === JSON.stringify(propsDoc);

        // Do not show toast if document is bieng edited
        if (isToastBeingEdited && areDocumentsEqual) {
          return;
        }

        if (!areDocumentsEqual) {
          // Successful Load
            this.setState({
                ...this.state,
                isToastBeingEdited: false,
                isToastSuccessful: true,
                showToast: true,
                toastStatus: 'Successful'
            }, this.hideToast);
        } else if ((areDocumentsEqual) && showToast === prevState.showToast) {
            // Failed Load
            this.setState({
                ...this.state,
                isToastBeingEdited: false,
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

    getLoadListItemId = (id) => {
      this.setState({
          ...this.state,
          editedDocumentID: id,
          isToastBeingEdited: true
      })
    }

    render () {
        const { isToastSuccessful, showToast } = this.state;
        let list = null;

        if (this.props.homeDocuments.length > 0) {
            list = (
                <LoadList
                    data={this.props.homeDocuments}
                    keyExtractor={this._keyExtractor}
                    navigator={this.props.navigator}
                    getLoadListItemId={this.getLoadListItemId}
                />
            );
        } else {
            list = (
                <NoDocumentsContainer />
            );
        }

    return (
        <View style={styles.homeMainContainer}>
            <View style={styles.toastContainer}>
                <DefaultToast
                    showToast={showToast}
                    valid={isToastSuccessful}
                >Upload {this.state.toastStatus}</DefaultToast>
            </View>
            {list}
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
