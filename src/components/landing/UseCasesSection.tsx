
import { useState } from 'react';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { cn } from '@/lib/utils';
import { UserType } from './UseCasesTypes';
import { userCasesData, booksData } from './UserCasesData';

// Import individual case components
import MarketersCase from './UserCases/MarketersCase';
import DesignersCase from './UserCases/DesignersCase';
import WritersCase from './UserCases/WritersCase';
import ResearchersCase from './UserCases/ResearchersCase';
import DevelopersCase from './UserCases/DevelopersCase';
import EveryoneCase from './UserCases/EveryoneCase';

interface UseCasesSectionProps {
  show: boolean;
}

const UseCasesSection = ({ show }: UseCasesSectionProps) => {
  const [activeUserType, setActiveUserType] = useState<UserType>('Marketers');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const currentCase = userCasesData[activeUserType];

  const handleUserTypeChange = (newType: UserType) => {
    if (newType === activeUserType) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveUserType(newType);
      setIsTransitioning(false);
    }, 150);
  };

  // Dynamic background gradients for each user type
  const getBackgroundGradient = (userType: UserType) => {
    const gradients = {
      Marketers: 'bg-gradient-to-br from-rose-500 via-pink-500 to-purple-600',
      Designers: 'bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-600',
      Writers: 'bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-600',
      Researchers: 'bg-gradient-to-br from-emerald-500 via-green-500 to-lime-600',
      Developers: 'bg-gradient-to-br from-slate-700 via-gray-800 to-black',
      Everyone: 'bg-gradient-to-br from-orange-500 via-red-500 to-pink-600'
    };
    return gradients[userType];
  };

  return (
    <AnimatedTransition show={show} animation="slide-up" duration={600}>
      <div className="py-12 md:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl text-center mb-8 md:mb-16 tracking-tight text-blue-700 font-bold leading-tight">
            For visual minds of all kinds.
          </h2>
          
          {/* Enhanced Navigation - Mobile Responsive */}
          <div className="flex justify-center mb-8 md:mb-12 px-2">
            <div className="flex bg-white/10 backdrop-blur-sm rounded-full p-1 md:p-2 shadow-lg border border-white/20 overflow-x-auto max-w-full">
              <div className="flex gap-1 md:gap-0">
                {Object.keys(userCasesData).map((type, index) => (
                  <button
                    key={type}
                    className={cn(
                      "relative px-3 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium transition-all duration-300 transform whitespace-nowrap flex-shrink-0",
                      activeUserType === type
                        ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg scale-105"
                        : "text-gray-600 hover:text-blue-600 hover:bg-white/20 hover:scale-102"
                    )}
                    onClick={() => handleUserTypeChange(type as UserType)}
                  >
                    {type}
                    {activeUserType === type && (
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse-slow opacity-20 -z-10" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Enhanced Content Container */}
          <div className="relative overflow-hidden rounded-lg">
            <div 
              className={cn(
                "rounded-2xl md:rounded-3xl shadow-2xl transition-all duration-500 transform relative overflow-hidden",
                getBackgroundGradient(activeUserType),
                isTransitioning ? "scale-95 opacity-90" : "scale-100 opacity-100"
              )}
            >
              {/* Animated Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20" />
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2" />
              
              {/* Floating Orbs */}
              <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/30 rounded-full animate-pulse" />
              <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-white/40 rounded-full animate-pulse delay-300" />
              <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-white/20 rounded-full animate-pulse delay-700" />
              
              {/* Content */}
              <div className="relative p-6 md:p-10 lg:p-16 backdrop-blur-sm">
                {/* Header with Animation */}
                <div 
                  className={cn(
                    "text-center mb-6 md:mb-8 transition-all duration-300",
                    isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                  )}
                >
                  <div className="inline-flex items-center bg-white/20 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-full mb-4 md:mb-6 border border-white/20">
                    <div className="size-2 md:size-2.5 bg-white rounded-full mr-3 animate-pulse" />
                    <p className="uppercase tracking-wide text-xs md:text-sm font-semibold text-white">
                      Made for {activeUserType}
                    </p>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-white leading-tight">
                    {currentCase.title}
                    <span className="block italic font-light text-white/90 mt-2 md:mt-3 text-lg sm:text-xl md:text-2xl lg:text-3xl">
                      {currentCase.subtitle}
                    </span>
                  </h3>
                </div>
                
                {/* Case Content with Smooth Transition */}
                <div 
                  className={cn(
                    "transition-all duration-300 transform",
                    isTransitioning 
                      ? "opacity-0 translate-y-8 scale-95" 
                      : "opacity-100 translate-y-0 scale-100"
                  )}
                >
                  {/* Render the appropriate component based on activeUserType */}
                  {activeUserType === 'Marketers' && <MarketersCase data={currentCase} />}
                  {activeUserType === 'Designers' && <DesignersCase data={currentCase} />}
                  {activeUserType === 'Writers' && <WritersCase data={currentCase} />}
                  {activeUserType === 'Researchers' && <ResearchersCase data={currentCase} />}
                  {activeUserType === 'Developers' && <DevelopersCase data={currentCase} />}
                  {activeUserType === 'Everyone' && <EveryoneCase data={currentCase} books={booksData} />}
                </div>
              </div>
            </div>
            
            {/* Enhanced Background Glow Effect */}
            <div className={cn(
              "absolute inset-0 rounded-2xl md:rounded-3xl blur-xl -z-10 transform scale-110 opacity-60",
              getBackgroundGradient(activeUserType)
            )} />
          </div>
        </div>
      </div>
    </AnimatedTransition>
  );
};

export default UseCasesSection;
