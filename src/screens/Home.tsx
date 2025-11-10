import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Logo from "../components/Logo";
import { PropsScreensApp } from "../routes/interfaces";

export default function Home({navigation, route} : PropsScreensApp<'Home'>) {
  const [distanceTraveled, setDistanceTraveled] = useState<string>("");
  const [litersUsed, setLitersUsed] = useState<string>("");

  const handleDistance = (text: string) => {
    const numericText = text.replace(/[^0-9.]/g, "");
    const parts = numericText.split(".");
    if (parts.length > 2) return;
    setDistanceTraveled(numericText);
  };

  const handleLiters = (text: string) => {
    const numericText = text.replace(/[^0-9.]/g, "");
    const parts = numericText.split(".");
    if (parts.length > 2) return;
    setLitersUsed(numericText);
  };

  return (
    <View style={styles.container}>
      <View>
        <Logo />
      </View>

      <View style={{marginTop: 100}}>
        <View>
          <Text style={styles.textQuestion}>INSIRA A QUILOMETRAGEM PERCORRIDA: (EM KM)</Text>
          <TextInput
            value={distanceTraveled}
            onChangeText={handleDistance}
            keyboardType="numeric"
            placeholder="Digite a quilometragem percorrida:"
            placeholderTextColor={'white'}
            style={styles.textInput}
          />
        </View>

        <View>
          <Text style={styles.textQuestion}>INSIRA A QUANTIDADE DE LITROS CONSUMIDOS:</Text>
          <TextInput
            value={litersUsed}
            onChangeText={handleLiters}
            keyboardType="numeric"
            placeholder="Digite a quantidade de litros:"
            placeholderTextColor={'white'}
            style={styles.textInput}
          />
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={() => {navigation.navigate("Result", {distance: Number(distanceTraveled), liters: Number(litersUsed)})}} style={styles.btn}>
                    <Text style={styles.btnText}>CALCULAR</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#0D1B2A",
    paddingTop: 70,
  },
    textQuestion: {
    fontFamily: 'LexendDeca_400Regular',
    color: '#778DA9',
    maxWidth: 300,
    fontSize: 18,
    textAlign: 'center',
  },
  textInput: {
    marginTop: 10,
    marginBottom: 50,
    backgroundColor: '#1B263B',
    borderRadius: 3,
    width: 300,
    height: 40,
    color: '#F1F1F1',
    fontFamily: 'LexendDeca_400Regular',
    paddingLeft: 20,
  },
  btn: {
    backgroundColor: '#415A77',
    width: 320,
    height: 60,
    borderRadius: 25,
  },
  btnText: {
    textAlign: 'center',
    marginTop: 15,
    fontFamily: 'LexendDeca_700Bold',
    fontSize: 18,
    color: '#F1F1F1',
  }
});
