import { Input as StyledInput } from './styles';

const Input = ({ onClick, header }) => {
  return <StyledInput type="button" value={`Get Suggestion (${header})`} onClick={onClick} />;
};

export default Input;
