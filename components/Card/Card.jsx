import { useEffect, useState } from 'react';
import { func, string, bool } from 'prop-types';

import { Input, Button, BasicAlertDialog } from '../';
import { Container, TagLabel, Label, SelectStyles } from './styles';
import EditWidget from '../EditWidget/EditWidget';
import { FormControl, MenuItem, Select } from '@mui/material';

const propTypes = {
  chatGTP: string,
  header: string.isRequired,
  loading: bool,
  onClick: func.isRequired,
  suggestion: string,
  unsupported: bool,
  creativity: string,
  updateDetections: func,
};

const defaultProps = {
  chatGTP: null,
  loading: false,
  suggestion: null,
  unsupported: false,
};

const options = [
  { value: '0', label: 'Light' },
  { value: '0.5', label: 'Medium' },
  { value: '1', label: 'High' },
];

const Card = ({
  onClick,
  suggestion,
  chatGTP,
  loading,
  unsupported,
  creativity,
  handleChange,
  updateDetections,
  clearGPT,
}) => {
  const [isEditingTag, setIsEditingTag] = useState(false);
  const [chatGTPEdits, setChatGTPEdits] = useState(null);
  const [chatGTPEditsSaved, setChatGTPEditsSaved] = useState(null);

  const [isEditingDetection, setIsEditingDetection] = useState(false);
  const [detectionEdits, setDetectionEdits] = useState(null);
  const [detectionEditsSaved, setDetectionEditsSaved] = useState(null);

  const [showAlert, setShowAlert] = useState(false);

  const toggleIsEditingTag = () => setIsEditingTag((value) => !value);
  const toggleIsEditingDetection = () => setIsEditingDetection((value) => !value);
  const handleGPTInputChange = (e) => setChatGTPEdits(e.target.value);
  const handleDetectionInputChange = (e) => setDetectionEdits(e.target.value);
  const toggleShowAlert = () => setShowAlert((value) => !value);

  const onUpdateDetections = () => {
    setDetectionEditsSaved(detectionEdits);
    updateDetections(detectionEdits);
  };

  useEffect(() => {
    setChatGTPEdits(null);
    setChatGTPEditsSaved(null);
  }, [creativity]);

  return (
    <>
      {showAlert && <BasicAlertDialog toggleShowAlert={toggleShowAlert} title="Saved to CMS" buttonText="Close" />}
      <Container>
        <div style={{ flex: 1, display: 'flex' }}>
          <div style={{ flex: 2, flexDirection: 'column', display: 'flex' }}>
            {loading && !suggestion ? (
              <div style={{ justifyContent: 'center', display: 'flex', padding: '40px 0' }}>
                <div className="loading-bar"></div>
              </div>
            ) : (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '20px' }}>
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
                      {isEditingDetection ? (
                        <Input
                          name="Image tags"
                          placeholder="Enter a description"
                          multiline
                          value={
                            detectionEdits !== null
                              ? detectionEdits
                              : detectionEditsSaved !== null
                              ? detectionEditsSaved
                              : suggestion
                          }
                          onChange={handleDetectionInputChange}
                          fullWidth
                          sx={{ background: 'white' }}
                        />
                      ) : (
                        <p style={{ padding: 0, margin: 0 }}>{detectionEditsSaved || suggestion}</p>
                      )}
                      <EditWidget
                        isEditing={isEditingDetection}
                        toggleIsEditing={toggleIsEditingDetection}
                        edits={detectionEdits}
                        editsSaved={detectionEditsSaved}
                        setEdits={setDetectionEdits}
                        setEditsSaved={onUpdateDetections}
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

            {suggestion && (
              <div
                style={{
                  borderTop: '1px solid #909EB0',
                  padding: '20px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    paddingTop: 0,
                  }}
                >
                  {' '}
                  {suggestion && (
                    <>
                      <div style={{ display: 'flex' }}>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            width: '100%',
                            justifyContent: 'space-between',
                          }}
                        >
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'row',
                            }}
                          >
                            <Label>GPT Creativity Level</Label>
                            <FormControl sx={{ width: 120 }}>
                              <Select
                                labelId="creativity-select-label"
                                id="creativity-select"
                                value={creativity}
                                onChange={handleChange}
                                sx={SelectStyles}
                              >
                                {options.map((option) => (
                                  <MenuItem key={option.label} value={option.value}>
                                    {option.label}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </div>
                          <Button
                            disabled={unsupported}
                            onClick={(e) => {
                              setChatGTPEditsSaved(null);
                              setChatGTPEdits(null);
                              onClick(e);
                            }}
                            header={`Generate Alt Tag`}
                            loading={loading}
                            sx={{ marginBottom: '20px', width: '180px' }}
                          />
                        </div>
                      </div>
                      {loading ? (
                        <div style={{ justifyContent: 'center', display: 'flex', padding: '20px 0' }}>
                          {<div className="loading-bar"></div>}
                        </div>
                      ) : (
                        <div
                          style={{
                            flex: 2,
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '20px 0',
                          }}
                        >
                          {isEditingTag ? (
                            <Input
                              name="chatGPT tags"
                              placeholder="Enter an alt tag"
                              multiline
                              value={
                                chatGTPEdits !== null
                                  ? chatGTPEdits
                                  : chatGTPEditsSaved !== null
                                  ? chatGTPEditsSaved
                                  : chatGTP
                              }
                              onChange={handleGPTInputChange}
                              fullWidth
                              sx={{ background: 'white' }}
                            />
                          ) : (
                            <p style={{ padding: 0, margin: 0 }}>{chatGTPEditsSaved ?? chatGTP}</p>
                          )}
                          {chatGTP && (
                            <EditWidget
                              isEditing={isEditingTag}
                              toggleIsEditing={toggleIsEditingTag}
                              edits={chatGTPEdits}
                              editsSaved={chatGTPEditsSaved}
                              setEdits={setChatGTPEdits}
                              setEditsSaved={setChatGTPEditsSaved}
                              clearGPT={clearGPT}
                            />
                          )}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
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
