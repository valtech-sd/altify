// Azure SDK client libraries
import { ComputerVisionClient } from '@azure/cognitiveservices-computervision';
import { ApiKeyCredentials } from '@azure/ms-rest-js';

// Authentication requirements
const key = process.env.NEXT_PUBLIC_MS_CV_API_KEY;
const endpoint = process.env.NEXT_PUBLIC_MS_CV_ENDPOINT;

// Cognitive service features
const visualFeatures = [
  // 'Adult',
  'Brands',
  // 'Categories',
  // 'Color',
  'Description',
  // 'Faces',
  // 'ImageType',
  // 'Objects',
  // 'Tags',
];

export const isConfigured = () => {
  const result = key && endpoint && key.length > 0 && endpoint.length > 0 ? true : false;
  console.log(`key = ${key}`);
  console.log(`endpoint = ${endpoint}`);
  console.log(`ComputerVision isConfigured = ${result}`);
  return result;
};

export async function resolveAzurePromises(url) {
  try {
    const response = await Promise.all([getAzureComputerVisionV3(url), getAzureImageAnalysisV4(url)]);
    const [v3Response, v4Response] = await Promise.all(response.map((res) => res));
    const { description, brands } = v3Response;
    const { readOCR, tags } = v4Response;

    return { brands, tags, description, readOCR };
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Analyze Image from URL
export async function getAzureComputerVisionV3(url) {
  // authenticate to Azure service
  const computerVisionClient = new ComputerVisionClient(
    new ApiKeyCredentials({
      inHeader: { 'Ocp-Apim-Subscription-Key': key },
    }),
    endpoint
  );

  try {
    if (!url || typeof url !== 'string') {
      throw new Error('Invalid URL');
    }

    // analyze image
    let analysis = await computerVisionClient.analyzeImage(url, {
      visualFeatures,
      // details: ['Landmarks'],
    });

    // Extract relevant information
    const { description, brands } = analysis;
    const captions = description.captions.filter((caption) => caption.confidence > 0.4);
    const filteredBrands = brands.filter((brand) => brand.confidence > 0.5);
    const brandNames = filteredBrands.map((brand) => brand.name);

    // all information about image
    return {
      url,
      description: captions.map((caption) => caption.text),
      brands: brandNames,
    };
  } catch (error) {
    console.log('Error:', error);
    throw Error(error);
  }
}

// https: //learn.microsoft.com/en-us/azure/cognitive-services/computer-vision/concept-ocr#what-is-computer-vision-v40-read-ocr-preview
export const getAzureImageAnalysisV4 = async (url) => {
  try {
    const imageAnalysis = await fetch(
      'https://valtech-sd-altify-cv-api.cognitiveservices.azure.com/computervision/imageanalysis:analyze?features=tags,objects,description,read,smartCrops,people&model-version=latest&language=en&api-version=2022-10-12-preview',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': key,
        },
        body: JSON.stringify({
          url,
        }),
      }
    );
    const results = await imageAnalysis.json();

    const readOCR = results.readResult.pages[0].lines.map((line) => {
      return line.content.toLowerCase();
    });
    const tags = results.tagsResult.values
      .filter((value) => value.confidence > 0.5)
      .map((result) => {
        return result.name.toLowerCase();
      });

    return { tags, readOCR };
  } catch (error) {
    console.log('Error:', error);
    throw Error(error);
  }
};
