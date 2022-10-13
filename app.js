const express = require("express");
const cors = require('cors')

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors())

app.get("/app/test", (_req, res) => {
  res
    .send({
      data: "API Endpoint is working",
      httpStatus: 200,
    })
    .status(200);
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
