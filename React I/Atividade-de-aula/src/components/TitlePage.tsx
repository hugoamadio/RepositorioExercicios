import DividerStyled from "./DividerStyled"

interface TitlePageProps{
    title: string,
    showDivider: boolean
}

function TitlePage({title, showDivider}: TitlePageProps){
    return(
        <>
            <h1>{title}</h1>
            {showDivider && <DividerStyled />}
        </>
    )
}

export default TitlePage