import React from 'react'; 
import {  View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    Platform,} from 'react-native';
    import { Colors, Typography } from "../../styles";

const WelcomeScreen = ({navigation}) => {
    return (
        <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/Header-3.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.divider}>
        <View style={styles.content}>
          <Text style={styles.title}>Cash on Delivery or E-payment</Text>
          <Text style={styles.description}>
            Our delivery will ensure your items are delivered right to the door
            steps
          </Text>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={{ ...styles.smallCircle, ...styles.circleOpacity }}
           onPress={() => navigation.navigate('Home')}
          >
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.smallCircle, ...styles.circleOpacity }}
            onPress={() => navigation.navigate('Delivery')}
          />
          <TouchableOpacity
            style={styles.smallCircle}
          />
        </View>
        <View style={styles.footer}>
          <View style={styles.btn}>
            <TouchableOpacity
              style={styles.btnPrimary}
              onPress={() => navigation.navigate("create-account")}
            >
              <Text style={styles.btnTitle}>Create Account</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btn}>
            <TouchableOpacity
              style={{ ...styles.btnPrimary, ...styles.btnLight }}
            >
              <Text style={{ ...styles.btnTitle, ...styles.textDark }}>
                Sign In as Guest
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.WHITE,
      },
    
      imageContainer: {
        width: "100%",
        height: Platform.OS === "android" ? 457 : 300,
      },
    
      image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
      },
    
      divider: {
        paddingTop: 20,
        width: "100%",
        flex: 1,
      },
    
      content: {
        width: "100%",
        alignItems: "center",
      },
    
      row: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      },
    
      smallCircle: {
        backgroundColor: Colors.BLACK_OPACITY,
        width: 10,
        height: 10,
        borderRadius: 100,
        marginHorizontal: 10,
      },
    
      circleOpacity: {
        backgroundColor: Colors.SECONDARY,
      },
    
      title: {
        color: Colors.BLACK,
        fontFamily: Typography.FONT_FAMILY_AVENIR_NORMAL,
        fontWeight: Typography.FONT_WEIGHT_EXTRA_BOLD,
        fontSize: Typography.FONT_SIZE_22,
        textAlign: "center",
        lineHeight: Typography.LINE_HEIGHT_28,
        marginBottom: 10,
      },
    
      description: {
        width: 350,
        maxWidth: "100%",
        color: Colors.SECONDARY,
        textAlign: "center",
        fontSize: 14,
        fontFamily: Typography.FONT_FAMILY_AVENIR_NORMAL,
      },
    
      footer: {
        justifyContent: "flex-end",
        alignItems: "center",
        flex: 1,
        padding: 24,
      },
    
      btn: {
        width: "100%",
        marginTop: 15,
      },
    
      btnPrimary: {
        backgroundColor: Colors.PRIMARY,
        padding: 17.5,
        borderRadius: 30,
        width: "100%",
        maxWidth: "100%",
      },
    
      btnLight: {
        backgroundColor: Colors.WHITE,
        borderColor: Colors.SECONDARY,
        borderWidth: 1,
      },
    
      btnTitle: {
        textAlign: "center",
        fontSize: 16,
        fontFamily: Typography.FONT_FAMILY_AVENIR_EXTRA_BOLD,
        fontWeight: Typography.FONT_WEIGHT_800,
        lineHeight: Typography.LINE_HEIGHT_20,
        color: Colors.WHITE,
      },
    
      textDark: {
        color: Colors.BLACK,
      },
});

export default WelcomeScreen;