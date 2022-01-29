import React from 'react'

import { Image, View, TouchableOpacity } from 'react-native'
import { Caption, Title } from 'react-native-paper'
import styles from './styles'

const Lessons = () => {
	return (
		<TouchableOpacity style={styles.container}>
			<View style={styles.row}>
				<Image style={styles.capa} source={{ uri: 'https://i.imgur.com/EJyDFeY.jpg' }} />
				<View>
					<Title style={{ fontSize: 15 }}>Nome Da Lição</Title>
					<Caption>Tempo de Leitura aproximado de 45min</Caption>
				</View>
			</View>
			<Caption>
				Uma explicação sobre a lição que será lida como uma
				breve introdução
			</Caption>
		</TouchableOpacity>
	)
}

export default Lessons