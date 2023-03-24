import { useEffect, useState } from 'react';
import { shape, string } from 'prop-types';

import { getOpenAPI, resolveAzurePromises, getGoogleCloudVision } from '../../helpers';
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

const Azure = ({ index, src, password, creativity, handleChange, gptModel }) => {
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
      const [azureResults, gcResults] = await Promise.all([
        resolveAzurePromises(src.image),
        getGoogleCloudVision(src.image, password),
      ]);

      const detections = [
        ...(azureResults.tags || []),
        ...(azureResults.description || []),
        ...(azureResults.readOCR || []),
        ...(azureResults.brands || []),
        ...(gcResults || []),
      ];
      let prompt = detections.join(', ');
      if (detections.length === 0) {
        prompt = 'No tags were detected';
      }
      setSuggestion(prompt);
      setCharacteristics(detections.join(', '));
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function makeChatGPTRequest() {
    const suggestionMap = {
      0: [lightGPTSuggestion, setLightGPTSuggestion],
      0.5: [mediumGPTSuggestion, setMediumGPTSuggestion],
      1: [highGPTSuggestion, setHighGPTSuggestion],
    };

    const [suggestion, setSuggestion] = suggestionMap[creativity] || [];

    if (suggestion && suggestion.trim()) {
      setChatGPT(suggestion.trim());
      setLoading(false);
      return;
    }

    setChatGPT(null);
    setLoading(true);

    try {
      const response = await getOpenAPI(characteristics, password, creativity, gptModel);
      if (!response) throw new Error('No response from GPT');

      setSuggestion(response);
      setChatGPT(response.trim());
      setLoading(false);
    } catch (error) {
      const message = error.message || 'No response from GPT';
      setSuggestion(message);
      setChatGPT(message);
      setLoading(false);
    }
  }

  function clear() {
    setLoading(false);
    setSuggestion(null);
    setChatGPT(null);
  }

  function clearGPT() {
    setLoading(false);
    setChatGPT(null);
    setLightGPTSuggestion(null);
    setMediumGPTSuggestion(null);
    setHighGPTSuggestion(null);
  }

  function updateDetections(updatedDetections) {
    setLoading(false);
    setSuggestion(updatedDetections);
    setCharacteristics(updatedDetections);
    setChatGPT(null);
    setLightGPTSuggestion(null);
    setMediumGPTSuggestion(null);
    setHighGPTSuggestion(null);
  }

  function isUnSupported(image) {
    return image.endsWith('.gif');
  }

  useEffect(() => {
    const rateLimitSecondsDelay = Math.floor(index / 7) * 1000;
    setTimeout(() => {
      getAzureSuggestion();
    }, rateLimitSecondsDelay);
  }, []);

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
      onClick={makeChatGPTRequest}
      handleChange={handleChange}
      alt=""
      header="Image Analysis"
      suggestion={suggestion}
      chatGTP={chatGTP}
      creativity={creativity}
      loading={loading}
      unsupported={isUnSupported(src.image)}
      updateDetections={updateDetections}
      clearGPT={clearGPT}
    />
  );
};

Azure.propTypes = propTypes;
Azure.defaultProps = defaultProps;

export default Azure;
