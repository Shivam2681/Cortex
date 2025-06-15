
import React from 'react';
import { User, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';
import AnimatedTransition from '@/components/AnimatedTransition';
import { Chat, ChatMessage } from '@/types/chat';

interface ChatMessagesProps {
  activeChat: Chat | null;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ activeChat }) => {
  return (
    <div className="h-full overflow-y-auto p-2 sm:p-4">
      <AnimatedTransition
        show={activeChat?.messages.length === 0}
        animation="fade"
        className="h-full flex items-center justify-center"
      >
        <div className="text-center space-y-2 max-w-md px-4">
          <h3 className="text-lg sm:text-xl font-medium">Search Your Second Brain</h3>
          <p className="text-muted-foreground text-sm sm:text-base">
            Ask questions to search across your notes, documents, and knowledge base.
          </p>
        </div>
      </AnimatedTransition>
      
      <AnimatedTransition
        show={activeChat?.messages.length > 0}
        animation="fade"
        className="space-y-3 sm:space-y-4"
      >
        {activeChat?.messages.map((message: ChatMessage) => (
          <div 
            key={message.id}
            className={cn(
              "flex gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg",
              message.type === 'user' 
                ? "bg-primary/10 ml-auto max-w-[90%] sm:max-w-[80%]" 
                : "bg-muted/10 mr-auto max-w-[90%] sm:max-w-[80%]"
            )}
          >
            <div className={cn(
              "flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center",
              message.type === 'user' ? "bg-primary/20" : "bg-secondary/20"
            )}>
              {message.type === 'user' ? (
                <User size={14} className="sm:size-16 text-primary" />
              ) : (
                <Bot size={14} className="sm:size-16 text-secondary" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm break-words">{message.content}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {new Date(message.timestamp).toLocaleTimeString('en-US', { 
                  hour: '2-digit', 
                  minute: '2-digit'
                })}
              </p>
            </div>
          </div>
        ))}
        
        {activeChat?.messages.length > 0 && activeChat.messages[activeChat.messages.length - 1].type === 'assistant' && (
          <div className="p-3 sm:p-4 glass-panel rounded-xl space-y-2">
            <h3 className="text-xs sm:text-sm font-medium text-muted-foreground">Suggested Results</h3>
            <div className="space-y-2 sm:space-y-3">
              {['Artificial Intelligence', 'Machine Learning', 'Neural Networks'].map((result, index) => (
                <div 
                  key={index}
                  className="p-2 sm:p-3 hover:bg-primary/5 rounded-lg transition-all duration-200 cursor-pointer"
                >
                  <h4 className="font-medium text-sm sm:text-base">{result}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    Related to your search query
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </AnimatedTransition>
    </div>
  );
};

export default ChatMessages;
