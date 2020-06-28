interface IndustryIdentifyI {
  type: string
  identifier: number
}

interface ReadingModeI {
  text: boolean
  image: boolean
}

interface PanelizationSummaryI {
  containsEpubBubbles: boolean
  containsImageBubbles: boolean
}

interface ImageLinkI {
  smallThumbnail: string
  thumbnail: string
}

interface VolumeInfoI {
  title: string
  subtitle: string
  authors?: string[]
  publisher: string
  publishedDate: number
  description: string
  industryIdentifiers?: IndustryIdentifyI[]
  readingModes?: ReadingModeI
  pageCount: number
  printType: string
  categories?: string[]
  averageRating: number
  ratingsCount: number
  maturityRating: string
  allowAnonLogging: boolean
  contentVersion: string
  panelizationSummary?: PanelizationSummaryI
  imageLinks: ImageLinkI
  language: string
  previewLink: string
  infoLink: string
  canonicalVolumeLink: string
}

interface SaleInfoI {
  country: string
  saleability: string
  isEbook: boolean
}

interface EpubI {
  isAvailable: boolean
}

interface PdfI {
  isAvailable: boolean
}

interface AccessInfoI {
  country: string
  viewability: string
  embeddable: boolean
  publicDomain: boolean
  textToSpeechPermission: string
  epub?: EpubI
  pdf?: PdfI
  webReaderLink: string
  accessViewStatus: string
  quoteSharingAllowed: boolean
}

interface SearchInfoI {
  textSnippet: string
}

export interface BookItemI {
  kind: string
  id: string
  etag: string
  selfLink: string
  volumeInfo: VolumeInfoI
  saleInfo?: SaleInfoI
  accessInfo: AccessInfoI
  searchInfo: SearchInfoI
}

export interface BookI {
  id?: string
  kind?: string
  totalItems: number
  items?: BookItemI[]
}
