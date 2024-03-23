import styled from 'styled-components'

export const LandingPageHero =styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
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
        border-radius: 5px;
    }
    ul {
        padding: 0px;
        display: flex;
        width: 363px;
        align-items: center;
        justify-content: space-between;
        align-content: center;
        gap: 33px;
        align-self: stretch;
        flex-wrap: wrap;
        list-style: none;
    }
    li {
        padding-bottom: 5px;
        border-bottom: 1px solid purple;
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
min-width: 575px;
`

export const HeroContent = styled.div `
display: flex;
flex-direction: column;
align-items: flex-start;
width: 1026px;
gap: 30px;
padding-left: 100px;
`
export const HeroImage = styled.img `
    object-fit: cover;
    height: 100%;
    width: 100%;
    border-radius: 5px;
`
