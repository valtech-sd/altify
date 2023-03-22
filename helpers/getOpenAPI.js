import { serverUrl } from '../constants/constants';

export default async function getOpenAPI(tags, password, creativityValue) {
  const creativity = Number(creativityValue);
  try {
    const response = await fetch(`${serverUrl}/openAPI`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authentication: password,
      },
      body: JSON.stringify({ tags, creativity }),
    });
    const json = await response.json();
    return json.result;
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
}
