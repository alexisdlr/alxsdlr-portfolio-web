import {
  Flex,
  Field,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { useTranslation } from "../../i18n/useTranslation";

const ContactForm = () => {
  const { t } = useTranslation();
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
    toast.success(t("contact.success"));
  };

  return (
    <Flex w={{ base: "100%" }} justify="center" alignItems="center">
      <form onSubmit={handleSubmit} ref={form} style={{ width: "100%" }}>
        <Field.Root
          mx="auto"
          pr={{ base: 0, md: 8, "2xl": 0 }}
          w={{ base: "full", "2xl": "650px" }}
        >
          <Field.Label htmlFor="name">{t("contact.name")}</Field.Label>
          <Input my={2} id="name" type="text" name="name" />
          <Field.Label htmlFor="message">{t("contact.message")}</Field.Label>
          <Textarea
            my={2}
            id="message"
            placeholder={t("contact.messagePlaceholder")}
            name="message"
          />
          <Field.Label htmlFor="email">{t("contact.email")}</Field.Label>
          <Input my={2} id="email" type="email" name="email" />
          <Button
            width="full"
            mt={4}
            bg="purple"
            type="submit"
            _hover={{ opacity: 0.8 }}
          >
            {t("contact.submit")}
          </Button>
        </Field.Root>
      </form>
    </Flex>
  );
};
export default ContactForm;
