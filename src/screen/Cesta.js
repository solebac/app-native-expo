import React from "react";
import { Image, StyleSheet, Dimensions, Text, View } from "react-native";
import topo from "../../assets/topo.png";
import logo from "../../assets/logo.png";

const width = Dimensions.get("screen").width;

function Cesta() {
  return (
    <>
      <Image source={topo} style={estilos.topo} />
      <Text style={estilos.titulo}>Detalhes da Cesta</Text>
      <View style={estilos.cesta}>
        <Text style={estilos.nome}>Cesta de verduras</Text>
        <View style={estilos.fazenda}>
          <Image source={logo} style={estilos.imagemFazenda} />
          <Text style={estilos.nomeFazenda}>Fazenda Serra Morena</Text>
        </View>
        <Text style={estilos.descricao}>
          Uma cesta com produtos selecionados cuidadosamente da fazenda para
          cozinha.
        </Text>
        <Text style={estilos.preco}>R$ 40,00</Text>
      </View>
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
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  nome: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontFamily: "Montserrat700Bold",
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    fontFamily: "MontserratRegular",
  },
  imagemFazenda: {
    width: 32,
    height: 32,
  },
  fazenda: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  descricao: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: "#2a9f85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
});
export default Cesta;
