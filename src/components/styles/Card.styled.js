import styled from 'styled-components';
import bgImg from '../../assets/images/player.jpeg';

export const Card = styled.div`
  background-color: ${props => props.color || '#699B'};
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  margin-top: 80px;
  border-radius: 8px;
  width: 25%;
  transition: top 0.35s;
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
    /* Additional button styling if needed */
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    width: 80%;
    padding: 15px;
    margin-top: 40px;
  }
  @media (max-width: 480px) {
    width: 100%;
    padding: 10px;
    margin-top: 30px;
  }
`;

export const LongCard = styled(Card)`
  border-radius: 8px;
  width: 250px;
  height: 360px;
  padding: 0;
  background-image: url(${bgImg});
  background-size: cover;
  background-position: center; 
  margin-top: 20px;
  h3 {
    font-size: 36px;
    line-height: 40px;
    margin-bottom: 25px;
    font-family: "TiemposFine", serif;
    font-weight: 400;
    -webkit-box-orient: vertical;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    width: 200px;
    height: 300px;
    margin-top: 15px;
  }
  @media (max-width: 480px) {
    width: 150px;
    height: 250px;
    margin-top: 10px;
  }
`;

export const ClientDiv = styled.div`
  h3 {
    font-size: 36px;
    line-height: 40px;
    margin-bottom: 25px;
    font-family: "TiemposFine", serif;
    font-weight: 400;
    -webkit-box-orient: vertical;
    padding-bottom: 55px;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    h3 {
      font-size: 28px;
      line-height: 32px;
      margin-bottom: 20px;
      padding-bottom: 40px;
    }
  }
  @media (max-width: 480px) {
    h3 {
      font-size: 24px;
      line-height: 28px;
      margin-bottom: 15px;
      padding-bottom: 30px;
    }
  }
`;
