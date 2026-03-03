import CountdownTimer from '../CountdownTimer';
const LandingSection = () => {
  return (
    <div className="relative h-screen w-full pt-32">
      {/* Keeping your existing background z-index logic */}
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-6">
        
        {/* TOP BADGE: Added for a "Space Agency" feel */}
        <div className="mb-4 animate-pulse">
          <span className="text-[10px] md:text-xs tracking-[0.5em] uppercase font-mono text-amber-600 border-b border-amber-900/50 pb-1">
            System Status: Ignition Ready
          </span>
        </div>

        <div className="text-center">
          {/* MAIN TITLE: Using a more aggressive brownish-gold gradient */}
          <h1 className="text-6xl md:text-9xl font-black font-Orbitron mb-2 tracking-tighter leading-none">
            <span className="block text-transparent" style={{ WebkitTextStroke: '1px #634226' }}>
              TECHLAVYA
            </span>
            <span className="block text-2xl md:text-5xl tracking-[0.3em] font-light text-amber-50/90 mt-2">
              IGNITE <span className="font-mono opacity-50">2026</span>
            </span>
          </h1>

          {/* TAGLINE: Structured like a technical readout */}
          <div className="mt-8 mb-12 flex flex-col items-center">
            <div className="h-[1px] w-12 bg-amber-700 mb-4"></div>
            <p className="text-sm md:text-lg font-mono tracking-[0.25em] text-amber-200/70 uppercase max-w-2xl">
              Where <span className="text-white font-bold">Innovation</span> 
              <span className="mx-3 text-amber-800">//</span> 
              Meets <span className="text-white font-bold">Imagination</span>
            </p>
            <div className="h-[1px] w-12 bg-amber-700 mt-4"></div>
          </div>
        </div>

        {/* Your Timer remains here */}
        <div className="transform scale-110 md:scale-125">
           <CountdownTimer />
        </div>

        {/* DECORATIVE CORNERS: Adds to the "HUD" / Spacecraft UI vibe */}
        <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-amber-900/30 hidden md:block" />
        <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-amber-900/30 hidden md:block" />
      </div>
    </div>
  );
};

export default LandingSection;