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
  @media (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
  @media (min-width: 1024px) {
    width: 150px;
    height: 150px;
  }
  @media (min-width: 1440px) {
    width: 200px;
    height: 200px;
  }
`;
