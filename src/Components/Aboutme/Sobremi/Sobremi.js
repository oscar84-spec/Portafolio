import {
  ContainerSobremi,
  DivTitulo,
  TituloBlur,
  TituloNormal,
  Parrafo,
} from "./styles";

const Sobremi = () => {
  return (
    <ContainerSobremi>
      <DivTitulo>
        <TituloBlur>SOBRE MI</TituloBlur>
        <TituloNormal>Sobre Mi</TituloNormal>
      </DivTitulo>
      <Parrafo>
        Soy un joven apasionado por la programación, me gusta hacer las cosas
        creativas y darles un estilo único e increible, también me gustan las
        matemáticas, el pensamiento lógicoy el análisis
      </Parrafo>
    </ContainerSobremi>
  );
};
export default Sobremi;
