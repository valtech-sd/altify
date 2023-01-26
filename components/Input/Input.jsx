import { string, func, bool } from 'prop-types';

const propTypes = {
  name: string,
  onChange: func,
  placeholder: string,
  type: string,
  value: string,
  disabled: bool,
};

const defaultProps = {
  name: '',
  onChange: () => {},
  placeholder: '',
  type: 'text',
  value: '',
  disabled: false,
}

const Input = ({ name, onChange, placeholder, type, value, disabled }) => {
  return <input type={type} disabled={disabled} name={name} placeholder={placeholder} value={value} onChange={onChange} />;
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
