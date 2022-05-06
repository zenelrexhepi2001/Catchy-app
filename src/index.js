import React from "react";
import { useFonts } from "expo-font";
import CatchyNavigationScreens from "./navigation/index";
import { Provider } from "react-redux";
import {
  ProviderAuth as AuthContext,
  ProviderAuth,
} from "./context/AuthContext";
import store from "./store";

const App = (props) => {
  //fonts
  const [loaded] = useFonts({
    Avernir: require("./assets/fonts/AvenirLTStd-Black.otf"),
    AvernirNormal: require("./assets/fonts/AvenirLTStd-Book.otf"),
    OutFit: require("./assets/fonts/Outfit-Medium.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <ProviderAuth>
        <CatchyNavigationScreens />
      </ProviderAuth>
    </Provider>
  );
};

export default App;
