import styled from 'styled-components';
import { Link } from 'react-scroll';


export const CoverBtn = styled(Link)`
    border-radius: 50px;
    background: ${({ primary }) => (primary ? '#D40000' : '#fff')};
    while-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#fff' : '#D40000')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};

    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .3s ease-in-out;

    &:hover{
        color: ${({ dark }) => (dark ? '#D40000' : '#fff')};
        transition: all .2s ease-in-out;
        background: ${({ primary }) => (primary ? '#fff' : '#D40000')};
    }
    `