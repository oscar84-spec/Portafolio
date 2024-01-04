import { styled } from "styled-components";
import HeroImg from "../../assets/contacto.jpg";

/* Estilos para el contenedor de la seccion de contacto */
export const ContactoContainer = styled.section`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${HeroImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: calc(50%);
`;

/* Estilos para el contenedor del formulario */
export const FormContainer = styled.div`
  box-sizing: border-box;
  margin-top: 15px;
  padding: 20px;
  height: 420px;
  width: 100%;
`;

/* Estilos para el formulario */
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: #444444 solid 1px;
  padding: 10px;
  border-radius: 20px;
  box-sizing: border-box;
  height: 100%;
`;

export const Label = styled.label`
  font-size: 1rem;
  font-family: "Roboto Condensed", sans-serif;
  color: #0e0606;
`;

export const Input = styled.input`
  height: 30px;
  padding: 5px;
  outline: none;
  border: none;
  border: #444444 solid 1px;
  font-size: 1rem;
  font-family: "Roboto Condensed", sans-serif;
  color: #0e0606;
  background-color: transparent;
`;
export const Mensaje = styled.textarea`
  resize: none;
  height: 70px;
  outline: none;
  font-size: 1rem;
  font-family: "Roboto Condensed", sans-serif;
  color: #0e0606;
  padding: 10px;
  background-color: transparent;
  border-radius: 20px;
`;

export const ContainerSubmit = styled.div`
  width: 100%;
  text-align: center;
`;

export const Submit = styled.input`
  height: 35px;
  width: 100px;
  border-radius: 20px;
  border: none;
  background-color: #ccc;
  font-size: 1rem;
  font-family: "Roboto Condensed", sans-serif;
  color: #0e0606;
`;
