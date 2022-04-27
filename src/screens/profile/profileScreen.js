import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Colors, Typography } from "../../styles";
import ProfileAvatar from "../../assets/svg/profile-avatar.svg";

const ProfileScreen = (props) => {
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
              <Text style={styles.profileTitle}>Fatlum Zeka</Text>
              <Text style={styles.profileNumber}>0484838384</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.btnSecondary}>
            <Text style={styles.btnTitle}>Edit Profile</Text>
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
    maxWidth: '100%',
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
      maxWidth: '100%',
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
});

export default ProfileScreen;
