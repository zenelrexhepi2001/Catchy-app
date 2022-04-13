import React from 'react'; 
import {TouchableOpacity,Text,StyleSheet} from 'react-native'; 
import { Colors } from '../../styles';


const Button = props => {
   
    return (
        <TouchableOpacity style={styles.btnPrimary}>
            <Text style={styles.btnTitle}>{props.children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnPrimary: {
        backgroundColor: Colors.PRIMARY,
        width: '100%',
        padding: 17.5,
        borderRadius: 30,
    },

    btnLight: {
        backgroundColor: 'white',
    }
});

export default Button;