import EsportsEventSection from '@/components/home/EsportEventSection'
import GalllerySection from '@/components/home/GalllerySection'
import LandingSection from '@/components/home/LandingSection'
import SponsorSection from '@/components/home/SponsorSection'
import TechlavyaEventSection from '@/components/home/TechlavyaEventSection'
import TimelineSection from '@/components/home/TimelineSection'

const Home = () => {
  return (
    <>
      <LandingSection />
      <TimelineSection />
      <TechlavyaEventSection />
      <EsportsEventSection />
      <GalllerySection />
      <SponsorSection />
    </>
  )
}

export default Home