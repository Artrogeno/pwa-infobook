import React, { useEffect } from 'react'
import Quagga from '@ericblade/quagga2'

import { validationIsbn } from '../../../../shared/services/books'
import { Container, Video, ScanMarker, Marker, Info } from './styles'

interface PropsI {
  receiveIsbn: any
  receiveError: any
}

const Scanner: React.FC<PropsI> = ({ receiveIsbn, receiveError }) => {
  let scannerAttemps = 0

  const onDetected = (response: any): void => {
    Quagga.offDetected(onDetected)

    const isbnCode = response.codeResult.code

    if (validationIsbn(isbnCode)) {
      receiveIsbn(isbnCode)
    } else if (scannerAttemps >= 5) {
      receiveError('It is not possible to read the code of the book')
    }
    scannerAttemps++
    Quagga.onDetected(onDetected)
  }

  useEffect(() => {
    const initCamera = () => {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        Quagga.init(
          {
            inputStream: {
              name: 'Live',
              type: 'LiveStream',
              target: '#video',
              constraints: {
                facingMode: 'environment',
              },
            },
            numOfWorkers: 1,
            locate: true,
            decoder: {
              readers: ['ean_reader'],
            },
          },
          (err: any) => {
            if (err) {
              console.error(err)
              return
            }
            Quagga.start()
            Quagga.onDetected(onDetected)
          },
        )
      }
    }

    initCamera()
  })

  return (
    <>
      <Video id="video" />
      <Container>
        <ScanMarker>
          <Marker />
          <Marker />
        </ScanMarker>
        <Info>Point to the book barcode</Info>
      </Container>
    </>
  )
}

export default Scanner
