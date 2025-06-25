import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { 
  Search, 
  LayoutGrid, 
  Menu, 
  Bell, 
  Settings, 
  CalendarDays, 
  MessageSquare, 
  HelpCircle, 
  LogOut
} from 'lucide-react';

const TopHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 flex items-center h-16 px-4 bg-card border-b border-border">
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-semibold text-foreground whitespace-nowrap">ASCENDION</h1>
        <span className="text-xl text-muted-foreground font-light">Outlook</span>
      </div>

      <div className="flex-1 mx-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search" className="pl-10 w-full max-w-md bg-muted/50" />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon"><LayoutGrid className="h-5 w-5" /></Button>
            </TooltipTrigger>
            <TooltipContent><p>App launcher</p></TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon"><CalendarDays className="h-5 w-5" /></Button>
            </TooltipTrigger>
            <TooltipContent><p>Calendar</p></TooltipContent>
          </Tooltip>
           <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon"><MessageSquare className="h-5 w-5" /></Button>
            </TooltipTrigger>
            <TooltipContent><p>Chat</p></TooltipContent>
          </Tooltip>
           <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon"><Bell className="h-5 w-5" /></Button>
            </TooltipTrigger>
            <TooltipContent><p>Notifications</p></TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon"><Settings className="h-5 w-5" /></Button>
            </TooltipTrigger>
            <TooltipContent><p>Settings</p></TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon"><HelpCircle className="h-5 w-5" /></Button>
            </TooltipTrigger>
            <TooltipContent><p>Help</p></TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className='ml-4'>
                <Avatar className="h-8 w-8">
                <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Raghuram Pathmanaban" />
                <AvatarFallback>RP</AvatarFallback>
                </Avatar>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuItem>Raghuram Pathmanaban</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className='text-destructive'>
                <LogOut className='mr-2 h-4 w-4'/>
                Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default TopHeader;
