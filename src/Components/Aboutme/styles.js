import { styled } from "styled-components";
import Creative from "../../assets/creative.png";

/* Estilos para el contenedor de la seccion Aboutme */
export const ContainerAboutme = styled.section`
  width: 100%;
  box-sizing: border-box;
  height: 100vh;
  scroll-snap-align: start;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

/* Estilos para el contendor de presentacion */
export const DivContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    padding: 0 40px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

/* Contenedor para los textos */
export const TextosDiv = styled.div`
  @media (min-width: 768px) {
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ImgCreative = styled.div`
  @media (min-width: 320px) {
    display: none;
  }
  @media (min-width: 768px) {
    width: 200px;
    height: 150px;
    display: block;
    background-image: url(${Creative});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;
