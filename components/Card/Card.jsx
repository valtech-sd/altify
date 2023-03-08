import { useContext, useState } from 'react';
import { func, string, bool } from 'prop-types';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import Checkbox from '@mui/material/Checkbox';

import { Input, Button, BasicAlertDialog } from '../';
import { StateContext } from '../../context/state';
import { Container, TagLabel, EditIconContainer, ApproveEditContainer, EditedIndicator } from './styles';

const propTypes = {
  chatGTP: string,
  header: string.isRequired,
  loading: bool,
  onClick: func.isRequired,
  suggestion: string,
  unsupported: bool,
};

const defaultProps = {
  chatGTP: null,
  loading: false,
  suggestion: null,
  unsupported: false,
};

const Card = ({ onClick, header, suggestion, chatGTP, loading, unsupported }) => {
  const [isEditingTag, setIsEditingTag] = useState(false);
  const [chatGTPEdits, setChatGTPEdits] = useState(null);
  const [chatGTPEditsSaved, setChatGTPEditsSaved] = useState(null);
  const [detectionEditsSaved, setDetectionEditsSaved] = useState(null);
  const [detectionEdits, setDetectionEdits] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const { state, dispatch } = useContext(StateContext);

  const toggleIsEditingTag = () => setIsEditingTag((value) => !value);
  const handleInputChange = (e) => setChatGTPEdits(e.target.value);
  const toggleShowAlert = () => setShowAlert((value) => !value);

  return (
    <>
      {showAlert && <BasicAlertDialog toggleShowAlert={toggleShowAlert} title="Saved to CMS" buttonText="Close" />}
      <Container>
        <div style={{ flex: 1, display: 'flex' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <TagLabel>{header}</TagLabel>
            <Button
              disabled={unsupported}
              onClick={(e) => {
                setChatGTPEditsSaved(null);
                setChatGTPEdits(null);
                onClick(e);
              }}
              header={`Generate Tags`}
              loading={loading}
              sx={{ marginBottom: '20px', width: '180px' }}
            />
            {chatGTP && !loading && (
              <Button secondary exact="true" onClick={toggleShowAlert} header="Save to CMS" sx={{ width: '180px' }} />
            )}
            {unsupported && (
              <div style={{ color: 'red', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <p style={{ fontSize: 12, margin: 0 }}>Unsupported format: .GIF</p>
              </div>
            )}
          </div>
          <div style={{ flex: 2, flexDirection: 'column', display: 'flex', paddingLeft: '40px' }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <TagLabel>Image Detections</TagLabel>
              {suggestion && (
                <div style={{ margin: '0 0 20px 0' }}>
                  <div
                    style={{
                      flex: 2,
                      alignItems: 'center',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      padding: '0',
                    }}
                  >
                    {isEditingTag ? (
                      <Input
                        name="chatGPT tags"
                        placeholder="Enter a description"
                        multiline
                        value={detectionEdits || detectionEditsSaved || suggestion}
                        onChange={handleInputChange}
                        fullWidth
                        sx={{ background: 'white' }}
                      />
                    ) : (
                      <p style={{ padding: 0, margin: 0 }}>{detectionEditsSaved ?? suggestion}</p>
                    )}

                    <EditIconContainer>
                      {isEditingTag ? (
                        <ApproveEditContainer>
                          <CheckIcon
                            sx={{ margin: '2px 8px' }}
                            onClick={(e) => {
                              toggleIsEditingTag(e);
                              setDetectionEditsSaved(detectionEdits);
                            }}
                          />
                          <CloseIcon
                            sx={{ margin: '2px 8px' }}
                            onClick={(e) => {
                              toggleIsEditingTag(e);
                              setDetectionEdits(null);
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
                          {detectionEditsSaved && <EditedIndicator>Edited</EditedIndicator>}
                        </div>
                      )}
                    </EditIconContainer>
                  </div>
                </div>
              )}
            </div>
            {suggestion && (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 0 }}>
                  <TagLabel>GPT Tag</TagLabel>
                  {!loading && (
                    <Checkbox
                      sx={{ marginTop: 0, position: 'relative', bottom: '9px' }}
                      onChange={(e) => {
                        const isChecked = e.target.checked;
                        if (isChecked) {
                          dispatch({
                            type: 'increaseCounter',
                          });
                        } else {
                          dispatch({
                            type: 'decreaseCounter',
                          });
                        }
                      }}
                    />
                  )}
                </div>
                {loading ? (
                  <div style={{ height: 36 }}>{<div className="loading-bar"></div>}</div>
                ) : (
                  <div
                    style={{
                      flex: 2,
                      alignItems: 'center',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      padding: '0',
                    }}
                  >
                    {isEditingTag ? (
                      <Input
                        name="chatGPT tags"
                        placeholder="Enter a description"
                        multiline
                        value={chatGTPEdits || chatGTPEditsSaved || chatGTP}
                        onChange={handleInputChange}
                        fullWidth
                        sx={{ background: 'white' }}
                      />
                    ) : (
                      <p style={{ padding: 0, margin: 0 }}>{chatGTPEditsSaved ?? chatGTP}</p>
                    )}

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
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
