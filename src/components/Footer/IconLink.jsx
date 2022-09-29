import { Box, Icon } from "@chakra-ui/react"

export const IconLink = ({icon, href}) => {
  return(
    <Box as="a" href={href} target={'_blank'}>
        <Icon as={icon} h={7} w={7} _hover={{color:'purple', transition: '300ms ease-in-out'}} />
    </Box>
  )
}