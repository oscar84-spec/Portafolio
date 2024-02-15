import {
  ContactoContainer,
  FormContainer,
  Form,
  Label,
  Input,
  Mensaje,
  Submit,
  ContainerSubmit,
  TituloContacto,
} from "./styles";
import { TituloContainer } from "../Habilidades/styles";
import { TituloBlur } from "../Aboutme/Sobremi/styles";
/* EmailJS */
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contacto = () => {
  /* EmailJS */
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mm93s3i",
        "template_2ovz1ot",
        form.current,
        "ZdmrK5Wi3erx6ZVv9"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <ContactoContainer id='contacto'>
      <TituloContainer>
        <TituloBlur>CONTACTO</TituloBlur>
        <TituloContacto>Contacto</TituloContacto>
      </TituloContainer>
      <FormContainer>
        <Form ref={form} onSubmit={sendEmail}>
          <Label>Nombre</Label>
          <Input type='text' name='user_name' required />
          <Label>Correo</Label>
          <Input type='email' name='user_email' required />
          <Label>Mensaje</Label>
          <Mensaje name='message' />
          <ContainerSubmit>
            <Submit type='submit' value='Enviar' required />
          </ContainerSubmit>
        </Form>
      </FormContainer>
    </ContactoContainer>
  );
};

export default Contacto;
