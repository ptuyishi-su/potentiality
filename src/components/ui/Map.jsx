import React from 'react'
import { Container } from '../styles/Container.styled'
import mapPic from '../../assets/images/map.png'
import { HeroImage, HeroHeading, HeroContent } from '../styles/Hero.styled'

const Map = () => {
  return (
    <Container>
       <HeroHeading>
        <span>Connect</span>
        <h2>Connect with us</h2>
       </HeroHeading>
        <HeroImage src={mapPic} alt="map location" />
    </Container>
  )
}

export default Map
