import { styled } from "styled-components";

/* Contenedor del Icono del Menu */

export const ContainerIcon = styled.div`
  width: 35px;
  height: 35px;
  svg {
    width: 35px;
    height: 35px;
    color: #f1f9f9;
  }
  @media (min-width: 1024px) {
    border: red solid;
    display: none;
  }
`;

/* Estilos para el menu en version desktop */
export const MenuContainer = styled.div`
  width: 500px;
`;
export const LinkLi = styled.li`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-evenly;
  font-size: 1.3rem;
  font-family: "Roboto Condensed", sans-serif;
  color: #f1f9f9;
  cursor: pointer;
`;

export const LinkInterno = styled.a`
  &:hover {
    transition: 0.3s ease-in;
    color: green;
  }
`;

export const DivMenu = styled.div`
  width: 1040px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 1024px) {
    display: none;
  }
`;
export const Nombre = styled.h3`
  font-size: 1.3rem;
  font-family: "Roboto Condensed", sans-serif;
  color: #f1f9f9;
`;
