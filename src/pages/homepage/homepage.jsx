import React from 'react';
//Importing Header, Sections, FAQ, Footer (Custom Components)
import Header from '../../components/header/header.component';
import SideSection from '../../components/side-section/side-section.component';
import FlippedSide from '../../components/flipped-side/flipped-side.component';
import AnimatedSection from '../../components/animated-section/animated-section.component';
import FAQ from '../../components/FAQ/faq.component';
import Footer from '../../components/footer/footer.component';

const HomePage = () => (
    <div className="app">
        <Header />
        <SideSection />
        <FlippedSide />
        <AnimatedSection />
        <FAQ />
        <Footer />
    </div>
);

export default HomePage;