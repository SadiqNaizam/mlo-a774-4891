import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface MainAppLayoutProps {
  children: React.ReactNode;
}

/**
 * MainAppLayout defines the primary structure of the application.
 * It uses a flexbox layout to create a fixed sidebar and a main content area.
 * The main content area includes a sticky header and a flexible content region
 * for page-specific components.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-background text-foreground">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* The Header component renders the sticky TopHeader */}
        <Header />
        {/* The main content area where page content is rendered. */}
        {/* It's configured to allow children components (like EmailList/ReadingPane) */}
        {/* to manage their own scrolling. */}
        <main className="flex-1 flex flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainAppLayout;
