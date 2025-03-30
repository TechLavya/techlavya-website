'use client'

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Calendar, Home, Images, Landmark, Menu, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import EventDropdown from "./EventDropdown";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
const MobileMenubar = dynamic(() => import('./MobileMenubar'), { ssr: false })

const Navbar = () => {
     const navItems = [
          { icon: <Home size={18} />, text: "Home", navigateTo: "/#home" },
          { icon: <Calendar size={18} />, text: "Schedule", navigateTo: "/#schedule" },
          { component: <EventDropdown /> },
          { icon: <Images size={18} />, text: "Gallery", navigateTo: "/#gallery" },
          { icon: <Landmark size={18} />, text: "Sponsors", navigateTo: "/#sponsors" },
          { icon: <Users size={18} />, text: "Teams", navigateTo: "/teams" },
     ];

     const [isScrolled, setIsScrolled] = useState(false);

     useEffect(() => {
          const handleScroll = () => {
               setIsScrolled(window.scrollY > 20);
          };

          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
     }, []);

     return (
          <nav className={cn("fixed rounded-xl left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out w-full bg-transparent py-4 top-0", isScrolled && 'py-0 lg:py-2')}>
               <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-500 ease-out", isScrolled &&'backdrop-blur-smbg-stone-700/10 shadow-2xl shadow-black/80 backdrop-blur-md py-2  lg:rounded-2xl')}>
                    <Image
                         src="/techlavya-2025-logo.png"
                         alt="logo"
                         width={200}
                         height={80}
                    />

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center justify-center flex-grow">
                         <div className={cn("flex items-center px-2 py-1 space-x-2 ", !isScrolled && 'bg-stone-500/10 backdrop-blur-sm rounded-2xl')}>
                              {navItems.map((item, index) =>
                                   item.component ? (
                                        <React.Fragment key={index}>{item.component}</React.Fragment>
                                   ) : (
                                        <NavItem key={index} {...item} />
                                   )
                              )}
                         </div>
                    </div>

                    {/* Mobile Menu */}
                    <div className="lg:hidden">
                         <Sheet>
                              <SheetTrigger>
                                   <Menu size={28} className="text-gray-300" />
                              </SheetTrigger>
                              <SheetContent className="max-w-[60%] bg-black/60 border-none">
                                   <MobileMenubar />
                              </SheetContent>
                         </Sheet>
                    </div>
               </div>
          </nav>
     );
};

type NavItemProps = {
     icon: React.ReactNode;
     text: string;
     navigateTo: string;
};

const NavItem: React.FC<NavItemProps> = ({ icon, text, navigateTo }) => (
     <Link href={navigateTo} className="flex items-center space-x-2 px-4 py-2 rounded-xl text-base font-medium font-kodeMono transition-all duration-500 ease-out group hover:bg-stone-500/20 text-gray-300 hover:text-white">
          <span className="transition-transform duration-300 ease-out group-hover:scale-105">{icon}</span>
          <span className="transition-transform duration-300 ease-out group-hover:translate-x-1">{text}</span>
     </Link>
);

export default Navbar;
