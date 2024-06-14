import DivFlexColumStyled from "./DivFlexColumnStyled"

interface DivFlexColumnProps{
    children: React.ReactNode
}

function DivFlexColumn({children}: DivFlexColumnProps){
    return (
        <DivFlexColumStyled>{children}</DivFlexColumStyled>
    )
}

export default DivFlexColumn