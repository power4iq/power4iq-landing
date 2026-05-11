import { lazy, Suspense } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import BrandsCarousel from './components/BrandsCarousel'
import CookieBanner from './components/CookieBanner'

const TrustPillarsSection  = lazy(() => import('./components/TrustPillarsSection'))
const PortafolioSection    = lazy(() => import('./components/PortafolioSection'))
const PlatformConsoleSection = lazy(() => import('./components/PlatformConsoleSection'))
const FAQSection           = lazy(() => import('./components/FAQSection'))
const FinalCTASection      = lazy(() => import('./components/FinalCTASection'))
const Footer               = lazy(() => import('./components/Footer'))
const WhatsAppFAB          = lazy(() => import('./components/WhatsAppFAB'))

function App() {
  const showOverlay =
    typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('overlay') === '1'

  return (
    <div className="app-root">
      <Header />
      <main>
        <HeroSection />
        <BrandsCarousel />
        <Suspense>
          <TrustPillarsSection />
          <PortafolioSection />
          <PlatformConsoleSection />
          <FAQSection />
          <FinalCTASection />
        </Suspense>
      </main>
      <Suspense>
        <Footer />
        <WhatsAppFAB />
      </Suspense>

      {showOverlay ? <div className="design-overlay" /> : null}
      <CookieBanner />
    </div>
  )
}

export default App
