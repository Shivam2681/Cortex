// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Brain, LogIn, Search, Upload, User, Settings, LogOut, Moon, Sun, Table, Info, HelpCircle, Code } from 'lucide-react';
// import { useRippleEffect } from '@/lib/animations';
// import { cn } from '@/lib/utils';
// import { useAuth } from '@/contexts/AuthContext';
// import { useTheme } from '@/contexts/ThemeContext';
// import AuthModal from '@/components/AuthModal';
// import { Button } from '@/components/ui/button';
// import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu";
// import { TooltipProvider } from '@/components/ui/tooltip';

// interface NavItemProps {
//   to: string;
//   icon: React.ReactNode;
//   label: string;
//   active: boolean;
//   onClick: () => void;
//   hasSubmenu?: boolean;
//   children?: React.ReactNode;
// }

// const NavItem = ({ to, icon, label, active, onClick, hasSubmenu, children }: NavItemProps) => {
//   const handleRipple = useRippleEffect();
  
//   if (hasSubmenu) {
//     return (
//       <NavigationMenu>
//         <NavigationMenuList>
//           <NavigationMenuItem>
//             <NavigationMenuTrigger 
//               className={cn(
//                 "relative flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300",
//                 "hover:bg-primary/10 hover:text-primary", 
//                 active ? "bg-primary/10 text-primary" : "text-foreground/80"
//               )}
//             >
//               <span className={cn(
//                 "transition-all duration-300",
//                 active ? "text-primary" : "text-foreground/60"
//               )}>
//                 {icon}
//               </span>
//               <span className="font-medium">{label}</span>
//             </NavigationMenuTrigger>
//             <NavigationMenuContent>
//               <div className="grid w-[200px] gap-1 p-2">
//                 {children}
//               </div>
//             </NavigationMenuContent>
//           </NavigationMenuItem>
//         </NavigationMenuList>
//       </NavigationMenu>
//     );
//   }
  
//   return (
//     <Tooltip>
//       <TooltipTrigger asChild>
//         <Link 
//           to={to} 
//           className={cn(
//             "relative flex items-center justify-center px-4 py-3 rounded-lg transition-all duration-300",
//             "hover:bg-primary/10 hover:text-primary",
//             "overflow-hidden",
//             active ? "bg-primary/10 text-primary" : "text-foreground/80"
//           )}
//           onClick={(e) => {
//             handleRipple(e);
//             onClick();
//           }}
//         >
//           <span className={cn(
//             "transition-all duration-300",
//             active ? "text-primary" : "text-foreground/60"
//           )}>
//             {icon}
//           </span>
//           {active && (
//             <span className="ml-2 font-medium">{label}</span>
//           )}
//         </Link>
//       </TooltipTrigger>
//       <TooltipContent>
//         <p>{label}</p>
//       </TooltipContent>
//     </Tooltip>
//   );
// };

// const SubMenuItem = ({ to, icon, label, active, onClick }: NavItemProps) => {
//   return (
//     <Link 
//       to={to} 
//       className={cn(
//         "flex items-center gap-2 p-2 rounded-md hover:bg-primary/10 hover:text-primary transition-all duration-300",
//         active ? "bg-primary/10 text-primary" : ""
//       )}
//       onClick={onClick}
//     >
//       <span className={cn(
//         "transition-all duration-300",
//         active ? "text-primary" : "text-foreground/60"
//       )}>
//         {icon}
//       </span>
//       <span>{label}</span>
//     </Link>
//   );
// };

// export const Navbar = () => {
//   const [active, setActive] = useState('what');
//   const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
//   const { isAuthenticated, logout } = useAuth();
//   const { theme, toggleTheme } = useTheme();
  
//   const handleOpenAuthModal = () => {
//     setIsAuthModalOpen(true);
//   };

//   const handleCloseAuthModal = () => {
//     setIsAuthModalOpen(false);
//   };

//   const handleNavItemClick = (id: string) => {
//     setActive(id);
//   };

//   const cortexSubmenu = [
//     { to: '/', icon: <Info size={18} />, label: 'What', id: 'what' },
//     { to: '/why', icon: <HelpCircle size={18} />, label: 'Why', id: 'why' },
//     { to: '/how', icon: <Code size={18} />, label: 'How', id: 'how' },
//   ];
  
