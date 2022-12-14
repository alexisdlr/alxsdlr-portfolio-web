import { Flex, Heading, Text} from '@chakra-ui/react'
import Skill from '../components/Skills/Skill'
import { motion } from 'framer-motion'

const Skills = () => {
  return(
    <>
      <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity:1}}
    transition={{duration: 1}}
    viewport={{once: true}}
    > 
       <Flex 
       my={{base: '24', md: '32'}}
       justify={'center'} 
       align={{base: 'center', md:'flex-start'}} 
       direction={'column'}
       id='skills'
       maxW={1350}
       mx={'auto'}
       >
       <Heading 
        color={'yellow'}
        fontSize={{base: '4xl', md: '8xl'}}
        
        >
          Skills
       </Heading>
       <Text my={5} px={{base: 8, md :0}} color='gray.100' textAlign={{base: 'center', md: 'left'}} fontSize={{base: '1.1rem', md: '2xl'}}>
          I am passionate about technology, in my day to day I try to learn new things, in addition, I like to build my projects with different languages ​​/ skills:     
       </Text>
       <Skill />
    </Flex>
    </motion.div>
    </>
   
  )

}
export default Skills