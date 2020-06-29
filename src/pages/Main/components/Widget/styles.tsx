import styled from 'styled-components'

export const Container = styled.section`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 7rem;
  bottom: 2rem;

  a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 22rem;
  height: 7rem;
  background-color: ${props => props.theme.colors.bgDefault};
  color: ${props => props.theme.colors.fgDefault};
  border-radius: 0.4rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  transition: opacity 0.3 ease-in-out;

  .on & {
    opacity: 1;
  }

  .off & {
    opacity: 0;
  }
`

export const CardImg = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 4rem;
  padding: 1rem;
`

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;
  padding: 1rem;
  margin-left: 0.6rem;
`

export const CardTitle = styled.h4`
  margin-bottom: 0.2rem;
  max-width: 10rem;
  font-size: 1.2rem;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: 0.8rem;
`

export const CardInfo = styled.h3`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Img = styled.img`
  height: auto;
  max-width: 4rem;
`

export const Icon = styled.span`
  padding: 1rem;
  font-size: 1.8rem;
  font-weight: bold;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
`

export const Starts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.6rem;
`

export const Rate = styled.h4`
  margin-left: 0.6rem;
`

export const RateSmall = styled.small`
  font-size: 0.8rem;
  opacity: 0.6;
`

export const Author = styled.h5`
  font-size: 0.8rem;
  font-weight: bold;
`

export const AuthorSmall = styled.small`
  padding-left: 0.4rem;
  font-size: 0.7rem;
  font-weight: 400;
  max-width: 80%;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const Published = styled.h5`
  font-size: 0.8rem;
  font-weight: bold;
`

export const PublishedSmall = styled.small`
  padding-left: 0.4rem;
  font-size: 0.7rem;
  font-weight: 400;
`
