import { 
  Flex, 
  FormControl, 
  FormLabel, 
  Input, 
  Button,
  Textarea
} from "@chakra-ui/react"
import { useRef } from "react"
import emailjs from '@emailjs/browser'

const ContactForm = () => {
  const form = useRef()
  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_s2m1uop', 'template_c90pell', form.current, 'Kv7g0EJZwiraYrVOF')
    .then((result) => {
        console.log(result.text)
    }, (error) => {
        console.log(error.text)
    })
    alert('Email sended')

  
  }
  return(
    <Flex maxW={'full'} justify={'center'} alignItems={'center'} >
      <form onSubmit={handleSubmit} ref={form} >
      <FormControl mx={'auto'} px={{base: 5, md: 0}} w={{base: 'full' , md: '650px'}}>
        <FormLabel>Name</FormLabel>
        <Input type='text' name="name" />
        <FormLabel>Message</FormLabel>
        <Textarea placeholder='Escribe aqui tu mensaje' name="message" />
        <FormLabel>Email </FormLabel>
        <Input type='email' name="email" />
        <Button
            mt={4}
            bg='purple'
            type='submit'
            _hover={{opacity: .8}}
          >
            Submit
          </Button>
      </FormControl>
      
      </form>
    
    </Flex>
    
  )
}
export default ContactForm