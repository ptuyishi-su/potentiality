import React from 'react'
import { Container } from '../styles/Container.styled'
import { Flex } from '../styles/Flex.styled'
import { Button } from '../styles/Button.styled'
import { NavButtons } from '../styles/Nav.styled'
import { HeroHeading, HeroContent } from '../styles/Hero.styled'
import { Banner } from '../styles/Banner.styled'

const AthleteSection = () => {
  return (
    <Container>
      <Flex>
       <HeroHeading>
        <h3>Empower</h3>
        <h2>Connecting athletes and coaches for success</h2>
       </HeroHeading>
       <HeroContent>
        <h3>Transparent Recruitment</h3>
        <p>Our platform provides young talents with the opportunity to showcase their skills, be recognized for their talent, and receive support for their overall well-being. We believe in creating a fair and inclusive soccer ecosystem that values equal opportunities and prioritizes the welfare of players.</p>
        <NavButtons>
            <Button bg="primary">
                Sign Up
            </Button>
            <Button bg="secondary">
                Become a partner
            </Button>
        </NavButtons>
       </HeroContent>
      </Flex>
      <Banner>
        <h2>Change how You are Seen in the  Game</h2>
        <Button bg="secondary">Create Profile</Button>
       </Banner>
    </Container>
  )
}

export default AthleteSection
