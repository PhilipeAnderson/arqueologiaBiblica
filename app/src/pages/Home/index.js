import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles'
import { Button } from 'react-native-paper'

import Header from '../../components/Header'
import Hero from '../../components/Hero'
import ButtonVertical from '../../components/ButtonVertical'


const Home = () => {
    return (
        <View style={styles.container}>
            <Header />
            <Hero />

            <View style={styles.menuHeader}>
                <ButtonVertical icon="plus" text="Minha Lista" />

                <Button
                    icon="play"
                    uppercase={false}
                    mode="contained"
                    color="#fff"
                >Assistir</Button>

                <ButtonVertical icon="information-outline" text="Saiba Mais" />
            </View>

        </View>

    );
};

export default Home;