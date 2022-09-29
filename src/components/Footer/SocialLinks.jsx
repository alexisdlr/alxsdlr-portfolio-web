import { Flex } from "@chakra-ui/react"
import { IconLink } from "./IconLink"
import Icons from "./Icons"
export const SocialLinks = () => {
  return(
    <Flex gap={5} my={5}>
      {Icons.map(item => (
        <IconLink
        href={item.href}
        icon={item.icon}
        key={item.id}
        />
      ))}
      
    </Flex>
  )
}