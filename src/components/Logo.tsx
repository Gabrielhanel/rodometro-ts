import {View,Image, Text, StyleSheet} from 'react-native'

export default function Logo() {
    return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={styles.textInitial}>ROD</Text>
        <Image source={require('../media/images/velocimetro.png')} style={styles.logo} />
        <Text style={styles.textFinal}>METRO</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 100,
    },
    textInitial: {
        fontSize: 30,
        fontFamily: 'Lexend Deca',
        color: 'white',
        marginRight: 7,
        fontWeight: 'bold'
    },
    textFinal: {
        fontSize: 30,
        color: 'white',
        fontFamily: 'Lexend Deca',
        marginLeft: 7,
        fontWeight: 'bold'
    }
})