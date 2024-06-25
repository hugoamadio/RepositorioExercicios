import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
    colors: {
        primary: '#ffffff',
        secondary: '#fba300'
    },
    border: {
        borderDefault: '1px solid #c1cd1f5e'
    }
}

interface DefaultThemeProps{
    children: React.ReactNode
}

function ThemeDefault({children}: DefaultThemeProps){
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default ThemeDefault