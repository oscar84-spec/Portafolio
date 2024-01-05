import { styled } from "styled-components";

/* Estilos para el contenedor de la seccion sobre mi */
export const ContainerSobremi = styled.div`
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    margin-top: 50px;
    padding: 0 40px;
  }
  @media (min-width: 1024px) {
    padding: 0 70px;
  }
  @media (min-width: 1440px) {
    padding: 0 150px;
  }
`;

/* Estilos para el contendor del titulo */
export const DivTitulo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
`;

/* Estilos para el titulo H! */
export const TituloBlur = styled.h1`
  font-size: 2rem;
  font-family: "Archivo Black", sans-serif;
  letter-spacing: 5px;
  color: rgba(0, 0, 0, 0.2);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  filter: blur(2px);
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

/* Estilos para el texto que sera visible */
export const TituloNormal = styled.h3`
  font-size: 1.3rem;
  font-family: "Roboto Condensed", sans-serif;
  color: #0e0606;
  font-weight: 700;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (min-width: 768px) {
    font-size: 1.7rem;
  }
`;

/* Estilos para el parrafo */
export const Parrafo = styled.p`
  font-size: 1rem;
  font-family: "Roboto Condensed", sans-serif;
  text-align: justify;
  margin: 10px 0;
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.3rem;
  }
`;
