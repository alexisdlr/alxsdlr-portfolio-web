import { Flex, Heading, Text} from '@chakra-ui/react'
import Skill from '../components/Skills/Skill'
import { motion } from 'framer-motion'


const Skills = () => {
  return(
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity:1}}
    transition={{duration: 1}}
    viewport={{once: false}}
    >
       <Flex my={4} justify={'center'} align={'center'} direction={'column'}>
       <Heading 
        color={'yellow'}
        fontSize={{base: '2xl', md: '8xl'}}>
          Skills
       </Heading>
       <Text my={5} color='gray.100'>
        I like built my projects with this diferents Languages/Skills
       </Text>
       <Skill />
    </Flex>
    </motion.div>
  )

}
export default Skills