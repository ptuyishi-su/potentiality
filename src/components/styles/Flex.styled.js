import styled from 'styled-components'

export const Flex = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 1100px) {
        flex-direction: column;
    }
`
export const FlexEven = styled.div `
    display: flex;
    flex-direction: row;
    gap: 30px;
    justify-content: space-between;
    @media (max-width: 1100px) {
        flex-direction: column;
        gap: 0;
    }
    
`