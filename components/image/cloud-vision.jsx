import { useState } from "react";
import getCloudVision from "../../pages/api/cloudVision";

const CloudVision = ({ src }) => {
  const [cloudVisionFetched, setCloudVisionFetched] = useState(false);
  const [cloudSuggestion, setCloudSuggestion] = useState(false);
  const [chatGTPCloud, setChatGTPCloud] = useState(false);

  const getCloudSuggestion = () => {
    setCloudVisionFetched(true);
    getCloudVision(src).then((resp) => {
      fetch("/api/openAPI", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tags: resp }),
      })
        .then((response) => response.json())
        .then((response) => setChatGTPCloud(response.result));
      console.log(123, resp);
      setCloudSuggestion(resp.join(" "));
    });
  };

  return (
    <div style={{ margin: "10px 0" }}>
      {!cloudVisionFetched ? (
        <input
          type="button"
          value="Get Suggestion (Cloud Vision)"
          onClick={getCloudSuggestion}
          style={{
            padding: "12px 0",
            color: "black",
            backgroundColor: "#4285F4",
            color: "#fff",
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
              color: "#4285F4",
              margin: 0,
              textAlign: "center",
            }}
          >
            Google Cloud Vision
          </h2>
          <p style={{ display: "flex", alignItems: "center" }}>
            <b style={{ marginRight: "8px" }}>Suggested: </b>
            {cloudSuggestion || <div className="loading-bar small"></div>}
          </p>
          <p style={{ display: "flex", alignItems: "center" }}>
            <b style={{ marginRight: "8px" }}>GPT Suggestion: </b>
            {chatGTPCloud || <div className="loading-bar small"></div>}
          </p>
        </div>
      )}
    </div>
  );
};

export default CloudVision;
