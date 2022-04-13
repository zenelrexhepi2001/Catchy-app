import React from 'react'; 
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native'; 
import { Colors, Typography } from '../../styles';

const Splashscreen = props => {
    return (
       <View style={styles.screen}>
           <View style={styles.container}>
               <TouchableOpacity>
                   <Image source={require('../../assets/images/logo.png')}/>
               </TouchableOpacity>
               <Text style={styles.title}>Catchy</Text>
           </View>
       </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: Colors.BLACK_OPACITY,
        flex: 1,
    },

    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },

    title: {
        color: Colors.WHITE,
        fontSize: Typography.FONT_SIZE_50,
        fontFamily: Typography.FONT_FAMILY_AVENIR_NORMAL,
        fontWeight: Typography.FONT_WEIGHT_500,
        lineHeight: Typography.LINE_HEIGHT_68,
    }
});


export default Splashscreen;