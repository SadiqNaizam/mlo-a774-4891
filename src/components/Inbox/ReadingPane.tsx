import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Reply, 
  ReplyAll, 
  Forward, 
  Trash2, 
  Archive, 
  MoreHorizontal, 
  AlertCircle, 
  Check, 
  Sun, 
  Smile 
} from 'lucide-react';

const ReadingPane: React.FC = () => {
  const email = {
    subject: "We've updated our Terms of Service",
    from: { name: 'Figma', email: 'announcements@figma.com' },
    to: { name: 'Raghuram Pathmanaban' },
    date: 'Tue 6/24/2025 4:33 AM',
  };

  return (
    <div className="flex-1 flex flex-col bg-background">
      <div className="p-4 border-b border-border">
        <h1 className="text-2xl font-semibold text-foreground">{email.subject}</h1>
      </div>
      <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12">
              <AvatarFallback className="bg-pink-600 text-white text-xl">F</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold text-foreground">
                {email.from.name} <span className="text-muted-foreground font-normal">&lt;{email.from.email}&gt;</span>
              </div>
              <div className="text-sm text-muted-foreground">
                To: {email.to.name} <Check className="inline h-4 w-4 text-green-500 ml-1" />
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>{email.date}</span>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild><Button variant="ghost" size="icon"><Sun className="h-4 w-4" /></Button></TooltipTrigger>
                    <TooltipContent><p>Light theme</p></TooltipContent>
                </Tooltip>
                 <Tooltip>
                    <TooltipTrigger asChild><Button variant="ghost" size="icon"><Smile className="h-4 w-4" /></Button></TooltipTrigger>
                    <TooltipContent><p>Reactions</p></TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild><Button variant="ghost" size="icon"><Reply className="h-4 w-4" /></Button></TooltipTrigger>
                    <TooltipContent><p>Reply</p></TooltipContent>
                </Tooltip>
                 <Tooltip>
                    <TooltipTrigger asChild><Button variant="ghost" size="icon"><ReplyAll className="h-4 w-4" /></Button></TooltipTrigger>
                    <TooltipContent><p>Reply All</p></TooltipContent>
                </Tooltip>
                 <Tooltip>
                    <TooltipTrigger asChild><Button variant="ghost" size="icon"><Forward className="h-4 w-4" /></Button></TooltipTrigger>
                    <TooltipContent><p>Forward</p></TooltipContent>
                </Tooltip>
                 <Tooltip>
                    <TooltipTrigger asChild><Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button></TooltipTrigger>
                    <TooltipContent><p>More actions</p></TooltipContent>
                </Tooltip>
            </TooltipProvider>
          </div>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-6 space-y-4">
            <Alert variant="default" className="bg-muted/50">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                    Some content in this message has been blocked because the sender isn't in your Safe senders list.
                    <Button variant="link" className="p-0 h-auto ml-2">Trust sender</Button>
                    <Button variant="link" className="p-0 h-auto ml-2">Show blocked content</Button>
                </AlertDescription>
            </Alert>
            <Alert variant="destructive" className="bg-red-900/20 border-red-500/30">
                <AlertCircle className="h-4 w-4 text-red-400" />
                <AlertTitle className="text-red-400">CAUTION:- External Mail.</AlertTitle>
            </Alert>
            
            <div className="prose prose-sm dark:prose-invert max-w-none text-foreground">
                <h2 className='font-bold text-xl'>Figma</h2>
                <p>Hi there,</p>
                <p>We're reaching out to let you know we're updating <strong>Figma's Terms of Service</strong> for our Starter and Professional plans. We do this regularly to ensure these terms are clear and cover the growing list of products, features, and services available to you as a Figma user. We've also updated our terms to stay current with applicable laws and regulations and to add clarity where we believe it would be useful.</p>
                <p>You can currently view both the existing and new Terms of Service <a href="#">here</a>, and we encourage you to do so.</p>
                <p>These updated Terms of Service go into effect on <strong>July 29, 2025</strong>&mdash;by keeping your Figma account after that date you agree to these updated terms.</p>
                <p>Thanks,<br />The Figma Team</p>
            </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default ReadingPane;
