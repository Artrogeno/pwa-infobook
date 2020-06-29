import styled from 'styled-components'

export const Container = styled.section`
  position: relative;
  padding: 5rem 1rem 1rem 1rem;
`

export const Card = styled.div``

export const CardHeader = styled.div`
  padding-bottom: 1rem;
  border-bottom: 0.01rem solid ${props => props.theme.colors.border};
`

export const CardBody = styled.div`
  padding: 1rem 0;
  border-bottom: 0.01rem solid ${props => props.theme.colors.border};
`

export const CardFooter = styled.div`
  padding: 1rem 0;
`

export const Title = styled.h2`
  line-height: 1.4rem;
  font-weight: 400;
  padding-bottom: 0.8rem;
`

export const Subtitle = styled.h5`
  font-family: var(--font-raleway);
  font-weight: 200;
  padding-bottom: 1.4rem;
`

export const Label = styled.h6`
  font-weight: bold;
  margin-bottom: 0.6rem;
`

export const LabelSmall = styled.small`
  font-size: 0.8rem;
  font-weight: 400;
  font-family: var(--font-raleway);
  margin-left: 0.4rem;
`

export const LabelLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 400;
  font-family: var(--font-raleway);
  margin-left: 0.4rem;
  padding: 0.1rem 0.4rem;
  border-radius: 0.1rem;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
`

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`

export const Img = styled.img`
  width: 8rem;
  height: auto;
`

export const Description = styled.div`
  padding: 0 1rem;
  &.no-p {
    padding: 0;
  }
`

export const Text = styled.p`
  margin: 1rem 0;
  font-size: 0.8rem;
  line-height: 1.2rem;
`

export const Starts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
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
