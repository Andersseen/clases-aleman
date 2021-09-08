import React from 'react'

import Icon1 from '../../media/svg-1.svg'
import Icon2 from '../../media/svg-2.svg'
import Icon3 from '../../media/svg-3.svg'
import Icon4 from '../../media/svg-4.svg'
import Icon5 from '../../media/svg-5.svg'
import Icon6 from '../../media/svg-6.svg'

import {
    ServicesContainer,
    ServicesCard,
    ServicesWrapper,
    ServicesTitle,
    ServicesSubtitle,
    ServicesIcon,
    ServicesText
} from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesTitle>
                Services
            </ServicesTitle>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesSubtitle>Subtitle</ServicesSubtitle>
                    <ServicesText>Lorem Ipsum</ServicesText>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesSubtitle>Subtitle</ServicesSubtitle>
                    <ServicesText>Lorem Ipsum</ServicesText>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesSubtitle>Subtitle</ServicesSubtitle>
                    <ServicesText>Lorem Ipsum</ServicesText>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon4} />
                    <ServicesSubtitle>Subtitle</ServicesSubtitle>
                    <ServicesText>Lorem Ipsum</ServicesText>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon5} />
                    <ServicesSubtitle>Subtitle</ServicesSubtitle>
                    <ServicesText>Lorem Ipsum</ServicesText>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon6} />
                    <ServicesSubtitle>Subtitle</ServicesSubtitle>
                    <ServicesText>Lorem Ipsum</ServicesText>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services