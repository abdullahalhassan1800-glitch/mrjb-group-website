import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollProgress from './components/layout/ScrollProgress'
import WhatsAppFloat from './components/shared/WhatsAppFloat'
import HomePage from './components/pages/HomePage'
import AboutPage from './components/pages/AboutPage'
import ProjectsPage from './components/pages/ProjectsPage'
import ProjectDetailPage from './components/pages/ProjectDetailPage'
import WhyInvestPage from './components/pages/WhyInvestPage'
import GalleryPage from './components/pages/GalleryPage'
import ContactPage from './components/pages/ContactPage'
import ContactSuccessPage from './components/pages/ContactSuccessPage'
import ScrollToTop from './components/shared/ScrollToTop'

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/why-invest" element={<WhyInvestPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contact-success" element={<ContactSuccessPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App
