import React from 'react'
import styled from 'styled-components'
import {Container} from '../styles/Container.styled';
import heroImage from '../../assets/images/heroimg.png'
import { HeroContent, LandingPageHero } from '../styles/Hero.styled';
import { Stats } from '../styles/Stats.styled';
import { Flex } from '../styles/Flex.styled';

const Hero = () => {
  return (
    <>
      <Container>
        <LandingPageHero>
        <div>
          <div>
            <h1>
              Promoting Equal Opportunities and Scouting in Soccer
            </h1>
            <HeroContent $width small >
              <p>
                Join our community of players and teams, where you can showcase your skills, engage with the community, connect with coaches and recruiters, and take control of your athletic journey.
              </p>
            </HeroContent>
          </div>
        </div>
        <div>
          <img src={heroImage} alt="hero image" />
        </div>
        </LandingPageHero>
        <Stats>
          <div>
            <h4>897K+</h4>
            <p>National Teams</p>
          </div>
          <div>
            <h4>529+</h4>
            <p>National Teams</p>
          </div>
          <div>
            <h4>52M+</h4>
            <p>National Teams</p>
          </div>
          <div>
            <h4>529+</h4>
            <p>National Teams</p>
          </div>
        </Stats>
      </Container>
      
    </>
  )
}

export default Hero
