import styled from 'styled-components'

export const Container = styled.header`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  top: 0;
  left: 0;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  background-color: ${props => props.theme.colors.bgBody};
  z-index: 10;

  a {
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: ${props => props.theme.colors.fgBody};
    opacity: 0.8;
    transition: all 0.6s ease-in-out;

    &,
    &:focus,
    &:active {
      outline: none;
    }
  }
`
