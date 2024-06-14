import React from "react"
import SectionStyled from "./SectionElementStyled"

interface LoremIpsumProps{
    children: React.ReactNode;
}

function LoremIpsum({children}: LoremIpsumProps){
    return (
        <SectionStyled>
            {children}
        </SectionStyled>
    )
}

export default LoremIpsum