import React from 'react'
import './Contact.css'

import {
    ContactContainer,
    ContactWrapper,
    ContactTitle,
    BtnWrap
} from './ContactElements'

import { AboutBtn } from '../ButtonElements';

const Contact = () => {
    return (

        <ContactContainer id='contact'>
            <ContactTitle>
                Contact
            </ContactTitle>
            <ContactWrapper>

                <BtnWrap>
                    <AboutBtn>Button</AboutBtn>
                </BtnWrap>
            </ContactWrapper>
        </ContactContainer>
    )
}

export default Contact
