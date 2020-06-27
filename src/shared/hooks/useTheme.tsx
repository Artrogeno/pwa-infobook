import { useContext, Dispatch, SetStateAction } from 'react'

import { ThemeContext } from '../contexts/theme'

type Response<T> = [T, Dispatch<SetStateAction<T>>]

export default function useTheme<T>(): Response<T> {
  const context = useContext(ThemeContext)
  const [theme, setTheme] = context
  return [theme, setTheme]
}
