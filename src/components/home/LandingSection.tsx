import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import LandingImage from '../LandingImage'
import CountdownTimer from '../CountdownTimer'
const SpinningText = dynamic(() => import('@/components/magicui/spinning-text'), {
  ssr: false
})

const LandingSection = () => {
  return (
    <div className="relative h-screen w-full landing-bg">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="h-full max-w-screen-xl mx-auto flex flex-col justify-center items-center px-4 pt-20 pb-4 relative z-10">
        <div className="relative flex justify-center items-center pt-14 pb-20 md:pb-15">
          <LandingImage />
          <Suspense fallback={null}>
            <SpinningText className="absolute text-white font-bold">
              TECHLAVYA • TECH FEST • RKMGEC • TECHLAVYA • TECH FEST • RKMGEC •
            </SpinningText>
          </Suspense>
        </div>

        <div>
          <h1 className="text-3xl min-[465px]:text-4xl md:text-5xl lg:text-6xl text-center font-bold font-Orbitron mb-3 text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-violet-500">
            #Tech Meets Culture
          </h1>
          <p className="text-center text-base min-[465px]:text-lg sm:text-xl md:text-2xl font-burnoAce text-white">
            Get ready to experience a world of <br />
            <span className="text-green-500">Creativity</span>, <span className="text-orange-500">Innovation</span>, and <span className="text-violet-500">Entertainment</span> ❤️‍🔥
          </p>
          <div className="flex flex-col items-center gap-4 mt-6">
            <CountdownTimer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingSection