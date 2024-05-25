const express = require("express");

const { getConfig, updateConfig } = require("../controllers");

const gcodeConfigRouter = express.Router();

gcodeConfigRouter.get("/config", getConfig);
gcodeConfigRouter.post("/config", updateConfig);

module.exports = gcodeConfigRouter;
