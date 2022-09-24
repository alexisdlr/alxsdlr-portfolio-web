import { Box, Image } from "@chakra-ui/react"
import avatar from '../../assets/Avatar.png'
const Avatar = () => {
  return(
    <Box>
      <Image
        src={avatar}
        alt={'avatar img'}
        rounded='full'
        w='64'
      />
    </Box>
  )
}
export default Avatar