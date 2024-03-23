import React from 'react'
import { Flex,FlexEven } from '../styles/Flex.styled'
import { Container } from '../styles/Container.styled'
import { FooterStyled } from '../styles/Footer.styled'
import Facebook from '../../assets/images/facebook.svg'
import Twitter from '../../assets/images/twitter.svg'
import Instagram from '../../assets/images/instagram.svg'


const Footer = () => {
  return (
      <FooterStyled>
      <Container>
        <FlexEven>
          <Flex>
            logo
          </Flex>
          <Flex>
            Menu
          </Flex>
          
        </FlexEven>
      <FlexEven>
        <p>©2024 Potentiality. All rights reserved.</p>
        <Flex>
          <img src={Facebook} alt="facebook" />
          <img src={Twitter} alt="Twitter" />
          <img src={Instagram} alt="Instagram" />

        </Flex>

      </FlexEven>
      </Container>
      </FooterStyled>
  )
}

export default Footer
