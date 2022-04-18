import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import Left from "../../assets/svg/left.svg";

import { Colors } from "../../styles";

const HeaderButton = (props) => {
  return (
    <TouchableOpacity style={styles.circle}>
      <Left style={styles.left} />
    </TouchableOpacity>
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
  },
});

export default HeaderButton;
