// import { ArrowRight } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { AnimatedTransition } from '@/components/AnimatedTransition';
// import { useState } from 'react';
// import { WaitlistModal } from '../waitlist/WaitlistModal';
// import DiagramComponent from './DiagramComponent';
// interface HeroSectionProps {
//   showTitle: boolean;
// }
// export const HeroSection = ({
//   showTitle
// }: HeroSectionProps) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState<'scattered' | 'convergence' | 'organized'>('scattered');
//   const [heroText, setHeroText] = useState("All your notes, bookmarks, inspirations, articles and images in one single, private second brain, accessible anywhere, anytime.");
//   const handleSectionClick = (section: 'scattered' | 'convergence' | 'organized', text: string) => {
//     setActiveSection(section);
//     setHeroText(text);
//   };
//   return <div className="py-20 md:py-28 flex flex-col items-center text-center">
      
//       <AnimatedTransition show={showTitle} animation="slide-up" duration={600}>
//         {/* Title first */}
//         <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-blue-600 md:text-7xl">
//           Your Personal AI Engine
//         </h1>
        
//         {/* Interactive text second */}
//         <div className="relative mb-10">
//           <p 
//             className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light animate-fade-in px-4" 
//             key={heroText}
//           >
//             {heroText}
//           </p>
//           {/* Decorative elements */}
//           <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-400 rounded-full opacity-30" />
//           <div className="absolute -right-4 top-0 w-1 h-full bg-gradient-to-b from-purple-400 to-indigo-400 rounded-full opacity-30" />
//         </div>
        
//         {/* Diagram third */}
//         <div className="mb-8">
//           <DiagramComponent onSectionClick={handleSectionClick} activeSection={activeSection} />
//         </div>
        
//         {/* Call to action last */}
//         <div className="relative">
//           <Button 
//             size="lg" 
//             onClick={() => setIsModalOpen(true)} 
//             className="group relative rounded-full px-10 py-6 text-lg font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white border-0 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
//           >
//             {/* Button background glow */}
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            
//             <span className="relative z-10 flex items-center gap-3">
//               Join Waitlist
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
//             </span>
            
//             {/* Ripple effect */}
//             <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500" />
//           </Button>
          
//           {/* Supporting text */}
//           <p className="mt-4 text-sm text-gray-500 font-medium">
//             Join 10,000+ early adopters
//           </p>
          
//           {/* Decorative dots */}
//           <div className="flex justify-center mt-3 space-x-1">
//             <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
//             <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
//             <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
//           </div>
//         </div>

//         <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//       </AnimatedTransition>
//     </div>;
// };




import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { useState } from 'react';
import { WaitlistModal } from '../waitlist/WaitlistModal';
import DiagramComponent from './DiagramComponent';

interface HeroSectionProps {
  showTitle: boolean;
}

