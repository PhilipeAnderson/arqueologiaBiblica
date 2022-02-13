/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import {Image, View, Text, ActivityIndicator} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';
import styles from './styles';

const Login = ({ navigation }) => {

  // 0 Carregando - 1 Logado - 2 Deslogado
  const [logged, setLogged] = useState(0);
  const [credenciais, setCredenciais] = useState({
    email: '',
    senha: '',
  });

  const checkLogin = async () => {
    //AsyncStorage.clear();
    const user = await AsyncStorage.getItem('@user');
    if(user) {
      setLogged(1);
      navigation.replace('Home');
    }else{
      setLogged(2);
    }
  }

  const login = async () => {
    try {
      const response = await api.post('/usuario/login', credenciais);
      const res = response.data;

      if(res.error) {
        alert(res.message)
        return false;
      } 

      await AsyncStorage.setItem('@user', JSON.stringify(res.usuario));
      navigation.replace('Home');

    } catch (err) {
      alert(err.message)
    }
  }

  useEffect(() => {
    checkLogin()
  }, [])

  return (
    <View style={styles.bgDark}>
      <Image style={styles.logo} source={require('../../assets/logo.jpg')} />

      {logged === 0 && <ActivityIndicator color="#fb7500" size="large" />}

      {logged === 2 && <View>
        <TextInput
          mode="flat"
          label="Email ou seu número de telefone"
          style={styles.marginBottom}
          value={credenciais.email}
          onChangeText={text => setCredenciais({...credenciais, email: text})}
        />

        <TextInput
          mode="flat"
          label="Senha"
          style={styles.marginBottom}
          secureTextEntry
          value={credenciais.senha}
          onChangeText={text => setCredenciais({...credenciais, senha: text})}
        />

        <Button
          mode="contained"
          style={styles.marginBottom}
          onPress={() => login()}>
          Logar
        </Button>

        <Button
          style={styles.marginBottom}
          onPress={() => console.log('Pressed')}
          theme={{colors: {primary: '#fff'}}}>
          Recuperar Senha
        </Button>

        <Text style={styles.textSmall}>
          O acesso está protegido pelo Google reCAPTCHA para garantir que você não
          é um robo. Saiba mais.
        </Text>
      </View>}
    </View>
  );
};

export default Login;
