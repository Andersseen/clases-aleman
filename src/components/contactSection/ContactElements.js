import styled from 'styled-components';

export const ContactContainer = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;


    padding-top: 5rem;
    margin-bottom: 100vh;

    border-radius:0 0 20px 20px;

`
export const ContactTitle = styled.h3`
    padding-top: 2rem;
    text-align: center;
    font-size: 2.5rem;
    color: #fff;
    text-shadow: 2px 2px 2px #d40000;
    margin-bottom: 2rem;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
    
`
export const ContactWrapper = styled.div`
    position: absolute;
    height: 50vh;
    right: 0;
    width: 50%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
`;




export const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;
