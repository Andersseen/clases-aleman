import React, { useState } from 'react'
import './Contact.css'

import {
    ContactContainer,
    ContactWrapper,
    ContactTitle,
    BtnWrap
} from './ContactElements'

import { ContactBtn } from '../ButtonElements';
import Modal from '../modal/Modal';

const Contact = () => {

    const [showModal, setShowModal] = useState(false);


    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (

        <ContactContainer id='contact'>
            <ContactTitle>
                Contact
            </ContactTitle>
            <ContactWrapper>

                <BtnWrap>
                    <ContactBtn
                        onClick={toggleModal}
                    >Button</ContactBtn>
                </BtnWrap>
            </ContactWrapper>
            <Modal toggleModal={toggleModal} showModal={showModal} />
        </ContactContainer>
    )
}

export default Contact
