import React from 'react'; 
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native'; 
import { Colors,Typography } from '../../styles';

const ProductCard = props => {
     return (
         <View style={styles.card}>
             <View style={styles.flex}>
                 <View style={styles.cardBody}>
                     <TouchableOpacity style={styles.imageContainer}>
                         <Image source={props.image}/>
                     </TouchableOpacity>
                     <View style={styles.content}>
                         <Text style={styles.title}>{props.title.toUpperCase()}</Text>
                         <Text style={styles.subTitle}>{props.subTitle}</Text>
                     </View>
                 </View>
                 <Text style={{...styles.subTitle,...styles.hours}}>{props.hours}</Text>
             </View>
         </View>
     )
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        borderWidth: 1,
        borderColor: Colors.SECONDARY_OPACITY,
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
    },


    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    cardBody: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    imageContainer: {
        backgroundColor: Colors.SECONDARY_OPACITY,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginRight: 14,
    },

    title: {
        color: Colors.TEXT_COLOR,
        fontFamily: Typography.FONT_FAMILY_AVENIR_NORMAL,
        fontSize: Typography.FONT_SIZE_14,
        fontWeight: Typography.FONT_WEIGHT_500,
        lineHeight: Typography.LINE_HEIGHT_18,
    },

    subTitle: {
        color: '#A7A9B7',
        fontFamily: Typography.FONT_FAMILY_AVENIR_NORMAL,
        fontSize: Typography.FONT_SIZE_14,
        fontWeight: Typography.FONT_WEIGHT_500,
        lineHeight: Typography.LINE_HEIGHT_25,
    },

    hours: {
        fontSize: Typography.FONT_SIZE_12,
        lineHeight: Typography.LINE_HEIGHT_21,
    }
});


export default ProductCard;