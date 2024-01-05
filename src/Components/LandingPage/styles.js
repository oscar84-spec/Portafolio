import { styled } from "styled-components";
import BgImg from "../../assets/alexandru-acea-XEB8y0nRRP4-unsplash.jpg";

/* Seccion para la imagen de fondo */
export const SectionImg = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${BgImg});
  background-position: calc(60%);
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.body};
  transition: 0.5s all ease-in;
`;
/*Capa oscura sobre la imagen de fondo  */

export const CapaOscura = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: relative;
`;
