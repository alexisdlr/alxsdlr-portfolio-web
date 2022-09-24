import logo from '../../assets/logo.png'
import { Box, Image } from '@chakra-ui/react'
const Logo = () => {
  return(
    <Box>
      <Image 
      boxSize={'20'} 
      borderRadius='full' 
      boxShadow={'0px 6px 8px #5800FF'} 
      src={logo} 
      alt='logo' />
    </Box>
  )
}
export default Logo