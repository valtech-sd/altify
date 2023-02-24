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

const Input = ({ onClick, header, loading, disabled, secondary = false, sx }) => {
  return (
    <Button
      loading={loading}
      variant="outlined"
      onClick={onClick}
      disabled={disabled}
      secondary={secondary.toString()}
      sx={sx}
    >
      {header}
    </Button>
  );
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
