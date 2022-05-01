import React, { useState, useEffect, useReducer, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Colors, Typography } from "../../styles";
import TakePic from "../../assets/svg/pic.svg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";

import { Input } from "../../components/molecules";

//Images svg
import Phone from "../../assets/svg/phone.svg";
import User from "../../assets/svg/user.svg";

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

const EditProfileScreen = (props) => {
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

  //take images
  const [image, setImage] = useState(null);

  const takeImage = async () => {
    try {
      const GET_ALLOW_EDITING = true;
      const GET_ASPECT = [4, 3];
      const GET_QUALITY = 1;
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: GET_ALLOW_EDITING,
        aspect: GET_ASPECT,
        quality: GET_QUALITY,
      });

      await AsyncStorage.setItem("@store", JSON.stringify(result));

      console.log(result);

      if (!result.cancelled) {
        setTimeout(() => {
          setImage(result.uri);
          console.log("Successfully");
        }, 500);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.avatar}>
          <TouchableOpacity style={styles.avatarImage}>
            {image && <Image source={{ uri: image }} style={styles.image} />}
          </TouchableOpacity>
          <View style={styles.absolute}>
            <TouchableOpacity style={styles.buttonImage} onPress={takeImage}>
              <TakePic />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.col}>
          <View style={styles.form}>
            <KeyboardAvoidingView>
              <View style={styles.formControlElement}>
                <Text style={styles.label}>Full Name</Text>
                <User style={styles.icon} />
                <Input
                  id="name"
                  placeholder="Enter your name"
                  keyboardType="default"
                  required
                  name
                  autoCapitalize="none"
                  errorText="Please enter a valid Name"
                  onInputChange={inputChangeHandler}
                  initialValue=""
                />
              </View>
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
            </KeyboardAvoidingView>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.btnSecondary}>
              <Text style={styles.btnSecondaryTitle}>Save Changes</Text>
            </TouchableOpacity>
          </View>
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
    paddingTop: Platform.OS === "android" ? 45 : 35,
    flex: 1,
  },

  avatar: {
    justifyContent: "center",
    alignItems: "center",
  },

  avatarImage: {
    backgroundColor: Colors.SECONDARY,
    width: 100,
    height: 100,
    borderRadius: 100,
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },

  absolute: {
    position: "absolute",
    top: -10,
    right: 80,
  },

  buttonImage: {
    maxWidth: "100%",
  },

  col: {
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 16,
    flex: 1,
  },

  //
  form: {
    marginTop: Platform.OS === "android" ? 30 : 28,
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
    justifyContent: "flex-end",
    alignItems: "flex-end",
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

export default EditProfileScreen;
