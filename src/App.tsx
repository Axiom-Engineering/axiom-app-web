import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/muiTheme';
import { DashboardLayout } from './features/workspace/DashboardLayout';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DashboardLayout />
    </ThemeProvider>
  );
}

export default App;