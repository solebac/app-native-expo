import { Image, StyleSheet, View } from "react-native";
import logo from "../../../../assets/logo.png";
import Texto from "../../../componentes/Texto";

export default function Detalhes() {
  return (
    <>
      <Texto style={estilos.nome}>Cesta de verduras</Texto>
      <View style={estilos.fazenda}>
        <Image source={logo} style={estilos.imagemFazenda} />
        <Texto style={estilos.nomeFazenda}>Fazenda Serra Morena</Texto>
      </View>
      <Texto style={estilos.descricao}>
        Uma cesta com produtos selecionados cuidadosamente da fazenda para
        cozinha.
      </Texto>
      <Texto style={estilos.preco}>R$ 40,00</Texto>
    </>
  );
}

const estilos = StyleSheet.create({
  nome: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
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
