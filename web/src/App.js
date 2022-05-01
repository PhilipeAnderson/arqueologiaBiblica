import { Login } from './pages/Login';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <Login />

    </ThemeProvider>

  );
}

export default App;
