import { Stack, Image, Flex, Heading, Box, Text } from "@chakra-ui/react";
import { skills } from "./listSkills";
import ItemSkill from "./ItemSkill";


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
    <Box>
      <ul>
        <li>Frontend</li>
        <li>Backend</li>
        <li>Tools</li>
      </ul>
    </Box>
    {skills.map(item => (
       <ItemSkill item={item} />
      ))}
    </Stack>
  )
}
export default Skill