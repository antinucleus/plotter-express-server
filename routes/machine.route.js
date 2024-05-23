const express = require("express");

const {
  movePen,
  getStatus,
  sendCoordinates,
  moveAxis,
  updateStatus,
} = require("../controllers");

const machineRouter = express.Router();

machineRouter.get("/status", getStatus);
machineRouter.post("/status", updateStatus);
machineRouter.post("/pen", movePen);
machineRouter.post("/axis", moveAxis);
machineRouter.post("/coordinates", sendCoordinates);

module.exports = machineRouter;
