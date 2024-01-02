import { DivContainer, Welcome, Texto, TextoSpan, Boton } from "./styles";

const Presentacion = () => {
  return (
    <DivContainer>
      <Welcome>Bienvenid@</Welcome>
      <div>
        <Texto>Soy Oscar Hernández</Texto>
        <TextoSpan>Tultitlán, Edo de México - México</TextoSpan>
      </div>
      <Boton>
        <a href='#'>Empecemos</a>
      </Boton>
    </DivContainer>
  );
};
export default Presentacion;
