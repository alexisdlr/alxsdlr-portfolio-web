import logo from '../../assets/logo.png'
import { Box, Image } from '@chakra-ui/react'
const Logo = ({open}) => {
  return(
    <Box>
      <Image 
      boxSize={{base: 12, md: 20}} 
      position={open ? 'absolute' : 'initial'}
      borderRadius='full' 
      objectFit={'cover'}
      boxShadow={'0px 6px 8px #5800FF'} 
      src={logo} 
      top={6}
      alt='logo' />
    </Box>
  )
}
export default Logo