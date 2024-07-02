import FormStyled from "./FormStyled"

interface FormProps{
    children: React.ReactNode;
    submit?: React.FormEventHandler<HTMLFormElement>;
}

function Form({children, submit}: FormProps){
    return(
        <FormStyled onSubmit={submit}>
            {children}
        </FormStyled>
    )
}

export default Form