import { func, string, bool } from 'prop-types';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

import { EditIconContainer, ApproveEditContainer, EditedIndicator } from './styles';

const propTypes = {
  isEditingTag: bool,
  setChatGTPEdits: func,
  chatGTPEditsSaved: string,
  toggleIsEditingTag: func,
  setChatGTPEditsSaved: func,
  chatGTPEdits: string,
};

const EditWidget = ({
  isEditingTag,
  setChatGTPEdits,
  chatGTPEditsSaved,
  toggleIsEditingTag,
  setChatGTPEditsSaved,
  chatGTPEdits,
}) => {
  return (
    <EditIconContainer>
      {isEditingTag ? (
        <ApproveEditContainer>
          <CheckIcon
            sx={{ margin: '2px 8px' }}
            onClick={(e) => {
              toggleIsEditingTag(e);
              setChatGTPEditsSaved(chatGTPEdits);
            }}
          />
          <CloseIcon
            sx={{ margin: '2px 8px' }}
            onClick={(e) => {
              toggleIsEditingTag(e);
              setChatGTPEdits(null);
            }}
          />
        </ApproveEditContainer>
      ) : (
        <div
          onClick={(e) => {
            toggleIsEditingTag(e);
          }}
        >
          <EditIcon sx={{ margin: '2px 8px' }} />
          {chatGTPEditsSaved && <EditedIndicator>Edited</EditedIndicator>}
        </div>
      )}
    </EditIconContainer>
  );
};

EditWidget.propTypes = propTypes;

export default EditWidget;
