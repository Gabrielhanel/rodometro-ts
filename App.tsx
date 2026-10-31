
import { useEffect } from "react";
import RoutesContainer from "./src/routes";
import {
  useFonts,
  LexendDeca_400Regular,
  LexendDeca_700Bold,
} from "@expo-google-fonts/lexend-deca";
import * as SplashScreen from "expo-splash-screen";

// Mantém a tela de abertura enquanto as fontes são carregadas.
SplashScreen.preventAutoHideAsync().catch(console.warn);

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    LexendDeca_400Regular,
    LexendDeca_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync().catch(console.warn);
    }
  }, [fontsLoaded, fontError]);

  // Aguarda as fontes ou libera o app caso ocorra um erro.
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return <RoutesContainer />;
}
