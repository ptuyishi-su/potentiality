import styled from 'styled-components'

export const Button = styled.button`
    border: 1.5px solid black;
    display: flex;
    padding: 12px 24px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    transition: linear .3s;
    background-color: ${props => props.bg === "primary" ? "black" : "white"};
    color: ${props => props.bg === "primary"? "white" : "black" };

    &:hover {
        background-color: ${props => props.bg === "secondary" ? "black" : "white"};
        color: ${props => props.bg === "secondary" ? "white" : "black"};
        border: 1.5px solid black;

    }
    `

    export const ButtonClear = styled(Button)`
        border-radius: 120px;
        border: none;
        font-size: 16px;
        padding: 12px 20px;
        transition: all .5s ease-out;
        text-decoration: none;
        color: #3253FF;
        &:hover {
        background-color: ${props => props.bg === "secondary" ? "#3253FF" : "white"};
        text-decoration: ${props => props.bg === "secondary" ? "white" : "#white"};
        p {color: white}
        border: none

    }
    `