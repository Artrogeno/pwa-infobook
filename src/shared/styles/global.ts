import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 0.8rem;
    position: fixed;
    right: 0;
    z-index: 10;
    background: ${props => props.theme.colors.dark};
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 0.18rem grey;
    border-radius: 0.09rem;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.dark};
    border-radius: 0.09rem;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    opacity: 0.8;
    background: ${props => props.theme.colors.dark};
  }


  body {
    font-size: 1.6rem;
    transition: background .6s ease-in-out;
    &.no-scroll {
      overflow: hidden;
    }
  }
`
