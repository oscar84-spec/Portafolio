import { styled } from "styled-components";

/* Contendor del Switch */
export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
`;

/* Estilos para el label */
export const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

/* Estilos para el input */
export const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

/* Estilos para el span */
export const SwitchSpan = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;

  /* Estilos para que aparezca el boton */

  &::before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
  /* Cambia de color el contenedor del switch */
  ${SwitchInput}:checked + & {
    background-color: #2196f3;
    /* Estilos para que al darle click se mueva el boton */
    &::before {
      transform: translateX(26px);
    }
  }
`;