//   const authNavItems = [
//     { to: '/manage', icon: <Table size={20} />, label: 'Manage', id: 'manage' },
//     { to: '/search', icon: <Search size={20} />, label: 'Search', id: 'search' },
//     { to: '/import', icon: <Upload size={20} />, label: 'Import', id: 'import' },
//     { to: '/profile', icon: <User size={20} />, label: 'Profile', id: 'profile' },
//     { to: '/settings', icon: <Settings size={20} />, label: 'Settings', id: 'settings' },
//   ];

//   const navItems = isAuthenticated ? authNavItems : [];

//   return (
//     <>
//       <TooltipProvider>
//         <header className="glass-panel fixed top-6 left-1/2 transform -translate-x-1/2 z-40 rounded-lg px-1 py-1">
//           <nav className="flex items-center">
//             {/* Cortex with submenu */}
//             <NavItem
//               to="#"
//               icon={<Brain size={20} />}
//               label="Cortex"
//               active={['what', 'why', 'how'].includes(active)}
//               onClick={() => {}}
//               hasSubmenu={true}
//             >
//               {cortexSubmenu.map((item) => (
//                 <SubMenuItem
//                   key={item.id}
//                   to={item.to}
//                   icon={item.icon}
//                   label={item.label}
//                   active={active === item.id}
//                   onClick={() => handleNavItemClick(item.id)}
//                 />
//               ))}
//             </NavItem>
            
//             {/* Other nav items */}
//             {navItems.map((item) => (
//               <NavItem
//                 key={item.id}
//                 to={item.to}
//                 icon={item.icon}
//                 label={item.label}
//                 active={active === item.id}
//                 onClick={() => handleNavItemClick(item.id)}
//               />
//             ))}
            
//             <Tooltip>
//               <TooltipTrigger asChild>
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   className="rounded-lg ml-1"
//                   onClick={toggleTheme}
//                 >
//                   {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
//                 </Button>
//               </TooltipTrigger>
//               <TooltipContent>
//                 <p>Toggle {theme === 'dark' ? 'light' : 'dark'} mode</p>
//               </TooltipContent>
//             </Tooltip>
            
//             {isAuthenticated ? (
//               <Tooltip>
//                 <TooltipTrigger asChild>
//                   <Button
//                     variant="ghost"
//                     className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground"
//                     onClick={logout}
//                   >
//                     <LogOut size={20} />
//                     {active === 'logout' && <span className="font-medium">Logout</span>}
//                   </Button>
//                 </TooltipTrigger>
//                 <TooltipContent>
//                   <p>Logout</p>
//                 </TooltipContent>
//               </Tooltip>
//             ) : (
//               <Tooltip>
//                 <TooltipTrigger asChild>
//                   <Button
//                     variant="ghost"
//                     className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground"
//                     onClick={handleOpenAuthModal}
//                   >
//                     <LogIn size={20} />
//                     {active === 'login' && <span className="font-medium">Login</span>}
//                   </Button>
//                 </TooltipTrigger>
//                 <TooltipContent>
//                   <p>Login</p>
//                 </TooltipContent>
//               </Tooltip>
//             )}
//           </nav>
//         </header>
//       </TooltipProvider>
      
//       <AuthModal isOpen={isAuthModalOpen} onClose={handleCloseAuthModal} />
//     </>
//   );
// };

// export default Navbar;



import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, LogIn, Search, Upload, User, Settings, LogOut, Moon, Sun, Table, Info, HelpCircle, Code, Menu, X } from 'lucide-react';
import { useRippleEffect } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';
import { useToast } from '@/hooks/use-toast';
import AuthModal from '@/components/AuthModal';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { TooltipProvider } from '@/components/ui/tooltip';

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
  hasSubmenu?: boolean;
  children?: React.ReactNode;
  isMobile?: boolean;
}

