import { TouchableOpacity, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home/HomeScreen";
import MyOrderScreen from "../screens/MyOrder/MyOrderScreen";
import MessagesScreen from "../screens/Messages/MessagesScreen";
import ProfileScreen from "../screens/profile/profileScreen";

import HomeIcon from "../assets/svg/home.svg";
import ReceiptIcon from "../assets/svg/receipt.svg";
import Messages from "../assets/svg/message.svg";
import Profile from "../assets/svg/profile.svg";
import { Colors, Typography } from "../styles";

const Tab = createBottomTabNavigator();

const GET_HEADER_HIDDEN = false;
const GET_SHOW_LABEL = true;
const GET_HIDE_KEYBOARD = false;

const BottomTabNavigationScreens = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: GET_SHOW_LABEL,

        tabBarStyle: {
          position: "absolute",
          width: "100%",
          maxWidth: "100%",
          shadowColor: "#fff",
          borderTopWidth: 0,
          elevation: 0,
          paddingBottom: 4,
        },

        tabBarItemStyle: {
          backgroundColor: Colors.WHITE,
        },

        tabBarLabelStyle: {
          color: Colors.SECONDARY,
          fontSize: Typography.FONT_SIZE_10,
          fontFamily: Typography.FONT_FAMILY_AVENIR_NORMAL,
          fontWeight: Typography.FONT_WEIGHT_500,
          lineHeight: Typography.LINE_HEIGHT_13,
        },

        tabBarButton: (props) => <TouchableOpacity {...props} />,

        tabBarHideOnKeyboard: GET_HIDE_KEYBOARD,

        tabBarBadgeStyle: {
          color: Colors.TEXT_COLOR,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: GET_HEADER_HIDDEN,
          tabBarIcon: () => <HomeIcon style={styles.iconLabel} />,
        }}
      />
      <Tab.Screen
        name="MyOrder"
        component={MyOrderScreen}
        options={{
          headerShown: GET_HEADER_HIDDEN,
          tabBarIcon: () => <ReceiptIcon style={styles.iconLabel} />,
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          headerShown: GET_HEADER_HIDDEN,
          tabBarIcon: () => <Messages style={styles.iconLabel} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: GET_HEADER_HIDDEN,
          tabBarIcon: () => <Profile style={styles.iconLabel} />,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconLabel: {
    width: 24,
    height: 24,
  },
});

export default BottomTabNavigationScreens;
