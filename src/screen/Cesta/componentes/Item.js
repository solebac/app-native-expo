import React from "react";
import { Image, View, StyleSheet } from "react-native";
import Texto from "../../../componentes/Texto";

const Item = ({ item: { nome, imagem } }) => {
  return (
    <View style={estilos.item}>
      <Image source={imagem} style={estilos.imagem} />
      <Texto style={estilos.nome}>{nome}</Texto>
    </View>
  );
};

const estilos = StyleSheet.create({
  nome: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: "#464646",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ececec",
    paddingVertical: 16,
    marginHorizontal: 16,
  },
  imagem: {
    width: 46,
    height: 46,
  },
});

export default Item;
