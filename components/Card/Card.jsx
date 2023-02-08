import { func, string, bool } from 'prop-types';
import { useState } from 'react';

import Button from '../Button';
import EditButton from '../EditButton';
import TagInput from '../TagInput';
import { Container, TagLabel } from './styles';

const propTypes = {
  chatGTP: string,
  header: string.isRequired,
  loading: bool,
  onClick: func.isRequired,
  onUpdateSuggestions: func.isRequired,
  suggestion: string,
  unsupported: bool,
};

const defaultProps = {
  chatGTP: null,
  loading: false,
  suggestion: null,
  unsupported: false,
};

const Card = ({
  onClick,
  header,
  suggestion,
  chatGTP,
  loading,
  unsupported,
  handleInputChange,
  onUpdateSuggestions,
}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [updatedSuggestion, setUpdatedSuggestion] = useState('');

  return (
    <Container>
      <div style={{ flex: 1 }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <Button
              disabled={unsupported}
              onClick={() => {
                setIsEditMode(false);
                onClick();
              }}
              header={`${suggestion ? 'Regenerate' : 'Generate'} Tag (${header})`}
              loading={loading}
            />
            {suggestion && !loading && (
              <EditButton
                disabled={unsupported}
                onClick={() => {
                  if (isEditMode) {
                    setIsEditMode(false);
                    onUpdateSuggestions(updatedSuggestion);
                  } else {
                    setIsEditMode(true);
                  }
                }}
                header={`${isEditMode ? 'Save' : 'Edit'} Tags (${header})`}
                loading={loading}
                isEditMode={isEditMode}
              />
            )}
            {unsupported && (
              <div style={{ color: 'red', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <p style={{ fontSize: 12, margin: 0 }}>Unsupported format: .GIF</p>
              </div>
            )}
          </div>
          <div style={{ flex: 2, flexDirection: 'column', display: 'flex' }}>
            <div style={{ flex: 2, alignItems: 'center', display: 'flex' }}>
              <TagLabel>{header} Tag:&nbsp;</TagLabel>
              {suggestion && (
                <TagInput
                  suggestion={suggestion}
                  isEditMode={isEditMode}
                  handleInputChange={(e) => {
                    setUpdatedSuggestion(e.target.value);
                  }}
                  value={updatedSuggestion ? updatedSuggestion : suggestion}
                />
              )}
            </div>
            {chatGTP && (
              <div style={{ flex: 2, alignItems: 'center', display: 'flex' }}>
                <TagLabel>GPT Tag:&nbsp;</TagLabel>
                {chatGTP && <p>{chatGTP}</p>}
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
