import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { 
  ChevronDown, 
  Trash2, 
  Archive, 
  Flag, 
  ArchiveRestore, 
  Move, 
  Reply, 
  ReplyAll, 
  Forward, 
  Zap, 
  MailOpen, 
  Tag 
} from 'lucide-react';

const ActionButton: React.FC<{ icon: React.ElementType, label: string, hasDropdown?: boolean, shortcut?: string }> = 
  ({ icon: Icon, label, hasDropdown = false, shortcut }) => (
  <TooltipProvider delayDuration={100}>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" className="px-2 h-8 flex items-center">
          <Icon className="h-4 w-4 mr-2" />
          <span className="text-sm">{label}</span>
          {hasDropdown && <ChevronDown className="h-4 w-4 ml-1 text-muted-foreground" />}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{label} {shortcut && <span className="ml-2 text-muted-foreground">{shortcut}</span>}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

const ActionToolbar: React.FC = () => {
  return (
    <div className="h-14 flex items-center justify-between px-4 bg-card border-b border-border">
      <div className="flex items-center space-x-1">
        <Button variant="ghost" className="px-2 h-8 text-sm font-semibold">Home</Button>
        <Button variant="ghost" className="px-2 h-8 text-sm font-semibold">View</Button>
        <Button variant="ghost" className="px-2 h-8 text-sm font-semibold">Help</Button>
      </div>
      <div className="flex items-center space-x-1">
        <ActionButton icon={Trash2} label="Delete" hasDropdown shortcut="Del"/>
        <ActionButton icon={Archive} label="Archive" hasDropdown shortcut="E"/>
        <ActionButton icon={Flag} label="Report" hasDropdown />
        <ActionButton icon={ArchiveRestore} label="Sweep" />
        <ActionButton icon={Move} label="Move to" hasDropdown />

        <Separator orientation="vertical" className="h-6 mx-2" />

        <ActionButton icon={Reply} label="Reply" shortcut="Ctrl+R"/>
        <ActionButton icon={ReplyAll} label="Reply all" shortcut="Ctrl+Shift+R"/>
        <ActionButton icon={Forward} label="Forward" shortcut="Ctrl+F"/>

        <Separator orientation="vertical" className="h-6 mx-2" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="px-2 h-8 flex items-center">
                <Zap className="h-4 w-4 mr-2" />
                <span className="text-sm">Quick steps</span>
                <ChevronDown className="h-4 w-4 ml-1 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Step 1</DropdownMenuItem>
            <DropdownMenuItem>Step 2</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="px-2 h-8 flex items-center">
                <Tag className="h-4 w-4 mr-2" />
                <span className="text-sm">Categorize</span>
                <ChevronDown className="h-4 w-4 ml-1 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
           <DropdownMenuContent>
            <DropdownMenuItem>Red Category</DropdownMenuItem>
            <DropdownMenuItem>Blue Category</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <ActionButton icon={MailOpen} label="Read / Unread" />
      </div>
    </div>
  );
};

export default ActionToolbar;
