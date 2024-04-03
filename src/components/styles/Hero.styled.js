import styled from 'styled-components'

export const LandingPageHero =styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 60px;
    h1 {
        font-size: 60px;
        font-style: normal;
        font-weight: 700;
        line-height: 79px;
    }
    img {
        object-fit: cover;
        height: 100%;
        width: 100%;
        border-radius: 60px;
    }
    
`
export const HeroHeading = styled.div `
display: flex;
padding: 5px 0px;
flex-direction: column;
align-items: flex-start;
gap: 24px;
align-self: stretch;
max-width: 490px;
min-width: 375px;
`

export const HeroContent = styled.div `
display: flex;
flex-direction: column;
align-items: flex-start;
max-width: 490px;
min-width: 375px;
width: ${props => props.small ? "500px" : "1026px"};
gap: 30px;

/* @media (max-width: 1100px) {
    padding-left: 0;
    } */
`
export const HeroImage = styled.img `
    object-fit: cover;
    width: 100%;
    border-radius: 5px;
`
