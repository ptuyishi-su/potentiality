import styled from 'styled-components'

export const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 35px 143px;
    display: flex;
    flex-direction: row;
    background-color: white;
    align-items: center;
    align-self: center;
    justify-content: space-between;
    border-bottom: 1px solid black;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; 
    color: black;

    ul {
        width: 436px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        list-style-type: none;
        text-decoration: none;
        margin: 0;
     }

    @media (max-width: 1100px) {
        li{
            display: none;
        }
    }
    
       
`
export const Logo = styled.image  `
    /* background-color: red; */
`
export const NavButtons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
    list-style: none;
    
`
