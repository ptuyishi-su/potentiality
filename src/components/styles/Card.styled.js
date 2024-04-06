import styled from 'styled-components';
import bgImg from '../../assets/images/player.jpeg';

export const Card = styled.div`
    background-color: #62D99B;
    background-color: ${props => props.color || '#699B'};
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    margin-top: 80px;
    border-radius: 8px;
    width: 25%;
    transition: top .35s;
    justify-content: space-between;
    span {
        font-family: "Tiempos Fine";
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        line-height: 26px; /* 162.5% */
        letter-spacing: -0.32px;
        color: #3253FF;
    }
    p {
        font-family: "Tiempos Fine";
        font-size: 16px;
        font-style: normal;
        font-weight: 300;
        line-height: 26px; /* 162.5% */
        letter-spacing: -0.32px; 
        padding-bottom: 25px;
    }
    h3 {
        font-size: 36px;
        line-height: 40px;
        margin-bottom: 25px;
        font-family: "TiemposFine", serif;
        font-weight: 400;
        -webkit-box-orient: vertical;
        padding-bottom: 55px;
    }
    button {
    }
`;

export const LongCard = styled(Card)`
    border-radius: 8px;
    width: 250px;
    height: 360px;
    padding: 0;
    background-image: url(${bgImg}); /* Use template literals to include the imported image */
    background-size: cover;
    background-position: center; 
    margin-top: 20px;
    h3{
        font-size: 36px;
        line-height: 40px;
        margin-bottom: 25px;
        font-family: "TiemposFine", serif;
        font-weight: 400;
        -webkit-box-orient: vertical;
    }
`;
export const ClientDiv = styled.div`
    h3{
        font-size: 36px;
        line-height: 40px;
        margin-bottom: 25px;
        font-family: "TiemposFine", serif;
        font-weight: 400;
        -webkit-box-orient: vertical;
        padding-bottom: 55px;
    }
`