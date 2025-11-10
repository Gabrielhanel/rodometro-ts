import { NavigationContainer } from '@react-navigation/native';
import StackNavigationApp from './stack';


export default function RoutesContainer(){
    return(
        <NavigationContainer>
            <StackNavigationApp/>
        </NavigationContainer>
    )
}