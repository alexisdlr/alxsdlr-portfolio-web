import { Flex, Heading, Box } from "@chakra-ui/react"
import { Icons } from "./Icons"
const Interest = () => {
    return(
      <Flex direction={'column'} justify={'center'} >
        <Heading>
          Interest
        </Heading>
        <Box my={2}>
        <Flex>
          <Icons />
        </Flex>
        </Box>
      </Flex>
    )
}
export default Interest