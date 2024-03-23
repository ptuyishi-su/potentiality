import React from 'react'
import styled from 'styled-components'
import {Container} from '../styles/Container.styled';
import heroImage from '../../assets/images/heroimg.png'
import { LandingPageHero } from '../styles/Hero.styled';
import { Stats } from '../styles/Stats.styled';

const Hero = () => {
  return (
    <>
      <Container>
        <LandingPageHero>
        <div>
          <div>
            <h1>
              Promoting Equal Opportunities and Transparent Scouting in Soccer
            </h1>
            <p>
              Join our community of players and teams, where you can showcase your skills, engage with the community, connect with coaches and recruiters, and take control of your athletic journey.
            </p>
          </div>
          <div>
            <ul>
              <li>Develop your Leaders</li>
              <li>Develop your Profile</li>
              <li>Develop your Club</li>
              <li>Develop your Proces</li>
            </ul>
          </div>
        </div>
        <div>
          <img src={heroImage} alt="hero image"/>
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
