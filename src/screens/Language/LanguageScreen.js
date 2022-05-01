import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, TextInput } from "react-native";
import { Colors, Typography } from "../../styles";
import { Input } from "../../components/molecules";

import Search from "../../assets/svg/search.svg";

import { Languages } from "../../components/molecules";

import FlagEnglish from "../../assets/images/Flag.png";
import FlagPortuguese from "../../assets/images/Flag2.png";
import FlagJaponse from "../../assets/images/flag3.png";
import FlagFrench from "../../assets/images/flag4.png";


const LanguageScreen = (props) => {
  const [data, setData] = useState([
    {
      id: 1,
      title: "English",
      flag: FlagEnglish,
    },
    {
      id: 2,
      title: "Portuguese",
      flag: FlagPortuguese,
    },
    {
      id: 3,
      title: "Japonese",
      flag: FlagJaponse,
    },
    {
      id: 4,
      title: "French",
      flag: FlagFrench,
    },
  ]);


  const handleChange = text => {
     
  }

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.formControl}>
          <Search style={styles.logo} />
          <TextInput
            placeholder="Search Language"
            style={styles.formControlElement}
            onChangeText={(text) => handleChange(text)}
          />
        </View>
        <View style={styles.sectionLanguages}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={(lang) => (
              <View style={styles.col}>
                <Languages title={lang.item.title} logo={lang.item.flag} />
              </View>
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

  container: {
    marginTop: 30,
    marginLeft: 22,
    marginRight: 22,
  },

  formControl: {
    width: "100%",
  },

  formControlElement: {
    width: "100%",
    height: 52,
    fontSize: 14,
    backgroundColor: Colors.SECONDARY_OPACITY,
    color: Colors.BLACK_OPACITY,
    fontFamily: Typography.FONT_FAMILY_AVENIR_NORMAL,
    fontWeight: Typography.FONT_WEIGHT_400,
    lineHeight: Typography.LINE_HEIGHT_25,
    borderWidth: 1,
    borderColor: Colors.SECONDARY_OPACITY,
    paddingLeft: 40,
    borderRadius: 20,
  },

  logo: {
    position: "absolute",
    top: "30%",
    left: 14,
  },

  sectionLanguages: {
    paddingTop: 30,
  },

  col: {
    width: "100%",
  },
});

export default LanguageScreen;
