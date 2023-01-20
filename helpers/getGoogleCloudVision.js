import { localPort, localUrl, serverPort, serverUrl } from "../constants/constants";

export default async function getGoogleCloudVision(src) {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': `${localUrl}:${localPort}`,
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    image: src,
  };

  try {
    const response = await fetch(`${serverUrl}:${serverPort}/suggestions`, { headers });
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}
