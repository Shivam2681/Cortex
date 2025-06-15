
import { Button } from '@/components/ui/button';
import { Plus, TrendingUp, Target } from 'lucide-react';
import { UserCase } from '../UseCasesTypes';

interface MarketersProps {
  data: UserCase;
}

const MarketersCase = ({ data }: MarketersProps) => {
  return (
    <div className="max-w-4xl mx-auto my-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left side - Content */}
        <div className="space-y-6">
          <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
            {data.description}
          </p>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <TrendingUp className="h-6 w-6 text-white/80 mb-2" />
              <p className="text-2xl font-bold text-white">250%</p>
              <p className="text-sm text-white/70">Engagement boost</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <Target className="h-6 w-6 text-white/80 mb-2" />
              <p className="text-2xl font-bold text-white">95%</p>
              <p className="text-sm text-white/70">Campaign success</p>
            </div>
          </div>
        </div>
        
        {/* Right side - Quote Card */}
        <div className="relative">
          <div className="bg-gradient-to-br from-yellow-200 to-orange-200 text-gray-900 p-8 rounded-2xl shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full" />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full" />
            <p className="text-2xl md:text-3xl italic font-light leading-tight">
              "{data.quote}"
            </p>
            <div className="mt-4 flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full mr-3" />
              <div>
                <p className="font-semibold text-sm">Sarah Johnson</p>
                <p className="text-xs text-gray-600">Marketing Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Button */}
      <div className="flex justify-center mt-8">
        <Button className="rounded-full bg-white text-gray-900 hover:bg-white/90 px-8 py-3 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
          <Plus className="mr-2 h-5 w-5" />
          {data.ctaText}
        </Button>
      </div>
    </div>
  );
};

export default MarketersCase;