const NavItem = ({ to, icon, label, active, onClick, hasSubmenu, children, isMobile }: NavItemProps) => {
  const handleRipple = useRippleEffect();
  
  if (hasSubmenu) {
    return (
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger 
              className={cn(
                "relative flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300",
                "hover:bg-primary/10 hover:text-primary", 
                active ? "bg-primary/10 text-primary" : "text-foreground/80",
                isMobile && "w-full justify-start"
              )}
            >
              <span className={cn(
                "transition-all duration-300",
                active ? "text-primary" : "text-foreground/60"
              )}>
                {icon}
              </span>
              <span className="font-medium">{label}</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className={cn(
                "grid gap-1 p-2",
                isMobile ? "w-full" : "w-[200px]"
              )}>
                {children}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
  }
  
  if (isMobile) {
    return (
      <Link 
        to={to} 
        className={cn(
          "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300",
          "hover:bg-primary/10 hover:text-primary w-full",
          active ? "bg-primary/10 text-primary" : "text-foreground/80"
        )}
        onClick={(e) => {
          handleRipple(e);
          onClick();
        }}
      >
        <span className={cn(
          "transition-all duration-300",
          active ? "text-primary" : "text-foreground/60"
        )}>
          {icon}
        </span>
        <span className="font-medium">{label}</span>
      </Link>
    );
  }
  
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link 
          to={to} 
          className={cn(
            "relative flex items-center justify-center px-4 py-3 rounded-lg transition-all duration-300",
            "hover:bg-primary/10 hover:text-primary",
            "overflow-hidden",
            active ? "bg-primary/10 text-primary" : "text-foreground/80"
          )}
          onClick={(e) => {
            handleRipple(e);
            onClick();
          }}
        >
          <span className={cn(
            "transition-all duration-300",
            active ? "text-primary" : "text-foreground/60"
          )}>
            {icon}
          </span>
          {active && (
            <span className="ml-2 font-medium hidden lg:inline">{label}</span>
          )}
        </Link>
      </TooltipTrigger>
      <TooltipContent>
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  );
};

const SubMenuItem = ({ to, icon, label, active, onClick, isMobile }: NavItemProps) => {
  return (
    <Link 
      to={to} 
      className={cn(
        "flex items-center gap-2 p-2 rounded-md hover:bg-primary/10 hover:text-primary transition-all duration-300",
        active ? "bg-primary/10 text-primary" : "",
        isMobile && "w-full"
      )}
      onClick={onClick}
    >
      <span className={cn(
        "transition-all duration-300",
        active ? "text-primary" : "text-foreground/60"
      )}>
        {icon}
      </span>
      <span>{label}</span>
    </Link>
  );
};

