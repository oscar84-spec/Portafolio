import { styled } from "styled-components";

/* Contenedor del Icono del Menu */

export const ContainerIcon = styled.div`
  width: 35px;
  height: 35px;
  svg {
    width: 35px;
    height: 35px;
    color: ${({ theme }) => theme.letraMenu};
  }
  @media (min-width: 1024px) {
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
  color: ${({ theme }) => theme.letraMenu};
  cursor: pointer;
`;

export const LinkInterno = styled.a`
  &:hover {
    transition: 0.3s ease-in;
    color: ${({ theme }) => theme.hover};
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
  color: ${({ theme }) => theme.letraMenu};
`;
