import {
  useState,
  useEffect,
  useContext,
  Dispatch,
  SetStateAction,
} from 'react'
import { DefaultTheme } from 'styled-components'

import { ThemeContext } from '../contexts/theme'
import dark from '../styles/themes/dark'
import light from '../styles/themes/light'

type Response<T> = [T, Dispatch<SetStateAction<T>>, DefaultTheme]

export default function useTheme<T>(): Response<T> {
  const context = useContext(ThemeContext)
  const [theme, setTheme] = context
  const [type, setType] = useState(theme.title)

  useEffect(() => {
    const handleTheme = () => {
      if (type !== theme.title) {
        setTheme(type === 'light' ? light : dark)
      }
    }
    handleTheme()
  })

  return [type, setType, theme]
}
