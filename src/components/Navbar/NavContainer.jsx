import { Flex } from "@chakra-ui/react"
const NavContainer = ({children}) => {
  return(
    <Flex 
    as="nav" 
    px={8} 
    maxW={'100%'} 
    justifyContent={'end'} 
    alignItems='center'
    
    > 
    
    {children}
    </Flex>
  )
}
export default NavContainer
