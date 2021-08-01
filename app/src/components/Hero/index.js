import React from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';

import styles from './styles'

const Hero = () => {
    return (
        <View>
            <Image
            style={styles.hero}
            source={require('../../assets/comoForamFeitasTodasAsCoisas.png')}
            />
            <TouchableOpacity>
                <Text style={styles.textEstudo}>ENTRAR NO ESTUDO</Text>
            </TouchableOpacity>
        </View>
        
       
    )
}

export default Hero;