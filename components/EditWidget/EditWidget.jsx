import { func, string, bool } from 'prop-types';
import EditIcon from '@mui/icons-material/Edit';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

import { EditIconContainer, ApproveEditContainer, EditedIndicator } from './styles';

const propTypes = {
  isEditing: bool,
  setEdits: func,
  editsSaved: string,
  toggleIsEditing: func,
  setEditsSaved: func,
  edits: string,
};

const EditWidget = ({ isEditing, setEdits, editsSaved, toggleIsEditing, setEditsSaved, edits, clearGPT }) => {
  return (
    <EditIconContainer>
      {isEditing ? (
        <ApproveEditContainer>
          <CheckIcon
            sx={{ margin: '2px 8px' }}
            onClick={(e) => {
              toggleIsEditing(e);
              setEditsSaved(edits);
            }}
          />
          <CloseIcon
            sx={{ margin: '2px 8px' }}
            onClick={(e) => {
              toggleIsEditing(e);
              setEdits(null);
            }}
          />
        </ApproveEditContainer>
      ) : (
        <div
          onClick={(e) => {
            toggleIsEditing(e);
          }}
        >
          <EditIcon sx={{ margin: '2px 8px' }} />
          {editsSaved && <EditedIndicator>Edited</EditedIndicator>}
          {clearGPT && (
            <RestartAltIcon
              onClick={() => {
                toggleIsEditing();
                clearGPT();
                setEdits(null);
                setEditsSaved(null);
              }}
              sx={{ margin: '2px 8px' }}
            />
          )}
        </div>
      )}
    </EditIconContainer>
  );
};

EditWidget.propTypes = propTypes;

export default EditWidget;
