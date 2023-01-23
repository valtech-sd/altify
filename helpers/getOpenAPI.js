import { serverUrl } from "../constants/constants";

export default async function getOpenAPI(tags) {
  const response = await fetch(`${serverUrl}/openAPI`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ tags }),
  });
  const json = await response.json();
  return json.result;
}
