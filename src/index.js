import React from 'react'; 
import { useFonts } from 'expo-font';
import CatchyNavigationScreens from './navigation/index';
import {Provider} from 'react-redux';
import {store} from './store/index';

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
        <Provider store={store}>
        <CatchyNavigationScreens/>
        </Provider>
    )
}

export default App;