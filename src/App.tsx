import { useState } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import QuoteModal from './components/common/QuoteModal'
import Hero from './components/sections/Hero'
import AboutCompany from './components/sections/AboutCompany'
import WhyChooseUs from './components/sections/WhyChooseUs'
import OurServices from './components/sections/OurServices'
import FeaturedProjects from './components/sections/FeaturedProjects'
import ConstructionProcess from './components/sections/ConstructionProcess'
import CompanyStats from './components/sections/CompanyStats'
import Testimonials from './components/sections/Testimonials'
import CallToAction from './components/sections/CallToAction'
import ContactSection from './components/sections/ContactSection'

function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const openQuoteModal = () => setIsQuoteModalOpen(true)
  const closeQuoteModal = () => setIsQuoteModalOpen(false)

  return (
    <>
      <Navbar onRequestQuote={openQuoteModal} />
      <main>
        <Hero />
        <AboutCompany />
        <WhyChooseUs />
        <OurServices />
        <FeaturedProjects />
        <ConstructionProcess />
        <CompanyStats />
        <Testimonials />
        <CallToAction onRequestQuote={openQuoteModal} />
        <ContactSection />
      </main>
      <Footer />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
    </>
  )
}

export default App
