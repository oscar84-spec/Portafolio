import { styled } from "styled-components";

/* Estilos para el contenedor de los textos */
export const ContainerTexto = styled.div`
  display: flex;
  flex-direction: column;
`;

/* Estilos para el texto de titulo en la presentacion (About me) */
export const TextoTitulo = styled.h2`
  font-size: 1.5rem;
  font-family: "Roboto Condenser", sans-serif;
  color: ${({ theme }) => theme.letra};
  transition: 0.5s all ease-in;
  text-align: justify;
  margin: 15px 0;
  font-weight: 700;
  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

/* Estilos para el texto sobre mi */
export const TextoSobremi = styled.p`
  font-size: 1rem;
  font-family: "Roboto Condensed", sans-serif;
  color: ${({ theme }) => theme.letra};
  transition: 0.5s all ease-in;
  text-align: justify;
  margin: 15px 0;
  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;
