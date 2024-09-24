import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'
import BelowFooter from '../components/BelowFooter.jsx'
import LandingPage from './LandingPage.jsx'


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <>
    <Navbar />
    <LandingPage />
    <Footer />
    <BelowFooter />
  </>
  // </StrictMode>,
)
