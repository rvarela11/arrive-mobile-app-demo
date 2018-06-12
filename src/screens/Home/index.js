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
    isToastSuccessful: true,
    showToast: false,
    homeDocuments: 0
  }

  showToast = () => {
    if(this.props.homeDocuments.length === this.state.homeDocuments) {
      return 'Upload Error';

    }
    return 'Upload Successful';

  }

  render () {
    const { isToastSuccessful } = this.state;
    return (
        <View>
          <View style={styles.toastContainer}>
            <DefaultToast
              showToast={showToast}
              valid={isToastSuccessful}
            >{this.showToast()}</DefaultToast>
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
