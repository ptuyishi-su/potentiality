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
        margin: 15px 50px;
    }
    @media (max-width: 900px) {
        margin: 15px 30px;
    }
    @media (max-width: 767px) {
        margin: 15px 20px;
    }
`
