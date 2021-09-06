import React from 'react'
import { View, ScrollView } from 'react-native'

import styles from './styles'
import { Button, Title } from 'react-native-paper'

import Header from '../../components/Header'
import Hero from '../../components/Hero'
import ButtonVertical from '../../components/ButtonVertical'
import Previas from '../../components/Previas'
import Secao from '../../components/Secao'


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

            {[1,2,3,4].map((secao, index) => (
                <Secao key={index}/>
            ))}

        </ScrollView>

    );
};

export default Home;