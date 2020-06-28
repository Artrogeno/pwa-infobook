import api from './api'
import { BookI } from '../interfaces/book'

export const validationIsbn = (isbn: string): boolean => {
  if (isbn.length !== 13 || isbn.substr(0, 3) !== '978') return false
  let multiplier = 0
  const isbnDigit = Number(isbn[isbn.length - 1])
  const isbnSum = isbn
    .substring(0, 12)
    .split('')
    .reduce((total, num) => {
      multiplier = multiplier === 1 ? 3 : 1
      return total + Number(num) * multiplier
    }, 0)
  const validDigit = 10 - (isbnSum % 10)
  return isbnDigit === validDigit
}

export const findBook = async (isbn: number) => {
  // const { data } = await api.get(`/v1/volumes?q=isbn:${isbn}`)
  const { data } = await api.get(`/books/${isbn}`)
  const book: BookI = data
  return book
}
