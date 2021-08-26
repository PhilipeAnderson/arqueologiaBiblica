import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    menuHeader: {
        width: '100%',
        height: 38,
        marginTop: 80,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    flatListContainer: {
        width: '100%',
        height: 100,
        marginTop: 5,
        marginBottom: 50
    },
    oval: {
        backgroundColor: '#e50914',
        padding: 2.5,
        width: 90,
        height: 90,
        borderRadius: 90
    },
    capa: {
        height: 85,
        width: 85,
        borderRadius: 85
    },
    logo: {
        width: 90,
        height: 45,
        position: 'absolute',
        zIndex: 10,
        bottom: 10,
        alignSelf: 'center'
    },
    gradient:{
        width: '100%',
        height: 80,
        position: 'absolute',
        zIndex: 9,
        bottom: 0
    },
    previaContainer:{
        width: '100%',
        marginTop: 30
    },
    previaTitle: {
        marginLeft: 20
    }
})

export default styles;