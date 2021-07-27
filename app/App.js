import React from 'react';
import Login from './src/pages/Login';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

const App = () => {

  const theme = {
    ...DefaultTheme,
    colors:{
      ...DefaultTheme.colors,
      primary: '#fb7500',
      background: '#3c3c3c',
      placeholder: '#ffffff',
      text: '#ffffff'
    }
  };
  

  return(
    <PaperProvider theme={theme}>
        <Login />
    </PaperProvider>
  );
};

export default App;