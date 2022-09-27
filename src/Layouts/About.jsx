import { Flex, Heading } from "@chakra-ui/react"
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
      <Flex direction={'column'} align={'center'} my={16} px={8} >
      <Heading 
        my={4} 
        color={'yellow'}
        fontSize={{base: '4xl', md: '8xl'}}
        >
        About!
      </Heading>
      <AboutInfo />
     
    </Flex>
    </motion.div>
  
  )
}
export default About