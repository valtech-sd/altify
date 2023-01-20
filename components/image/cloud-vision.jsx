import { useState } from 'react';
import { getGoogleCloudVision, getOpenAPI } from '../../helpers';

const CloudVision = ({ src }) => {
  const [fetched, setFetched] = useState(false);
  const [googleCloudSuggestion, setGoogleCloudSuggestion] = useState(false);
  const [chatGTP, setChatGPT] = useState(false);

  const getCloudSuggestion = async () => {
    setFetched(true);
    getGoogleCloudVision(src).then(async (resp) => {
      try {
        const response = await getOpenAPI(resp);
        setChatGPT(response);
        setGoogleCloudSuggestion(resp.join(', '));
      } catch (error) {
        console.log(error);
        setFetched(false);
      }
    });
  };

  return (
    <div style={{ margin: '10px 0' }}>
      {!fetched ? (
        <input
          type="button"
          value="Get Suggestion (Cloud Vision)"
          onClick={getCloudSuggestion}
          style={{
            padding: '12px 0',
            color: 'black',
            backgroundColor: '#4285F4',
            color: '#fff',
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
              color: '#4285F4',
              margin: 0,
              textAlign: 'center',
            }}
          >
            Google Cloud Vision
          </h2>
          <p style={{ display: 'flex', alignItems: 'center' }}>
            <b style={{ marginRight: '8px' }}>Suggested: </b>
            {googleCloudSuggestion || <span className="loading-bar small"></span>}
          </p>
          <p style={{ display: 'flex', alignItems: 'center' }}>
            <b style={{ marginRight: '8px' }}>GPT Suggestion: </b>
            {chatGTP || <span className="loading-bar small"></span>}
          </p>
        </div>
      )}
    </div>
  );
};

export default CloudVision;
