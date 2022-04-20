import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import { Colors, Typography } from "../../styles";

const Card = (props) => {
  return (
      <TouchableOpacity style={styles.card}>
        <View style={styles.cardImage}>
          <Image source={props.image} style={styles.image} />
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
 
  card: {
    width: "95%",
    paddingTop: 18,
    paddingBottom: 18,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Colors.SECONDARY_OPACITY,
    borderRadius: 20,
    marginBottom: 15,
  },

  image: {
    width: 24,
    height: 24,
    resizeMode: "cover",
  },

  cardContent: {
    maxWidth: "100%",
  },

  title: {
    color: Colors.TEXT_COLOR,
    fontSize: 12,
    fontFamily: Typography.FONT_FAMILY_AVENIR_EXTRA_BOLD,
    fontWeight: Typography.FONT_WEIGHT_800,
    lineHeight: Typography.LINE_HEIGHT_15,
    marginTop: 12,
  },
});

export default Card;
