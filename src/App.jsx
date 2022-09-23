import React, {Suspense, lazy} from 'react'
import { ChakraProvider, Flex } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Oval } from 'react-loader-spinner'

const Home = lazy(() => import('./pages/Home'))

import theme from '../theme/theme'
function App() {

  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
          <Route index path="/" element={
              <Suspense fallback={
                <Flex h={'container.md'} justify={'center'} alignItems={'center'} >
                  <Oval
                  color='#5800FF'
                  secondaryColor='#FFC600'
                  />
                </Flex>
              }>
                <Home />

              </Suspense>
            }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </ChakraProvider>
    
  )
}

export default App
