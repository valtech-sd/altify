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

const Azure = ({ src, password }) => {
  const [fetched, setFetched] = useState(false);
  const [suggestion, setSuggestion] = useState(null);
  const [chatGTP, setChatGPT] = useState(null);

  function getAzureSuggestion() {
    setFetched(true);
    getAzureComputerVision(src.image).then(async (resp) => {
      try {
        const characteristics = resp.tags.map((tag) => tag.name);
        characteristics.push(resp.description.captions[0].text);
        const response = await getOpenAPI(characteristics, password);
        setChatGPT(response);
        setSuggestion(resp.description.captions[0].text);
      } catch (error) {
        console.log(error);
        setFetched(false);
      }
    });
  }

  function clear() {
    setFetched(false);
    setSuggestion(null);
    setChatGPT(null);
  }

  useEffect(() => {
    clear();
  }, [src]);

  return <Card src={src} onClick={getAzureSuggestion} alt="" header="Azure" fetched={fetched} suggestion={suggestion} chatGTP={chatGTP} />;
};

Azure.propTypes = propTypes;
Azure.defaultProps = defaultProps;

export default Azure;
