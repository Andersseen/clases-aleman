import styled from 'styled-components';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md'

export const CoverContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;
`

export const CoverBg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const ImageBg = styled.img`
    width: 100%;
    height: 100%;

    -o-object-fit: cover;
    object-fit: cover;
`

export const CoverContent = styled.div`
    z-index: 3;
    width: 50%;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CoverTitle = styled.h1`
    color: #fff;
    font-size: 4rem;
    text-align: center;

    text-shadow: 2px 2px 2px #d40000;


    @media screen and  (max-width: 768px){
        font-size: 3rem;
    }
    @media screen and  (max-width: 480px){
        font-size: 2rem;
    }
`

export const CoverSubtitle = styled.h6`
    color: #fff;
    font-size: 2rem;
    text-align: center;

    text-shadow: 1px 1px 1px #d40000;

    @media screen and  (max-width: 768px){
        font-size: 1.5rem;
    }
    @media screen and  (max-width: 480px){
        font-size: 1rem;
    }
`

export const CoverBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 1.2rem;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 1.2rem;
`

