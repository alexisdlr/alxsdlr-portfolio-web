import { Stack, Image, Flex, Heading, Box, Text } from "@chakra-ui/react";
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
          position={'relative'}
          p={8}
          overflow={'hidden'}
          border={'1px solid GrayText'} 
          rounded={8} _hover={{
            border: '1px solid yellow', 
            transition: '300ms',
            boxShadow: '0px 15px 15px -15px yellow'
            }} 
>
            <Image 
            maxW={32} 
            rounded='full'
            src={item.image}
            alt={item.alt}
            zIndex={'88'}
            transition={'300ms ease-in-out'}
            />
            <Text
            w={'100%'} 
            h={'100%'}
            mx={'auto'}
            bg={'black'}
            transform={'translateY(10px)'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            position={'absolute'}
            top={'0'}
            left={'0'}
            p={2}
            fontSize={'12px'}
            textAlign={'center'}
            color={'yellow'}
            fontWeight={'400'}
            letterSpacing={'2px'}
            opacity={'0'}
            transition={'all 0.3s ease'}
            _hover={{opacity: 1, maxHeight: '100%', transform: 'translateY(0px)'}}
            >
              {item.desc}
            </Text>
          </Box>
         
        </Flex>
      ))}
    </Stack>
  )
}
export default Skill