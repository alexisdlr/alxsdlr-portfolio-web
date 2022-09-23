import { Flex,Heading, Text, Stack, Button } from '@chakra-ui/react'
const Hero = () => {
  return(
      <Stack 
      minH={{base: '80vh', md: '100vh'}} 
      direction={{ base: 'column-reverse', md: 'row' }} 
      alignItems={'center'} 
      maxW={1500} 
      gap={10}
      mx={'auto'}
      px={4} 
      py={'32'}
      >
        <Flex w={'full'} mx={0} align={'center'} justify={'center'} direction='column' gap={8} >
            <Heading fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }} textAlign={'center'}>
              <Text
                as={'span'}
               >
                Hello I'm <Text as='span' color={'purple'}>Alexis De León</Text> a
              </Text>
              <br />{' '}
              <Text color={'purple'} as={'span'}>
                 Front end Developer
              </Text>{' '}
              Based in Mexico
            </Heading>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                rounded={'full'}
                bg={'purple'}
                color={'white'}
                fontWeight={'bold'}
                _hover={{
                  opacity: .8
                }}>
                  Get started!
              </Button>
          </Stack>
        </Flex>
       
      </Stack>
  )
}
export default Hero