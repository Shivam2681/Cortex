
import { Code, Terminal, Zap } from 'lucide-react';
import { UserCase } from '../UseCasesTypes';

interface DevelopersProps {
  data: UserCase;
}

const DevelopersCase = ({ data }: DevelopersProps) => {
  return (
    <div className="max-w-4xl mx-auto my-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Code Interface */}
        <div className="bg-gradient-to-br from-slate-900 to-black text-white rounded-2xl p-6 shadow-2xl border border-gray-700">
          {/* Terminal Header */}
          <div className="flex items-center justify-between border-b border-gray-700 pb-4 mb-4">
            <div className="flex items-center">
              <Terminal className="h-5 w-5 text-green-400 mr-2" />
              <span className="text-gray-300 italic text-sm">Search my mind...</span>
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <Code className="h-4 w-4 mr-1" />
              <span>⌘K</span>
            </div>
          </div>
          
          {/* Code Cards Grid */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-3 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-sm text-white font-medium">GitHub</span>
              </div>
              <p className="text-xs text-gray-400 mb-2">Tailwind Labs</p>
              <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-60" />
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center mb-2">
                <Zap className="h-4 w-4 text-yellow-400 mr-2" />
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-xs text-black font-bold px-2 py-1 rounded">
                  $5999
                </span>
              </div>
              <div className="h-16 bg-gradient-to-b from-blue-600 to-blue-800 rounded-lg mt-3 group-hover:from-blue-500 group-hover:to-blue-700 transition-all duration-300" />
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 hover:shadow-lg transition-all duration-300 group">
              <div className="flex flex-col items-center justify-center h-full">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-2 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-xs text-gray-400">Design System</span>
              </div>
            </div>
          </div>
          
          {/* Status Bar */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
              <span className="text-xs text-gray-400">Connected</span>
            </div>
            <span className="text-xs text-gray-500">Last sync: 2min ago</span>
          </div>
        </div>
        
        {/* Features List */}
        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <Code className="h-8 w-8 text-blue-400 mb-3" />
            <h4 className="text-white font-semibold text-lg mb-2">Code Snippets</h4>
            <p className="text-white/70 text-sm">Save and organize your most-used code patterns</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <Terminal className="h-8 w-8 text-green-400 mb-3" />
            <h4 className="text-white font-semibold text-lg mb-2">Quick Access</h4>
            <p className="text-white/70 text-sm">Find any resource instantly with smart search</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <Zap className="h-8 w-8 text-yellow-400 mb-3" />
            <h4 className="text-white font-semibold text-lg mb-2">Lightning Fast</h4>
            <p className="text-white/70 text-sm">Optimized performance for developer workflows</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopersCase;
