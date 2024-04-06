import styled from 'styled-components'

export const Stats = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
flex-wrap: nowrap;
padding: 40px 0 0;

img {
    padding-left: 60px;
   
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
:hover {
    img {
        transform: translate(-700%, 0%);
        transition-duration: 20s;
        transition-property: all;
        z-index: -9;
        animation: 60s linear infinite;
    }
}
@media (max-width:700px) {
    p {
        width: 200px;
    }
}
`
export const StatsImg = styled(Stats)`
    transform: translate(-100%, 0%);
    animation-duration: 3s;
`

