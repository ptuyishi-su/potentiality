import React from 'react'
import { Link } from 'react-router-dom'
import { Flex,FlexEven, FlexClient } from '../styles/Flex.styled'
import { Container, FooterContainer } from '../styles/Container.styled'
import { FooterStyled } from '../styles/Footer.styled'
import Facebook from '../../assets/images/facebook.svg'
import Twitter from '../../assets/images/twitter.svg'
import Instagram from '../../assets/images/instagram.svg'
import FooterData from '../../assets/data/impact.json'
import { ColumnFlex } from '../styles/Flex.styled'
import { FooterText } from '../styles/Footer.styled'
import logo from '../../assets/images/logo.svg'
import { Logo } from '../styles/Nav.styled'
const Footer = () => {
  return (
    <FooterStyled>
        <Container>
        <Flex>
        <Logo>
          <Link to="/">
            <img src={logo} />
          </Link>
        </Logo>
          <FlexEven>
            {FooterData?.FooterNav?.map((item) => (
            <div key={item.id}>
                <FooterText size="bold" >{item.title}</FooterText>
            <ColumnFlex>
              {item.link.map((linkItem, index) => (
                <a href="#">
                <FooterText key={index}>{linkItem}</FooterText>
                </a>
              ))}
            </ColumnFlex>
            </div>
            ))}
</FlexEven>
        </Flex>
        <FooterContainer>
        <Flex >
          <FooterText >©2024 Potentiality. All rights reserved.</FooterText>          
            <FlexEven>
              <a href="">
                <img src={Facebook} alt="Facebook Logo" />
              </a>
              <a href="">
                <img src={Twitter} alt="Facebook Logo" />
              </a>
              <a href="">
                <img src={Instagram} alt="Facebook Logo" />
              </a>
            </FlexEven>
            </Flex>
        </FooterContainer>

        
    </Container>
      </FooterStyled>
  )
}

export default Footer
