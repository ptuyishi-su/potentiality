import styled from 'styled-components'

export const Flex = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 700px) {
        flex-direction: column;
    }
`
export const FlexEven = styled.div `
    display: flex;
    flex-direction: row;
    gap: 30px;
    justify-content: space-between;
    @media (max-width: 700px) {
        flex-direction: column;
        gap: 0;
    }
    
`
export const FlexClient = styled(Flex)`
    display: flex;
    flex-direction: column;
h3 {
        font-size: 30px;
        line-height: 40px;
        margin-bottom: 25px;
        font-family: "TiemposFine", serif;
        font-weight: 400;
        -webkit-box-orient: vertical;
        padding-bottom: 55px;
        padding: 10px 0 0px;
    }
`

export const ColumnFlex = styled.div`
    display: flex;
    flex-direction: column;
`