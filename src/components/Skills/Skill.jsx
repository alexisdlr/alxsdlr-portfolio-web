import { Stack, Image, Flex, Heading, Box } from "@chakra-ui/react";
import { skills } from "./listSkills";


const Skill = () => {
  return(
    <Stack
    spacing={5}
    gap={{base : 2, md: 8}}
    align="center"
    justify={'center'}
    direction={'row'}
    wrap='wrap'
    >
      {skills.map(item => (
        <Flex 
        key={item.id} 
        direction={'column'} 
        gap={5} 
        align={'center'} 
        p={6} 
        _hover={{color: 'yellow',transition: '300ms'}} >
          <Heading color={'gray.100'} fontSize={{base: 'xl', md: '2xl'}} textShadow={'1px 1px 6px #5800FF'} >
            {item.alt}
          </Heading>
          <Box
          p={8} 
          border={'1px solid #fff'} 
          rounded={8} _hover={{
            opacity: .8, 
            border: '1px solid yellow', 
            transition: '300ms',
            boxShadow: '2px 5px 8px yellow',
            transform: 'translateY(-3px)'
            }} 
>
            <Image
            
            maxW={16} 
            rounded='full'
            src={item.image}
            alt={item.alt}
            zIndex={'88'}
            />
          </Box>
         
        </Flex>
      ))}
    </Stack>
  )
}
export default Skill