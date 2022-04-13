import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EpaymentScreen from "../screens/E-payment/EpaymentScreen";
import Splashscreen from "../screens/Splashscreen/SplashScreen";

const Stack = createNativeStackNavigator();
const GET_HIDDEN_HEADER = false;

const CatchyNavigationScreens = () => {
    return (
         <NavigationContainer>
             <Stack.Navigator>
                 <Stack.Screen name='Home' component={EpaymentScreen} 
                  options={{
                      headerShown: GET_HIDDEN_HEADER,
                  }}
                 />
             </Stack.Navigator>
         </NavigationContainer>
    )
}

export default CatchyNavigationScreens;