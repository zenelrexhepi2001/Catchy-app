import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/Welcome/WelcomeScreen";
import DeliveryScreen from "../screens/Delivery/DeliveryScreen";
import EpaymentScreen from "../screens/E-payment/EpaymentScreen";
import Splashscreen from "../screens/Splashscreen/SplashScreen";
import CreateAccountScreen from "../screens/user/CreateAccountScreen";

import Left from '../assets/svg/left.svg';

import { Colors } from "../styles";
import VerificationCodeScreen from "../screens/user/verificationCodeScreen";

const Stack = createNativeStackNavigator();

const GET_HIDDEN_HEADER = false;
const GET_HIDDEN_SHADOW = false;

const CatchyNavigationScreens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={EpaymentScreen}
          options={{
            headerShown: GET_HIDDEN_HEADER,
          }}
        />
        <Stack.Screen
          name="Delivery"
          component={DeliveryScreen}
          options={{
            headerShown: GET_HIDDEN_HEADER,
          }}
        />
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            headerShown: GET_HIDDEN_HEADER,
          }}
        />
        <Stack.Screen
          name="create-account"
          component={CreateAccountScreen}
          options={{
            title: "",
            headerShadowVisible: GET_HIDDEN_SHADOW,
            headerLeft: () => (
              <TouchableOpacity
                style={styles.circle}
              >
                <Left style={styles.left} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
           name='verification-code'
           component={VerificationCodeScreen}
           options={{
            title: "",
            headerShadowVisible: GET_HIDDEN_SHADOW,
            headerLeft: () => (
              <TouchableOpacity
                style={styles.circle}
              >
                <Left style={styles.left} />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 46,
    height: 46,
    borderWidth: 1,
    borderColor: Colors.SECONDARY_OPACITY,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },

  left: {
      width: 22,
      height: 22,
  }
});

export default CatchyNavigationScreens;