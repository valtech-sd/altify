import { useEffect, useState } from 'react';
import { shape, string } from 'prop-types';

import { getAzureComputerVision, getOpenAPI } from '../../helpers';
import Card from '../Card';

const propTypes = {
  src: shape({
    image: string.isRequired,
    current: string,
  }),
};

const defaultProps = {
  src: {
    current: null,
  },
};

const Azure = ({ src, password, creativity }) => {
  const [loading, setLoading] = useState(false);
  const [characteristics, setCharacteristics] = useState(null);
  const [suggestion, setSuggestion] = useState(null);
  const [lightGPTSuggestion, setLightGPTSuggestion] = useState(null);
  const [mediumGPTSuggestion, setMediumGPTSuggestion] = useState(null);
  const [highGPTSuggestion, setHighGPTSuggestion] = useState(null);
  const [chatGTP, setChatGPT] = useState(null);

  function getAzureSuggestion() {
    setLoading(true);
    setChatGPT(null);
    getAzureComputerVision(src.image)
      .then((resp) => {
        try {
          const characteristics = resp.tags.map((tag) => tag.name);
          characteristics.push(resp.description.captions[0].text);
          setSuggestion(resp.description.captions[0].text);
          setCharacteristics(characteristics);
          makeChatGPTRequest(characteristics);
        } catch (error) {
          setLoading(false);
          alert(error.message);
        }
      })
      .catch((error) => {
        setLoading(false);
        alert(error.message);
      });
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function makeChatGPTRequest(characteristics) {
    setChatGPT(null);
    setLoading(true);
    const response = await getOpenAPI(characteristics, password, creativity);
    if (creativity == 0) {
      setLightGPTSuggestion(response);
    }
    if (creativity == 0.5) {
      setMediumGPTSuggestion(response);
    }
    if (creativity == 1) {
      setHighGPTSuggestion(response);
    }
    setChatGPT(response.trim());
    setLoading(false);
  }

  function clear() {
    setLoading(false);
    setSuggestion(null);
    setChatGPT(null);
  }

  function isUnSupported(image) {
    return image.endsWith('.gif');
  }

  useEffect(() => {
    clear();
  }, [src]);

  useEffect(() => {
    if (suggestion) {
      makeChatGPTRequest(characteristics);
    }
  }, [creativity]);

  return (
    <Card
      onClick={getAzureSuggestion}
      alt=""
      header="Azure Computer Vision"
      suggestion={suggestion}
      chatGTP={chatGTP}
      loading={loading}
      unsupported={isUnSupported(src.image)}
    />
  );
};

Azure.propTypes = propTypes;
Azure.defaultProps = defaultProps;

export default Azure;
