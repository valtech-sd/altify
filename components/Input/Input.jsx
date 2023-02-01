import { TextField } from '@mui/material';
import { string, func, bool } from 'prop-types';
import { styled } from '@mui/system';

const propTypes = {
  disabled: bool,
  fullWidth: bool,
  name: string,
  onChange: func,
  placeholder: string,
  type: string,
  value: string,
};

const defaultProps = {
  disabled: false,
  fullWidth: false,
  name: '',
  onChange: () => {},
  placeholder: '',
  type: 'text',
  value: '',
};

const green = 'rgb(118, 248, 176)';

const Field = styled(TextField)({
  '& input:valid + fieldset': {
    borderColor: green,
    borderWidth: 2,
  },
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: green,
    },
  },
  '& input:invalid + fieldset': {
    borderColor: 'red',
    borderWidth: 2,
  },
  '& input:valid:focus + fieldset': {
    borderLeftWidth: 6,
    padding: '4px !important',
    borderColor: green,
  },
});

const Input = ({ name, onChange, placeholder, type, value, disabled, fullWidth }) => {
  return (
    <Field
      sx={{ marginBottom: 3 }}
      type={type}
      disabled={disabled}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      fullWidth={fullWidth}
    />
  );
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
