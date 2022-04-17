import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Image,
} from "react-native";
import { Colors, Typography } from "../../styles";

const ModalSuccess = (props) => {
  const GET_MODAL_TRANSPARENT = true;
  return (
    <View style={styles.screen}>
      <Modal
        transparent={GET_MODAL_TRANSPARENT}
        visible={props.isModalVisible}
        animationType="slide"
      >
        <View style={styles.modalHero}>
          <View style={styles.modal}>
            <View style={styles.centerElements}>
              <TouchableOpacity
                style={styles.bar}
                onPress={() => props.setModalVisible(!props.isModalVisible)}
              />
              <View style={styles.modalImage}>
                <Image
                  source={require("../../assets/images/success.png")}
                  style={styles.image}
                />
              </View>
              <View style={styles.modalFooter}>
                <Text style={styles.modalText}>Register Successfully</Text>
                <Text style={styles.modalDescription}>
                  Congratulation! your account already created. Please login to
                  get amazing experience.
                </Text>
                <TouchableOpacity
                  style={styles.btnSecondary}
                  onPress={() => props.setModalVisible(!props.isModalVisible)}
                >
                  <Text style={styles.btnSecondaryTitle}>Go to Homepage</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {},

  modalHero: {
    backgroundColor: "rgba(0,0,0,0.3)",
    flex: 1,
  },

  modal: {
    backgroundColor: Colors.WHITE,
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 547,
  },

  centerElements: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  modalImage: {
    backgroundColor: "white",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: 235,
    height: 311,
    opacity: 0.7,
  },

  modalFooter: {
    width: "100%",
    padding: 15,
  },

  modalText: {
    color: Colors.TEXT_COLOR,
    fontSize: Typography.FONT_SIZE_22,
    fontFamily: Typography.FONT_FAMILY_OUTFIT,
    textAlign: "center",
  },

  modalDescription: {
    fontSize: 14,
    fontFamily: Typography.FONT_FAMILY_OUTFIT,
    textAlign: "center",
    marginTop: 15,
    color: Colors.SECONDARY,
  },

  btnSecondary: {
    backgroundColor: Colors.PRIMARY,
    width: "100%",
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    marginTop: 30,
  },

  btnSecondaryTitle: {
    color: Colors.WHITE,
    fontFamily: Typography.FONT_FAMILY_AVENIR_EXTRA_BOLD,
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_WEIGHT_800,
    lineHeight: Typography.LINE_HEIGHT_20,
  },

  bar: {
    backgroundColor: "#DFE2EB",
    width: 60,
    height: 6,
    borderRadius: 10,
  },
});

export default ModalSuccess;
