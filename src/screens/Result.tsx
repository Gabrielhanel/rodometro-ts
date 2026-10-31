import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { PropsScreensApp } from "../routes/interfaces";

export default function Result({
  navigation,
  route,
}: PropsScreensApp<"Result">) {
  let distanceTraveled = route.params.distance;
  let litersUsed = route.params.liters;
  let [media, setMedia] = useState<number>(0);
  let [classification, setClassification] = useState<string>("");

  useEffect(() => {

    function parseNumero(valor : string) {
  if (!valor) return 0;
  
  // Substitui vírgula por ponto
  let str = valor.replace(',', '.');
  
  // Se houver múltiplos pontos, o último é o decimal (remove os de milhar)
  const ultimoPonto = str.lastIndexOf('.');
  const primeiroPonto = str.indexOf('.');
  if (ultimoPonto !== primeiroPonto) {
    str = str.slice(0, ultimoPonto).replace(/\./g, '') + str.slice(ultimoPonto);
  }
  
  const numero = parseFloat(str);
  return isNaN(numero) ? 0 : numero;
}   

    function calculateMedia(distance: number, liters: number) {
      if (distance !== 0 || liters !== 0) {
        let calculation = (parseNumero(distance.toString()) / parseNumero(liters.toString())).toFixed(2);
        let averageConsumption = parseFloat(calculation);

        setMedia(averageConsumption);

        function HandleClassification() {
          if (averageConsumption > 12) {
            setClassification("A");
          } else if (averageConsumption > 10 && averageConsumption <= 12) {
            setClassification("B");
          } else if (averageConsumption > 8 && averageConsumption <= 10) {
            setClassification("C");
          } else if (averageConsumption > 4 && averageConsumption <= 8) {
            setClassification("D");
          } else if (averageConsumption > 0 && averageConsumption <= 4) {
            setClassification("E");
          }
        }

        HandleClassification();
      }
    }

    calculateMedia(distanceTraveled, litersUsed);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.performance}>DESEMPENHO</Text>

      <View style={styles.areaText}>
        <Text style={styles.resultadoText}>O consumo médio é:</Text>
        <Text style={styles.resultadoText}>{media} km/L</Text>
      </View>

      <View style={styles.areaText}>
        <Text style={styles.resultadoText}>Classificação:</Text>
        <View style={styles.areaClassificationResult}>
          <Text style={styles.classificationResult}>{classification}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.popToTop()}
      >
        <Text style={styles.btnText}>CALCULAR NOVAMENTE</Text>
      </TouchableOpacity>
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
  resultadoText: {
    fontFamily: "LexendDeca_400Regular",
    color: "#778DA9",
    fontSize: 24,
    marginTop: 10,
    marginBottom: 20,
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#415A77",
    width: 300,
    height: 50,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontFamily: "LexendDeca_700Bold",
    fontSize: 18,
    textAlign: "center",
    color: "#F1F1F1",
  },
  performance: {
    fontFamily: "LexendDeca_400Regular",
    color: "#F1F1F1",
    fontSize: 35,
    textAlign: "center",
    marginTop: 80,
    marginBottom: 100,
  },
  areaText: {
    marginTop: 10,
    marginBottom: 50,
    backgroundColor: "#1B263B",
    borderRadius: 5,
    width: 300,
    height: 150,
  },
  classificationResult: {
    fontFamily: "LexendDeca_700Bold",
    textAlign: "center",
    color: "#F1F1F1",
    fontSize: 28,
  },
  areaClassificationResult: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#415A77",
    width: 50,
    height: 50,
    alignSelf: "center",
    borderRadius: 7,
  },
});
