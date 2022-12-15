import { useState } from "react";
import {
  computerVision,
  isConfigured as ComputerVisionIsConfigured,
} from "../../helpers/azure";
import CloudVision from "./cloud-vision";

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
      {!imageSuggestionFetched ? (
        <input
          type="button"
          value="Get Suggestion (Azure)"
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
      ) : (
        <div
          style={{
            borderRadius: "4px",
            border: "1px solid #424242",
            padding: "10px",
          }}
        >
          <h2
            style={{
              color: "rgb(118, 248, 176)",
              margin: 0,
              textAlign: 'center'
            }}
          >
            Azure
          </h2>
          <p style={{ display: "flex", alignItems: "center" }}>
            <b style={{ marginRight: "8px" }}>Suggested: </b>
            {suggested || <div className="loading-bar small"></div>}
          </p>
          <p style={{ display: "flex", alignItems: "center" }}>
            <b style={{ marginRight: "8px" }}>GPT Suggestion: </b>
            {chatGTPSuggestion || <div className="loading-bar small"></div>}
          </p>
        </div>
      )}
      <CloudVision src={src} />
    </div>
  );
};

export default Image;
