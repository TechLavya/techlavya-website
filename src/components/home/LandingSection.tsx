import CountdownTimer from '../CountdownTimer';
const LandingSection = () => {
  return (
    <div className="relative h-screen w-full pt-16 sm:pt-24 md:pt-32">
      {/* Keeping your existing background z-index logic */}

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 sm:px-6">

        {/* TOP BADGE: Added for a "Space Agency" feel */}
        <div className="mb-3 sm:mb-4 animate-pulse">
          <span className="text-[8px] sm:text-[10px] md:text-xs tracking-[0.3em] sm:tracking-[0.5em] uppercase font-mono text-amber-600 border-b border-amber-900/50 pb-1">
            System Status: Ignition Ready
          </span>
        </div>

        <div className="text-center">
          {/* MAIN TITLE: Using a more aggressive brownish-gold gradient */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black font-Orbitron mb-2 tracking-tighter leading-none">
            <span className="block text-amber-500">
              TECHLAVYA
            </span>
            <span className="block text-xl sm:text-2xl md:text-4xl lg:text-5xl tracking-[0.2em] sm:tracking-[0.3em] font-light text-amber-50/90 mt-1 sm:mt-2">
              IGNITE <span className="font-mono opacity-50">2026</span>
            </span>
          </h1>

          {/* TAGLINE: Structured like a technical readout */}
          <div className="mt-4 sm:mt-6 md:mt-8 mb-6 sm:mb-8 md:mb-12 flex flex-col items-center">
            <div className="h-[1px] w-8 sm:w-12 bg-amber-700 mb-2 sm:mb-3 md:mb-4"></div>
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-lg font-mono tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] text-amber-200/70 uppercase max-w-xs sm:max-w-md md:max-w-2xl px-4">
              Where <span className="text-white font-bold">Innovation</span>
              <span className="mx-1 sm:mx-2 md:mx-3 text-amber-800">{"//"}</span>
              Meets <span className="text-white font-bold">Imagination</span>
            </p>
            <div className="h-[1px] w-8 sm:w-12 bg-amber-700 mt-2 sm:mt-3 md:mt-4"></div>
          </div>
        </div>

        {/* Your Timer remains here */}
        <div className="transform scale-90 sm:scale-100 md:scale-110 lg:scale-125">
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