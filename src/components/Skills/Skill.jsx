import { Stack, Box, Button, Flex } from "@chakra-ui/react";
import { skills } from "./listSkills";
import ItemSkill from "./ItemSkill";
import { useCallback, useState } from "react";

const Skill = () => {
  const [cat, setCat] = useState("Frontend");
  const [selected, SetSelected] = useState(false);

  
  const handleClick = useCallback(
    (e) => {
      setCat(e.target.value);
    },
    [setCat]
  );

  return (
    <Stack
      gap={{ base: 2, md: 4 }}
      align="center"
      justify={"center"}
      direction={{base: 'column', md: 'row'}}
      px={{base: 0, md: 40}}
    >
      <Box alignSelf={{md: 'start'}}>
        <Box as="ul" listStyleType={"none"} display={'flex'} flexDirection={{base: 'row', md: 'column'}}>
          <li>
            <Button
              w={"120px"}
              backgroundColor={"transparent"}
              textColor={"lightgray"}
              mt={6}
              borderRadius={0}
              borderLeft={{base: 0 , md: `2px solid ${selected ? 'purple' : 'lightgray'}`}}
              onClick={handleClick}
              _hover={{
                opacity: 0.7,
              }}
              value={"Frontend"}
            >
              Frontend
            </Button>
          </li>
          <li>
            <Button
              w={"120px"}
              backgroundColor={"transparent"}
              textColor={"lightgray"}
              mt={6}
              borderRadius={0}
              borderLeft={{base: 0 , md: `2px solid ${selected ? 'purple' : 'lightgray'}`}}
              onClick={handleClick}
              _hover={{
                opacity: 0.7,
              }}
              value={"Backend"}
            >
              Backend
            </Button>
          </li>
          <li>
            <Button
              w={"120px"}
              borderRadius={0}
              textColor={"lightgray"}
              borderLeft={{base: 0 , md: `2px solid ${selected ? 'purple' : 'lightgray'}`}}
              backgroundColor={"transparent"}
              mt={6}
              onClick={handleClick}
              _hover={{
                opacity: 0.7,
              }}
              value={"Tools"}
            >
              Tools
            </Button>
          </li>
        </Box>
      </Box>
        <Flex gap={{ base: 2, md: 4 }} align="center" justify={"center"} wrap='wrap'>
          {skills
            .filter((item) => item.cat === cat)
            .map((item) => (
              <ItemSkill item={item} key={item.id} />
            ))}
        </Flex>
    </Stack>
  );
};
export default Skill;
