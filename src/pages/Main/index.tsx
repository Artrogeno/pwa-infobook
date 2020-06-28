import React, { useState, useEffect } from 'react'

import Scanner from './components/Scanner'
import Widget from './components/Widget'
import { Container } from './styles'

const Main = () => {
  const [isbn, setIsbn] = useState<number>()
  const [scanError, setScanError] = useState<string>()

  useEffect(() => {
    if (scanError) {
      console.log(scanError)
    }
  }, [scanError])

  return (
    <Container>
      <Scanner receiveIsbn={setIsbn} receiveError={setScanError} />
      {isbn && <Widget isbn={isbn} />}
    </Container>
  )
}

export default Main
