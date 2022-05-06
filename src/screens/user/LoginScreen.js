import React, { useReducer, useState, useCallback, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";

import { Colors, Typography } from "../../styles";
import { Input } from "../../components/molecules";

//Images svg
import Phone from "../../assets/svg/phone.svg";
import Password from "../../assets/svg/password.svg";
import Google from "../../assets/svg/google.svg";
import Apple from "../../assets/svg/apple.svg";

import { Context as AuthContext, Context } from "../../context/AuthContext";
import { Formik } from "formik";
import * as Yup from "yup";
import { min } from "moment";

//import {Context as AuthContext} from '../../context/AuthContext';

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
      setPassword(), setEmail();
    },
    [dispatchFormState]
  );

  const { state, signin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
            }}
            onSubmit={(values) => console.log(JSON.stringify(values))}
            validationSchema={Yup.object().shape({
              name: Yup.string().required("Please enter valid name"),
              email: Yup.string().email().required(),
              password: Yup.string()
                .min(4)
                .max(10, "Password should not excced 10 chars.")
                .required(),
            })}
          >
            {({
              values,
              handleChange,
              errors,
              setFieldTouched,
              touched,
              isValid,
              handleSubmit,
            }) => (
              <ScrollView>
                <>
                  <View style={styles.formControl}>
                    <Text style={styles.label}>Email/PhoneNumber</Text>
                    <Phone style={styles.icon} />
                    <TextInput
                      placeholder="email"
                      value={email}
                      onChangeText={setEmail}
                      style={styles.formControlElement}
                    />
                  </View>
                  <View style={styles.formControl}>
                    <Text style={styles.label}>Password</Text>
                    <Password style={styles.icon} />
                    <TextInput
                      placeholder="password"
                      value={password}
                      onChangeText={setPassword}
                      maxLength={20}
                      style={styles.formControlElement}
                    />
                  </View>
                  <TouchableOpacity
                    style={styles.btnSecondary}
                    onPress={() => {
                      signin({ email, password });
                    }}
                  >
                    <Text style={styles.btnSecondaryTitle}>Create Account</Text>
                  </TouchableOpacity>
                </>
              </ScrollView>
            )}
          </Formik>
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
            onPress={() => props.navigation.navigate("Homescreen")}
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

  formControl: {
    marginBottom: 22,
  },

  formControlElement: {
    width: "100%",
    height: 52,
    fontSize: 14,
    color: Colors.BLACK_OPACITY,
    fontFamily: Typography.FONT_FAMILY_AVENIR_NORMAL,
    fontWeight: Typography.FONT_WEIGHT_400,
    lineHeight: Typography.LINE_HEIGHT_25,
    borderWidth: 1,
    borderColor: Colors.SECONDARY_OPACITY,
    paddingLeft: 40,
    borderRadius: 20,
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
