import { styled } from "styled-components";

/* Contenedor del Navbar */

export const ContainerNavbar = styled.div`
  width: 100%;
  height: 70px;
  background-color: #2c2c2c;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
`;

/* Container del menu desplegable */

export const EnlacesContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 70px;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 20px;
  text-align: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;
/* Estilos para los links dentro del menu */

export const Enlance = styled.a`
  color: #f1f9f9;
  font-size: 1.2rem;
  font-family: "Roboto Condensed", sans-serif;
  margin: 5px;
`;
