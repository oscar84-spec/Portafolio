import { styled } from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  margin-top: 100px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: #444444 solid 1px;
  @media (min-width: 768px) {
    padding: 20px 40px;
  }
`;

/* Estilos para el Titulo del footer */
export const TextoFooter = styled.p`
  font-size: 1.2rem;
  font-family: "Roboto Condensed", sans-serif;
  color: #0e0606;
`;

export const TextoSpan = styled.span`
  font-weight: 700;
`;

export const Iconos = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  svg {
    width: 25px;
    height: 25px;
    color: rgba(0, 0, 0, 0.5);
  }
  @media (min-width: 768px) {
    width: 50%;
  }
`;
