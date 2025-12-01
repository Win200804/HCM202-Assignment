// Layout wrapper component
import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Chatbox } from '../chatbox/Chatbox';

interface LayoutProps {
  children: ReactNode;
  showSidebar?: boolean;
}

export function Layout({ children, showSidebar = false }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-1">
        {showSidebar ? (
          <div className="flex">
            <div className="flex-1">{children}</div>
          </div>
        ) : (
          children
        )}
      </main>
      <Footer />
      <Chatbox />
    </div>
  );
}

