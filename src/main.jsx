import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from '../components/NavBar.jsx'
import HeroSection from '../components/HeroSection.jsx'
import Categories from '../components/Categories.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import TryThisWidget from '../components/TryThisWidget.jsx'
import PopularProjects from '../components/PopularProjects.jsx'
import ComparisonTable from '../components/ComparisionTable.jsx'
import JoinNowSection from '../components/JoinNowSection.jsx'
import Footer from '../components/Footer.jsx'
import FAQSection from '../components/FAQSection.jsx'
import BelowFooter from '../components/BelowFooter.jsx'


createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <>
    <Navbar/>
    <HeroSection/>
    <Categories/>
    <HowItWorks/>
    <TryThisWidget/>
    <PopularProjects/>
    <ComparisonTable/>
    <JoinNowSection/>
    <FAQSection/>
    <Footer/>
    <BelowFooter/>
    </>
  // </StrictMode>,
)
