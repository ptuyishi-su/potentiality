import styled, { keyframes } from 'styled-components';

// Define keyframes for the animation
const moveAnimation = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-700%);
    }
`;

export const Stats = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    padding: 40px 0 0;

    img {
        padding-left: 60px;
        animation: ${moveAnimation} 20s linear infinite; /* Apply the animation */
        z-index: -2;
    }

    p {
        width: 400px;
        background-color: white;
    }

    span {
        background-color: #E85814;
        padding: 0 5px;
        border-radius: 30;
        color: white;
    }

    @media (max-width: 700px) {
        p {
            width: 200px;
        }
    }
`;

export const StatsImg = styled(Stats)`
    transform: translateX(-100%);
    animation-duration: 3s;
`;
