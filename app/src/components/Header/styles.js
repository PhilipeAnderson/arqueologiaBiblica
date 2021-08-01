import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    textWhite:{
        color: '#fff'
    },
    header:{
        position: 'absolute',
        top: 0,
        zIndex: 999
    },
    headerSafeAreaView:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        height: 110,
        alignItems: 'center'
    },
    logoImageHeader:{
        width: 120,
        height: 120
    }
});

export default styles;