import React from 'react'
import { View, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native'

import styles from './styles'
import { Button, Title } from 'react-native-paper'

import Header from '../../components/Header'
import Hero from '../../components/Hero'
import ButtonVertical from '../../components/ButtonVertical'
import Previas from '../../components/Previas'

import LinearGradient from 'react-native-linear-gradient'


const Home = () => {
    return (
        <ScrollView style={styles.container}>
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

            <View style={styles.previaContainer}>
                <Title style={styles.previaTitle}>Prévias</Title>
                <Previas />
            </View>

        </ScrollView>

    );
};

export default Home;