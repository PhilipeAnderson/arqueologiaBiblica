import React from 'react';
import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

const Header = () => {
    return(
        <LinearGradient style={styles.header}>
            <View style={styles.headerSafeAreaView}>
                <Text>Hello Header</Text>
            </View>
        </LinearGradient>
    );
};

export default Header;