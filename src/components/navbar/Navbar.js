import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'
import './Navbar.css'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks
} from './NavbarElements';


const Navbar = ({ toggle }) => {

    const [navbar, setNavbar] = useState(false);

    const changeBg = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBg);

    return (
        <>
            <Nav className={navbar ? 'navbar active' : 'navbar'}>
                <NavbarContainer>
                    <NavLogo to='#'>
                        FEDER
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='home'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true">
                                Home
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='about'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true">
                                About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true">
                                Services
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contact'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true">
                                Contact
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
