import styled from 'styled-components'

export const Button = styled.button`
    border: .5px solid black;
    display: flex;
    padding: 12px 24px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    transition: ease-out .3s;
    background-color: ${props => props.bg === "primary" ? "black" : "white"};
    color: ${props => props.bg === "primary"? "white" : "black" };

    &:hover {
        background-color: ${props => props.bg === "secondary" ? "black" : ""};
        color: ${props => props.bg === "secondary" ? "white" : ""};
        scale: 1.03;

    }
    `

    export const ButtonClear = styled(Button)`
        color: black;
        border: none;
        transition: ease-out;
    transition-duration: .4s;
        &:hover {
            color: black;
            border: .5px solid black;
            background-color: white;
        }
    `