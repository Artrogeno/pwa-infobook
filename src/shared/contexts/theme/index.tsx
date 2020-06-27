import React from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'

import { useStore } from '../../hooks'
import GlobalStyle from '../../styles/global'
import dark from '../../styles/themes/dark'

export const ThemeContext = React.createContext<any>([])

interface PropsI {
  children: React.ReactNode
}

const Provider: React.FC<PropsI> = ({ children }) => {
  const [theme, setTheme] = useStore<DefaultTheme>('theme', dark)
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default Provider
