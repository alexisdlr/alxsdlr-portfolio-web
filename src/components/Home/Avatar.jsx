import { Box, Image } from "@chakra-ui/react"
import Img from '../../assets/me.png'
const Avatar = () => {
  return(
    <Box>
      <Image
        src={Img}
        alt={'avatar img'}
        rounded='full'
        w='64'
      />
    </Box>
  )
}
export default Avatar