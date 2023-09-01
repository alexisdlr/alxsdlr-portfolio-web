import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import ToasterProvider from "../ToasterProvider";

const ContactForm = () => {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_s2m1uop",
        "template_c90pell",
        form.current,
        "Kv7g0EJZwiraYrVOF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    toast.success("Email sended");
  };
  return (
    <Flex w={{base: "100%"}} justify={"center"} alignItems={"center"}>
      <ToasterProvider />
      <form onSubmit={handleSubmit} ref={form} style={{ width: "100%" }}>
        <FormControl mx={"auto"} pr={{base: 0, md: 8, "2xl": 0}} w={{ base: "full", "2xl": "650px" }}>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input my={2} id="name" type="text" name="name" />
          <FormLabel htmlFor="message">Message</FormLabel>
          <Textarea
            my={2}
            id="message"
            placeholder="Escribe aqui tu mensaje"
            name="message"
          />
          <FormLabel htmlFor="email">Email </FormLabel>
          <Input my={2} id="email" type="email" name="email" />
          <Button
            width={"full"}
            mt={4}
            bg="purple"
            type="submit"
            _hover={{ opacity: 0.8 }}
          >
            Submit
          </Button>
        </FormControl>
      </form>
    </Flex>
  );
};
export default ContactForm;
