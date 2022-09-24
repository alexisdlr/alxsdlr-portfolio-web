import { Stack } from "@chakra-ui/react"

const HeroContainer = ({children}) => {
  return(
    <Stack 
    minH={{base: '80vh', md: '100vh'}} 
    direction={{ base: 'column-reverse', md: 'row' }} 
    alignItems={'center'} 
    maxW={1500} 
    gap={10}
    mx={'auto'}
    px={4} 
    py={{base: '48', md: '36'}}
    > 
    {children}
    </Stack>
  )
}
export default HeroContainer