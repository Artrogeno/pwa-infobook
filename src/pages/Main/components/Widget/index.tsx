import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import StarRating from '../../../../shared/components/StarRating'
import { findBook } from '../../../../shared/services/books'
import { BookItemI } from '../../../../shared/interfaces/book'
import {
  Container,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardDescription,
  CardInfo,
  Starts,
  Rate,
  RateSmall,
  Img,
  Author,
  AuthorSmall,
  Published,
  PublishedSmall,
} from './styles'

interface PropsI {
  isbn?: number
}

const Widget: React.FC<PropsI> = ({ isbn }) => {
  const [book, setBook] = useState<BookItemI>()

  useEffect(() => {
    const loadBook = async () => {
      if (isbn) {
        const response = await findBook(isbn)
        if (response.totalItems > 0) {
          if (response.items && response.items.length > 0) {
            setBook(response.items[0])
          }
        }
      }
    }
    loadBook()
  }, [isbn])

  return (
    <Container className={`${isbn ? 'on' : 'off'}`}>
      {book && (
        <Link to={`/book/${isbn}`}>
          <Card>
            <CardImg>
              <Img src={book.volumeInfo.imageLinks.smallThumbnail} alt="book" />
            </CardImg>
            <CardBody>
              <CardTitle>{book.volumeInfo.title}</CardTitle>
              <Starts>
                <StarRating
                  rating={book.volumeInfo.ratingsCount}
                  averageRating={book.volumeInfo.averageRating}
                />
                <Rate>
                  {book.volumeInfo.ratingsCount}
                  <RateSmall>/{book.volumeInfo.averageRating}</RateSmall>
                </Rate>
              </Starts>
              <CardDescription>
                {book.volumeInfo.authors ? (
                  <Author>
                    {book.volumeInfo.authors.length > 1 ? 'Authors' : 'Author'}:
                    {book.volumeInfo.authors.map((author, i) => (
                      <AuthorSmall key={i}>{author}</AuthorSmall>
                    ))}
                  </Author>
                ) : null}
                <Published>
                  Originally published:
                  <PublishedSmall>
                    {book.volumeInfo.publishedDate}
                  </PublishedSmall>
                </Published>
              </CardDescription>
            </CardBody>
            <CardInfo>
              <FontAwesomeIcon icon={['fas', 'chevron-right']} />
            </CardInfo>
          </Card>
        </Link>
      )}
    </Container>
  )
}

export default Widget
