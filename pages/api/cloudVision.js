import RandomImageUrl from "../../helpers/DefaultImages";

const serverUrl = "http://localhost:3030";

const getCloudVision = async (src) => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": " http://localhost:3000",
    "Access-Control-Allow-Methods": "POST",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    image: src || RandomImageUrl,
  };

  return fetch(`${serverUrl}/suggestions`, { headers })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((rejected) => {
      console.log(rejected);
    });
};

export default getCloudVision;