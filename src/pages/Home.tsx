import ContactSection from "../components/ui/Home/ContactSection"
import Hero from "../components/ui/Home/Hero"
import Industries from "../components/ui/Home/Industries"
import JobListings from "../components/ui/Home/JobListings"
import OurMission from "../components/ui/Home/OurMission"
import Services from "../components/ui/Home/Services"
import Testimonials from "../components/ui/Home/Testimonials"
import WhyChooseUs from "../components/ui/Home/WhyChooseUs"

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <OurMission />
      <Services />
      <Industries />
      <WhyChooseUs />
      <Testimonials />
      <JobListings />
      <ContactSection />
    </div>
  )
}

export default Home
