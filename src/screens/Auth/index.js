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
import styles from './styles';

// Images
import arriveLogo from '../../assets/arrive-logo.png';

// Utility
import { validate } from '../../utility/validation';

class AuthScreen extends Component {

  state = {
    authMode: 'SIGN IN',
    controls: {
      fullName: {
        hasOnBlur: false,
        valid: true,
        value: ''
      },
      email: {
        hasOnBlur: false,
        valid: false,
        validationRules: {
          isEmail: true
        },
        value: ''
      },
      phone: {
        hasOnBlur: false,
        valid: true,
        value: ''
      },
      password: {
        hasOnBlur: false,
        valid: false,
        validationRules: {
          minLength: 6
        },
        value: ''
      },
      confirmPassword: {
        hasOnBlur: false,
        valid: false,
        validationRules: {
          equalTo: 'password'
        },
        value: ''
      }
    },
    isSignUpFormValid: false
  }

  // Setting the authMode to know which TextInput to display
  switchAuthModelHandler = (authMode) => {
    this.setState({authMode});
    // Cleans state since the SIGN UP and SIGN IN are sharing inputs
    this.setState({
      controls: {
        fullName: {
          hasOnBlur: false,
          valid: true,
          value: ''
        },
        email: {
          hasOnBlur: false,
          valid: false,
          validationRules: {
            isEmail: true
          },
          value: ''
        },
        phone: {
          hasOnBlur: false,
          valid: true,
          value: ''
        },
        password: {
          hasOnBlur: false,
          valid: false,
          validationRules: {
            minLength: 6
          },
          value: ''
        },
        confirmPassword: {
          hasOnBlur: false,
          valid: false,
          validationRules: {
            equalTo: 'password'
          },
          value: ''
        }
      }
    });
  }

  updateInputState = (key, value) => {
    // This if statment removes the error if the validationRules are met
    if(this.state.controls[key].hasOnBlur) {
      this.validateInputState(key, value);
    }
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          [key]: {
            ...prevState.controls[key],
            value
          }
        }
      }
    }, this.checkForSignUpValidation)
  }

  validateInputState = (key, value) => {
    let connectedValue = {};
    if (this.state.controls[key].validationRules.equalTo) {
      const equalControl = this.state.controls[key].validationRules.equalTo
      const equalValue = this.state.controls[equalControl].value;
      connectedValue = {
        ...connectedValue,
        equalTo: equalValue
      };
    }
    if (key === 'password') {
      connectedValue = {
        ...connectedValue,
        equalTo: value
      };
    }

    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          confirmPassword: {
            ...prevState.controls.confirmPassword,
            valid: key === 'password'
            ? validate(
              prevState.controls.confirmPassword.value,
              prevState.controls.confirmPassword.validationRules,
              connectedValue
            )
            : prevState.controls.confirmPassword.valid
          },
          [key]: {
            ...prevState.controls[key],
            value,
            valid: validate(value, prevState.controls[key].validationRules, connectedValue),
            hasOnBlur: true
          }
        }
      }
    }, this.checkForSignUpValidation)
  }

  checkForSignUpValidation = () => {
    // Get all the valid values from this.state.controls and stop at the first false
    for (let key in this.state.controls) {
      if (!this.state.controls[key].valid) {
        this.setState({isSignUpFormValid: false});
        return;
      } else {
        this.setState({isSignUpFormValid: true})
      }
    }

  }

  render () {

    const {
      controls
    } = this.state

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
            style={styles.inputWithBorder}
            value={controls.fullName.value}
            onChangeText={(value) => this.updateInputState('fullName', value)}
            valid={controls.fullName.valid}
            hasOnBlur={controls.fullName.hasOnBlur}
          />
        </View>
      )
      phoneInput = (
        <View>
          <Text>Phone</Text>
          <DefaultInput
            style={styles.inputWithBorder}
            value={controls.phone.value}
            onChangeText={(value) => this.updateInputState('phone', value)}
            valid={controls.phone.valid}
            hasOnBlur={controls.phone.hasOnBlur}
          />
        </View>
      )
      confirmPasswordInput = (
        <View>
          <View style={styles.inputLabelContainer}>
            <Text>Confirm Password</Text>
            <Text style={(!controls.confirmPassword.valid && controls.confirmPassword.hasOnBlur) ? styles.showErrorMessage : styles.hideErrorMessage}>Passwords do not match</Text>
          </View>
          <DefaultInput
            style={styles.inputWithBorder}
            value={controls.confirmPassword.value}
            onChangeText={(value) => this.validateInputState('confirmPassword', value)}
            valid={controls.confirmPassword.valid}
            hasOnBlur={controls.confirmPassword.hasOnBlur}
          />
        </View>
      )
      termsAndConditions = (
        <View style={styles.termsAndConditionsContainer}>
          <Text>By creating an account you agree to our Terms of Service and Privacy Policy</Text>
        </View>
      )
      resetPasswordButton = null;
      signButtonWithBackgroundText = 'SIGN UP';
    }

    return (
      <View style={[mainStyles.screenMainContainer, styles.authMainContainer]}>
        <ArriveLogoHeader />

        <SignButtonsControl switchAuthModelHandler={this.switchAuthModelHandler} />

        <View>
          {fullNameInput}
          <View style={styles.inputLabelContainer}>
            <Text>Email</Text>
            <Text style={(!controls.email.valid && controls.email.hasOnBlur) ? styles.showErrorMessage : styles.hideErrorMessage}>Invalid Email</Text>
          </View>
          <DefaultInput
            style={styles.inputWithBorder}
            value={controls.email.value}
            onChangeText={(value) => this.updateInputState('email', value)}
            onBlur={(event) => this.validateInputState('email', event.nativeEvent.text)}
            valid={controls.email.valid}
            hasOnBlur={controls.email.hasOnBlur}
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='email-address'
          />
          {phoneInput}
          <View style={styles.inputLabelContainer}>
            <Text>Password</Text>
            <Text style={(!controls.password.valid && controls.password.hasOnBlur) ? styles.showErrorMessage : styles.hideErrorMessage}>Must be 6 characters long</Text>
          </View>
          <DefaultInput
            style={styles.inputWithBorder}
            value={controls.password.value}
            onChangeText={(value) => this.updateInputState('password', value)}
            onBlur={(event) => this.validateInputState('password', event.nativeEvent.text)}
            valid={controls.password.valid}
            hasOnBlur={controls.password.hasOnBlur}
          />
          {confirmPasswordInput}
          {resetPasswordButton}
        </View>
        {termsAndConditions}
        <View>
          <DefaultButton
            style={styles.signButtonWithBackground}
            textStyle={styles.signButtonWithBackground__Text}
            onPress={startTabs}
            disabled={(this.state.authMode === 'SIGN UP') ? !this.state.isSignUpFormValid : false}
          > {signButtonWithBackgroundText} </DefaultButton>
        </View>
      </View>
    )
  }
}

export default AuthScreen;
