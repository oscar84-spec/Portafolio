import { styled } from "styled-components";

/* contenedor con capa oscura */
export const DivContainer = styled.div`
  width: 280px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  @media (min-width: 768px) {
    width: 500px;
  }
`;

/* Estilos para el titulo */
export const Welcome = styled.h2`
  font-size: 1.5rem;
  font-family: "Roboto Condense", sans-serif;
  color: #f1f9f9;
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

/* Estilos para el texto */
export const Texto = styled.p`
  font-size: 1.3rem;
  font-family: "Roboto Condensed", sans-serif;
  color: #f1f9f9;
  margin-top: 15px;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

/* Estilos para el span */
export const TextoSpan = styled.p`
  font-size: 0.8rem;
  font-family: "Roboto Condensed", sans-serif;
  color: #f1f9f9;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`;

/* Estilos para el boton */
export const Boton = styled.button`
  width: 120px;
  margin-top: 25px;
  height: 35px;
  border-radius: 20px;
  background-color: lightgreen;
  border: none;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 0.8rem;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;
