import styled from 'styled-components'

export const LandingPageHero =styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    h1 {
        font-style: normal;
        font-weight: 700;
        line-height: 79px;
    }
    span {
        color: #e85814;
    }
    
    img {
        object-fit: cover;
        height: 100%;
        width: 100%;
        border-radius: 60px;
        transition: linear;
    }
    button {
        display: none;
    }
    @media (max-width: 1000px) {
        img {
        }
    }
    @media (max-width:767px) {
        img {
            display: none;
        }
        h1{
            font-weight: 500;
            font-size: 44px;
            line-height: 1.2;
            letter-spacing: -.025em;
        }
        button {
            display: block;
        }

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
span {
    font-family: "SF Pro Display";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 23px; /* 143.75% */
    letter-spacing: -0.64px;
}
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
