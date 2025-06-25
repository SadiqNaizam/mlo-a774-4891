import React from 'react';
import { cn } from '@/lib/utils';
import SidebarNav from '../Inbox/SidebarNav';

interface SidebarProps {
  className?: string;
}

/**
 * Sidebar layout component.
 * Acts as a semantic wrapper for the main sidebar navigation.
 * The actual content and styling (width, colors) are provided by the SidebarNav component.
 */
const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <aside className={cn('bg-sidebar', className)}>
      <SidebarNav />
    </aside>
  );
};

export default Sidebar;
