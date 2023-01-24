import { useEffect, useState } from 'react';
import { shape, string } from 'prop-types';

import { getGoogleCloudVision, getOpenAPI } from '../../helpers';
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

const CloudVision = ({ src }) => {
  const [fetched, setFetched] = useState(false);
  const [suggestion, setSuggestion] = useState(null);
  const [chatGTP, setChatGPT] = useState(null);

  function getCloudSuggestion() {
    setFetched(true);
    getGoogleCloudVision(src.image).then(async (resp) => {
      try {
        const response = await getOpenAPI(resp);
        setChatGPT(response);
        setSuggestion(resp.join(', '));
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
  }, [src])

  return <Card src={src} onClick={getCloudSuggestion} alt="" header="Cloud Vision" fetched={fetched} suggestion={suggestion} chatGTP={chatGTP} />;
};

CloudVision.propTypes = propTypes;
CloudVision.defaultProps = defaultProps;

export default CloudVision;
