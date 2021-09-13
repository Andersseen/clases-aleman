import React from 'react'
import { motion } from 'framer-motion'
import {
    ModalContainer,
    ModalHeader,
    ModalTitle,
    ModalClose,
    ModalWrapper
} from './ModalElements'

const openVariants = {
    hidden: {
        x: '100%',
        opacity: 0,
        transition: { duration: .5, ease: 'easeInOut' }
    },
    show: {
        x: '0%',
        opacity: 1,
        transition: { duration: .5, ease: 'easeInOut' }
    },
};

const Modal = ({ showModal, toggleModal }) => {

    return (

        <> {showModal && (
            <ModalContainer
                as={motion.div}
                variants={openVariants}
                initial='hidden'
                animate='show'
                showModal={showModal}>
                <ModalHeader>
                    <ModalTitle>Title</ModalTitle>
                    <ModalClose
                        onClick={toggleModal}>X</ModalClose>
                </ModalHeader>
                <ModalWrapper>Main</ModalWrapper>
            </ModalContainer>
        )}
            {!showModal && (
                <ModalContainer
                    as={motion.div}
                    variants={openVariants}
                    initial='show'
                    animate='hidden'
                    showModal={showModal}>
                    <ModalHeader>
                        <ModalTitle>Title</ModalTitle>
                        <ModalClose
                            onClick={toggleModal}>X</ModalClose>
                    </ModalHeader>
                    <ModalWrapper>Main</ModalWrapper>
                </ModalContainer>
            )}
        </>

    )
}

export default Modal
