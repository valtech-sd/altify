import { useState } from "react";
import {
  computerVision,
  isConfigured as ComputerVisionIsConfigured,
} from "../../helpers/azure";

const Image = ({ src }) => {
  const [suggested, setSuggested] = useState("");
  const [chatGTPSuggestion, setchatGTPSuggestion] = useState("");
  const [imageSuggestionFetched, setImageSuggestionFetched] = useState(false);

  const getSuggestion = () => {
    setImageSuggestionFetched(true);
    computerVision(src).then((response) => {
      const caracteristics = response.tags.map((tag) => tag.name);
      caracteristics.push(response.description.captions[0].text);
      fetch("/api/openAPI", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tags: caracteristics }),
      })
        .then((response) => response.json())
        .then((response) => setchatGTPSuggestion(response.result));
      setSuggested(response.description.captions[0].text);
    });
  };

  return (
    <div>
      <img src={src} alt={chatGTPSuggestion || ""} style={{ width: "100%" }} />
      {!imageSuggestionFetched && (
        <input
          type="button"
          value="Get Suggestion"
          onClick={getSuggestion}
          style={{
            padding: "12px 0",
            color: "black",
            backgroundColor: "rgb(118, 248, 176)",
            border: "none",
            borderRadius: "4px",
            textAlign: "center",
            cursor: "pointer",
            width: "100%",
          }}
        />
      )}
      {imageSuggestionFetched && (
        <div>
          <p>Suggested: {suggested || "Loading..."}</p>
          <p>GPT Suggestion: {chatGTPSuggestion || "Loading..."}</p>
        </div>
      )}
    </div>
  );
};

export default Image;
