const express = require("express");

const {
  movePen,
  getStatus,
  updateStatus,
  getCoordinates,
  updateCoordinates,
  moveAxis,
} = require("../controllers");

const machineRouter = express.Router();

machineRouter.get("/status", getStatus);
machineRouter.post("/status", updateStatus);
machineRouter.post("/pen", movePen);
machineRouter.post("/axis", moveAxis);
machineRouter.get("/coordinates", getCoordinates);
machineRouter.post("/coordinates", updateCoordinates);

module.exports = machineRouter;
