import React from 'react'

import ThemeProvider from './shared/contexts/theme'
import Routes from './routes'

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  )
}

export default App
