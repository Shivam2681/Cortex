
import React, { useState } from 'react';
import { Search, Filter, Plus, Move } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import TableView from './views/TableView';
import GridView from './views/GridView';
import ListView from './views/ListView';
import KanbanView from './views/KanbanView';
import { cortexItems } from './cortex-data';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter 
} from '@/components/ui/dialog';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { toast } from 'sonner';

interface CortexTableProps {
  viewType?: 'table' | 'grid' | 'list' | 'kanban';
  categoryId?: string;
  cortexId?: string | null;
}

const CortexTable = ({ viewType = 'table', categoryId = 'private', cortexId = 'overview' }: CortexTableProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [moveDialogOpen, setMoveDialogOpen] = useState(false);
  const [targetCortex, setTargetCortex] = useState<string>('');
  
  // ... keep existing code (getActiveCortexName and getFilteredItems functions) the same ...
  const getActiveCortexName = () => {
    const categories = [
      {
        id: 'shared',
        items: [
          { id: 'shared-1', name: 'Second Brain' },
          { id: 'shared-2', name: 'OSS' },
          { id: 'shared-3', name: 'Artificial Intelligence' },
        ]
      },
      {
        id: 'team',
        items: [
          { id: 'team-1', name: 'Brainboard Competitors' },
          { id: 'team-2', name: 'Visualize Terraform' },
          { id: 'team-3', name: 'CI/CD Engine' },
        ]
      },
      {
        id: 'private',
        items: [
          { id: 'overview', name: 'Overview' },
          { id: 'private-1', name: 'UXUI' },
          { id: 'private-2', name: 'Space' },
          { id: 'private-3', name: 'Cloud Computing' },
        ]
      }
    ];
    
    if (cortexId === null) {
      return "All";
    }
    
    const category = categories.find(c => c.id === categoryId);
    if (!category) return "Unknown";
    
    const item = category.items.find(i => i.id === cortexId);
    return item ? item.name : "Unknown";
  };
  
  const getFilteredItems = () => {
    const activeCortexName = getActiveCortexName().toLowerCase();
    
    if (cortexId === 'overview') {
      return searchQuery 
        ? cortexItems.filter(item => 
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase())) ||
            item.writer.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : cortexItems;
    }
    
    let cortexFiltered = cortexItems.filter(item => 
      item.keywords.some(keyword => keyword.toLowerCase() === activeCortexName.toLowerCase())
    );
    
    if (cortexFiltered.length === 0) {
      cortexFiltered = cortexItems.filter(item => 
        item.keywords.some(keyword => keyword.toLowerCase().includes(activeCortexName.toLowerCase())) ||
        item.title.toLowerCase().includes(activeCortexName.toLowerCase())
      );
    }
    
    return searchQuery 
      ? cortexFiltered.filter(item => 
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase())) ||
          item.writer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : cortexFiltered;
  };
  
  const filteredItems = getFilteredItems();

  // ... keep existing code (handleSelectItem and handleMoveItems functions) the same ...
  const handleSelectItem = (id: string) => {
    setSelectedItems(prev => {
      if (prev.includes(id)) {
        return prev.filter(itemId => itemId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleMoveItems = () => {
    if (!targetCortex) return;
    
    toast.success(`Moved ${selectedItems.length} items to ${targetCortex}`);
    setSelectedItems([]);
    setMoveDialogOpen(false);
    setTargetCortex('');
  };

  const cortexOptions = [
    { id: 'shared-1', name: 'Second Brain' },
    { id: 'shared-2', name: 'OSS' },
    { id: 'shared-3', name: 'Artificial Intelligence' },
    { id: 'team-1', name: 'Brainboard Competitors' },
    { id: 'team-2', name: 'Visualize Terraform' },
    { id: 'team-3', name: 'CI/CD Engine' },
    { id: 'private-1', name: 'UXUI' },
    { id: 'private-2', name: 'Space' },
    { id: 'private-3', name: 'Cloud Computing' },
  ];

  return (
    <div className="flex flex-col h-full w-full max-w-full overflow-hidden">
      {/* Search and Actions Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between p-2 sm:p-4 border-b border-border/50 gap-2 sm:gap-4 flex-shrink-0">
        {/* Search */}
        <div className="relative flex-1 min-w-0 max-w-full sm:max-w-80">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
          <Input 
            placeholder="Search cortexes..." 
            className="pl-10 text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-2 flex-wrap">
          {selectedItems.length > 0 && (
            <Button variant="outline" size="sm" onClick={() => setMoveDialogOpen(true)} className="text-xs sm:text-sm">
              <Move size={14} className="mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Move </span>({selectedItems.length})
            </Button>
          )}
          <Button variant="outline" size="sm" className="text-xs sm:text-sm">
            <Filter size={14} className="mr-1 sm:mr-2" />
            Filter
          </Button>
          <Button size="sm" className="text-xs sm:text-sm">
            <Plus size={14} className="mr-1 sm:mr-2" />
            <span className="hidden sm:inline">New </span>Cortex
          </Button>
        </div>
      </div>
      
      {/* Content Area */}
      <div className="flex-1 overflow-auto w-full max-w-full">
        {filteredItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-muted-foreground p-4">
            <p className="text-center text-sm sm:text-base">No cortex items found for this section.</p>
          </div>
        ) : (
          <>
            {viewType === 'table' && (
              <TableView 
                items={filteredItems} 
                selectedItems={selectedItems}
                onSelectItem={handleSelectItem}
              />
            )}
            {viewType === 'grid' && (
              <GridView 
                items={filteredItems}
                selectedItems={selectedItems}
                onSelectItem={handleSelectItem}
              />
            )}
            {viewType === 'list' && (
              <ListView 
                items={filteredItems}
                selectedItems={selectedItems}
                onSelectItem={handleSelectItem}
              />
            )}
            {viewType === 'kanban' && <KanbanView items={filteredItems} />}
          </>
        )}
      </div>

      {/* Move Dialog */}
      <Dialog open={moveDialogOpen} onOpenChange={setMoveDialogOpen}>
        <DialogContent className="sm:max-w-md mx-2">
          <DialogHeader>
            <DialogTitle>Move to Cortex</DialogTitle>
          </DialogHeader>
          <div className="py-4 ">
            <Select onValueChange={setTargetCortex} value={targetCortex}>
              <SelectTrigger>
                <SelectValue placeholder="Select target cortex" />
              </SelectTrigger>
              <SelectContent>
                {cortexOptions.map(option => (
                  <SelectItem key={option.id} value={option.id}>
                    {option.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" onClick={() => setMoveDialogOpen(false)} className="w-full sm:w-auto">
              Cancel
            </Button>
            <Button onClick={handleMoveItems} disabled={!targetCortex} className="w-full sm:w-auto">
              Move Items
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CortexTable;
