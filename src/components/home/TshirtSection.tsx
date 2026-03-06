"use client";

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Zap, ShieldCheck, Box, ChevronRight } from 'lucide-react'

const TshirtSection = () => {
    return (
        <section className="relative py-24 bg-[#0a0807] overflow-hidden font-sans">
            {/* Animated Circuit Background */}
            <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <path d="M0 50 H30 L40 40 H60 L70 50 H100" fill="none" stroke="#8b5e34" strokeWidth="0.5" />
                    <circle cx="40" cy="40" r="1.5" fill="#8b5e34" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#circuit)" />
            </svg>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-0 rounded-[3rem] border border-stone-800/50 overflow-hidden bg-stone-950/20 backdrop-blur-xl">

                    {/* LEFT: The "Spec" Sidebar (Vertical Info) */}
                    <div className="lg:w-1/4 bg-stone-900/30 border-r border-stone-800/50 p-8 flex flex-col justify-between">
                        <div className="space-y-8">
                            <div className="h-12 w-12 rounded-xl bg-amber-900/20 border border-amber-600/30 flex items-center justify-center">
                                <Box className="text-amber-500 w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-amber-600 font-mono text-xs uppercase tracking-widest mb-2">Item Class</h4>
                                <p className="text-white font-bold text-lg">Legendary Gear</p>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-stone-400 text-sm">
                                    <ShieldCheck className="w-4 h-4 text-amber-600" /> Anti-Fade Print
                                </div>
                                <div className="flex items-center gap-3 text-stone-400 text-sm">
                                    <Zap className="w-4 h-4 text-amber-600" /> Ignite Edition
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <span className="text-4xl font-black text-stone-800 select-none">#026</span>
                        </div>
                    </div>

                    {/* CENTER: The Visual Hero */}
                    <div className="lg:w-1/2 relative group p-12 flex items-center justify-center bg-gradient-to-b from-stone-900/10 to-transparent">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        <div className="relative">
                            {/* Floating Geometric Ornaments */}
                            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-amber-600 animate-pulse" />
                            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-amber-600 animate-pulse" />

                            <Image
                                src="/tshirt.jpeg"
                                alt="Ignite 2026 T-Shirt"
                                width={500}
                                height={500}
                                className="relative z-10 drop-shadow-[0_0_30px_rgba(139,94,52,0.2)] group-hover:drop-shadow-[0_0_50px_rgba(139,94,52,0.4)] transition-all duration-500"
                            />
                        </div>
                    </div>

                    {/* RIGHT: Action & Pricing */}
                    <div className="lg:w-1/4 p-12 bg-stone-900/30 border-l border-stone-800/50 flex flex-col justify-center">
                        <h2 className="text-stone-500 font-mono text-sm tracking-tighter mb-1">TECHLAVYA / IGNITE</h2>
                        <h3 className="text-4xl font-light text-white mb-6">The <span className="font-bold italic text-amber-500">Core</span> Shell</h3>

                        <p className="text-stone-400 text-sm leading-relaxed mb-8">
                            Custom-engineered fit for the 2026 Techfest. Features a breathable mesh-weave and copper-infused aesthetics.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-baseline gap-2">
                                <span className="text-3xl font-bold text-white">₹649</span>
                                <span className="text-stone-600 line-through text-sm">₹1,200</span>
                            </div>

                            <Button className="w-full h-14 bg-amber-600 hover:bg-amber-500 text-black font-black uppercase tracking-tighter rounded-none clip-path-polygon transition-all flex items-center justify-center group">
                                Initialize Purchase
                                <ChevronRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>

                </div>
            </div>

            <style jsx>{`
                .clip-path-polygon {
                    clip-path: polygon(0 0, 90% 0, 100% 30%, 100% 100%, 10% 100%, 0 70%);
                }
            `}</style>
        </section>
    )
}

export default TshirtSection