import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/Welcome/WelcomeScreen";
import DeliveryScreen from "../screens/Delivery/DeliveryScreen";
import EpaymentScreen from "../screens/E-payment/EpaymentScreen";
import CreateAccountScreen from "../screens/user/CreateAccountScreen";
import VerificationCodeScreen from "../screens/user/verificationCodeScreen";
import {HeaderButton} from '../components/atoms'
import LoginScreen from "../screens/user/LoginScreen";
import HomeScreen from "../screens/home/HomeScreen";
import BottomTabNavigationScreens from "./bottomTabsNavigationScreens";
import LanguageScreen from "../screens/Language/LanguageScreen";
import EditProfileScreen from "../screens/Edit-profile/EditProfileScreen";
import { Colors,Typography} from "../styles";

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
              <HeaderButton/>
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
              <HeaderButton/>
            ),
          }}
        />
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{
            title: "",
            headerShadowVisible: GET_HIDDEN_SHADOW,
            headerLeft: () => (
              <HeaderButton/>
            ),
          }}
        />
        <Stack.Screen
          name='Homescreen'
          component={BottomTabNavigationScreens}
          options={{
            headerShown: GET_HIDDEN_HEADER,
          }}
        />
        <Stack.Screen
          name='Language'
          component={LanguageScreen}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: Colors.TEXT_COLOR,
              fontSize: Typography.FONT_SIZE_16,
              fontFamily: Typography.FONT_FAMILY_AVENIR_EXTRA_BOLD,
              lineHeight: Typography.LINE_HEIGHT_20,
            },
            headerShadowVisible: GET_HIDDEN_SHADOW,
            headerLeft: () => (
              <HeaderButton/>
            ),
          }}
        />
         <Stack.Screen
          name='Edit-profile'
          component={EditProfileScreen}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: Colors.TEXT_COLOR,
              fontSize: Typography.FONT_SIZE_16,
              fontFamily: Typography.FONT_FAMILY_AVENIR_EXTRA_BOLD,
              lineHeight: Typography.LINE_HEIGHT_20,
            },
            headerShadowVisible: GET_HIDDEN_SHADOW,
            headerLeft: () => (
              <HeaderButton/>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default CatchyNavigationScreens;