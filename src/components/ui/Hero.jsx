import React from 'react'
import styled from 'styled-components'
import {Container} from '../styles/Container.styled';
import heroImage from '../../assets/images/heroimg.png'
import { HeroContent, LandingPageHero } from '../styles/Hero.styled';
import { Stats } from '../styles/Stats.styled';
import { Flex } from '../styles/Flex.styled';
import data from '../../assets/data/impact.json'
import { Button } from '../styles/Button.styled';

const Hero = () => {
  return (
    <>
      <Container>
        <LandingPageHero>
        <div>
          <div>
            <h1>
              Promoting Equal <span>Opportunities</span> in Soccer
            </h1>
            <HeroContent>
              <p>
                  Showcase your skills, connect with coaches and recruiters.
              </p>
              <Button bg="primary">Get Started</Button>
            </HeroContent>
          
          </div>
        </div>
        <div>
          <img src={heroImage} alt="hero image" />
        </div>
        </LandingPageHero>
        <Stats>
          <Stats>
            <p>Trusted by exceptional <span>Brands</span></p>
          </Stats>
          <Stats>
            {data?.sponsor?.map((item)=> (
              <img src={item.src} alt="sponsors" width={80} />
            ))}
          </Stats>
        </Stats>
        
      </Container>
      
    </>
  )
}

export default Hero
