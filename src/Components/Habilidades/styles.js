import { styled } from "styled-components";

/* Estilos para el contenedor de la seccion Skills */
export const SkillSection = styled.section`
  width: 100%;
  height: 100vh;
  padding: 0 20px;
  box-sizing: border-box;
`;

/* Estilos para el contendor del titulo */
export const TituloContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
`;

/* Estilos para el contenedor principal (PADRE) de las CARD */
export const CardContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 15px;
`;
