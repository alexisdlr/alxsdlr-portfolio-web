import React, {Suspense, lazy} from 'react'
import { ChakraProvider, Flex } from '@chakra-ui/react'
import { Oval } from 'react-loader-spinner'

const Home = lazy(() => import('./Layouts/Home'))
const Projects = lazy(() => import('./Layouts/Projects'))
const Skills = lazy(() => import('./Layouts/Skills'))
const About = lazy(() => import('./Layouts/About'))

import theme from '../theme/theme'
import Contact from './Layouts/Contact'
function App() {

  return (
    <ChakraProvider theme={theme}>
      <div className="App">
      
            <Suspense fallback={
                <Flex h={'container.md'} justify={'center'} alignItems={'center'} >
                  <Oval
                  color='#5800FF'
                  secondaryColor='#FFC600'
                  />
                </Flex>
              }>
                <Home />
                <About />
                <Skills />
                <Projects />
                <Contact />


              </Suspense>
              
          
            
        
      </div>
    </ChakraProvider>
    
  )
}

export default App
