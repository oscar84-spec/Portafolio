import { styled } from "styled-components";

/* Estilos para el contenedor de la seccion Skills */
export const SkillSection = styled.section`
  width: 100%;
  height: 100vh;
  padding: 0 20px;
  box-sizing: border-box;
  @media (min-width: 768px) {
    padding: 0 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 1024px) {
    padding: 0 150px;
  }
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
  @media (min-width: 768px) {
    width: 500px;
  }
  @media (min-width: 1024px) {
    width: 700px;
  }
`;
