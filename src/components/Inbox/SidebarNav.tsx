import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { 
  ChevronDown, 
  Pencil, 
  Star, 
  Inbox, 
  Send, 
  FileText, 
  Trash2, 
  Archive, 
  FileClock, 
  Rss, 
  FolderSearch, 
  Users, 
  StickyNote 
} from 'lucide-react';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  count?: number;
  isActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, count, isActive }) => (
  <a
    href="#"
    className={cn(
      'flex items-center px-3 py-1.5 text-sm font-medium rounded-md',
      'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
      isActive && 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-sidebar-primary-foreground'
    )}
  >
    <Icon className="mr-3 h-4 w-4" />
    <span className="flex-1 truncate">{label}</span>
    {count && <Badge variant="secondary" className="ml-auto h-5 px-1.5 text-xs font-normal bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300">{count}</Badge>}
  </a>
);

interface NavGroupProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const NavGroup: React.FC<NavGroupProps> = ({ title, children, defaultOpen = false }) => (
  <Collapsible defaultOpen={defaultOpen}>
    <CollapsibleTrigger asChild>
      <button className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-sidebar-foreground hover:bg-sidebar-accent rounded-md">
        <span className="truncate">{title}</span>
        <ChevronDown className="h-4 w-4 transition-transform duration-200 [&[data-state=open]]:-rotate-180" />
      </button>
    </CollapsibleTrigger>
    <CollapsibleContent className="pt-1 space-y-1 ml-3 border-l border-sidebar-border pl-3">
      {children}
    </CollapsibleContent>
  </Collapsible>
);

const SidebarNav: React.FC = () => {
  return (
    <div className="h-full w-64 flex flex-col bg-sidebar text-sidebar-foreground border-r border-sidebar-border">
      <div className="p-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Pencil className="mr-2 h-4 w-4" />
                New mail
                <ChevronDown className="ml-auto h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>New Email</DropdownMenuItem>
                <DropdownMenuItem>New Event</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
      </div>
      <ScrollArea className="flex-1 px-3">
        <div className="space-y-4 py-4">
          <NavGroup title="Favorites" defaultOpen>
            <NavItem icon={Inbox} label="Inbox" count={2} isActive />
            <NavItem icon={Send} label="Sent Items" />
            <NavItem icon={FileText} label="Drafts" count={4} />
            <NavItem icon={Trash2} label="Deleted Items" count={28} />
          </NavGroup>

          <NavGroup title="raghuram.pathmanaba..." defaultOpen>
            <NavItem icon={Inbox} label="Inbox" count={2} isActive />
            <NavItem icon={FileText} label="Drafts" count={4} />
            <NavItem icon={Send} label="Sent Items" />
            <NavItem icon={Trash2} label="Deleted Items" count={28} />
            <NavItem icon={StickyNote} label="Notes" count={2} />
            <NavItem icon={Archive} label="Archive" />
            <NavItem icon={FileClock} label="Conversation History" />
            <NavItem icon={Rss} label="RSS Feeds" />
          </NavGroup>

          <div className="space-y-1 pt-2">
            <NavItem icon={FolderSearch} label="Search Folders" />
            <NavItem icon={Users} label="Go to Groups" />
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default SidebarNav;
