
import { Brain, Database, Network, BookOpen } from 'lucide-react';
import { UserCase } from '../UseCasesTypes';

interface ResearchersProps {
  data: UserCase;
}

const ResearchersCase = ({ data }: ResearchersProps) => {
  return (
    <div className="flex flex-col items-center justify-center my-12">
      <div className="relative max-w-2xl mx-auto">
        {/* Central Brain Hub */}
        <div className="relative bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20 group hover:shadow-2xl transition-all duration-300">
          {/* Brain Icon with Glow Effect */}
          <div className="relative flex justify-center mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full blur-xl opacity-30 animate-pulse" />
            <Brain className="relative h-20 w-20 text-white/90 group-hover:scale-110 transition-transform duration-300" />
          </div>
          
          {/* Floating Data Nodes */}
          <div className="absolute -top-4 -left-4 bg-gradient-to-br from-blue-400 to-indigo-500 backdrop-blur-sm px-4 py-2 rounded-xl text-white font-medium shadow-lg border border-white/20 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center">
              <Database className="h-4 w-4 mr-2" />
              Research Data
            </div>
          </div>
          
          <div className="absolute -top-4 -right-4 bg-gradient-to-br from-purple-400 to-pink-500 backdrop-blur-sm px-4 py-2 rounded-xl text-white font-medium shadow-lg border border-white/20 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center">
              <Network className="h-4 w-4 mr-2" />
              Neural Networks
            </div>
          </div>
          
          <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-orange-400 to-red-500 backdrop-blur-sm px-4 py-2 rounded-xl text-white font-medium shadow-lg border border-white/20 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center">
              <BookOpen className="h-4 w-4 mr-2" />
              References
            </div>
          </div>
          
          <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-teal-400 to-emerald-500 backdrop-blur-sm px-4 py-2 rounded-xl text-white font-medium shadow-lg border border-white/20 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center">
              <span className="h-3 w-3 bg-green-300 rounded-full mr-2 animate-pulse" />
              Active Research
            </div>
          </div>
          
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
            <defs>
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
              </linearGradient>
            </defs>
            <path d="M 50 50 L 20 20" stroke="url(#connectionGradient)" strokeWidth="2" opacity="0.5" />
            <path d="M 50 50 L 80 20" stroke="url(#connectionGradient)" strokeWidth="2" opacity="0.5" />
            <path d="M 50 50 L 20 80" stroke="url(#connectionGradient)" strokeWidth="2" opacity="0.5" />
            <path d="M 50 50 L 80 80" stroke="url(#connectionGradient)" strokeWidth="2" opacity="0.5" />
          </svg>
        </div>
        
        {/* Research Stats */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <p className="text-2xl font-bold text-white">1,247</p>
            <p className="text-sm text-white/70">Papers</p>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <p className="text-2xl font-bold text-white">89%</p>
            <p className="text-sm text-white/70">Accuracy</p>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <p className="text-2xl font-bold text-white">156</p>
            <p className="text-sm text-white/70">Citations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchersCase;
