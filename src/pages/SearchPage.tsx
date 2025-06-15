
import React from 'react';
import Search from '@/components/search';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { useAnimateIn } from '@/lib/animations';

const SearchPage = () => {
  const showContent = useAnimateIn(false, 300);
  
  return (
    <div className="w-full h-screen pt-16 sm:pt-20 md:pt-24 pb-4 sm:pb-6">
      <AnimatedTransition show={showContent} animation="slide-up">
        <div className="h-[calc(100vh-80px)] sm:h-[calc(100vh-100px)] md:h-[calc(100vh-130px)]">
          <Search />
        </div>
      </AnimatedTransition>
    </div>
  );
};

export default SearchPage;
