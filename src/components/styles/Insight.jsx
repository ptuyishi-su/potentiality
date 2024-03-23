import React from 'react'
import { Container } from './Container.styled'
import { Flex, FlexEven } from './Flex.styled'
import { HeroContent, HeroHeading, HeroImage } from './Hero.styled'
import coachImage from '../../assets/images/coachImage.png'
import insightData from '../../assets/data/impact.json'
import { StyledList } from './List.styled'

const Insight = () => {
  return (
   
    <Container>
        <Flex>
            <HeroHeading>
                <h3>Insight</h3>
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

        </Flex>

    </Container>
  )
}

export default Insight
