import RoutesContainer from "./src/routes";
  import { useFonts, LexendDeca_400Regular, LexendDeca_700Bold } from '@expo-google-fonts/lexend-deca';
import AppLoading from 'expo-app-loading';

export default function App() {

    const [fontsLoaded] = useFonts({
    LexendDeca_400Regular,
    LexendDeca_700Bold,
  });


  if (!fontsLoaded) {
    return <AppLoading />;
  }

    return(
        <RoutesContainer/>
    )
}