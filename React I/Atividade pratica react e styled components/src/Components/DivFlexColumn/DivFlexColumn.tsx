import DivFlexColumStyled from "./DivFlexColumnStyled"

interface DivFlexColumnProps{
    children: React.ReactNode,
    style?: React.CSSProperties
}

function DivFlexColumn({children, style}: DivFlexColumnProps){
    return (
        <DivFlexColumStyled style={style}>{children}</DivFlexColumStyled>
    )
}

export default DivFlexColumn