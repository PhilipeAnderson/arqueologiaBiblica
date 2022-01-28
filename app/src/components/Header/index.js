/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

const Header = () => {
	return (
		<LinearGradient style={styles.header} colors={['#000', '#fb7500']}>
			<View style={styles.headerSafeAreaView}>
				<Image style={styles.logoImageHeader} source={require('../../assets/logo.jpg')} />
				<TouchableOpacity>
					<Text style={styles.textWhite}>Criação</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text style={styles.textWhite}>Herois</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text style={styles.textWhite}>Jesus</Text>
				</TouchableOpacity>
			</View>
		</LinearGradient>

	);
};

export default Header;