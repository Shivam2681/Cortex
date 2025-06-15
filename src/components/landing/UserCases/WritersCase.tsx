
import { PenTool, CheckCircle, Circle } from 'lucide-react';
import { UserCase } from '../UseCasesTypes';

interface WritersProps {
  data: UserCase;
}

const WritersCase = ({ data }: WritersProps) => {
  return (
    <div className="max-w-md mx-auto my-12">
      <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
        <div className="flex items-center mb-6">
          <PenTool className="h-6 w-6 text-white/80 mr-3" />
          <p className="text-white uppercase font-semibold text-sm tracking-wide">
            {data.ctaText}
          </p>
        </div>
        
        <h3 className="text-2xl font-bold mb-6 text-white">
          Promote our new campaign
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center group hover:bg-white/10 p-3 rounded-lg transition-all duration-200">
            <div className="relative">
              <CheckCircle className="h-6 w-6 text-green-400" />
              <div className="absolute inset-0 bg-green-400/20 rounded-full animate-pulse" />
            </div>
            <p className="ml-4 text-white/70 line-through">Post ads to instagram</p>
          </div>
          
          <div className="flex items-center group hover:bg-white/10 p-3 rounded-lg transition-all duration-200">
            <Circle className="h-6 w-6 text-white/60 hover:text-white transition-colors duration-200" />
            <p className="ml-4 text-white font-medium">Write emails</p>
          </div>
          
          <div className="flex items-center group hover:bg-white/10 p-3 rounded-lg transition-all duration-200">
            <Circle className="h-6 w-6 text-white/60 hover:text-white transition-colors duration-200" />
            <p className="ml-4 text-white">Proof read newsletter copy</p>
          </div>
          
          <div className="flex items-center group hover:bg-white/10 p-3 rounded-lg transition-all duration-200">
            <Circle className="h-6 w-6 text-white/60 hover:text-white transition-colors duration-200" />
            <p className="ml-4 text-white/70">Write drafts for blog post</p>
          </div>
        </div>
        
        {/* Progress indicator */}
        <div className="mt-6 pt-4 border-t border-white/20">
          <div className="flex justify-between items-center text-sm text-white/70">
            <span>Progress</span>
            <span>1/4 completed</span>
          </div>
          <div className="mt-2 bg-white/20 rounded-full h-2">
            <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-full rounded-full w-1/4 transition-all duration-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WritersCase;
