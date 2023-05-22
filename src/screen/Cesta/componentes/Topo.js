import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";
import topo from "../../../../assets/topo.png";
import Texto from "../../../componentes/Texto";

const width = Dimensions.get("screen").width;

export default function Topo() {
  return (
    <>
      <Image source={topo} style={estilos.topo} />
      <Texto style={estilos.titulo}>Detalhes da Cesta</Texto>
    </>
  );
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * width,
  },
  titulo: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
    padding: 16,
  },
});
