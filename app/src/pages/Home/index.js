import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles'
import Header from '../../components/Header';
import Hero from '../../components/Hero';


const Home = () => {
    return (
        <View style={styles.container}>
            <Header />
            <Hero />
            <Text>Hello Home</Text>
        </View>

    );
};

export default Home;