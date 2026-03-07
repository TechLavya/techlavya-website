import EsportsEventSection from '@/components/home/EsportEventSection'
import FAQSection from '@/components/home/FAQSection'
import GalllerySection from '@/components/home/GalllerySection'
import LandingSection from '@/components/home/LandingSection'
import SponsorSection from '@/components/home/SponsorSection'
import TechlavyaEventSection from '@/components/home/TechlavyaEventSection'
import TimelineSection from '@/components/home/TimelineSection'
import TshirtSection from '@/components/home/TshirtSection'

const Home = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10">
        {/* <Galaxy
          starSpeed={0.2}
          density={4.5}
          hueShift={125}
          speed={1}
          glowIntensity={0.3}
          saturation={0.85}
          mouseRepulsion
          repulsionStrength={2}
          twinkleIntensity={0.35}
          rotationSpeed={0.05}
          transparent
        /> */}
      </div>
      <div className="absolute inset-0 -z-10 bg-black/60 pointer-events-none"></div>
      <div className="absolute inset-0 -z-10 bg-black/40 pointer-events-none"></div>
      <LandingSection />
      <TimelineSection />
      <TechlavyaEventSection />
      <EsportsEventSection />
      <TshirtSection />
      <GalllerySection />
      <FAQSection />
      <SponsorSection />
    </div>
  )
}

export default Home