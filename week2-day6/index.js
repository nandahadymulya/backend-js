const express = require("express");
const { RestRouter } = require("./src/routes/routes");

const app = express();
const appPort = 3000;

app.use(RestRouter());

app.listen(appPort, function () {
  console.log(`listening on ${appPort}`);
});
