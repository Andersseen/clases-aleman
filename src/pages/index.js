import React, { useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import Cover from '../components/coverSection/Cover'
import About from '../components/aboutSection/About'
import { aboutSection } from '../components/aboutSection/Data'

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
        </>
    )
}

export default Page
