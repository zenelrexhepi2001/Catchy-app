import React, { useReducer, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

import { Colors, Typography } from "../../styles";
import { Input } from "../../components/molecules";

//Images svg
import Phone from "../../assets/svg/phone.svg";
import Password from "../../assets/svg/password.svg";
import Google from "../../assets/svg/google.svg";
import Apple from "../../assets/svg/apple.svg";

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };

    const updatedValidites = {
      ...state.inputValidites,
      [action.input]: action.isValid,
    };

    let updatedFormIsValid = true;
    for (const key in updatedValidites) {
      updatedFormIsValid = updatedFormIsValid && updatedValidites[key];
    }

    return {
      formIsValid: updatedFormIsValid,
      inputValidites: updatedValidites,
      inputValues: updatedValues,
    };

  }
  return state;
};
const LoginScreen = (props) => {
  const GET_VALUE_VALIDITES = false;

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      phoneNumber: "",
      password: "",
    },

    inputValidites: {
      name: GET_VALUE_VALIDITES,
      phoneNumber: GET_VALUE_VALIDITES,
      password: GET_VALUE_VALIDITES,
    },

    formIsValid: GET_VALUE_VALIDITES,
    
  });

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState]
  );
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Shipping and Track Anytime</Text>
          <Text style={styles.headerDescription}>
            Get great experience with tracky
          </Text>
        </View>
        <View style={styles.divider}>
          <View style={styles.buttonsGroup}>
            <View style={styles.flex}>
              <TouchableOpacity
                style={{ ...styles.btnPrimary, ...styles.btnLight }}
                onPress={() => props.navigation.navigate("create-account")}
              >
                <Text style={styles.btnTitle}>Sign Up</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnPrimary}>
                <Text style={{ ...styles.btnTitle, ...styles.boldTitle }}>
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.form}>
          <KeyboardAvoidingView>
            <ScrollView>
              <View style={styles.formControlElement}>
                <Text style={styles.label}>Phone Number</Text>
                <Phone style={styles.icon} />
                <Input
                  id="phoneNumber"
                  placeholder="Enter your number"
                  keyboardType="default"
                  required
                  phoneNumber
                  autoCapitalize="none"
                  errorText="Please enter a valid Phone Number"
                  onInputChange={inputChangeHandler}
                  initialValue=""
                />
              </View>
              <View style={styles.formControlElement}>
                <Text style={styles.label}>Password</Text>
                <Password style={styles.icon} />
                <Input
                  placeholder="Enter your password"
                  id="password"
                  label="password"
                  keyboardType="default"
                  secureTextEntry
                  required
                  minLength={5}
                  autoCapitalize="none"
                  errorText="Please enter a valid password"
                  onInputChange={inputChangeHandler}
                  initialValue=""
                />
              </View>
              <TouchableOpacity
                style={styles.btnSecondary}
                onPress={() => props.navigation.navigate("verification-code")}
              >
                <Text style={styles.btnSecondaryTitle}>Create Account</Text>
              </TouchableOpacity>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
        <View style={styles.footer}>
          <View style={styles.line} />
          <Text style={{ ...styles.headerDescription, ...styles.center }}>
            Or Sign Up With
          </Text>
          <TouchableOpacity
            style={{ ...styles.btnSecondary, ...styles.buttonLight }}
          >
            <Google style={styles.logo} />
            <Text style={{ ...styles.btnSecondaryTitle, ...styles.dark }}>
              Sign up with google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.btnSecondary, ...styles.btnFlexElement }}
          >
            <Apple style={styles.logo} />
            <Text style={styles.btnSecondaryTitle}>Sign up with Apple</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.WHITE,
    flex: 1,
  },

  container: {
    marginTop: 20,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 15,
    flex: 1,
  },

  header: {
    width: "100%",
  },

  headerTitle: {
    color: Colors.TEXT_COLOR,
    fontSize: Typography.FONT_SIZE_20,
    fontFamily: Typography.FONT_FAMILY_AVENIR_EXTRA_BOLD,
    fontWeight: Typography.FONT_WEIGHT_800,
    lineHeight: Typography.LINE_HEIGHT_26,
    marginBottom: 10,
  },

  headerDescription: {
    color: Colors.SECONDARY,
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_FAMILY_AVENIR_NORMAL,
    lineHeight: Typography.LINE_HEIGHT_25,
  },

  divider: {
    paddingTop: 34,
  },

  buttonsGroup: {
    backgroundColor: Colors.SECONDARY_OPACITY,
    width: "100%",
    maxWidth: "100%",
    height: 50,
    padding: 3,
    borderRadius: 30,
  },

  flex: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  btnPrimary: {
    backgroundColor: Colors.WHITE,
    width: 160,
    padding: 12,
    borderRadius: 30,
    shadowColor: "#A7A9B726",
    elevation: 10,
  },

  btnLight: {
    backgroundColor: Colors.SECONDARY_OPACITY,
  },

  btnTitle: {
    textAlign: "center",
    color: Colors.TEXT_COLOR,
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_FAMILY_AVENIR_NORMAL,
    fontWeight: Typography.FONT_WEIGHT_800,
    lineHeight: Typography.LINE_HEIGHT_18,
  },

  secondaryTitle: {
    color: Colors.SECONDARY,
  },

  boldTitle: {
    fontWeight: Typography.FONT_WEIGHT_EXTRA_BOLD,
  },

  form: {
    paddingTop: 24,
  },

  formControlElement: {
    marginBottom: 22,
  },

  label: {
    color: Colors.TEXT_COLOR,
    fontSize: Typography.FONT_SIZE_16,
    fontFamily: Typography.FONT_FAMILY_AVENIR_NORMAL,
    fontWeight: Typography.FONT_WEIGHT_EXTRA_BOLD,
    lineHeight: Typography.LINE_HEIGHT_20,
    marginBottom: 11,
  },

  icon: {
    position: "absolute",
    top: "55%",
    left: 11,
    width: 24,
    height: 24,
  },

  btnSecondary: {
    backgroundColor: Colors.PRIMARY,
    width: "100%",
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },

  btnSecondaryTitle: {
    color: Colors.WHITE,
    fontFamily: Typography.FONT_FAMILY_AVENIR_EXTRA_BOLD,
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_WEIGHT_800,
    lineHeight: Typography.LINE_HEIGHT_20,
  },

  footer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },

  line: {
    borderBottomColor: Colors.SECONDARY_OPACITY,
    borderBottomWidth: 1,
    width: "100%",
  },

  center: {
    textAlign: "center",
    marginTop: 10,
  },

  buttonLight: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    borderColor: Colors.SECONDARY_OPACITY,
    marginTop: 20,
  },

  dark: {
    color: Colors.BLACK_OPACITY,
  },

  logo: {
    width: 24,
    height: 24,
    resizeMode: "cover",
    marginRight: 10,
  },

  btnFlexElement: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14,
  },
});

export default LoginScreen;
