import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Container } from './styles'

interface Props {
  rating: number
  averageRating?: number
}

const StarRating: React.FC<Props> = ({ rating, averageRating }) => {
  const [stars, setStars] = useState<any[]>([])

  useEffect(() => {
    if (rating) {
      const _starts = []
      for (let i = 1; i <= Math.round(rating); i++) {
        if (i === Math.round(rating)) {
          if (Number(rating) === rating && rating % 1 !== 0) {
            _starts.push(['fas', 'star-half-alt'])
          } else {
            _starts.push(['fas', 'star'])
          }
        } else {
          _starts.push(['fas', 'star'])
        }
      }

      if (averageRating) {
        if (_starts.length < averageRating) {
          const len = averageRating - _starts.length
          for (let i = 0; i < len; i++) {
            _starts.push(['far', 'star'])
          }
        }
      }
      setStars(_starts)
    }
  }, [rating, averageRating])

  return (
    <Container>
      {stars.map((item, index) => (
        <FontAwesomeIcon icon={item} key={index} />
      ))}
    </Container>
  )
}

export default StarRating
