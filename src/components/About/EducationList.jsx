import { Box } from "@chakra-ui/react";
import { EDUCATION_ITEMS } from "../../constants/about";
import EducationCard from "./EducationCard";

const EducationList = () => (
  <Box
    borderRadius="2xl"
    border="1px solid"
    borderColor="whiteAlpha.100"
    bg="#08080f"
    overflow="hidden"
  >
    {EDUCATION_ITEMS.map((item, index) => (
      <EducationCard
        key={item.id}
        itemId={item.id}
        initials={item.initials}
        grade={item.grade}
        skills={item.skills}
        isLast={index === EDUCATION_ITEMS.length - 1}
      />
    ))}
  </Box>
);

export default EducationList;
