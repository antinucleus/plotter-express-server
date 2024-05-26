const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config");
const {
  checkDeviceRouter,
  machineRouter,
  gcodeConfigRouter,
  mediaRouter,
} = require("./routes");

const path = `${process.cwd()}/public`;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", checkDeviceRouter);
app.use("/machine", machineRouter);
app.use("/media", mediaRouter);
app.use("/gcode", gcodeConfigRouter);
app.use("/public", express.static(path));

app.get("/", (req, res) => {
  res.send("Plotter Controller API v0.1\n");
});

app.listen(PORT, () => {
  console.log(`Server is started @localhost:${PORT}`);
});
