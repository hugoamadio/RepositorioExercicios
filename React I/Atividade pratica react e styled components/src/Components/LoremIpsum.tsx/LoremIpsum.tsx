import React from "react"
import SectionStyled from "./SectionElementStyled"
import ContentContainer from "./ContentContainer";

interface LoremIpsumProps{
    children: React.ReactNode;
}

function LoremIpsum({children}: LoremIpsumProps){
    return (
        <SectionStyled>
            <ContentContainer>
                {children}
            </ContentContainer>
        </SectionStyled>
    )
}

export default LoremIpsum