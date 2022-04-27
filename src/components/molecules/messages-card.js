import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Colors, Typography } from "../../styles";

const MessagesCard = (props) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardBody}>
        <View style={styles.flexProfile}>
          <TouchableOpacity style={styles.cardImage}>
            <Image source={props.image} style={styles.image} />
          </TouchableOpacity>
          <View style={styles.content}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.description}>{props.message}</Text>
          </View>
        </View>
        <Text style={styles.time}>{props.time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    maxWidth: "100%",
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomColor: Colors.EXTRA_LIGHT,
    borderBottomWidth: 1,
  },

  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  flexProfile: {
    flexDirection: "row",
    alignItems: "center",
  },

  cardImage: {
    width: 44,
    height: 44,
    marginRight: 14,
  },

  image: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ccc",
    borderRadius: 100,
    resizeMode: "cover",
  },

  content: {
    width: 207,
  },

  title: {
    color: Colors.TEXT_COLOR,
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_FAMILY_AVENIR_EXTRA_BOLD,
    fontWeight: Typography.FONT_WEIGHT_500,
    lineHeight: Typography.LINE_HEIGHT_18,
  },

  description: {
    color: Colors.TEXT_COLOR,
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_FAMILY_AVENIR_NORMAL,
    fontWeight: Typography.FONT_WEIGHT_500,
    lineHeight: Typography.LINE_HEIGHT_25,
  },

  time: {
    fontSize: Typography.FONT_SIZE_12,
    color: Colors.SECONDARY,
    fontFamily: Typography.FONT_FAMILY_AVENIR_NORMAL,
    fontWeight: Typography.FONT_WEIGHT_500,
    lineHeight: Typography.LINE_HEIGHT_25,
  },
});

export default MessagesCard;
