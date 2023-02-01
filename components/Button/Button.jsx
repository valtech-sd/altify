import { bool, func, string } from 'prop-types';

import { Button } from './styles';

const propTypes = {
  onClick: func.isRequired,
  header: string.isRequired,
  loading: bool,
  disabled: bool,
};

const defaultProps = {
  loading: false,
  disabled: false,
};

const Input = ({ onClick, header, loading, disabled }) => {
  return (
    <Button loading={loading} variant="outlined" onClick={onClick} disabled={disabled}>
      Generate Tag {header}
    </Button>
  );
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
