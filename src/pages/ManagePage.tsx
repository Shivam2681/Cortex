
import React, { useState, useEffect } from 'react';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { useAnimateIn } from '@/lib/animations';
import CortexTable from '@/components/manage/CortexTable';
import CortexSidebar from '@/components/manage/CortexSidebar';
import ViewSwitcher from '@/components/manage/ViewSwitcher';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Check, Edit2, X, Menu } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Toaster } from 'sonner';

const ManagePage = () => {
  const showContent = useAnimateIn(false, 300);
  const [viewType, setViewType] = useState<'table' | 'grid' | 'list' | 'kanban'>('table');
  const [libraryTitle, setLibraryTitle] = useState('Cortex Library');
  const [isEditing, setIsEditing] = useState(false);
  const [tempTitle, setTempTitle] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('private');
  const [selectedItem, setSelectedItem] = useState<string | null>('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleEditClick = () => {
    setTempTitle(libraryTitle);
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    if (tempTitle.trim()) {
      setLibraryTitle(tempTitle);
      setIsEditing(false);
    }
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleDialogOpen = () => {
    setTempTitle(libraryTitle);
    setDialogOpen(true);
  };

  const handleDialogSave = () => {
    if (tempTitle.trim()) {
      setLibraryTitle(tempTitle);
      setDialogOpen(false);
    }
  };

  const handleCortexSelect = (categoryId: string, itemId: string | null) => {
    setSelectedCategory(categoryId);
    setSelectedItem(itemId);
    setSidebarOpen(false); // Close sidebar on mobile after selection
  };

  // Handle keyboard events for inline editing
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSaveClick();
    } else if (e.key === 'Escape') {
      handleCancelClick();
    }
  };

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (sidebarOpen && !target.closest('.sidebar-container') && !target.closest('.sidebar-toggle')) {
        setSidebarOpen(false);
      }
    };

    if (sidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [sidebarOpen]);

  return (
    <div className="max-w-full mx-auto h-screen pt-16 sm:pt-20 md:pt-24 pb-4 sm:pb-6">
      <Toaster position="top-right" />
      <AnimatedTransition show={showContent} animation="slide-up">
        <div className="flex h-[calc(100vh-80px)] sm:h-[calc(100vh-100px)] md:h-[calc(100vh-130px)] relative">
          {/* Mobile Sidebar Overlay */}
          {sidebarOpen && (
            <div 
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}
          
          {/* Sidebar */}
          <div className={`
            sidebar-container fixed lg:relative pt-2 bg-muted/90 inset-y-0 left-0 z-50 lg:z-auto
            transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
            lg:translate-x-0 transition-transform duration-300 ease-in-out
            lg:block
          `}>
            <CortexSidebar 
              onCortexSelect={handleCortexSelect}
              selectedCategoryId={selectedCategory}
              selectedItemId={selectedItem}
            />
          </div>
          
          {/* Main Content */}
          <div className="flex-1 overflow-hidden w-full lg:w-auto min-w-0">
            {/* Header */}
            <div className="flex items-center justify-between px-2 sm:px-4 py-2 sm:py-3 border-b border-border/50 min-h-[60px] flex-wrap gap-2">
              {/* Left Section - Title and Mobile Menu */}
              <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                {/* Mobile Menu Button */}
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="sidebar-toggle lg:hidden h-8 w-8 flex-shrink-0"
                >
                  <Menu size={16} />
                </Button>
                
                {/* Title Section */}
                {isEditing ? (
                  <div className="flex items-center gap-1 sm:gap-2 min-w-0 flex-1">
                    <Input
                      value={tempTitle}
                      onChange={(e) => setTempTitle(e.target.value)}
                      onKeyDown={handleKeyDown}
                      className="h-8 sm:h-9 text-base sm:text-xl font-semibold flex-1 min-w-0"
                      autoFocus
                    />
                    <Button size="icon" variant="ghost" onClick={handleSaveClick} className="h-8 w-8 flex-shrink-0">
                      <Check size={14} className="text-green-500" />
                    </Button>
                    <Button size="icon" variant="ghost" onClick={handleCancelClick} className="h-8 w-8 flex-shrink-0">
                      <X size={14} className="text-red-500" />
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center gap-1 sm:gap-2 min-w-0 flex-1">
                    <h2 className="text-base sm:text-xl font-semibold truncate">{libraryTitle}</h2>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={handleEditClick}
                      className="h-8 w-8 flex-shrink-0"
                    >
                      <Edit2 size={12} className="sm:size-14" />
                    </Button>
                  </div>
                )}
              </div>
              
              {/* Right Section - View Switcher */}
              <div className="flex-shrink-0">
                <TooltipProvider>
                  <ViewSwitcher activeView={viewType} onViewChange={setViewType} />
                </TooltipProvider>
              </div>
            </div>
            
            {/* Content Area */}
            <div className="flex-1 overflow-hidden h-[calc(100%-60px)]">
              <CortexTable 
                viewType={viewType} 
                categoryId={selectedCategory}
                cortexId={selectedItem}
              />
            </div>
          </div>
        </div>
      </AnimatedTransition>

      {/* Dialog for editing title */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md mx-2">
          <DialogHeader>
            <DialogTitle>Edit Library Title</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <Input
              value={tempTitle}
              onChange={(e) => setTempTitle(e.target.value)}
              className="w-full"
              placeholder="Enter a title for your library"
              autoFocus
            />
          </div>
          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" onClick={() => setDialogOpen(false)} className="w-full sm:w-auto">
              Cancel
            </Button>
            <Button onClick={handleDialogSave} className="w-full sm:w-auto">Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ManagePage;
