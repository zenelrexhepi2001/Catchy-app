import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Colors, Typography } from "../../styles";
import NotificationLogo from "../../assets/svg/notification.svg";
import { Input } from "../../components/molecules";
import Add from "../../assets/svg/add.svg";
import Search from "../../assets/svg/search-normal.svg";
import ScanInput from "../../assets/svg/scanInput.svg";
import { useSelector } from "react-redux";
import { Card } from "../../components/atoms";
import { TYPES } from "expo-google-sign-in";
import { ProductCard } from "../../components/atoms";
import { useDispatch } from "react-redux";

const HomeScreen = (props) => {
  const [loading, setIsLoading] = useState(false);
  const [error, setIsError] = useState();
  const [refresh, setIsRefreshing] = useState(false);

  const displayFeatures = useSelector((state) => state.Features.data);
  const displayProduct = useSelector((state) => state.Product.dataProduct);
  const dispatch = useDispatch();

  const loader = useCallback(async () => {
    setIsError(null);
        setIsRefreshing(true);

    try {
       console.log('');
    } catch (err) {
      if (err) return console.log(err);
    }
    setTimeout(() => {
        setIsRefreshing(false);
    },0);

  }, [dispatch, setIsError, setIsError]);

  useEffect(() => {
    setIsLoading(true);
    loader()
      .then(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 0);
      })
      .catch((err) => {
        if (err) return console.log(err);
      })
      .finally(() => {
        setTimeout(() => {
          console.log("Finally loader...");
        }, 0);
      });
  }, [loader]);

  if (loading) {
    return (
      <View
        style={{
          backgroundColor: Colors.WHITE,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color={Colors.TEXT_COLOR} />
      </View>
    );
  }

  if (error) {
    return (
      <View
       style={{
           flex: 1,
           justifyContent: 'center',
           alignItems: 'center',
           backgroundColor: Colors.WHITE,
       }}
      >
        <Text
         style={{
             color: Colors.TEXT_COLOR,
             fontSize: 18,
             fontFamily: Typography.FONT_FAMILY_AVENIR_EXTRA_BOLD,
         }}
        >Error</Text>
      </View>
    );
  }

  if(!setIsLoading && displayFeatures.length === 0) {
      return (
          <View
           style={{
               flex: 1,
               justifyContent: 'center',
               alignItems: 'center',
           }}
          >
              <Text
               style={{
                   color: Colors.TEXT_COLOR,
                   fontSize: 18,
                   fontFamily: Typography.FONT_FAMILY_AVENIR_EXTRA_BOLD,
               }}
              >No Features found!</Text>
          </View>
      )
  }

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <View style={styles.navbar}>
          <TouchableOpacity style={styles.navFlex}>
            <Image
              source={require("../../assets/images/logo.png")}
              style={styles.logo}
            />
            <Text style={styles.title}>Catchy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.notificationCircle}
          onPress={() => props.navigation.navigate('MyOrder')}>
            <NotificationLogo width={24} height={24} />
          </TouchableOpacity>
        </View>
        <View style={styles.col}>
          <View style={styles.card}>
            <View style={styles.cardElements}>
              <View style={styles.content}>
                <Text style={styles.smallTitle}>My Bilance</Text>
                <Text style={styles.largeTitle}>$3.382.00</Text>
              </View>
              <View style={styles.rightContent}>
                <TouchableOpacity style={styles.divider}>
                  <Text style={styles.smTitle}>Top Up</Text>
                  <Add style={styles.add} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.formControl}>
            <TextInput
              placeholder="enter track number"
              style={styles.formControlElement}
            />
          </View>
        </View>
      </View>
      <View style={styles.sectionFeatures}>
        <Text style={styles.titleFeatures}>Features</Text>
        <FlatList
          data={displayFeatures}
          keyExtractor={(item) => item.id}
          numColumns={3}
          onRefresh={loader}
          refreshing={refresh}
          renderItem={(post) => (
            <View style={styles.featuresContainer}>
              <Card image={post.item.image} title={post.item.title} />
            </View>
          )}
        />
        <View style={styles.productSection}>
          <View style={styles.titleProducts}>
            <Text style={styles.titleFeatures}>Services and product</Text>
          </View>
          <FlatList
            data={displayProduct}
            keyExtractor={(item) => item.id}
            onRefresh={loader}
            refreshing={refresh}
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
    paddingTop: 25,
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 24,
  },

  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
});

export default HomeScreen;
