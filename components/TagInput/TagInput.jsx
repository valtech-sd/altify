import { bool, func, string } from 'prop-types';

import { Paragraph } from './styles';
import Input from '../Input';

const propTypes = {
  onClick: func.isRequired,
  isEditMode: bool,
  header: string.isRequired,
  loading: bool,
  disabled: bool,
  handleInputChange: func.isRequired,
};

const defaultProps = {
  loading: false,
  disabled: false,
};

const TagInput = ({ suggestion, isEditMode, handleInputChange, value }) => {
  return (
    <>
      {isEditMode ? (
        <Input
          autoFocus
          type="text"
          name="image url"
          placeholder="Enter a url"
          value={value}
          onChange={handleInputChange}
          fullWidth
        />
      ) : (
        <Paragraph>{suggestion}</Paragraph>
      )}
    </>
  );
};

TagInput.propTypes = propTypes;
TagInput.defaultProps = defaultProps;

export default TagInput;
