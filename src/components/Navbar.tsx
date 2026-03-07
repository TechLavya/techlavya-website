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
          window.addEventListener('scroll', handleScroll);
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
               isScrolled ? "max-w-5xl mt-2" : "max-w-full mt-0"
          )}>
               {/* Main Bar Container */}
               <div className={cn(
                    "relative flex items-center justify-between px-6 py-3 transition-all duration-500",
                    "bg-[#0a0502]/40 backdrop-blur-xl border border-amber-900/30 shadow-2xl shadow-black/50",
                    isScrolled ? "rounded-2xl" : "rounded-none border-x-0 border-t-0 bg-transparent"
               )}>

                    {/* 1. BRANDING: The Logo with a Copper Underline */}
                    <div className="flex flex-col items-start group">
                         <Link href="/#home">
                              <Image
                                   src="/techlavya-2025-logo.png"
                                   alt="logo"
                                   width={130}
                                   height={40}
                                   className="brightness-125 saturate-150 transition-transform group-hover:scale-105"
                              />
                         </Link>
                         <div className="h-[1px] w-full bg-gradient-to-r from-amber-600/50 to-transparent mt-1" />
                    </div>

                    {/* 2. NAVIGATION: The Central Hub */}
                    <div className="hidden lg:flex items-center space-x-1">
                         {navItems.map((item, index) => (
                              <Link
                                   key={index}
                                   href={item.navigateTo}
                                   className="relative px-4 py-2 flex flex-col items-center group overflow-hidden"
                              >
                                   {/* The Hover "Energy" Trace */}
                                   <div className="absolute top-0 left-0 w-full h-[2px] bg-amber-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />

                                   <div className="flex items-center space-x-2">
                                        <span className="text-amber-600 group-hover:text-amber-400 group-hover:scale-110 transition-all duration-300">
                                             {item.icon}
                                        </span>
                                        <span className="text-[11px] font-Orbitron font-bold tracking-[0.2em] uppercase text-amber-50/60 group-hover:text-white transition-colors">
                                             {item.text}
                                        </span>
                                   </div>

                                   {/* Technical Code under the text */}
                                   <span className="text-[7px] font-mono text-amber-900/80 mt-0.5 group-hover:text-amber-500 transition-colors">
                                        SEC_0{index + 1}
                                   </span>
                              </Link>
                         ))}
                    </div>

                    {/* 3. SYSTEM STATUS: Right Side UI */}
                    <div className="hidden lg:flex items-center space-x-4">
                         
                         <div className="w-10 h-10 rounded-full border border-amber-500/30 flex items-center justify-center bg-amber-950/20 group cursor-pointer hover:border-amber-500 transition-all">
                              <Radio className="text-amber-500 animate-pulse group-hover:scale-110" size={18} />
                         </div>
                    </div>

                    {/* MOBILE TOGGLE */}
                    <div className="lg:hidden">
                         <Sheet>
                              <SheetTrigger className="p-2 text-amber-500 hover:bg-amber-950/30 rounded-lg transition-colors">
                                   <Menu size={28} />
                              </SheetTrigger>
                              <SheetContent side="right" className="bg-[#0a0502]/95 border-l border-amber-900/50 backdrop-blur-2xl">
                                   <div className="flex flex-col space-y-8 mt-12 px-6">
                                        {navItems.map((item, index) => (
                                             <Link key={index} href={item.navigateTo} className="flex items-center space-x-4 text-xl font-Orbitron text-amber-100/60 hover:text-amber-500">
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
               <div className="absolute top-2 right-4 text-[8px] font-mono text-amber-900/40 rotate-90 origin-right hidden lg:block">
                    TECHLAVYA_S_N_2026
               </div>
          </nav>
     );
};

export default Navbar;