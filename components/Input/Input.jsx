import PropTypes from 'prop-types';

const defaultProps = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
};

const Input = ({ name, onChange, placeholder, type, value }) => {
  return <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} />;
};

export default Input;
