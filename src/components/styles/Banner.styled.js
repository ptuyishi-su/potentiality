import styled from 'styled-components';

export const Banner = styled.div`
    background-color: #0F8F6D;
  padding: 50px 120px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center items horizontally */
  justify-content: center; /* Center items vertically */
  gap: 30px;
  border-radius: 10px;
  margin-top: 80px;

  @media screen and (max-width: 768px) {
    padding: 40px 40px;
    margin-top: 60px;
  }

  @media screen and (max-width: 480px) {
    padding: 30px 20px;
    margin-top: 40px;}

    h2, p {
        color: white;
    }

    :hover {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url("../../assets/images/runImage.jpeg") lightgray 0px -94.519px / 100% 314.193% no-repeat, #1870D4;
        }
`;

export const BannerOrange = styled(Banner)`
    background-color: orange;

    p, h2 {
        color: black;
    }
`;
