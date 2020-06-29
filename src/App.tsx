import React from 'react'
import { ToastContainer } from 'react-toastify'

import ThemeProvider from './shared/contexts/theme'
import Routes from './routes'
import 'react-toastify/dist/ReactToastify.css'

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Routes />
      <ToastContainer />
    </ThemeProvider>
  )
}

export default App
