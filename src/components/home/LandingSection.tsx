import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import LandingImage from '../LandingImage'
import CountdownTimer from '../CountdownTimer'

// Load SpinningText component dynamically with client-side rendering
const SpinningText = dynamic(() => import('@/components/magicui/spinning-text'), { 
  ssr: false 
})

const LandingSection = () => {
  return (
    <div className="relative h-screen w-full landing-bg">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="h-full max-w-screen-xl mx-auto flex flex-col justify-center items-center p-4 relative z-10">
        <div className="relative flex justify-center items-center pt-20 pb-16 md:pb-14 w-full">
          <LandingImage />
          
          {/* SpinningText container with fixed dimensions */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Suspense fallback={<div className="text-white">Loading...</div>}>
              <SpinningText 
                className="text-white font-bold text-sm md:text-base"
              >
                TECHLAVYA • TECH FEST • RKMGEC • TECHLAVYA • TECH FEST • RKMGEC •
              </SpinningText>
            </Suspense>
          </div>
        </div>
        
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-violet-500">
            #Tech Meets Culture
          </h1>
          <p className="text-center text-lg sm:text-xl md:text-2xl font-semibold text-white">
            Get ready to experience a world of <br />
            <span className="text-green-500">Creativity</span>, <span className="text-orange-500">Innovation</span>, and <span className="text-violet-500">Entertainment</span> ❤️‍🔥
          </p>
          <CountdownTimer />
        </div>
      </div>
    </div>
  )
}

export default LandingSection