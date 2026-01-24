
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { theme } from './theme/muiTheme';
import { DashboardLayout } from './features/workspace/DashboardLayout';
import { AdminDashboard } from './features/admin-console/pages/AdminDashboard';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          {/* Main Workspace Route (Existing) */}
          <Route path="/" element={<DashboardLayout />} />

          {/* Admin Console Route */}
          <Route path="/admin" element={<AdminDashboard />} />

          {/* Catch-all - redirect to home for now */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;