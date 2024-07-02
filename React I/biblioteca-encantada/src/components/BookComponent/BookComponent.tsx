import DivBookStyled from "./DivBookStyled"

interface BookComponentProps{
    children: React.ReactNode;
}

function BookComponent({children}:BookComponentProps){
    return(
        <DivBookStyled>
            {children}
        </DivBookStyled>
    )
}

export default BookComponent