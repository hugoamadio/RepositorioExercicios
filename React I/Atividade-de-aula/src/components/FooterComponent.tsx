import styled from "styled-components"

const FooterStyled = styled.footer`
    height: 165px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #DEB887;
    margin-top: 16px;
`

function FooterComponent(){
    return(
        <FooterStyled>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, consequatur dolore laboriosam dolores distinctio minus sed harum tempore itaque eos facilis neque maiores quasi voluptatem aliquam sapiente velit saepe consequuntur?</p>
        </FooterStyled>
    )
}

export default FooterComponent