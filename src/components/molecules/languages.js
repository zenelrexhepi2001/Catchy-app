import React from 'react'; 
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native'; 
import { Colors,Typography } from '../../styles';


const Languages = props => {
    return (
        <TouchableOpacity style={styles.card}>
            <View style={styles.flex}>
            <View style={styles.cardImage}>
                <Image source={props.logo} style={styles.image}/>
            </View>
            <Text style={styles.cardTitle}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
      width: '100%',
      borderWidth: 1,
      borderRadius: 20,
      borderColor: Colors.SECONDARY_OPACITY,
      padding: 14,
      marginBottom: 15,
    },

    flex: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    cardImage: {
        marginRight: 14,
    },

    cardTitle: {
        color: Colors.TEXT_COLOR,
        fontSize: Typography.FONT_SIZE_14,
        fontFamily: Typography.FONT_FAMILY_AVENIR_EXTRA_BOLD,
        fontWeight: Typography.FONT_WEIGHT_500,
        lineHeight: Typography.LINE_HEIGHT_18,
    }
});


export default Languages;