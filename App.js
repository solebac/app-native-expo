//SafeAreaView resolve issue de ios
import { StatusBar, SafeAreaView, View } from "react-native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import Cesta from "./src/screen/Cesta";
import mock from "./src/mocks/cesta";
//import AppLoading from "expo-app-loading";

export default function App() {
  const [fontLoad] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    Montserrat700Bold: Montserrat_700Bold,
  }); //Tratamento de carregar o app somente pos a font ser carregada

  if (!fontLoad) {
    //return <AppLoading />;
    return <View />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}
