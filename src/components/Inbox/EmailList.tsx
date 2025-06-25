import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ChevronDown, ArrowDownUp, Filter, MessageSquareWarning } from 'lucide-react';

interface Email {
  id: string;
  sender: string;
  initials: string;
  subject: string;
  preview: string;
  time: string;
  read: boolean;
  caution?: string;
  meeting?: {
    title: string;
    time: string;
    conflict: string;
  };
}

const emailsData: Email[] = [
  {
    id: '1',
    sender: 'C&D Culture Team',
    initials: 'CT',
    subject: 'Recenter: A Modern Yoga...', 
    preview: 'Join the meeting now Meeting ID: 221 ...',
    time: '1:13 PM',
    read: false,
    meeting: {
      title: 'Thu 7/3/2025 12:00 ...',
      time: 'No conflicts',
      conflict: ''
    }
  },
  {
    id: '2',
    sender: 'Figma',
    initials: 'F',
    subject: "We've updated our Terms of...",
    preview: 'CAUTION:- External Mail.',
    time: '4:33 AM',
    read: false,
    caution: 'External Mail'
  },
  {
    id: '3',
    sender: 'KK',
    initials: 'KK',
    subject: 'ACTION REQUIRED: Mee...',
    preview: 'New monthly mailer for client engage...',
    time: 'Mon 7:24 PM',
    read: true,
  },
  {
    id: '4',
    sender: 'Prasad Maladkar, Mia Abendan, +1 other',
    initials: 'P',
    subject: 'Ascendion Daily Digest',
    preview: 'CAUTION:- External Mail.',
    time: 'Mon 6:44 PM',
    read: true,
  },
  {
    id: '5',
    sender: 'C&D Culture Team',
    initials: 'CT',
    subject: 'Unboxing Inclusion & All...',
    preview: 'Click here to join the meeting now...',
    time: 'Mon 3:44 PM',
    read: true,
  },
];

const EmailListItem: React.FC<{ email: Email; isSelected: boolean; onSelect: (id: string) => void; }> = ({ email, isSelected, onSelect }) => {
  const initialsColor = email.initials === 'CT' ? 'bg-cyan-200 text-cyan-800' : 'bg-pink-200 text-pink-800';
  return (
    <div 
      onClick={() => onSelect(email.id)}
      className={cn(
        'flex items-start p-3 border-b border-border cursor-pointer',
        isSelected ? 'bg-red-500/10 dark:bg-red-500/20 border-l-2 border-red-500' : 'hover:bg-accent/50',
        !email.read && 'font-bold'
      )}>
      <Checkbox id={`check-${email.id}`} className="mr-4 mt-1" />
      <Avatar className={cn("h-10 w-10 mr-3", isSelected && 'ring-2 ring-primary')}>
        <AvatarFallback className={cn("text-sm", !isSelected && initialsColor)}>{email.initials}</AvatarFallback>
      </Avatar>
      <div className="flex-1 overflow-hidden">
        <div className="flex justify-between items-baseline">
          <p className={cn('text-sm truncate', isSelected ? 'text-foreground' : 'text-foreground/90')}> {email.sender}</p>
          <p className="text-xs text-muted-foreground whitespace-nowrap">{email.time}</p>
        </div>
        <p className={cn('text-sm truncate', isSelected ? 'text-foreground' : 'text-foreground/80')}>{email.subject}</p>
        <p className={cn('text-xs truncate', isSelected ? 'text-muted-foreground' : 'text-muted-foreground/80')}>{email.preview}</p>
        {email.meeting && (
            <div className="mt-2 p-2 border border-dashed border-gray-300 dark:border-gray-600 rounded-md text-xs">
                <div className='flex justify-between items-center'>
                    <span>{email.meeting.title}</span>
                    <Button variant="secondary" size="sm" className='h-7'>RSVP</Button>
                </div>
                <p className='text-muted-foreground'>{email.meeting.time}</p>
            </div>
        )}
        {email.caution && <p className="text-xs text-red-500 mt-1">CAUTION:- External Mail.</p>}
      </div>
    </div>
  );
}

const EmailList: React.FC = () => {
  const [selectedEmailId, setSelectedEmailId] = useState<string>('2');
  
  return (
    <div className="w-[420px] bg-card border-r border-border flex flex-col">
      <Tabs defaultValue="focused" className="flex-grow flex flex-col">
        <div className="p-2 border-b border-border">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="focused">Focused</TabsTrigger>
                <TabsTrigger value="other">Other</TabsTrigger>
            </TabsList>
        </div>
        <div className="flex items-center justify-between p-2 text-sm border-b border-border">
            <div className="flex items-center">
                <ChevronDown className="h-4 w-4 mr-1" />
                <span>Today</span>
            </div>
            <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-7 w-7"><Filter className="h-4 w-4" /></Button>
                <Button variant="ghost" size="icon" className="h-7 w-7"><ArrowDownUp className="h-4 w-4" /></Button>
            </div>
        </div>
        <ScrollArea className="flex-1">
          <TabsContent value="focused" className="m-0">
            {emailsData.map((email) => (
              <EmailListItem 
                key={email.id} 
                email={email} 
                isSelected={selectedEmailId === email.id}
                onSelect={setSelectedEmailId}
              />
            ))}
          </TabsContent>
          <TabsContent value="other" className="m-0 p-4 text-center text-muted-foreground">
            <p>No other messages.</p>
          </TabsContent>
        </ScrollArea>
      </Tabs>
    </div>
  );
};

export default EmailList;