export const HeroSection = ({
  showTitle
}: HeroSectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<'scattered' | 'convergence' | 'organized'>('scattered');
  const [heroText, setHeroText] = useState("All your notes, bookmarks, inspirations, articles and images in one single, private second brain, accessible anywhere, anytime.");

  const handleSectionClick = (section: 'scattered' | 'convergence' | 'organized', text: string) => {
    setActiveSection(section);
    setHeroText(text);
  };

  return (
    <div className="relative py-20 md:py-28 flex flex-col items-center text-center overflow-hidden">
      {/* Dynamic Background - adapts to theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-indigo-50/60 to-purple-50/80 dark:from-slate-900/50 dark:via-blue-950/30 dark:to-purple-950/50" />
      
      {/* Animated Background Orbs - theme aware */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-indigo-400/10 to-pink-400/10 dark:from-indigo-500/20 dark:to-pink-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-to-br from-cyan-400/8 to-blue-400/8 dark:from-cyan-500/15 dark:to-blue-500/15 rounded-full blur-2xl animate-float" />
      
      {/* Floating particles - enhanced for dark mode */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-blue-400 dark:bg-blue-300 rounded-full animate-float opacity-40 dark:opacity-60" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400 dark:bg-purple-300 rounded-full animate-float opacity-30 dark:opacity-50" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-indigo-400 dark:bg-indigo-300 rounded-full animate-float opacity-50 dark:opacity-70" style={{ animationDelay: '2s' }} />
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-cyan-400 dark:bg-cyan-300 rounded-full animate-float opacity-40 dark:opacity-60" style={{ animationDelay: '0.8s' }} />
      </div>

      <AnimatedTransition show={showTitle} animation="slide-up" duration={600} className="relative z-10">
        {/* Enhanced Title with better dark mode support */}
        <div className="relative mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent leading-tight">
            Your Personal AI Engine
          </h1>
          {/* Refined glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10 dark:from-blue-400/20 dark:via-purple-400/20 dark:to-indigo-400/20 blur-2xl opacity-50 scale-110" />
        </div>
        
        {/* Enhanced Interactive Text with theme support */}
        <div className="relative mb-10">
          <p 
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in px-4" 
            key={heroText}
          >
            {heroText}
          </p>
          {/* Theme-aware decorative elements */}
          <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-400 dark:from-blue-300 dark:to-purple-300 rounded-full opacity-20 dark:opacity-40" />
          <div className="absolute -right-4 top-0 w-1 h-full bg-gradient-to-b from-purple-400 to-indigo-400 dark:from-purple-300 dark:to-indigo-300 rounded-full opacity-20 dark:opacity-40" />
        </div>
        
        {/* Enhanced Diagram Container with proper dark mode */}
        <div className="relative mb-12 px-4">
          <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/50 dark:border-slate-700/50 transition-colors duration-300">
            <DiagramComponent onSectionClick={handleSectionClick} activeSection={activeSection} />
            {/* Theme-aware inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-purple-100/30 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl pointer-events-none" />
          </div>
          {/* Animated decorative rings */}
          <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-blue-400/30 dark:border-blue-300/50 rounded-full animate-spin-slow" />
          <div className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-purple-400/30 dark:border-purple-300/50 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }} />
        </div>
        
        {/* Enhanced Call to Action with improved dark mode */}
        <div className="relative">
          <Button 
            size="lg" 
            onClick={() => setIsModalOpen(true)} 
            className="group relative rounded-full px-10 py-6 text-lg font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 dark:from-blue-500 dark:via-purple-500 dark:to-indigo-500 dark:hover:from-blue-600 dark:hover:via-purple-600 dark:hover:to-indigo-600 text-white border-0 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            {/* Enhanced button glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 opacity-0 group-hover:opacity-30 dark:group-hover:opacity-20 transition-opacity duration-300" />
            
            <span className="relative z-10 flex items-center gap-3">
              Join Waitlist
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            
            {/* Ripple effect */}
            <div className="absolute inset-0 rounded-full bg-white/10 dark:bg-white/5 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500" />
          </Button>
          
          {/* Supporting text with theme support */}
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 font-medium transition-colors duration-300">
            Join 10,000+ early adopters
          </p>
          
          {/* Enhanced decorative dots */}
          <div className="flex justify-center mt-3 space-x-1">
            <div className="w-2 h-2 bg-blue-400 dark:bg-blue-300 rounded-full animate-pulse opacity-60 dark:opacity-80" />
            <div className="w-2 h-2 bg-purple-400 dark:bg-purple-300 rounded-full animate-pulse opacity-60 dark:opacity-80" style={{ animationDelay: '0.3s' }} />
            <div className="w-2 h-2 bg-indigo-400 dark:bg-indigo-300 rounded-full animate-pulse opacity-60 dark:opacity-80" style={{ animationDelay: '0.6s' }} />
          </div>
        </div>

        <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </AnimatedTransition>
    </div>
  );
};
