import styled from 'styled-components';

export const Nav = styled.nav`
    top: 0;
    left: 0;
    right: 0;
    padding: 35px 143px;
    display: flex;
    flex-direction: row;
    background-color: white;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid black;
    font-size: 14px;
    background: rgba(255, 255, 255, 0.11);
    backdrop-filter: blur(15px);    

    ul {
        width: 436px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        list-style-type: none;
        text-decoration: none;
        margin: 0;
    }
    svg {
        display: none;
    }

    @media (max-width: 1100px) {
        padding: 35px 50px;
    }
    @media (max-width: 900px) {
        padding: 35px 30px;

        li {
            display: none;
        }
    }
    @media only screen and (max-width: 767px) {
        padding: 35px 20px;

        .button {
            display: none;
        }
        svg {
            display: block;
        }
    }
    .div {
        border: none;
    }
`;

export const Logo = styled.image`
    /* background-color: red; */
`;
export const MobileLogo = styled.image`
    /* background-color: red; */
`;

export const NavButtons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
    list-style: none;
    @media only screen and (max-width: 767px) {
        display: none;
    }  
`;

export const SolutionNav = styled(Nav)`
    position: fixed;
    top: 112px;
    display: flex;
    background: rgba(255, 255, 255, 0.50);
    backdrop-filter: blur(7.150000095367432px);   `;
