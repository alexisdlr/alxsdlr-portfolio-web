import { Flex } from "@chakra-ui/react"
import { IconLink } from "./IconLink"
import Icons from "./Icons"
export const SocialLinks = ({size}) => {
  return(
    <Flex gap={5} my={5}>
      {Icons.map(item => (
        <IconLink
        size={size}
        href={item.href}
        icon={item.icon}
        key={item.id}
        />
      ))}
      
    </Flex>
  )
}