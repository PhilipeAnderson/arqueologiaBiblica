import React, { useState } from 'react';

import { ScrollView, ImageBackground, View, TouchableOpacity, Text, FlatList } from "react-native";
import { Title, Button, Paragraph, Caption } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { SinglePickerMaterialDialog } from 'react-native-material-dialog';
import ButtonVertical from '../../components/ButtonVertical'
import Secao from '../../components/Secao'
import Lessons from '../../components/Lessons'

import styles from './styles';

const Estudo = () => {

  const [tipo] = useState('Séries')
  const [visible, setVisible] = useState(false)
  const [lesson, setLesson] = useState({value: 1, label: 'Lição 1'})

  return (
    <>
      <SinglePickerMaterialDialog
        title={'Série - lições'}
        items={[
          { value: 1, label: 'Lição 1' },
          { value: 2, label: 'Lição 2' },
          { value: 3, label: 'Lição 3' },
          { value: 4, label: 'Lição 4' },
          { value: 5, label: 'Lição 5' },
          { value: 6, label: 'Lição 6' },
          { value: 7, label: 'Lição 7' }
        ]}
        visible={visible}
        selectedItem={lesson}
        onOk={result => {
          setVisible(false);
          setLesson(result.selectedItem);
        }}
      />
      <ScrollView style={styles.container}>
        <ImageBackground
          source={{ uri: "https://i.imgur.com/EJyDFeY.jpg" }}
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
          {tipo === 'Séries' && (
            <>
              <Title>Série</Title>
              <TouchableOpacity 
                onPress={() => setVisible(true)} 
                style={styles.buttonLesson}
              >
                <Text style={styles.lessonName}>{lesson.label}</Text>
                <Icon name="chevron-down" color="#fff" size={20} />
              </TouchableOpacity>

              <FlatList
                data={[1, 2, 3, 4, 5]}
                renderItem={({ item, index }) => <Lessons key={index} />}
              />

            </>
          )}
        </View>

        {tipo === 'Estudo' && <Secao hasTopBorder />}
      </ScrollView>
    </>
  );
};

export default Estudo;
