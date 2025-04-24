import Hero from "../components/ui/Employer/Hero"
import WeOffer from "../components/ui/Employer/WeOffer"
import Services from "../components/ui/Home/Services"
import Testimonials from "../components/ui/Home/Testimonials"

const Employer = () => {
  return (
    <div>
      <Hero />
      <WeOffer />
      <Services />
      <Testimonials style="bg-white text-black" />
    </div>
  )
}

export default Employer
