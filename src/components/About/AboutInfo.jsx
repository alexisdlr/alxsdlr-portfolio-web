import {
  Image, 
  Text, 
  Box,
  Container,
  Flex
} from '@chakra-ui/react'
import alxs from '../../assets/1.png'


const AboutInfo = () => {
  return(
    <Container 
    rounded={8} 
    bgColor={'rgba(88,0,255,.5)'} 
    backdropFilter='auto' 
    backdropBlur='8px'
    py={8} 
    px={16} 
    textAlign={{base: 'center', md: 'left'}} 
    maxW={'full'} >
      <Flex 
      align={'center'} 
      justify={'center'}
      direction={{base: 'column', md: 'row'}}
      gap={{base: 8, md: 4}}
      >
        <Image
          alt='alexis de leon rodriguez'
          src={alxs}
          maxW={{base: '200px', md: '400px'}}
          rounded={'8'}
          objectFit={'cover'}
          boxShadow={'2px 2px 10px #FFC600'}
         
        />
        <Flex direction={'column'} px={{base: 0, md: 16}}>
          <Box>
            <Text fontSize={{base: '1rem', md: 'xl'}} color={'gray.200'}  >
              Hi! I am Alexis De León a very hardworking Frontend Developer from MX who wants to collaborate in amazing things. <br />

              Why I code? I love coding because since I was a child, everything related to technology has attracted me a lot. That's why I grew up with this attraction and now I find myself learning everything I can about web development. <br />

              My goal is to become an excellent web developer, work from this and be able to make my life easier
            </Text>
          </Box>
        </Flex>
      
      </Flex>
     
    </Container>
  )
}
export default AboutInfo