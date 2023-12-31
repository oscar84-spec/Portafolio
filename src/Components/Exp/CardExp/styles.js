import { styled } from "styled-components";
import Encrip from "../../../assets/encrip.png";
/* Estilos para las tarjetas */
export const DivCard = styled.div`
  width: 100%;
  border: ${({ theme }) => theme.border} solid 1px;
  transition: 0.5s all ease-in;
  box-sizing: border-box;
  border-radius: 20px;
  margin-bottom: 15px;
  @media (min-width: 768px) {
    width: 75%;
    height: 350px;
  }
  @media (min-width: 1024px) {
    width: 30%;
  }
`;

/* Aqui vamos a poner las imagenes */
export const DivImg = styled.div`
  width: 100%;
  height: 150px;
  border-bottom: #444444 solid 1px;
  /* background-image: url(${Encrip}); */
  background-image: url(${(props) => props.$img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  @media (min-width: 768px) {
    height: 250px;
  }
`;

/* Contenedor de los elementos de texto y links */
export const DivElement = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

/* Estilos para los textos */
export const ExpTexto = styled.p`
  font-size: 1rem;
  font-family: "Roboto Condensed", sans-serif;
  /* color: rgba(0, 0, 0, 0.5); */
  color: ${({ theme }) => theme.legend};
  transition: 0.5s all ease-in;
`;

export const ProjectName = styled.p`
  font-size: 0.9rem;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 700;
  color: ${({ theme }) => theme.letra};
  transition: 0.5s all ease-in;
  margin-top: 5px;
`;
/* Estilos para el link */
export const LinkContainer = styled.div`
  width: max-content;
  height: max-content;
  display: flex;
  align-items: center;
  svg {
    color: ${({ theme }) => theme.letra};
    transition: 0.5s all ease-in;
  }
`;

export const LinkGit = styled.a`
  font-size: 0.9rem;
  font-family: "Roboto Condensed", sans-serif;
  color: ${({ theme }) => theme.letra};
  transition: 0.5s all ease-in;
`;

/* Estilos para el Boton */
export const BtnDemo = styled.button`
  width: 100px;
  height: 30px;
  margin-left: 10px;
  margin-bottom: 10px;
  border-radius: 20px;
  border: none;
  font-size: 1rem;
  font-family: "Roboto Condensed", sans-serif;
  background-color: ${({ theme }) => theme.boton};
  transition: 0.5s all ease-in;
  color: #0e0606;
`;
