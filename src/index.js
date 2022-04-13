import React from 'react'; 
import {View,Text} from 'react-native'; 
import { useFonts } from 'expo-font';
import CatchyNavigationScreens from './navigation/index';

const App = props => {
    //fonts
    const [loaded] = useFonts({
        Avernir: require('./assets/fonts/AvenirLTStd-Black.otf'),
        AvernirNormal: require('./assets/fonts/AvenirLTStd-Book.otf'),
    });

    if(!loaded) {
        return null;
    }

    return (
        <CatchyNavigationScreens/>
    )
}

export default App;