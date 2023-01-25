import { serverUrl } from '../constants/constants';

export default async function getOpenAPI(tags, password) {
  const response = await fetch(`${serverUrl}/openAPI`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authentication: password,
    },
    body: JSON.stringify({ tags }),
  });
  const json = await response.json();
  return json.result;
}
