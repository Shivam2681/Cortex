
import { useState } from 'react';
import { BookOpen, ChevronLeft, ChevronRight, Star, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { UserCase } from '../UseCasesTypes';
import { Book } from '../UseCasesTypes';

interface EveryoneProps {
  data: UserCase;
  books: Book[];
}

const EveryoneCase = ({ data, books }: EveryoneProps) => {
  const [activeBookIndex, setActiveBookIndex] = useState(0);
  
  const nextBook = () => {
    setActiveBookIndex(prev => (prev + 1) % books.length);
  };
  
  const prevBook = () => {
    setActiveBookIndex(prev => (prev - 1 + books.length) % books.length);
  };
  
  return (
    <div className="flex justify-center my-12">
      <div className="flex flex-col items-center max-w-4xl">
        {/* Book Carousel */}
        <div className="flex items-center gap-8 mb-8">
          <Button 
            variant="ghost" 
            className="rounded-full h-14 w-14 p-0 bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/20 group" 
            onClick={prevBook}
          >
            <ChevronLeft className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
          </Button>
          
          <div className="relative">
            {/* Book Display */}
            <div className={`h-[320px] w-[220px] ${books[activeBookIndex].coverColor} text-white rounded-2xl shadow-2xl flex flex-col relative overflow-hidden group hover:scale-105 transition-all duration-300`}>
              {/* Book Spine Effect */}
              <div className="absolute left-0 top-0 h-full w-[12px] bg-black/30" />
              <div className="absolute left-3 top-0 h-full w-[2px] bg-white/20" />
              
              {/* Book Content */}
              <div className="flex-1 p-8 flex flex-col justify-between">
                <div>
                  <BookOpen className="h-12 w-12 mb-6 opacity-90 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-2xl font-bold leading-tight mb-3">
                    {books[activeBookIndex].title}
                  </h4>
                  <p className="text-base opacity-90 mb-4">
                    by {books[activeBookIndex].author}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current text-yellow-300" />
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center text-sm opacity-80">
                    <Heart className="h-4 w-4 mr-2 text-red-300" />
                    <span>Added to favorites</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full">#readlater</span>
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full">#inspiration</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Book Shadow */}
            <div className="h-[25px] w-[200px] mx-auto mt-[-10px] rounded-full bg-black/30 blur-lg" />
          </div>
          
          <Button 
            variant="ghost" 
            className="rounded-full h-14 w-14 p-0 bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/20 group" 
            onClick={nextBook}
          >
            <ChevronRight className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
          </Button>
        </div>
        
        {/* Book Navigation Dots */}
        <div className="flex space-x-2 mb-6">
          {books.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeBookIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              onClick={() => setActiveBookIndex(index)}
            />
          ))}
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 w-full max-w-md">
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <p className="text-2xl font-bold text-white">{books.length}</p>
            <p className="text-sm text-white/70">Books Saved</p>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <p className="text-2xl font-bold text-white">12</p>
            <p className="text-sm text-white/70">Categories</p>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <p className="text-2xl font-bold text-white">95%</p>
            <p className="text-sm text-white/70">Organized</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EveryoneCase;
