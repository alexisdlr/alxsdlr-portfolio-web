import { motion } from "framer-motion";
import ExperienceSection from "../components/Experience/ExperienceSection";

const Experience = () => (
  <motion.div whileInView={{ opacity: [0, 1] }} viewport={{ once: true }}>
    <ExperienceSection sectionId="experience" />
  </motion.div>
);

export default Experience;
