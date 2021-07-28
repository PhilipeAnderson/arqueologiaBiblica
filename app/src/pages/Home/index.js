import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles'
import Header from '../../components/Header';


const Home = () => {
    return (
        <View style={styles.container}>
            <Header />
            <Text>Hello Home</Text>
        </View>

    );
};

export default Home;