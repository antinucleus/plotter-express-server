const express = require("express");

const { movePen, getStatus, sendCoordinates } = require("../controllers");

const machineRouter = express.Router();

machineRouter.get("/status", getStatus);
machineRouter.post("/pen", movePen);
machineRouter.post("/coordinates", sendCoordinates);

module.exports = machineRouter;
