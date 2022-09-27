import { Flex, Heading, Icon } from "@chakra-ui/react"
import { FaMusic } from "react-icons/fa"
import { GrTechnology } from 'react-icons/gr'

const dataIcons = [
  {
    id:1 , icon: FaMusic, text: 'Music'
  },
  {
    id:2 , icon: GrTechnology , text: 'Technology'
  }
 
]

export const Icons = () => {
  return(
    <Flex>
       {dataIcons.map(item => (
      <Flex key={item.id} direction={'column'} justify={'center'} gap={2}>
      <Icon 
          as={item.icon} 
          color={'white'} 
          h={12} w={12} alignSelf={'center'} />
      <Heading 
        as={'h4'}
        fontSize={'xl'}
        fontWeight={'medium'}
      >{item.text}</Heading>
    </Flex>
    ))}
    </Flex>
   
  )
}