import Header from './components/Header'
import HeroSection from './components/HeroSection'
import BrandsCarousel from './components/BrandsCarousel'
import TrustPillarsSection from './components/TrustPillarsSection'
import PortafolioSection from './components/PortafolioSection'
import PlatformConsoleSection from './components/PlatformConsoleSection'
import FAQSection from './components/FAQSection'
import FinalCTASection from './components/FinalCTASection'
import Footer from './components/Footer'
import WhatsAppFAB from './components/WhatsAppFAB'

function App() {
  const showOverlay =
    typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('overlay') === '1'

  return (
    <div className="app-root">
      <Header />
      <main>
        <HeroSection />
        <BrandsCarousel />
        <TrustPillarsSection />
        <PortafolioSection />
        <PlatformConsoleSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
      <WhatsAppFAB />

      {showOverlay ? <div className="design-overlay" /> : null}
    </div>
  )
}

export default App
