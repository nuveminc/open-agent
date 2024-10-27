import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/atoms/app-sidebar';
import './layout.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="layout-container"></div>
      <AppSidebar />
      <SidebarTrigger className="inset" />
      <main>{children}</main>
    </SidebarProvider>
  );
}
