import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { Colors, Typography } from "../../styles";
import { ModalSuccess } from "../../components/organisms";

const VerificationCodeScreen = (props) => {

  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Verification Code</Text>
          <Text style={styles.headerDescription}>
            We have sent the code verification to your number{" "}
            <Text style={{ fontWeight: "bold", color: Colors.BLACK_OPACITY }}>
              +01 65841542265
            </Text>
          </Text>
        </View>
        <View style={styles.row}>
          <View style={styles.formControl}>
            <TextInput
              keyboardType="number-pad"
              maxLength={2}
              style={styles.formControlElement}
            />
          </View>
          <View style={styles.formControl}>
            <TextInput
              keyboardType="number-pad"
              maxLength={2}
              style={styles.formControlElement}
            />
          </View>
          <View style={styles.formControl}>
            <TextInput
              keyboardType="number-pad"
              maxLength={2}
              style={styles.formControlElement}
            />
          </View>
          <View style={styles.formControl}>
            <TextInput
              keyboardType="number-pad"
              maxLength={2}
              style={styles.formControlElement}
            />
          </View>
          <View style={styles.timerVerification}>
            <Text style={styles.time}>2:30</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.btnSecondary}
            onPress={() => setIsVisible(!isVisible)}
          >
            <Text style={styles.btnSecondaryTitle}>Submit</Text>
          </TouchableOpacity>
          <Text style={styles.footerTitle}>
            Didn’t receive the code?
            <Text style={{ fontWeight: "bold", color: Colors.TEXT_COLOR }}
             onPress={() => props.navigation.navigate('Login')}
            >
              Resend
            </Text>
          </Text>
          <ModalSuccess
            isModalVisible={isVisible}
            setModalVisible={setIsVisible}
          />
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

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignItems: "center",
    paddingTop: 29,
  },

  formControlElement: {
    width: 66,
    height: 59,
    backgroundColor: Colors.SECONDARY_OPACITY,
    borderRadius: 12,
    textAlign: "center",
    color: Colors.TEXT_COLOR,
    fontSize: Typography.FONT_SIZE_22,
    fontFamily: Typography.FONT_FAMILY_OUTFIT,
    fontWeight: Typography.FONT_WEIGHT_600,
    lineHeight: Typography.LINE_HEIGHT_28,
  },

  timerVerification: {
    width: "100%",
    paddingTop: 30,
  },

  time: {
    textAlign: "center",
    fontSize: Typography.FONT_SIZE_16,
    fontFamily: Typography.FONT_FAMILY_OUTFIT,
    color: Colors.TEXT_COLOR,
    fontWeight: Typography.FONT_WEIGHT_500,
    lineHeight: Typography.LINE_HEIGHT_28,
  },

  footer: {
    width: "100%",
    justifyContent: "flex-end",
    flex: 1,
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

  footerTitle: {
    color: Colors.SECONDARY,
    fontFamily: Typography.FONT_FAMILY_OUTFIT,
    fontSize: 14,
    fontWeight: Typography.FONT_WEIGHT_500,
    textAlign: "center",
    marginTop: 15,
  },
});

export default VerificationCodeScreen;
