import React, { useContext, useEffect, useReducer,useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { Colors, Typography } from "../../styles";
import {
  Context as AuthContext, Context
} from "../../context/AuthContext";

export const GET_CHANGE_INPUT = "GET_CHANGE_INPUT";
export const GET_CHANGE_INPUT_BLUR = "GET_BORDER_INPUT";

const inputReducer = (state, action) => {
  switch (action.type) {
    case GET_CHANGE_INPUT:
      return {
        ...state,
        value: action.value,
        isValid: action.isValid,
      };
    case GET_CHANGE_INPUT_BLUR:
      return {
        ...state,
        touched: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue ? props.initialValue : "",
    isValid: props.initiallyValid,
    touched: false,
  });

  const { onInputChange, id } = props;
  const {state,signin} = useContext(AuthContext);

  useEffect(() => {
    if (inputState.touched) {
      onInputChange(id, inputState.value, inputState.isValid);
    }
  }, [inputState, onInputChange, id]);

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const textChangeHandler = (text) => {

    //Values true and false 
    const GET_VALID_REQUEST = false;
    const GET_VALID_REQUEST_IS_VALID = true;

    setEmail();
    setPassword();
    
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = GET_VALID_REQUEST_IS_VALID;
    if (props.required && text.trim().length === 0) {
      isValid = GET_VALID_REQUEST;
    }
    if (props.email && !emailRegex.test(text.toLowerCase())) {
      isValid = GET_VALID_REQUEST;
    }
    if (props.min != null && +text < props.min) {
      isValid = GET_VALID_REQUEST;
    }
    if (props.max != null && +text > props.max) {
      isValid = GET_VALID_REQUEST;
    }
    if (props.minLength != null && text.length < props.minLength) {
      isValid = GET_VALID_REQUEST;
    }
    dispatch({ type: GET_CHANGE_INPUT, value: text, isValid: isValid });
  };

  const lostFocusHandler = () => {
    dispatch({ type: GET_CHANGE_INPUT_BLUR });
  };
  
  return (
    <>
      <TextInput
       {...props}
       style={styles.formControlElement}
       value={inputState.value}
       onChangeText={textChangeHandler}
       onBlur={lostFocusHandler}
      />
      {!inputState.isValid && inputState.touched && (
        <View style={styles.row}>
          <Text style={styles.message}>{props.errorText}</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
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

  row: {
    width: "100%",
    alignItems: "flex-end",
  },

  message: {
    position: "absolute",
    color: "red",
    fontFamily: Typography.FONT_FAMILY_AVENIR_NORMAL,
    fontSize: 13,
    fontWeight: Typography.FONT_WEIGHT_500,
    lineHeight: Typography.LINE_HEIGHT_18,
    textAlign: "right",
  },
});

export default Input;
