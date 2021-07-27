import React, { useState } from 'react';
import { Image, View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import styles from './styles';



const Login = () => {

    const [credenciais, setCredenciais] = useState({
        email: '',
        senha: ''
    })

    return (
        <View style={styles.bgDark}>
            <Image style={styles.logo} source={require('../../assets/logo.jpg')} />
            <TextInput
                mode="flat"
                label="Email ou seu número de telefone"
                style={styles.marginBottom}
                value={credenciais.email}
                onChangeText={(text) => setCredenciais({ ...credenciais, email: text })}
            />

            <TextInput
                mode="flat"
                label="Senha"
                style={styles.marginBottom}
                secureTextEntry
                value={credenciais.senha}
                onChangeText={(text) => setCredenciais({ ...credenciais, senha: text })}
            />

            <Button 
                mode = "contained"
                style={styles.marginBottom}
                onPress = {() => console.log('Pressed')}>
                Logar 
            </Button>

            <Button 
                style={styles.marginBottom}
                onPress = {() => console.log('Pressed')}
                theme={{ colors: {primary: '#fff'} }}>
                Recuperar Senha 
            </Button>

            <Text style={styles.textSmall}>
                O acesso está protegido pelo Google reCAPTCHA para garantir
                que você não é um robo. Saiba mais.
            </Text>

        </View>
    );
};

export default Login;