import { useState } from 'react';
import { getAzureComputerVision } from '../../helpers';
import CloudVision from './cloud-vision';

const Image = ({ src }) => {
  const [fetched, setFetched] = useState(false);
  const [azureComputerVisionSuggestion, setAzureComputerVisionSuggestion] = useState('');
  const [chatGTP, setChatGPT] = useState('');

  const getAzureSuggestion = () => {
    setFetched(true);
    getAzureComputerVision(src).then(async (resp) => {
      try {
        const characteristics = resp.tags.map((tag) => tag.name);
        characteristics.push(resp.description.captions[0].text);
        const response = await getOpenAPI(characteristics);
        setChatGPT(response);
        setAzureComputerVisionSuggestion(resp.description.captions[0].text);
      } catch (error) {
        console.log(error);
        setFetched(false);
      }
    });
  };

  return (
    <div>
      <img src={src} alt={chatGTP || ''} style={{ width: '100%' }} />
      {!fetched ? (
        <input
          type="button"
          value="Get Suggestion (Azure)"
          onClick={getAzureSuggestion}
          style={{
            padding: '12px 0',
            color: 'black',
            backgroundColor: 'rgb(118, 248, 176)',
            border: 'none',
            borderRadius: '4px',
            textAlign: 'center',
            cursor: 'pointer',
            width: '100%',
          }}
        />
      ) : (
        <div
          style={{
            borderRadius: '4px',
            border: '1px solid #424242',
            padding: '10px',
          }}
        >
          <h2
            style={{
              color: 'rgb(118, 248, 176)',
              margin: 0,
              textAlign: 'center',
            }}
          >
            Azure
          </h2>
          <p style={{ display: 'flex', alignItems: 'center' }}>
            <b style={{ marginRight: '8px' }}>Suggested: </b>
            {azureComputerVisionSuggestion || <span className="loading-bar small"></span>}
          </p>
          <p style={{ display: 'flex', alignItems: 'center' }}>
            <b style={{ marginRight: '8px' }}>GPT Suggestion: </b>
            {chatGTP || <span className="loading-bar small"></span>}
          </p>
        </div>
      )}
      <CloudVision src={src} />
    </div>
  );
};

export default Image;
