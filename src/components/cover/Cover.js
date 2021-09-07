import React, { useState } from 'react'
import './Cover.css';

import Image from '../../media/bg3.jpg'
import { CoverBtn } from '../ButtonElements';
import {
    CoverContainer,
    CoverBg,
    ImageBg,
    CoverContent,
    CoverBtnWrapper,
    CoverSubtitle,
    CoverTitle,
    ArrowForward,
    ArrowRight
} from './CoverElements';

const Cover = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <CoverContainer>
            <CoverBg>
                <ImageBg src={Image} />
            </CoverBg>
            <CoverContent>
                <CoverTitle>
                    ¿Quieres aprender Aleman?
                </CoverTitle>
                <CoverSubtitle>
                    ¡Preguntalo ya!
                </CoverSubtitle>
                <CoverBtnWrapper>
                    <CoverBtn to='contact'
                        onMouseEnter={onHover} onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                    >
                        Click {hover ? <ArrowForward /> : <ArrowRight />}
                    </CoverBtn>
                </CoverBtnWrapper>

            </CoverContent>

        </CoverContainer>
    );
}

export default Cover;
