import styled from 'styled-components'
import { Container } from './Container.styled'

export const FooterStyled = styled.div `
    background-color: #0F8F6D;
    color: white;
`
export const FooterText = styled.p `
color: white;
font-weight: 100;
font-size: ${props => props.size === "big" ? "large" : "small"};
font-weight: ${props => props.size === "bold" ? "500" : "small"};


;
`