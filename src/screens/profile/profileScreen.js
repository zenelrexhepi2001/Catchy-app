import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ScrollView,
} from "react-native";
import { Colors, Typography } from "../../styles";
import ProfileAvatar from "../../assets/svg/profile-avatar.svg";

//Images -> svg
import Lock from "../../assets/svg/pas.svg";
import Language from "../../assets/svg/Globe.svg";
import Notification from "../../assets/svg/notification2.svg";
import Help from "../../assets/svg/help-color.svg";
import Security from "../../assets/svg/Security.svg";
import Share from "../../assets/svg/Share.svg";
import Team from "../../assets/svg/Team.svg";
import Mobile from "../../assets/svg/Mobile.svg";

import { Context as AuthContext, Context } from "../../context/AuthContext";

const ProfileScreen = (props) => {
  const { state, signout } = useContext(AuthContext);
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <View style={styles.navbar}>
          <TouchableOpacity style={styles.navFlex}>
            <Text style={styles.title}>My Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.profileContainer}>
          <View style={styles.profileUser}>
            <TouchableOpacity style={styles.profileAvatar}>
              <ProfileAvatar style={styles.image} />
            </TouchableOpacity>
            <View style={styles.profileContent}>
              <Text style={styles.profileTitle}>{state.displayName}</Text>
              <Text style={styles.profileNumber}>{state.email}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.btnSecondary}>
            <Text style={styles.btnTitle}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.row}>
          <ScrollView overScrollMode="auto">
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Settings</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => props.navigation.navigate("Edit-profile")}
              >
                <Lock style={styles.logo} />
                <Text style={styles.buttonTitle}>Change Password</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => props.navigation.navigate("Language")}
              >
                <Language style={styles.logo} />
                <Text style={styles.buttonTitle}>Language</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Notification style={styles.logo} />
                <Text style={styles.buttonTitle}>Notification</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>About Us</Text>
              <TouchableOpacity style={styles.button}>
                <Help style={styles.logo} />
                <Text style={styles.buttonTitle}>FAQ</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Security style={styles.logo} />
                <Text style={styles.buttonTitle}>Security</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Team style={styles.logo} />
                <Text style={styles.buttonTitle}>Contact Us</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Other</Text>
              <TouchableOpacity style={styles.button}>
                <Share style={styles.logo} />
                <Text style={styles.buttonTitle}>Share</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Mobile style={styles.logo} />
                <Text style={styles.buttonTitle}>Get The Latest Version</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.footer}>
              <TouchableOpacity style={styles.btnDanger} onPress={signout}>
                <Text style={styles.dangerTitle}>Log out</Text>
              </TouchableOpacity>
              <Text style={styles.textGray}>
                Logged in as
                <Text style={styles.textDark}> {state.email}</Text>
              </Text>
            </View>
          </ScrollView>
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

  header: {
    backgroundColor: Colors.BLACK_OPACITY,
    width: "100%",
    minHeight: 219,
    paddingTop: 25,
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 24,
  },

  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },

  navFlex: {
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    color: Colors.WHITE,
    fontSize: 16,
    fontFamily: Typography.FONT_FAMILY_OUTFIT,
    fontWeight: Typography.FONT_WEIGHT_800,
    lineHeight: Typography.LINE_HEIGHT_20,
  },

  profileContainer: {
    width: "100%",
    maxWidth: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  profileUser: {
    flexDirection: "row",
    alignItems: "center",
  },

  profileAvatar: {
    marginRight: Platform.OS === "android" ? 16 : 14,
  },

  image: {
    width: 54,
    height: 54,
    resizeMode: "cover",
  },

  profileContent: {
    maxWidth: "100%",
  },

  profileTitle: {
    color: Colors.WHITE,
    fontSize: Typography.FONT_SIZE_16,
    fontFamily: Typography.FONT_FAMILY_OUTFIT,
    fontWeight: Typography.FONT_WEIGHT_600,
    lineHeight: Typography.LINE_HEIGHT_20,
    marginBottom: Platform.OS === "android" ? 3 : 2,
  },

  profileNumber: {
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_FAMILY_AVENIR_NORMAL,
    fontWeight: Typography.FONT_WEIGHT_400,
    color: Colors.WHITE,
  },

  btnSecondary: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 30,
  },

  btnTitle: {
    color: Colors.WHITE,
    fontSize: Typography.FONT_SIZE_12,
    fontFamily: Typography.FONT_FAMILY_OUTFIT,
    fontWeight: Typography.FONT_WEIGHT_400,
    lineHeight: Typography.LINE_HEIGHT_18,
  },

  container: {
    marginTop: 30,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 30,
  },

  row: {
    width: "100%",
    height: 500,
    maxHeight: "100%",
    overflow: "hidden",
  },

  section: {
    marginBottom: 30,
  },

  sectionTitle: {
    marginBottom: 20,
    color: Colors.TEXT_COLOR,
    fontSize: Typography.FONT_SIZE_16,
    fontFamily: Typography.FONT_FAMILY_OUTFIT,
    fontWeight: Typography.FONT_WEIGHT_600,
    lineHeight: Typography.LINE_HEIGHT_20,
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    maxWidth: "100%",
    borderWidth: 1,
    borderColor: Colors.SECONDARY_OPACITY,
    borderRadius: 20,
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 11,
    paddingBottom: 11,
    marginBottom: Platform.OS === "android" ? 15 : 14,
  },

  buttonTitle: {
    color: Colors.TEXT_COLOR,
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_FAMILY_AVENIR_NORMAL,
    fontWeight: Typography.FONT_WEIGHT_500,
    lineHeight: Typography.LINE_HEIGHT_18,
  },

  logo: {
    width: 24,
    height: 24,
    marginRight: 14,
  },

  btnDanger: {
    backgroundColor: Colors.DANGER,
    alignItems: "center",
    width: "100%",
    maxWidth: "100%",
    borderRadius: 20,
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 11,
    paddingBottom: 11,
  },

  dangerTitle: {
    color: "red",
    fontSize: 16,
    fontFamily: Typography.FONT_FAMILY_OUTFIT,
    fontWeight: Typography.FONT_WEIGHT_800,
    lineHeight: Typography.LINE_HEIGHT_20,
  },

  textGray: {
    color: "#999",
    fontSize: 10,
    fontFamily: Typography.FONT_FAMILY_OUTFIT,
    fontWeight: Typography.FONT_WEIGHT_800,
    lineHeight: Typography.LINE_HEIGHT_20,
    position: "relative",
    top: 5,
    textAlign: "center",
  },

  textDark: {
    color: Colors.TEXT_COLOR,
    fontSize: 10,
    fontFamily: Typography.FONT_FAMILY_OUTFIT,
    fontWeight: Typography.FONT_WEIGHT_800,
    lineHeight: Typography.LINE_HEIGHT_20,
  },
});

export default ProfileScreen;
