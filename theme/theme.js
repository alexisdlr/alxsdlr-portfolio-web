import { extendTheme } from '@chakra-ui/react'

// Version 1: Using objects
const theme = extendTheme({
  colors: {
    purple: '#5800FF',
    yellow: '#FFC600',
    black: '#000',
    white: '#fff'
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: '#000114',
        color: '#fff',
        overflowX: 'hidden' 
      },
      // styles for the `a`
   
    },
  },
})
export default theme