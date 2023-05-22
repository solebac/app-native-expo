//SafeAreaView resolve issue de ios
import { StatusBar, SafeAreaView, View } from "react-native";
import Cesta from "./src/screen/Cesta";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

export default function App() {
  const [fontLoad] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    Montserrat700Bold: Montserrat_700Bold,
  }); //Tratamento de carregar o app somente pos a font ser carregada
  if (!fontLoad) {
    return <View />;
  }
  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
}
