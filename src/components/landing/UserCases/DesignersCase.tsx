
import { Palette, Layers, Sparkles } from 'lucide-react';
import { UserCase } from '../UseCasesTypes';

interface DesignersProps {
  data: UserCase;
}

const DesignersCase = ({ data }: DesignersProps) => {
  return (
    <div className="max-w-5xl mx-auto my-10">
      <div className="relative p-6 md:p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
        {/* Floating Tool Icons */}
        <div className="absolute top-4 right-4 opacity-20">
          <Palette className="h-8 w-8 text-white" />
        </div>
        <div className="absolute bottom-4 left-4 opacity-20">
          <Layers className="h-6 w-6 text-white" />
        </div>
        
        {/* Main Grid */}
        <div className="space-y-6">
          {/* Top Row */}
          <div className="flex gap-4 mb-4">
            <div className="w-1/3 aspect-[4/5] bg-white/20 rounded-xl shadow-lg overflow-hidden transform hover:rotate-1 transition-all duration-300 hover:shadow-2xl group">
              <img 
                alt="Inspiration" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                src="https://as1.ftcdn.net/jpg/01/36/92/00/1000_F_136920035_xLXHbITYg8iS8XiVYKxD2FHB0ArwjgGX.jpg" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="w-2/3 aspect-[3/2] bg-white/20 rounded-xl shadow-lg overflow-hidden transform hover:-rotate-1 transition-all duration-300 hover:shadow-2xl group">
              <img 
                alt="Design" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                src="https://static-cse.canva.com/blob/1895405/1600w-lrlr4zvSKxw.jpg" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
          
          {/* Bottom Row */}
          <div className="flex gap-4 relative">
            <div className="w-1/2 aspect-[3/2] bg-white/20 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl group">
              <img 
                alt="Concept" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                src="https://blog.placeit.net/wp-content/uploads/2022/07/Moodboard-Ecology-by-Ange%CC%81lique-Taddei-on-Behance.jpg" 
              />
            </div>
            
            <div className="w-1/4 aspect-square bg-white/20 rounded-xl shadow-lg overflow-hidden transform hover:rotate-3 transition-all duration-300 hover:shadow-2xl group">
              <img 
                alt="Color palette" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                src="https://f.hellowork.com/blogdumoderateur/2022/11/moodboard-exemple.jpg" 
              />
            </div>
            
            <div className="w-1/4 bg-gradient-to-br from-white/20 to-white/10 rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-3">
                <Sparkles className="h-5 w-5 text-white/80 mr-2" />
                <p className="text-white font-semibold text-lg">Colors</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="h-8 w-full rounded-lg bg-gradient-to-br from-orange-400 to-red-500 shadow-md hover:shadow-lg transition-shadow duration-200" />
                <div className="h-8 w-full rounded-lg bg-gradient-to-br from-yellow-300 to-orange-400 shadow-md hover:shadow-lg transition-shadow duration-200" />
                <div className="h-8 w-full rounded-lg bg-gradient-to-br from-blue-200 to-blue-300 shadow-md hover:shadow-lg transition-shadow duration-200" />
                <div className="h-8 w-full rounded-lg bg-gradient-to-br from-indigo-300 to-purple-400 shadow-md hover:shadow-lg transition-shadow duration-200" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Labels */}
        <div className="absolute right-8 top-1/3 bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300 z-10 border border-white/20">
          <p className="text-sm text-white font-semibold">Design System</p>
        </div>
        
        <div className="absolute left-1/4 bottom-6 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full shadow-lg flex items-center z-10 border border-white/20 hover:scale-105 transition-transform duration-200">
          <span className="h-3 w-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mr-2 animate-pulse" />
          <span className="text-sm text-white font-medium">Mood Board</span>
        </div>
      </div>
    </div>
  );
};

export default DesignersCase;
