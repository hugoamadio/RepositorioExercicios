import { ThemeProvider } from "styled-components"

const theme = {
    colors: {
        primary: '#8A1AD3',
        secondary: '#000'
    }
}

interface ThemeDefaultProps{
    children: React.ReactNode
}

function ThemeDefault({children}: ThemeDefaultProps){
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default ThemeDefault