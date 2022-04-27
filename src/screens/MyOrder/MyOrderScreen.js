import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { Colors, Typography } from "../../styles";
import { useSelector, useDispatch } from "react-redux";
import { ProductCard } from "../../components/atoms";
import Menu from "../../assets/svg/menu.svg";
import {ButtonHorizontal} from "../../components/atoms";

const MyOrderScreen = (props) => {
    
  const displayProduct = useSelector((state) => state.Product.dataProduct);

  const DATA = [
    {
      id: 1,
      title: "All",
      color: "#1D272F",
      textColor: Colors.WHITE,
    },
    {
      id: 2,
      title: "Pending",
      textColor: Colors.SECONDARY,
    },
    {
      id: 3,
      title: "On Process",
      textColor: Colors.SECONDARY,
    },
    {
      id: 3,
      title: "Delivered",
      textColor: Colors.SECONDARY,
    },
  ];

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <View style={styles.navbar}>
          <TouchableOpacity style={styles.navFlex}>
            <Text style={styles.title}>My Order</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.notificationCircle}>
            <Menu />
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
      <View style={styles.sectionFeatures}>
        {/* buttons */}
        <View style={styles.divider}>
          <View style={styles.buttonsGroup}>
            <View style={styles.flex}>
              <TouchableOpacity style={styles.btnPrimary}>
                <Text style={{ ...styles.btnTitle, ...styles.boldTitle }}>
                  From Me
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ ...styles.btnPrimary, ...styles.btnLight }}
                onPress={() => props.navigation.navigate("Login")}
              >
                <Text style={{ ...styles.btnTitle, ...styles.secondaryTitle }}>
                  To Me
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.buttonsHorizontal}>
            <FlatList
              data={DATA}
              keyExtractor={(item) => item.id}
              horizontal
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              renderItem={(displayData) => (
                  <View style={styles.buttonsContainer}>
                  <ButtonHorizontal
                    title={displayData.item.title}
                    color={displayData.item.color}
                    textColor={displayData.item.textColor}
                  />
                  </View>
              )}
             />
        </View>
        <View style={styles.productSection}>
          <View style={styles.titleProducts}>
            <Text style={styles.titleFeatures}>4 Result</Text>
          </View>
          <FlatList
            data={displayProduct}
            keyExtractor={(item) => item.id}
            renderItem={(getProduct) => (
              <View style={styles.featuresContainer}>
                <ProductCard
                  image={getProduct.item.image}
                  title={getProduct.item.title}
                  subTitle={getProduct.item.subTitle}
                  hours={getProduct.item.hoursCreated}
                />
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
    flex: 1,
    backgroundColor: Colors.WHITE,
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

  card: {
    backgroundColor: Colors.WHITE,
    width: "100%",
    borderRadius: 24,
    padding: 23,
    marginBottom: 12,
  },

  cardElements: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  smallTitle: {
    color: Colors.SECONDARY,
    fontSize: 12,
    fontFamily: Typography.FONT_FAMILY_OUTFIT,
    fontWeight: Typography.FONT_WEIGHT_400,
    marginBottom: 4,
  },

  largeTitle: {
    fontSize: 18,
    fontFamily: Typography.FONT_FAMILY_OUTFIT,
    fontWeight: Typography.FONT_WEIGHT_500,
    lineHeight: Typography.LINE_HEIGHT_23,
  },

  divider: {
    flexDirection: "row",
    alignItems: "center",
  },

  add: {
    width: 20,
    height: 20,
    marginLeft: 14,
  },

  smTitle: {
    fontSize: 12,
    fontFamily: Typography.FONT_FAMILY_OUTFIT,
    fontWeight: Typography.FONT_WEIGHT_500,
    lineHeight: Typography.LINE_HEIGHT_16,
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

  sectionFeatures: {
    marginTop: 36,
    marginLeft: 24,
    marginRight: 24,
  },

  featuresContainer: {
    flex: 1,
    justifyContent: "space-between",
  },

  productSection: {
    paddingTop: 25,
  },

  titleFeatures: {
    marginBottom: 20,
    color: Colors.TEXT_COLOR,
    fontSize: 16,
    fontFamily: Typography.FONT_FAMILY_AVENIR_EXTRA_BOLD,
    fontWeight: Typography.FONT_WEIGHT_800,
    lineHeight: Typography.LINE_HEIGHT_20,
  },

  divider: {
    maxWidth: "100%",
  },

  buttonsGroup: {
    backgroundColor: Colors.SECONDARY_OPACITY,
    width: "100%",
    maxWidth: "100%",
    height: 50,
    padding: 3,
    borderRadius: 30,
  },

  flex: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  btnPrimary: {
    backgroundColor: Colors.WHITE,
    width: 160,
    padding: 12,
    borderRadius: 30,
    shadowColor: "#A7A9B726",
    elevation: 10,
  },

  btnLight: {
    backgroundColor: Colors.SECONDARY_OPACITY,
  },

  btnTitle: {
    textAlign: "center",
    color: Colors.TEXT_COLOR,
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_FAMILY_AVENIR_NORMAL,
    fontWeight: Typography.FONT_WEIGHT_800,
    lineHeight: Typography.LINE_HEIGHT_18,
  },

  secondaryTitle: {
    color: Colors.SECONDARY,
  },

  boldTitle: {
    fontWeight: Typography.FONT_WEIGHT_EXTRA_BOLD,
  },

  buttonsContainer: {
      marginRight: 10,
      paddingTop: 20,
  }
});

export default MyOrderScreen;
