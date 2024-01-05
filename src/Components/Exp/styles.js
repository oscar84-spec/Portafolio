import { styled } from "styled-components";

/* Estilos para el contenedor de la seccion de experiencia */
export const ExpSection = styled.section`
  width: 100%;
  height: max-content;
  box-sizing: border-box;
  @media (min-width: 768px) {
    padding: 0 20px;
  }
`;

/* Estilos para el PADRE de las tarjetas */
export const CardExp = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;
