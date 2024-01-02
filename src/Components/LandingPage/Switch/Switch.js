import {
  SwitchContainer,
  SwitchLabel,
  SwitchInput,
  SwitchSpan,
} from "./styles";

const Switch = () => {
  return (
    <SwitchContainer>
      <SwitchLabel htmlFor='switch'>
        <SwitchInput type='checkbox' id='switch' />
        <SwitchSpan></SwitchSpan>
      </SwitchLabel>
    </SwitchContainer>
  );
};
export default Switch;
