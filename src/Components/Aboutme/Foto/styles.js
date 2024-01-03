import { styled } from "styled-components";
import FotoPerfil from "../../../assets/oscar.jpg";

/* Aqui vamos a poner la foto */
export const ContainerFoto = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-image: url(${FotoPerfil});
  background-size: cover;
  background-repeat: no-repeat;
`;
