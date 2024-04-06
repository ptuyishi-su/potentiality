import React from 'react'
import { Container } from '../styles/Container.styled'
import { Flex } from '../styles/Flex.styled'
import { HeroContent, HeroHeading } from '../styles/Hero.styled'
import impactData from '../../assets/data/impact.json'
import { StyledList } from '../styles/List.styled'

const Impact = () => {
  return (
    <Container>
        <Flex>
            <HeroHeading>
                <span>Impact</span>
                <h2>Building a happier, healthier, and more equitable Scouting Process.</h2>
            </HeroHeading>
            <HeroContent>
                {impactData.impact.map(item => (
                    <StyledList key={item.id}>
                    <li>
                        <h3>{item.name}</h3>
                        <p>{item.content}</p>
                    </li>
                    </StyledList>
                ))}

            </HeroContent>

        </Flex>

    </Container>
  )
}

export default Impact
