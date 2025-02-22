import './app.css';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './context/theme.context';
import { router } from './routes';
import { AuthProvider } from './context/auth.context';

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  );
}
