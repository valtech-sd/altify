import { useEffect, useState } from 'react';
import { shape, string } from 'prop-types';

import { getGoogleCloudVision, getOpenAPI } from '../../helpers';
import Card from '../Card';

const propTypes = {
  src: shape({
    image: string.isRequired,
    current: string,
  }),
  password: string,
};

const defaultProps = {
  src: {
    current: null,
  },
  password: null,
};

const CloudVision = ({ src, password, creativity }) => {
  const [loadingSuggestion, setLoadingSuggestion] = useState(false);
  const [loadingChatGPT, setLoadingChatGPT] = useState(false);
  const [cloudVisionResponse, setCloudVisionResponse] = useState(null);
  const [suggestion, setSuggestion] = useState(null);
  const [lightGPTSuggestion, setLightGPTSuggestion] = useState(null);
  const [mediumGPTSuggestion, setMediumGPTSuggestion] = useState(null);
  const [highGPTSuggestion, setHighGPTSuggestion] = useState(null);
  const [chatGTP, setChatGPT] = useState(null);

  function getCloudSuggestion() {
    setLoadingSuggestion(true);
    getGoogleCloudVision(src.image, password).then((resp) => {
      try {
        setSuggestion(resp.join(', '));
        setCloudVisionResponse(resp);
        makeChatGPTRequest(resp);
      } catch (error) {
        console.log(error);
      } finally {
        setLoadingSuggestion(false);
      }
    });
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function makeChatGPTRequest(googleCloudResponse) {
    if (creativity == 0 && lightGPTSuggestion) {
      setChatGPT(lightGPTSuggestion);
      return;
    }
    if (creativity == 0.5 && mediumGPTSuggestion) {
      setChatGPT(mediumGPTSuggestion);
      return;
    }
    if (creativity == 1 && highGPTSuggestion) {
      setChatGPT(highGPTSuggestion);
      return;
    }

    setChatGPT(null);
    setLoadingChatGPT(true);
    const response = await getOpenAPI(googleCloudResponse, password, creativity);
    if (creativity == 0) {
      setLightGPTSuggestion(response);
    }
    if (creativity == 0.5) {
      setMediumGPTSuggestion(response);
    }
    if (creativity == 1) {
      setHighGPTSuggestion(response);
    }
    setChatGPT(response);
    setLoadingChatGPT(false);
  }

  function clear() {
    setLoadingSuggestion(false);
    setSuggestion(null);
    setChatGPT(null);
  }

  useEffect(() => {
    clear();
  }, [src]);

  useEffect(() => {
    if (suggestion) {
      makeChatGPTRequest(cloudVisionResponse);
    }
  }, [cloudVisionResponse, creativity, makeChatGPTRequest, suggestion]);

  return (
    <Card
      src={src}
      onClick={getCloudSuggestion}
      alt=""
      header="Cloud Vision"
      suggestion={suggestion}
      chatGTP={chatGTP}
      loadingSuggestion={loadingSuggestion}
      loadingChatGPT={loadingChatGPT}
    />
  );
};

CloudVision.propTypes = propTypes;
CloudVision.defaultProps = defaultProps;

export default CloudVision;
