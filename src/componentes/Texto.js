import React from "react";
import { StyleSheet, Text } from "react-native";
export default function Texto({ children, style }) {
  //definindo o style default
  let estilo = estilos.texto;
  if (style?.fontWeight === "bold") estilo = estilos.textoNegrito;
  return <Text style={[style, estilo]}>{children}</Text>;
}
const estilos = StyleSheet.create({
  texto: {
    fontFamily: "MontserratRegular",
    fontWeight: "normal",
  },
  textoNegrito: {
    fontFamily: "Montserrat700Bold",
  },
});
