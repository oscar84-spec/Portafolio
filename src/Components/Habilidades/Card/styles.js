import { styled } from "styled-components";

/* Estilos para las card */
export const Card = styled.div`
  width: 130px;
  height: 150px;
  border: #444444 solid 1px;
  border-radius: 20px;
  box-sizing: border-box;
  margin: 10px 0;
`;

/* Estilos para el contenedor del titulo */
export const TitleContainer = styled.div`
  width: 100%;
  height: 35px;
  border-bottom: #444444 solid 1px;
  box-sizing: border-box;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e54c21;
  background-color: ${(props) => (props.color ? props.color : "#f1f9f9")};
`;
/* Estilos para los elementos dentro de las tarjetas */
export const TituloSkill = styled.h2`
  font-size: 1.2rem;
  font-family: "Roboto Condensed";
  color: #0e0606;
`;

/* Estilos para el contenedor de los iconos */
export const IconContainer = styled.div`
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 60px;
    height: 60px;
    color: ${(props) => (props.color ? props.color : "#444444")};
  }
`;
