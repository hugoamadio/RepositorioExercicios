import { ReactNode } from "react"
import { ThemeProvider } from "styled-components"

const theme = {
    colors: {
        primary: '#be2424',
        secondary: '#1d8aa5'
    }
}

interface DefaultThemeProps{
    children: ReactNode
}

function DefaultTheme({ children }:DefaultThemeProps){
    return <ThemeProvider theme={theme}> { children } </ThemeProvider>
}

export default DefaultTheme