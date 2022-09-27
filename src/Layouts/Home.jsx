import { Box } from '@chakra-ui/react'
import Hero from '../components/Home/Hero'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar/Navbar'

const Home = () => {
  return(
    <Box>
      <Navbar />
      <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity:1}}
      transition={{duration: 1}}
      viewport={{once: false}}
      >
        <Hero />
      </motion.div>
    </Box>
  )
}
export default Home