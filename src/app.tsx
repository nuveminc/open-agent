import './app.css';
// import Layout from './components/layout';
// // import { Button } from './components/ui/button';

// import { ChatInput } from './components/molecules/chat-input';
// import { MainChat } from './components/molecules/main-chat';
// import { ScrollDown } from './components/molecules/scroll-down';
// import { Sidebar } from './components/organisms/sidebar/sidebar';
// import { SystemHelp } from './components/molecules/system-help';
// import { Navbar } from './components/molecules/nav-bar';
import Layout from './components/layout';
import { ThemeProvider } from './components/ThemeProvider';

export default function App() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
}
