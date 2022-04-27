import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { Colors, Typography } from "../../styles";
import { MessagesCard } from "../../components/molecules";
import moment from "moment";

import NotificationLogo from "../../assets/svg/notification.svg";

const MessagesScreen = (props) => {
  const DATA_MESSAGES = [
    {
      id: 1,
      image:
        "https://media-exp1.licdn.com/dms/image/C4E03AQFPyHyflrYTQA/profile-displayphoto-shrink_200_200/0/1642880391031?e=1655942400&v=beta&t=YrcF1HRN1GtumRjofdw9DMGIDSfO_2EyEbE6WjBfxmo",
      title: "Zenel Rexhepi",
      content: "Test",
      time: moment().fromNow(3),
    },
    {
      id: 2,
      image: "",
      title: "Izet Gashi",
      content: "Test",
      time: moment().toNow(2),
    },
    {
      id: 3,
      image: "",
      title: "Rijad Morina",
      content: "Test",
      time: moment().hours(),
    },
    {
      id: 4,
      image: "",
      title: "Venis Morina",
      content: "Test",
      time: "22:00",
    },
    {
      id: 5,
      image: "",
      title: "Vedat Zeka",
      content: "Test",
      time: moment().fromNow(),
    },
    {
      id: 6,
      image: "",
      title: "Sarah Jen",
      content: "Test",
      time: moment().fromNow(),
    },
  ];

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <View style={styles.navbar}>
          <TouchableOpacity style={styles.navFlex}>
            <Text style={styles.title}>Messages</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.notificationCircle}
          >
               <NotificationLogo/>
          </TouchableOpacity>
        </View>
        <View style={styles.col}>
          <View style={styles.formControl}>
            <TextInput
              placeholder="enter track number"
              style={styles.formControlElement}
            />
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.messagesContent}>
          <FlatList
            data={DATA_MESSAGES}
            keyExtractor={(item) => item.id}
            renderItem={(data) => (
              <MessagesCard
                image={data.item.image}
                title={data.item.title}
                message={data.item.content}
                time={data.item.time}
              />
            )}
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

  logo: {
    width: 24.23,
    height: 24.23,
    marginRight: 3.77,
    resizeMode: "cover",
  },

  notificationCircle: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Colors.SECONDARY,
    borderRadius: 100,
    width: 44,
    height: 44,
  },

  col: {
    paddingTop: 30,
  },

  formControl: {
    width: "100%",
    maxWidth: "100%",
  },

  formControlElement: {
    backgroundColor: "#FD683D",
    width: "100%",
    height: 52,
    borderRadius: 20,
    paddingLeft: 20,
    color: Colors.SECONDARY,
    fontSize: 14,
    fontFamily: Typography.FONT_FAMILY_AVENIR_NORMAL,
  },

  container: {
    marginTop: 30,
    marginLeft: 24,
    marginRight: 17,
    marginBottom: 35,
  },
});

export default MessagesScreen;
