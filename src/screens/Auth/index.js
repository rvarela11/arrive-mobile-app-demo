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
import ArriveLogoHeader from '../../components/ArriveLogoHeader';
import SignButtonsControl from '../../components/SignButtonsControl';
import startTabs from '../MainTabs';

// Styling
import mainStyles from '../../styles';
import styleVariables from '../../style-variables';
import authStyles from './styles';

// Images
import arriveLogo from '../../assets/arrive-logo.png';


class AuthScreen extends Component {

  state = {
    authMode: 'SIGN IN',
    controls: {
      fullName: {
        value: '',
        valid: true,
        touched: false
      },
      email: {
        value: '',
        valid: true,
        touched: false
      },
      phone: {
        value: '',
        valid: true,
        touched: false
      },
      password: {
        value: '',
        valid: true,
        touched: false
      },
      confirmPassword: {
        value: '',
        valid: true,
        touched: false
      }
    }
  }

  switchAuthModelHandler = (authMode) => {
    this.setState({authMode})
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

    let resetPasswordButton = (
      <View>
        <DefaultButton> Reset Password </DefaultButton>
      </View>
    )
    let signButtonWithBackgroundText = 'SIGN IN';

    // Setting additional inputs for SIGN UP
    let fullNameInput = null;
    let phoneInput = null;
    let confirmPasswordInput = null;
    let termsAndConditions = null;

    if(this.state.authMode === 'SIGN UP') {
      fullNameInput = (
        <View>
          <Text>Full Name</Text>
          <DefaultInput
            style={authStyles.inputWithBorder}
            value={this.state.controls.fullName.value}
            onChangeText={(value) => this.updateInputState('fullName', value)}
            valid={this.state.controls.fullName.valid}
            touched={this.state.controls.fullName.touched}
          />
        </View>
      )
      phoneInput = (
        <View>
          <Text>Phone</Text>
          <DefaultInput
            style={authStyles.inputWithBorder}
            value={this.state.controls.phone.value}
            onChangeText={(value) => this.updateInputState('phone', value)}
            valid={this.state.controls.phone.valid}
            touched={this.state.controls.phone.touched}
          />
        </View>
      )
      confirmPasswordInput = (
        <View>
          <Text>Confirm Password</Text>
          <DefaultInput
            style={authStyles.inputWithBorder}
            value={this.state.controls.confirmPassword.value}
            onChangeText={(value) => this.updateInputState('confirmPassword', value)}
            valid={this.state.controls.confirmPassword.valid}
            touched={this.state.controls.confirmPassword.touched}
          />
        </View>
      )
      termsAndConditions = (
        <View style={authStyles.termsAndConditionsContainer}>
          <Text>By creating an account you agree to our Terms of Service and Privacy Policy</Text>
        </View>
      )
      resetPasswordButton = null;
      signButtonWithBackgroundText = 'SIGN UP';
    }

    return (
      <View style={[mainStyles.screenMainContainer, authStyles.authMainContainer]}>
        <ArriveLogoHeader />

        <SignButtonsControl switchAuthModelHandler={this.switchAuthModelHandler} />

        <View>
          {fullNameInput}
          <Text>Email</Text>
          <DefaultInput
            style={authStyles.inputWithBorder}
            value={this.state.controls.email.value}
            onChangeText={(value) => this.updateInputState('email', value)}
            valid={this.state.controls.email.valid}
            touched={this.state.controls.email.touched}
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='email-address'
          />
          {phoneInput}
          <Text>Password</Text>
          <DefaultInput
            style={authStyles.inputWithBorder}
            value={this.state.controls.password.value}
            onChangeText={(value) => this.updateInputState('password', value)}
            valid={this.state.controls.password.valid}
            touched={this.state.controls.password.touched}
          />
          {confirmPasswordInput}
          {resetPasswordButton}
        </View>
        {termsAndConditions}
        <View>
          <DefaultButton
            style={authStyles.signButtonWithBackground}
            textStyle={authStyles.signButtonWithBackground__Text}
            onPress={startTabs}
          > {signButtonWithBackgroundText} </DefaultButton>
        </View>
      </View>
    )
  }
}

export default AuthScreen;
