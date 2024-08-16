import styled from 'styled-components'

export const Container = styled.div `
    
    margin: 0px 143px;
    align-items: flex-start;
    gap: 240px;
    align-self: stretch;
    padding:100px 0;
    border-bottom: 1px solid black;
    overflow: hidden;
    @media (max-width: 1100px) {
        margin: 0px 50px;
    }
    @media (max-width: 900px) {
        margin: 0px 30px;
    }
    @media (max-width: 767px) {
        margin: 0px 20px;
    }
`

export const FooterContainer = styled.div`
border-top: 1px solid rgba(0, 100, 0, 0.3);padding-top:30px;
margin-top: 30px;
`



