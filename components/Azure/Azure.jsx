import { useEffect, useState } from 'react';
import { shape, string } from 'prop-types';

import { getOpenAPI, resolveAzurePromises } from '../../helpers';
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

  async function getAzureSuggestion() {
    setLoading(true);
    setChatGPT(null);
    try {
      const azureResults = await resolveAzurePromises(src.image);
      const detections = [
        ...azureResults.tags,
        ...azureResults.description,
        ...azureResults.readOCR,
        ...azureResults.brands,
      ].join(', ');
      const prompt = `${azureResults.tags.join(', ')}, ${azureResults.description.join(
        ', '
      )}, ${azureResults.readOCR.join(', ')}, ${azureResults.brands.join(', ')}`;
      setSuggestion(detections);
      setCharacteristics(prompt);
      makeChatGPTRequest(prompt);
    } catch (error) {
      setLoading(false);
      alert(error.message);
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function makeChatGPTRequest(characteristics) {
    if (creativity == 0 && lightGPTSuggestion) {
      setChatGPT(lightGPTSuggestion.trim());
      setLoading(false);
      return;
    }
    if (creativity == 0.5 && mediumGPTSuggestion) {
      setChatGPT(mediumGPTSuggestion.trim());
      setLoading(false);
      return;
    }
    if (creativity == 1 && highGPTSuggestion) {
      setLoading(false);
      setChatGPT(highGPTSuggestion.trim());
      return;
    }

    setChatGPT(null);
    setLoading(true);
    console.log('characteristics', characteristics);
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