export const Navbar = () => {
  const [active, setActive] = useState('what');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated, login, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { toast } = useToast();
  
  const handleOpenAuthModal = () => {
    setIsAuthModalOpen(true);
  };

  const handleCloseAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const handleLogin = () => {
    login();
    toast({
      title: "Success!",
      description: "User logged in successfully",
    });
  };

  const handleNavItemClick = (id: string) => {
    setActive(id);
    setIsMobileMenuOpen(false); // Close mobile menu when item is clicked
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const cortexSubmenu = [
    { to: '/', icon: <Info size={18} />, label: 'What', id: 'what' },
    { to: '/why', icon: <HelpCircle size={18} />, label: 'Why', id: 'why' },
    { to: '/how', icon: <Code size={18} />, label: 'How', id: 'how' },
  ];
  
  const authNavItems = [
    { to: '/manage', icon: <Table size={20} />, label: 'Manage', id: 'manage' },
    { to: '/search', icon: <Search size={20} />, label: 'Search', id: 'search' },
    { to: '/import', icon: <Upload size={20} />, label: 'Import', id: 'import' },
    { to: '/profile', icon: <User size={20} />, label: 'Profile', id: 'profile' },
    { to: '/settings', icon: <Settings size={20} />, label: 'Settings', id: 'settings' },
  ];

  const navItems = isAuthenticated ? authNavItems : [];

  return (
    <>
      <TooltipProvider>
        <header className="glass-panel fixed top-6 left-1/2 transform -translate-x-1/2 z-40 rounded-lg px-1 py-1 max-w-[95vw]">
          <nav className="flex items-center">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              {/* Cortex with submenu */}
              <NavItem
                to="#"
                icon={<img src="logo.jpg" alt="" width={36} height={36} />}
                label="Cortex"
                active={['what', 'why', 'how'].includes(active)}
                onClick={() => {}}
                hasSubmenu={true}
              >
                {cortexSubmenu.map((item) => (
                  <SubMenuItem
                    key={item.id}
                    to={item.to}
                    icon={item.icon}
                    label={item.label}
                    active={active === item.id}
                    onClick={() => handleNavItemClick(item.id)}
                  />
                ))}
              </NavItem>
              
              {/* Other nav items */}
              {navItems.map((item) => (
                <NavItem
                  key={item.id}
                  to={item.to}
                  icon={item.icon}
                  label={item.label}
                  active={active === item.id}
                  onClick={() => handleNavItemClick(item.id)}
                />
              ))}
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-lg ml-1"
                    onClick={toggleTheme}
                  >
                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Toggle {theme === 'dark' ? 'light' : 'dark'} mode</p>
                </TooltipContent>
              </Tooltip>
              
              {isAuthenticated ? (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground"
                      onClick={logout}
                    >
                      <LogOut size={20} />
                      <span className="hidden lg:inline font-medium">Logout</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Logout</p>
                  </TooltipContent>
                </Tooltip>
              ) : (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground"
                      onClick={handleOpenAuthModal}
                    >
                      <LogIn size={20} />
                      <span className="hidden lg:inline font-medium">Login</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Login</p>
                  </TooltipContent>
                </Tooltip>
              )}
            </div>

            {/* Mobile Navigation */}
            <div className="flex md:hidden items-center w-full justify-between">
              {/* Cortex Brand */}
              <Link to="/" className="flex items-center border py-2 rounded-md bg-muted/80 gap-2 px-4">
                {/* <Brain size={20} className="text-primary" /> */}
                <img src="logo.jpg" alt="" width={28} height={28} />
                <span className="font-bold text-sm">Cortex</span>
              </Link>
              {/* <NavItem
                to="#"
                icon={<Brain size={20} />}
                label="Cortex"
                active={['what', 'why', 'how'].includes(active)}
                onClick={() => {}}
                hasSubmenu={true}
              >
                {cortexSubmenu.map((item) => (
                  <SubMenuItem
                    key={item.id}
                    to={item.to}
                    icon={item.icon}
                    label={item.label}
                    active={active === item.id}
                    onClick={() => handleNavItemClick(item.id)}
                  />
                ))}
              </NavItem> */}

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
                className="rounded-lg"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>
          </nav>
        </header>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
            <div className="fixed top-24 left-1/2 transform -translate-x-1/2 w-[90vw] max-w-sm glass-panel rounded-lg p-4">
              <div className="flex flex-col gap-2">
                {/* Cortex submenu items */}
                <div className="border-b border-border/50 pb-2 mb-2">
                  <p className="text-xs font-medium text-muted-foreground mb-2 px-2">CORTEX</p>
                  {cortexSubmenu.map((item) => (
                    <NavItem
                      key={item.id}
                      to={item.to}
                      icon={item.icon}
                      label={item.label}
                      active={active === item.id}
                      onClick={() => handleNavItemClick(item.id)}
                      isMobile={true}
                    />
                  ))}
                </div>
                
                {/* Auth nav items */}
                {navItems.length > 0 && (
                  <div className="border-b border-border/50 pb-2 mb-2">
                    <p className="text-xs font-medium text-muted-foreground mb-2 px-2">NAVIGATION</p>
                    {navItems.map((item) => (
                      <NavItem
                        key={item.id}
                        to={item.to}
                        icon={item.icon}
                        label={item.label}
                        active={active === item.id}
                        onClick={() => handleNavItemClick(item.id)}
                        isMobile={true}
                      />
                    ))}
                  </div>
                )}
                
                {/* Actions */}
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-2 px-2">ACTIONS</p>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/10 w-full justify-start"
                    onClick={() => {
                      toggleTheme();
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    <span>Toggle {theme === 'dark' ? 'light' : 'dark'} mode</span>
                  </Button>
                  
                  {isAuthenticated ? (
                    <a href="/">
                    <Button
                      variant="ghost"
                      className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/10 w-full justify-start text-red-600 hover:text-red-700"
                      onClick={() => {
                        logout();
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      <LogOut size={20} />
                      <span>Logout</span>
                    </Button>
                    </a>
                  ) : (
                    <Button
                      variant="ghost"
                      className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/10 w-full justify-start"
                      onClick={() => {
                        handleOpenAuthModal();
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      <LogIn size={20} />
                      <span>Login</span>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </TooltipProvider>
      
      <AuthModal isOpen={isAuthModalOpen} onClose={handleCloseAuthModal} />
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={handleCloseAuthModal}
        onLogin={handleLogin}
      />
    </>
  );
};

export default Navbar;
