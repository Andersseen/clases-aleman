import styled from 'styled-components';

export const ModalContainer = styled.div`
    position: absolute;
    height: 50vh;
    right: 1rem;
    width: 50%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;

    border-radius: 20px;

    background-color: #9c9c9c;

`

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-around;
`

export const ModalClose = styled.button`
    cursor: pointer;
    color: #000;
    font-size: 2rem;
`

export const ModalTitle = styled.h2`
    color: #000;
    font-size: 2rem;
`

export const ModalWrapper = styled.div`
    padding: 2rem;
    background-color: #ccc;
`