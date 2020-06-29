import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    colors: {
      bgBody: string
      fgBody: string
      bgDefault: string
      fgDefault: string
      border: string
      white: string
      black: string
      dark: string
      primary: string
      secundary: string
      warning: string
    }
  }
}
