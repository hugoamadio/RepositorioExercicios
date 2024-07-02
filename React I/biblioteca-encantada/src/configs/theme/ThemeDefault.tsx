import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
    colors: {
        primary: '#000000',
        secondary: '#ca019f'
    }
}

interface DefaultThemeProps{
    children: React.ReactNode
}

function ThemeDefault({children}: DefaultThemeProps){
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default ThemeDefault