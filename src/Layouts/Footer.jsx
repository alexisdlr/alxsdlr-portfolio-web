import { Flex, Box, Heading, Text } from "@chakra-ui/react"
import { SocialLinks } from "../components/Footer/SocialLinks"

const Footer = () => {
  return(
    <Flex
      direction={{base:'column', md: 'row'}} 
      align={'center'} 
      justify={'space-between'}
      maxW={1350} 
      mx={'auto'} 
      gap={4}
      as={'section'}
    >
      <Box>
      <Heading 
        px={{base: 8, md :0}}
        color={'yellow'}
        fontSize={{base: '2xl', md: '4xl'}}
        as={'h2'}
        lineHeight={'10'}
        my={{base: 0, md: 8}}
            >
            Alexis De León Rodriguez<br />
            <Text 
            color={'gray.400'} 
            fontSize={{base: 'xl', md: '3xl'}}
            fontWeight={'light'}
            as={'span'}
            >
              Web developer.
            </Text>
          </Heading>
      </Box>
      <SocialLinks />
      <Box mb={{base: 4, md: 0}}>
        Made with ❤ by Alexis De Leon © 2022
      </Box>
    </Flex>
  )
}
export default Footer