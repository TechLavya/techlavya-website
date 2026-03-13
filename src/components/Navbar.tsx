'use client'

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Calendar, Home, Images, Landmark, Menu, Users, Radio, Compass, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";

const Navbar = () => {
     const [isScrolled, setIsScrolled] = useState(false);

     useEffect(() => {
          const handleScroll = () => setIsScrolled(window.scrollY > 20);
          window.addEventListener('scroll', handleScroll, { passive: true });
          return () => window.removeEventListener('scroll', handleScroll);
     }, []);

     const navItems = [
          { icon: <Home size={18} />, text: "Base", navigateTo: "/#home" },
          { icon: <Compass size={18} />, text: "Events", navigateTo: "/#events" },
          { icon: <Calendar size={18} />, text: "Timeline", navigateTo: "/#schedule" },
          { icon: <Images size={18} />, text: "Gallery", navigateTo: "/#gallery" },
          { icon: <Landmark size={18} />, text: "Sponsors", navigateTo: "/#sponsors" },
          { icon: <Users size={18} />, text: "Crew", navigateTo: "/teams" },
          { icon: <Mail size={18} />, text: "Contact", navigateTo: "/contact" },
     ];

     return (
          <nav className={cn(
               "fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full transition-all duration-500 ease-in-out px-4 py-6",
               isScrolled ? "max-w-5xl mt-2" : "max-w-full mt-0 pt-8"
          )}>
               {/* Main Bar Container */}
               <div className={cn(
                    "relative flex items-center justify-between px-6 py-3 transition-all duration-500",
                    "bg-secondary-bg/40 backdrop-blur-xl border border-accent/20 shadow-[0_10px_40px_rgba(0,0,0,0.5)]",
                    isScrolled ? "rounded-2xl" : "rounded-none border-x-0 border-t-0 bg-transparent shadow-none"
               )}>

                    {/* 1. BRANDING: The Logo with a Copper Underline */}
                    <div className="flex flex-col items-start group">
                         <Link href="/#home" className="hover-target">
                              <Image
                                   src="/techlavya-2025-logo.png"
                                   alt="logo"
                                   width={140}
                                   height={45}
                                   className="brightness-125 transition-transform group-hover:scale-105"
                                   priority
                              />
                         </Link>
                         <div className="h-[1px] w-full bg-gradient-to-r from-primary to-transparent mt-1 opacity-50" />
                    </div>

                    {/* 2. NAVIGATION: The Central Hub */}
                    <div className="hidden lg:flex items-center space-x-1">
                         {navItems.map((item, index) => (
                              <Link
                                   key={index}
                                   href={item.navigateTo}
                                   className="relative px-4 py-2 flex flex-col items-center group overflow-hidden hover-target"
                              >
                                   {/* The Hover "Energy" Trace */}
                                   <div className="absolute top-0 left-0 w-full h-[2px] bg-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />

                                   <div className="flex items-center space-x-2">
                                        <span className="text-primary group-hover:text-highlight group-hover:scale-110 transition-all duration-300">
                                             {item.icon}
                                        </span>
                                        <span className="text-xs font-orbitron font-medium tracking-[0.2em] uppercase text-muted-foreground group-hover:text-foreground transition-colors">
                                             {item.text}
                                        </span>
                                   </div>

                                   {/* Technical Code under the text */}
                                   <span className="text-[8px] font-kodeMono text-accent/40 mt-1 group-hover:text-primary transition-colors tracking-widest">
                                        SEC_0{index + 1}
                                   </span>
                              </Link>
                         ))}
                    </div>

                    {/* 3. SYSTEM STATUS: Right Side UI */}
                    <div className="hidden lg:flex items-center space-x-4">
                         <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center bg-secondary-bg/50 group cursor-pointer hover:border-primary transition-all hover-target shadow-[0_0_15px_rgba(184,92,56,0.1)] hover:shadow-[0_0_20px_rgba(184,92,56,0.4)]">
                              <Radio className="text-primary animate-pulse group-hover:scale-110 group-hover:text-highlight transition-colors" size={18} />
                         </div>
                    </div>

                    {/* MOBILE TOGGLE */}
                    <div className="lg:hidden">
                         <Sheet>
                              <SheetTrigger className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors">
                                   <Menu size={28} />
                              </SheetTrigger>
                              <SheetContent side="right" className="bg-background/95 border-l border-accent/20 backdrop-blur-2xl">
                                   <div className="flex flex-col space-y-8 mt-12 px-6">
                                        {navItems.map((item, index) => (
                                             <Link key={index} href={item.navigateTo} className="flex items-center space-x-4 text-xl font-orbitron text-muted-foreground hover:text-primary transition-colors">
                                                  {item.icon}
                                                  <span className="tracking-widest uppercase">{item.text}</span>
                                             </Link>
                                        ))}
                                   </div>
                              </SheetContent>
                         </Sheet>
                    </div>
               </div>

               {/* DECORATIVE CORNER: Aesthetic flair */}
               <div className="absolute top-2 right-4 text-[9px] font-kodeMono text-accent/30 rotate-90 origin-right hidden lg:block tracking-[0.2em]">
                    TECHLAVYA_S_N_202X
               </div>
          </nav>
     );
};

export default Navbar;