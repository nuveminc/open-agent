import './app.css';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './context/theme.context';
import { router } from './routes';
import { AuthProvider } from './context/auth.context';
import { TooltipProvider } from './components/ui/tooltip';

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <TooltipProvider skipDelayDuration={0}>
          <RouterProvider router={router} />
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
