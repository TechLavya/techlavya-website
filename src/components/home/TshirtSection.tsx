'use client'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Zap, Hexagon, ArrowRight } from 'lucide-react'
import Title from '../Title'

const TshirtSection = () => {
    return (
        <section className="relative py-24 bg-[#0d0a08] overflow-hidden">
            {/* Background Tech Texture: Dotted Grid */}
            <div className="absolute inset-0 opacity-[0.15] pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(#8b5e34 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

            {/* Glowing Bronze Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#5c3d2e]/20 rounded-full blur-[160px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <Title title="Official Gear" />

                <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* LEFT: Product Display with Floating UI */}
                    <div className="lg:col-span-7 relative group">
                        {/* Decorative HUD Elements */}
                        <div className="absolute -top-10 -left-10 w-32 h-32 border-l border-t border-amber-600/30 rounded-tl-3xl" />
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 border-r border-b border-amber-600/30 rounded-br-3xl" />
                        
                        <div className="relative z-10 bg-gradient-to-b from-[#1a1614] to-transparent p-4 rounded-[2.5rem] border border-white/5 backdrop-blur-sm overflow-hidden">
                            {/* Inner Scanning Line Animation */}
                            <div className="absolute inset-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent top-0 animate-[scan_4s_linear_infinite]" />
                            
                            <Image
                                src="/tshirt.jpeg"
                                alt="Ignite 2026 T-Shirt"
                                width={700}
                                height={700}
                                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        {/* Floating Tech Badges */}
                        <div className="absolute top-10 right-0 bg-amber-900/80 backdrop-blur-xl border border-amber-500/30 p-3 rounded-xl shadow-2xl animate-bounce-slow">
                            <Hexagon className="w-6 h-6 text-amber-400 fill-amber-400/20" />
                        </div>
                    </div>

                    {/* RIGHT: Sophisticated Content */}
                    <div className="lg:col-span-5 space-y-10">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-amber-600 font-mono text-sm tracking-[0.3em] uppercase">
                                <span className="w-8 h-[1px] bg-amber-600" />
                                Collection 2026
                            </div>
                            <h3 className="text-5xl md:text-6xl font-extralight text-stone-100 leading-none">
                                TechLavya <br />
                                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-200">
                                    IGNITE
                                </span>
                            </h3>
                            <p className="text-stone-400 text-lg font-light leading-relaxed max-w-sm">
                                A fusion of premium fabric and futuristic aesthetics. Engineered for the pioneers of the Ignite fest.
                            </p>
                        </div>

                        {/* Specs Grid - Thin Borders */}
                        <div className="grid grid-cols-2 gap-px bg-stone-800/50 border border-stone-800 rounded-2xl overflow-hidden">
                            {[
                                { label: 'Fabric', val: 'Heavy Cotton' },
                                { label: 'Fit', val: 'Boxy / Oversized' },
                                { label: 'Print', val: 'High-Density HD' },
                                { label: 'Status', val: 'Limited Drop' },
                            ].map((item, i) => (
                                <div key={i} className="bg-[#0d0a08] p-5">
                                    <p className="text-[10px] uppercase tracking-widest text-stone-500 mb-1">{item.label}</p>
                                    <p className="text-stone-200 font-medium">{item.val}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-8">
                            <Button className="h-14 px-10 rounded-full bg-stone-100 hover:bg-amber-500 text-black font-bold transition-all duration-300 group">
                                Buy Now 
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            
                            <div className="text-right">
                                <p className="text-xs text-stone-500 line-through">M.R.P. ₹999</p>
                                <p className="text-3xl font-light text-white italic">₹599.00</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Global Styles for Custom Animation */}
            <style jsx global>{`
                @keyframes scan {
                    0% { top: 0%; opacity: 0; }
                    50% { opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                }
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-15px); }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 4s ease-in-out infinite;
                }
            `}</style>
        </section>
    )
}

export default TshirtSection