import React,{ Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { connect } from 'react-redux';

class AuthScreen extends Component {

  render () {
    return (
      <View>
        <Text>{this.props.location}</Text>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    location: state.location.location
  };
};

export default connect(mapStateToProps, null)(AuthScreen);
