import React, { useState, useReducer } from "react";
import createDataContext from "./createDataContext";
import App from "../index";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

import { signin_api, signup_api } from "../api/apiAuth";

//authReducer
const authReducer = (state, action) => {
  switch (action.type) {
    case "GET_SIGNOUT_SUCCESSFULLY":
      return { token: null, email: "", displayName: "" };

    case "GET_SIGNIN_SUCCESSFULLY":
      return {
        ...state,
        token: action.payload.token,
        email: action.payload.email,
        displayName: action.payload.displayName,
      };

    case "GET_SIGNUP_SUCCESSFULLY":
      return {
        ...state,
        token: action.payload.token,
        email: action.payload.email,
        name: action.payload.displayName,
      };

    case "GET_SIGNUP_WITH_GOOGLE_AUTHENTICATION":
      return {
        ...state,
        token: action.payload.token,
        email: action.payload.email,
        name: action.payload.displayName,
      };

    case "GET_SIGNIN_GUEST_SUCCESSFULLY":
      return {
        ...state,
        token: action.payload.token,
      };

    default:
      return state;
  }
};

//function for signup
const signup = (dispatch) => {
  return async ({ email, password, displayName }) => {
    const response = await fetch(signup_api, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        displayName: displayName,
        email: email,
        password: password,
        returnSecureToken: true,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      const errorId = errorData.error.message;
      let message = "Something went wrong!";

      const EMAIL_EXISTS = "EMAIL_EXISTS";

      if (errorId === EMAIL_EXISTS) {
        setTimeout(() => {
          message = alert("This is email exists already!");
        }, 200);
      }

      throw new Error(message);
    }

    const resData = await response.json();
    console.log(resData);

    dispatch({
      type: "GET_SIGNUP_SUCCESSFULLY",
      payload: {
        token: resData,
        displayName,
        email,
      },
    });
  };
};

//function for signin
const signin = (dispatch) => {
  return async ({ email, password, displayName }) => {
    const response = await fetch(signin_api, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        displayName: displayName,
        email: email,
        password: password,
        returnSecureToken: true,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      const errorId = errorData.error.message;
      let message = "Something went wrong!";

      //
      const EMAIL_NOT_FOUND = "EMAIL_NOT_FOUND";
      const INVALID_PASSWORD = "INVALID_PASSWORD";

      if (errorId === EMAIL_NOT_FOUND) {
        message = alert("This  email could not found!");
      } else if (errorId === INVALID_PASSWORD) {
        message = alert("This password is not valid");
      }
      throw new Error(message);
    }

    const resData = await response.json();
    console.log(resData);

    dispatch({
      type: "GET_SIGNIN_SUCCESSFULLY",
      payload: {
        token: resData,
        displayName,
        email,
      },
    });
  };
};

//function for signin guest 
const signInGuest = (dispatch) => {
  return () => {
    dispatch({
      type: "GET_SIGNIN_GUEST_SUCCESSFULLY",
      payload: {
        token: "",
      },
    });
  };
};

//signout
const signout = (dispatch) => {
  return () => {
    dispatch({ type: "GET_SIGNOUT_SUCCESSFULLY" });
  };
};

//signup
const signUpWithGoogle = (dispatch) => {
  return async ({ email, password }) => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=AIzaSyC0K8Ngj3EUXOikWiTk04EN9p-XlGjLWSk",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    );

    const resData = await response.json();
    console.log(resData);

    dispatch({
      type: "GET_SIGNUP_WITH_GOOGLE_AUTHENTICATION",
      payload: {
        token: resData,
        email,
      },
    });
  };
};

const resetPassword = (dispatch) => {
  //function for reset password
};

const changePassword = (dispatch) => {
  //function for change password
};

const editProfile = (dispatch) => {
  return async (dispatch) => {
    //function for edit profile
  };
};

export const { Context, ProviderAuth } = createDataContext(
  authReducer,
  { signin, signout, signup, signInGuest },
  { token: null, email: "", displayName: "" },
  []
);
