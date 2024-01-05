import {
  SwitchContainer,
  SwitchLabel,
  SwitchInput,
  SwitchSpan,
} from "./styles";
import { useState } from "react";

const Switch = ({ theme, setTheme }) => {
  /* Funcion para cambiar de modo */
  const changeMode = () => {
    if (theme === "light") {
      toogleSwitch();
      setTheme("dark");
    } else {
      toogleSwitch();
      setTheme("light");
    }
  };
  const [switchOn, setSwitchOn] = useState(false);

  const toogleSwitch = () => {
    setSwitchOn(!switchOn);
  };
  return (
    <SwitchContainer>
      <SwitchLabel htmlFor='switch'>
        <SwitchInput
          type='checkbox'
          id='switch'
          checked={switchOn}
          onChange={changeMode}
        />
        <SwitchSpan></SwitchSpan>
      </SwitchLabel>
    </SwitchContainer>
  );
};
export default Switch;
