import { Flex, Heading, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"
import AboutInfo from "../components/About/AboutInfo"
const About = ( ) => {
  return(
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity:1}}
      transition={{duration: 1}}
      viewport={{once: true}}
    >
      <Flex 
      direction={'column'} 
      align={{base: 'center', md: 'flex-start'}} 
      maxW={1350} mx={'auto'} 
      my={{base: '24', md: '32'}}
      >
      <Heading 
        my={8} 
        color={'yellow'}
        fontSize={{base: '3xl', md: '8xl'}}
        lineHeight={'10'}

        >
        About me! <br />
        <Text 
          color={'gray.300'} 
          fontSize={{base: '2xl', md: '4xl'}}
          fontWeight={'normal'}
          as={'span'}
          >
            Who I am
        </Text>
      </Heading>
      <AboutInfo />
     
    </Flex>
    </motion.div>
  
  )
}
export default About