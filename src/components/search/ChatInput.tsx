
import React from 'react';
import { SearchIcon, SendIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface ChatInputProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isFocused: boolean;
  setIsFocused: (focused: boolean) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({
  searchQuery,
  setSearchQuery,
  handleSubmit,
  isFocused,
  setIsFocused
}) => {
  return (
    <div className="p-2 sm:p-4 border-t">
      <form 
        onSubmit={handleSubmit}
        className="relative"
      >
        <div className={cn(
          "w-full glass-panel flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl transition-all duration-300",
          isFocused ? "ring-2 ring-primary/30" : ""
        )}>
          <SearchIcon 
            size={18} 
            className={cn(
              "text-muted-foreground transition-all duration-300 flex-shrink-0",
              isFocused ? "text-primary" : ""
            )} 
          />
          <input
            type="text"
            placeholder="Ask your second brain anything..."
            className="w-full bg-transparent border-none outline-none focus:outline-none text-foreground text-sm sm:text-base min-w-0"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <Button 
            type="submit"
            size="icon"
            variant="ghost"
            className={cn(
              "text-muted-foreground transition-all duration-300 h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0",
              searchQuery.trim() ? "opacity-100" : "opacity-50",
              isFocused && searchQuery.trim() ? "text-primary" : ""
            )}
            disabled={!searchQuery.trim()}
          >
            <SendIcon size={16} className="sm:size-18" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChatInput;
