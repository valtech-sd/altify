const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const getWebsiteContent = async (url) => {
  // Simple HTTP call
  const content = await fetch(url);
  // Parsing to result as text
  return content.text();
};

const isValidUrl = (urlString) => {
  try {
    return Boolean(new URL(urlString));
  } catch (e) {
    return false;
  }
};

export default async function (req, res) {
  console.log(req.body.url);
  const content = await getWebsiteContent(req.body.url);
  let domain = new URL(req.body.url);
  const dom = new JSDOM(content);
  const response = [];
  for await (const image of dom.window.document.querySelectorAll("img")) {
    const imageUrl = isValidUrl(image.src)
      ? image.src
      : domain.origin + image.src;
    if (imageUrl.indexOf("data:image/gif") >= 0) continue;
    response.push({
      image: imageUrl,
      current: image.alt,
    });
  }

  res.status(200).json({ result: response });
}
