import React from 'react'
import styled from 'styled-components'
import { Container } from '../styles/Container.styled'
import { Flex } from '../styles/Flex.styled'
import { HeroHeading, HeroImage } from '../styles/Hero.styled'
import coachImage from '../../assets/images/coachImage.png'
import { NavButtons } from '../styles/Nav.styled'
import { Button } from '../styles/Button.styled'
import { Banner } from '../styles/Banner.styled'


const CoachSection = () => {
  return (
    <>
      <Container>
        <Flex>
            <HeroHeading>
                <h3> Revolutionize</h3>
                <h2>Connecting athletes and coaches for success</h2>
                <p>Explore our top athlete profiles featuring quick statistics and captivating highlight videos. Find athletes you know and discover the recruits you need to build your best team.</p>
                <NavButtons>
                    <Button bg="primary">Sign Up</Button>
                    <Button bg="secondary">Learn More</Button>
                 </NavButtons>
            </HeroHeading>
            <HeroImage src={coachImage} alt="Coach and Athlete" />
        </Flex>
        <Banner>
            <h2>All Prospect Videos in One Place</h2>
            <p> Potentiality holds the most up to date highlights , game footage, and academic performance empowering coaches to make confident decisions and empowering athletes to take control of their journey with our personalized Profiles</p>
            <Button bg="secondary">Explore Athletes</Button>
        </Banner>
      </Container>
    </>
  )
}

export default CoachSection
