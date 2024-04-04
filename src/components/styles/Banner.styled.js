import styled from'styled-components'
export const Banner = styled.div`
    background-color: rgb(24, 112, 212);
    padding: 50px 0px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center; /* Center items horizontally */
    justify-content: center; /* Center items vertically */
    gap: 30px;
    border-radius: 20px;
    margin-top: 80px;

    h2,p {
        color: white;
    }
    
`;
export const BannerOrange = styled(Banner) `
background-color: orange;
p, h2 {
    color: black;
}
`