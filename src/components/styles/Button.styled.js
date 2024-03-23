import styled from 'styled-components'

export const Button = styled.button`
    border: .5px solid black;
    background-color: white;
    display: flex;
    padding: 12px 24px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    &:hover {
        background-color: black;
        color: white;
    }
    `