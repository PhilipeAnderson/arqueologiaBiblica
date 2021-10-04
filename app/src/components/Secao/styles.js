import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    secaoTitle: {
        marginLeft: 20
    },
    lista: {
        width: '100%',
        height: 180,
        marginTop: 10,
        marginBottom: 30
    },
    capa: {
        width: 120,
        height: 180,
        borderRadius: 4,
        overflow: 'hidden'
    },
    logo: {
        width: 100,
        height: 45,
        position: 'absolute',
        zIndex: 10,
        bottom: 20,
        alignSelf: 'center'
    },
    borderTop: {
        backgroundColor: '#fb7500',
        height: 3,
        width: 100,
        left: 20,
        marginBottom: 10
    }
})

export default styles