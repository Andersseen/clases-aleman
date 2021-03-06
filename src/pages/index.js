import React, { useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import Cover from '../components/coverSection/Cover'
import About from '../components/aboutSection/About'
import { aboutSection } from '../components/aboutSection/Data'
import Services from '../components/servicesSection/Services'
import Contact from '../components/contactSection/Contact'
import Footer from '../components/footerSection/Footer'

const Page = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Cover />
            <About {...aboutSection} />
            <Services />
            <Contact />
            <Footer />
        </>
    )
}

export default Page
