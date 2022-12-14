import { 
  Flex,
  Heading, 
  Text 
   } from '@chakra-ui/react'
import Avatar from './Avatar'
import HeroContainer from './HeroContainer'

const Hero = () => {
  
  return( 
        <HeroContainer>
          <Flex w={'full'} mx={0} align={'center'} justify={'center'} direction='column' gap={8} >
            <Heading fontSize={{ base: '2xl', md: '5xl', lg: '6xl' }} textAlign={'center'}>
              <Text
                as={'span'}
               >
                Hello I'm <Text as='span' color={'purple'}>Alexis De León</Text> a
              </Text>
              <br />{' '}
              <Text color={'yellow'} as={'span'} position={'relative'} _before={{
                content: '""',
                width:'full',
                height: '5px',
                borderRadius: '8px',
                background: 'yellow',
                position: 'absolute',
                bottom: 0
              }}>
                 Web Developer
              </Text>{' '}
              Based in Mexico
            </Heading>
            <Text fontSize={{ base: '1.1rem', md: '2xl'}} color={'gray.100'}>
              I create and code webs, and I love what I do. 
            </Text>
            <Avatar />  
          </Flex>
        </HeroContainer> 
  )
}
export default Hero