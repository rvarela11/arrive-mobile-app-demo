// Vendors
import React,{ Component } from 'react';
import {
    View,
    Text,
    ImageBackground
} from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';

// Components
import DefaultToast from '../../components/UI/DefaultToast';

// Styling
import styles from './styles';

class HomeScreen extends Component {

  state = {
    homeDocuments: 0,
    isToastSuccessful: false,
    showToast: false,
    toastStatus: ''
  }

  componentDidMount() {
    this.showToast();
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
        <View>
            <View style={styles.toastContainer}>
              <DefaultToast
                showToast={showToast}
                valid={isToastSuccessful}
              >Upload {this.state.toastStatus}</DefaultToast>
            </View>
            {this.props.homeDocuments.map((document) => {
                return (
                    <Card key={document.title}>
                        <Text>{document.title}</Text>
                        <Text>{document.docType}</Text>
                        <Text>{document.notes}</Text>
                    </Card>
                );
            })}
        </View>
    );
  }
}

const mapStateToProps = state => ({
    homeDocuments: state.homeDocuments
})

export default connect(mapStateToProps)(HomeScreen);
