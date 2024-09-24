import React, { useState } from 'react';
import Navbar from '../components/NavBar.jsx'
import HeroSection from '../components/HeroSection.jsx'
import Categories from '../components/Categories.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import TryThisWidget from '../components/TryThisWidget.jsx'
import PopularProjects from '../components/PopularProjects.jsx'
import ComparisionTable from '../components/ComparisionTable.jsx'
import JoinNowSection from '../components/JoinNowSection.jsx'
import FAQSection from '../components/FAQSection.jsx' 
import WhyChooseAIFreelancers from '../components/WhyChooseAIFreelancers.jsx';


const LandingPage = () => {
    return (
        <>
            <HeroSection />
            <WhyChooseAIFreelancers />
            <Categories />
            <HowItWorks />
            {/* <TryThisWidget /> */}
            <ComparisionTable />
            {/* <JoinNowSection /> */}
            <FAQSection />

        </>
    );
};

export default LandingPage;




