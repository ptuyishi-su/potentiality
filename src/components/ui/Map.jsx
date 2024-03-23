import React from 'react'
import { Container } from '../styles/Container.styled'
import mapPic from '../../assets/images/map.png'
import { HeroImage } from '../styles/Hero.styled'

const Map = () => {
  return (
    <Container>
      <h3>Connect</h3>
      <h2>Connect with us</h2>
      <HeroImage src={mapPic} alt="map location" />
    </Container>
  )
}

export default Map
