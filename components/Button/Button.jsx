import { bool, func, string } from 'prop-types';

import { Button } from './styles';

const propTypes = {
  onClick: func.isRequired,
  header: string.isRequired,
  loading: bool.isRequired,
};

const defaultProps = {
  loading: false,
};

const Input = ({ onClick, header, loading }) => {
  return (
    <Button loading={loading} variant="outlined" onClick={onClick}>
      Generate Tag {header}
    </Button>
  );
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
