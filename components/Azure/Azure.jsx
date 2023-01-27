import { useEffect, useState } from "react";
import { shape, string } from "prop-types";

import { getAzureComputerVision, getOpenAPI } from "../../helpers";
import Card from "../Card";

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
    const [fetched, setFetched] = useState(false);
    const [characteristics, setCharacteristics] = useState(null);
    const [suggestion, setSuggestion] = useState(null);
    const [lightGPTSuggestion, setLightGPTSuggestion] = useState(null);
    const [mediumGPTSuggestion, setMediumGPTSuggestion] = useState(null);
    const [highGPTSuggestion, setHighGPTSuggestion] = useState(null);
    const [chatGTP, setChatGPT] = useState(null);

    function getAzureSuggestion() {
        setFetched(true);
        getAzureComputerVision(src.image).then((resp) => {
            try {
                const characteristics = resp.tags.map((tag) => tag.name);
                characteristics.push(resp.description.captions[0].text);
                setSuggestion(resp.description.captions[0].text);
                setCharacteristics(characteristics);
                makeChatGPTRequest(characteristics);
            } catch (error) {
                console.log(error);
                setFetched(false);
            }
        });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    async function makeChatGPTRequest(characteristics) {
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
        const response = await getOpenAPI(
            characteristics,
            password,
            creativity
        );
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
    }

    function clear() {
        setFetched(false);
        setSuggestion(null);
        setChatGPT(null);
    }

    useEffect(() => {
        clear();
    }, [src]);

    useEffect(() => {
        if (suggestion) {
            makeChatGPTRequest(characteristics);
        }
    }, [characteristics, creativity, makeChatGPTRequest, suggestion]);

    return (
        <Card
            src={src}
            onClick={getAzureSuggestion}
            alt=""
            header="Azure"
            fetched={fetched}
            suggestion={suggestion}
            chatGTP={chatGTP}
        />
    );
};

Azure.propTypes = propTypes;
Azure.defaultProps = defaultProps;

export default Azure;