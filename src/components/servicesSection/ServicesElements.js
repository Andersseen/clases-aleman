import styled from 'styled-components';

export const ServicesContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #eaeaea;

    padding-top: 30px;


    @media screen and (max-width: 1000px){
        height: 800px;
    }

    @media screen and (max-width: 768px){
        height: 1500px;
    }

    @media screen and (max-width: 480px){
        height: 1800px;
    }
`

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    grid-gap: 10px  50px;
    padding: 0 20px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    min-height: 200px;
    padding: 10px;
    box-shadow: 0 1px 3px rgba( 0 0 0 /.2);
    transition: all .2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all .2s ease-in-out;
        cursor: pointer;
    }
`

export const ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const ServicesTitle = styled.h2`
    font-size: 2.5rem;
    color: #fff;
    text-shadow: 2px 2px 2px #d40000;
    margin-bottom: 2rem;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const ServicesWrapperText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ServicesSubtitle = styled.h4`
    font-size: 1.1rem;
    margin-bottom: 10px;
`

export const ServicesText = styled.p`
    font-size: 1rem;
    text-align: center;
`