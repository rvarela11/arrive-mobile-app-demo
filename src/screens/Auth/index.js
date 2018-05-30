// Vendors
import React,{ Component } from 'react';
import {
  View,
  Text,
  ImageBackground
} from 'react-native';
import { connect } from 'react-redux';

// Components
import DefaultButton from '../../components/UI/DefaultButton';
import DefaultInput from '../../components/UI/DefaultInput';

// Styling
import mainStyles from '../../sass';
import styleVariables from '../../style-variables';
import authStyles from './sass';

// Images
import arriveLogo from '../../assets/arrive-logo.png';


class AuthScreen extends Component {

  state = {
    controls: {
      email: {
        value: '',
        valid: true,
        touched: false
      },
      password: {
        value: '',
        valid: true,
        touched: false
      }
    }
  }

  updateInputState = (key, value) => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          [key]: {
            ...prevState.controls[key],
            value,
            touched: true
          }
        }
      }
    })
  }

  render () {
    return (
      <View style={[mainStyles.screenMainContainer, authStyles.authMainContainer]}>
        <View style={authStyles.arriveLogoContainer}>
          <ImageBackground source={arriveLogo} style={authStyles.arriveLogo}></ImageBackground>
        </View>
        <View style={authStyles.signButtonsContainer}>
          <DefaultButton
            textStyle={authStyles.signButtons__Text}
          > SIGN UP </DefaultButton>
          <DefaultButton
            textStyle={authStyles.signButtons__Text}
          > SIGN IN </DefaultButton>
        </View>
        <View>
          <Text>Email</Text>
          <DefaultInput
            value={this.state.controls.email.value}
            onChangeText={(value) => this.updateInputState('email', value)}
            valid={this.state.controls.email.valid}
            touched={this.state.controls.email.touched}
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='email-address'
          />
          <Text>Password</Text>
          <DefaultInput
            value={this.state.controls.password.value}
            onChangeText={(value) => this.updateInputState('password', value)}
            valid={this.state.controls.password.valid}
            touched={this.state.controls.password.touched}
          />
          <DefaultButton
          > Reset Password </DefaultButton>
        </View>
        <View>
          <DefaultButton
            style={authStyles.signInButtonWithBackground}
            textStyle={authStyles.signInButtonWithBackground__Text}
          > SIGN IN </DefaultButton>
        </View>
      </View>
    )
  }
}

export default AuthScreen;
