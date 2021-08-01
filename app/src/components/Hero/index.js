import React from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles'

const Hero = () => {
    return (
        <View>
            <Image
                style={styles.hero}
                source={require('../../assets/comoForamFeitasTodasAsCoisas.png')}
            />
            <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']}>
                <TouchableOpacity>
                    <Text style={styles.textEstudo}>ENTRAR NO ESTUDO</Text>
                </TouchableOpacity>
            </LinearGradient>

        </View>


    )
}

export default Hero;