import { Flex, Heading, Text} from '@chakra-ui/react'
import Skill from '../components/Skills/Skill'
import { motion } from 'framer-motion'


const Skills = () => {
  return(
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity:1}}
    transition={{duration: 1}}
    viewport={{once: true}}
    >
       <Flex 
       my={4} 
       justify={'center'} 
       align={'center'} 
       direction={'column'}
       id='skills'
       >
       <Heading 
        color={'yellow'}
        fontSize={{base: '4xl', md: '8xl'}}>
          Skills
       </Heading>
       <Text my={5} px={{base: 8, md :40}} color='gray.100' textAlign={'center'} fontSize={{base: '1.1rem', md: '2xl'}}>
          I am passionate about technology, in my day to day I try to learn new things, in addition, I like to build my projects with different languages ​​/ skills      
       </Text>
       <Skill />
    </Flex>
    </motion.div>
  )

}
export default Skills