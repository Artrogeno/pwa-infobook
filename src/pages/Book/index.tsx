import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import img404 from '../../assets/images/404.jpg'
import StarRating from '../../shared/components/StarRating'
import Header from './components/Header'
import { findBook } from '../../shared/services/books'
import { BookItemI } from '../../shared/interfaces/book'
import {
  Container,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Title,
  Subtitle,
  Label,
  LabelSmall,
  LabelLink,
  Info,
  Img,
  Description,
  Text,
  Starts,
  Rate,
  RateSmall,
} from './styles'

const Book = () => {
  let { isbn } = useParams()

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
    <>
      <Header />
      <Container>
        {book && (
          <Card>
            <CardHeader>
              <Title>{book.volumeInfo.title}</Title>
              <Subtitle>{book.volumeInfo.subtitle}</Subtitle>
            </CardHeader>
            <CardBody>
              <Info>
                {book.volumeInfo.imageLinks ? (
                  <Img
                    src={book.volumeInfo.imageLinks.smallThumbnail}
                    alt="book"
                  />
                ) : (
                  <Img src={img404} alt="book" />
                )}
                <Description>
                  {book.volumeInfo.authors && (
                    <Label>
                      Author:
                      {book.volumeInfo.authors.map((author, i) => (
                        <LabelSmall key={i}>
                          {author}{' '}
                          {book.volumeInfo.authors &&
                          book.volumeInfo.authors.length - 1 === i
                            ? ''
                            : ','}
                        </LabelSmall>
                      ))}
                    </Label>
                  )}
                  <Label>
                    Originally published:
                    <LabelSmall>{book.volumeInfo.publishedDate}</LabelSmall>
                  </Label>
                  <Label>
                    Pages:
                    <LabelSmall>{book.volumeInfo.pageCount}</LabelSmall>
                  </Label>
                  {book.volumeInfo.categories && (
                    <Label>
                      Category:
                      {book.volumeInfo.categories.map((category, i) => (
                        <LabelSmall key={i}>
                          {category}{' '}
                          {book.volumeInfo.categories &&
                          book.volumeInfo.categories.length - 1 === i
                            ? ''
                            : ','}
                        </LabelSmall>
                      ))}
                    </Label>
                  )}
                  <Label>
                    Info Link:
                    <LabelLink href={book.volumeInfo.infoLink} target="_blank">
                      link
                    </LabelLink>
                  </Label>
                </Description>
              </Info>
              <Description className="no-p">
                <Text>{book.volumeInfo.description}</Text>
              </Description>
            </CardBody>
            {book.volumeInfo.ratingsCount && (
              <CardFooter>
                <Title>Rate and review</Title>
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
              </CardFooter>
            )}
          </Card>
        )}
      </Container>
    </>
  )
}

export default Book
