import React,{ Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { connect } from 'react-redux';

import ButtonWithBackground from '../../components/UI/ButtonWithNoBackground';
import DefaultInput from '../../components/UI/DefaultInput';

import mainStyles from '../../sass';
import styleVariables from '../../style-variables';
import authStyles from './sass';

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
      <View style={mainStyles.screenMainContainer}>
        <View style={authStyles.signButtonsContainer}>
          <ButtonWithBackground
            textColor={styleVariables.arriveBlue}
          > SIGN UP </ButtonWithBackground>
          <ButtonWithBackground
            textColor={styleVariables.arriveBlue}
          > SIGN IN </ButtonWithBackground>
        </View>
        <View style={authStyles.test}>
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
        </View>
        <View style={[authStyles.test, authStyles.resetPasswordContainer]}>
          <ButtonWithBackground
          > Reset Password </ButtonWithBackground>
        </View>
      </View>
    )
  }
}

export default AuthScreen;
