import FooterStyled from "./FooterStyled"

interface FooterProps{
    data: React.ReactNode[]
}

function Footer({ data }: FooterProps){
    return(
        <FooterStyled>{data.map((item)=> item)}</FooterStyled>
    )
}

export default Footer