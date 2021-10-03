/* eslint-disable prettier/prettier */
import React from 'react';

import { ScrollView, ImageBackground, View } from "react-native";
import { Title, Button, Paragraph, Caption } from "react-native-paper";
import ButtonVertical from '../../components/ButtonVertical'
import Secao from '../../components/Secao'

import styles from './styles';

const Estudo = () => {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground 
        source={{uri: "https://i.imgur.com/EJyDFeY.jpg"}} 
        style={styles.hero}
      />
      <View style={styles.containerPadding}>
        <Title>Título do Estudo</Title>
        <Button style={styles.buttonPlay} icon="play" uppercase={false} mode="contained" color="#fff">
          Iniciar Estudo
        </Button>
        <Paragraph>
          Varios textos para serem colocados aqui referentes ao estudo
          bíblico, inclusive colocação de datas e locais onde ocorreram os fatos
          e personagens envolvidos bem como a inspiração do estudo.
        </Paragraph>
        <Caption style={styles.captionInfos}>
          Tempo de leitura, aproximadamente 7 minutos!
        </Caption>
        <View style={styles.menu}>
          <ButtonVertical icon="plus" text="Minha Lista" />
          <ButtonVertical icon="thumb-up" text="Classifique" />
          <ButtonVertical icon="send" text="Compartilhe" />
          <ButtonVertical icon="download" text="Baixar" />
        </View>
        <Secao hasTopBorder />
        <Secao hasTopBorder />
        <Secao hasTopBorder />
        <Secao hasTopBorder />
      </View>  
    </ScrollView>
  );
};

export default Estudo;
