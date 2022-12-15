const express = require("express");
const app = express();
const port = 3030;
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.listen(port, ()=> {
    console.log("server started on port ", port);
})

app.get("/suggestions", async (req, res) => {
  const image = req.headers.image;
  const vision = require("@google-cloud/vision");
  const client = new vision.ImageAnnotatorClient();
  const [labelResult] = await client.labelDetection(image);
  const labels = labelResult.labelAnnotations.map((label) => label.description);

  const [objectResult] = await client.objectLocalization(image);
  const objects = objectResult.localizedObjectAnnotations.map((item) => item.name);

  const response = labels.concat(objects);

  res.json(response);
});