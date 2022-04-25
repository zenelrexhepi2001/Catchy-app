import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Colors, Typography } from "../../styles";

const ButtonHorizontal = (props) => {
  return (
    <TouchableOpacity
      style={{ ...styles.btnLight, ...{ backgroundColor: props.color } }}
    >
      <Text style={{ ...styles.titleBtn, ...{ color: props.textColor } }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnLight: {
    paddingTop: 6,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 6,
    borderRadius: 30,
    borderColor: Colors.SECONDARY_OPACITY,
    borderWidth: 1,
  },

  titleBtn: {
    color: Colors.SECONDARY,
    fontSize: Typography.FONT_SIZE_12,
    fontFamily: Typography.FONT_FAMILY_AVENIR_EXTRA_BOLD,
    fontWeight: Typography.FONT_WEIGHT_EXTRA_BOLD,
    lineHeight: Typography.LINE_HEIGHT_15,
    textAlign: Typography.TEXT_CENTER,
  },
});

export default ButtonHorizontal;
