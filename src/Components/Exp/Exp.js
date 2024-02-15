import { CardExp, ExpSection } from "./styles";
import { TituloContainer } from "../Habilidades/styles";
import { TituloBlur, TituloNormal } from "../Aboutme/Sobremi/styles";
import CardExperiencie from "./CardExp/CardExp";

import Encrip from "../../assets/encrip.png";
import Lista from "../../assets/listas.png";
import Crud from "../../assets/crud.png";
import Decimal from "../../assets/decimal.png";
import Palindromo from "../../assets/palindromo.png";

const Exp = () => {
  return (
    <ExpSection id='exp'>
      <TituloContainer>
        <TituloBlur>EXPERIENCIA</TituloBlur>
        <TituloNormal>Experiencia</TituloNormal>
      </TituloContainer>
      <CardExp>
        <CardExperiencie
          img={Encrip}
          name='Encriptador'
          demo='https://oscar84-spec.github.io/Encriptador/'
          rep='https://github.com/oscar84-spec/Encriptador'
          project='Challenge Alura'
        />
        <CardExperiencie
          img={Lista}
          name='To Do'
          demo='https://oscar84-spec.github.io/Lista-por-hacer/'
          rep='https://github.com/oscar84-spec/Lista-por-hacer'
          project='Challenge Alura'
        />
        <CardExperiencie
          img={Crud}
          name='CRUD'
          demo='https://crud-smoky-gamma.vercel.app/'
          rep='https://github.com/oscar84-spec/CRUD'
          project='Challenge Alura'
        />
        <CardExperiencie
          img={Decimal}
          name='Decimal a Romano'
          demo='https://oscar84-spec.github.io/Decimal-a-Romano/'
          rep='https://github.com/oscar84-spec/Decimal-a-Romano'
          project='Proyecto freeCodeCamp'
        />
        <CardExperiencie
          img={Palindromo}
          name='Palindromo'
          demo='https://oscar84-spec.github.io/Palindromo/'
          rep='https://github.com/oscar84-spec/Palindromo'
          project='Proyecto freeCodeCamp'
        />
      </CardExp>
    </ExpSection>
  );
};
export default Exp;
