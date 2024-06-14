import styled from "styled-components"

const Element = styled.div`
    width: 350px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const ElementInterno = styled.div`
    width: 230px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Title = styled.h3`
    font-weight: 600;
    color: black;
`

const SubTitle = styled.p`
    margin-top: 0;
    font-weight: 300;
    color: #AAACAD;
`


export {SubTitle, Title, Element, ElementInterno}