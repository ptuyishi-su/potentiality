import React from 'react'
import { Container } from '../styles/Container.styled'
import { Flex, FlexEven } from '../styles/Flex.styled'
import { HeroContent, HeroHeading, HeroImage } from '../styles/Hero.styled'
import coachImage from '../../assets/images/coachImage.png'
import insightData from '../../assets/data/impact.json'
import { StyledList } from '../styles/List.styled'

const Insight = () => {
  return (
   
    <Container>
        <FlexEven>
            <HeroHeading>
                <span>Insight</span>
                <HeroImage src={coachImage}/>
            </HeroHeading>
            <HeroContent>
            <span>Its starts with you. But it doesnt stop there</span>
                {insightData.news.map(item => (
                    <StyledList key={item.id}>
                        <li>
                            <h3>{item.title}</h3>
                            <p>{item.Content}</p>
                        </li>
                    </StyledList>
                ))}
            </HeroContent>
        </FlexEven>
    </Container>
  )
}

export default Insight
