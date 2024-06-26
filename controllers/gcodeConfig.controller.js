const { readFileSync, writeFileSync } = require("node:fs");
const { join } = require("path");
const { getGcodeConfig, updateGcodeConfig } = require("../utils");

const getConfig = async (req, res, next) => {
  res.status(200).send(getGcodeConfig());
};

const updateConfig = async (req, res, next) => {
  if (!req.body) {
    return res.status(400).send("No config supplied.");
  }

  const newConfig = req.body;
  const filePath = join(__dirname, "../gcode.config.json");

  updateGcodeConfig(newConfig);

  try {
    const data = readFileSync(filePath, "utf8");
    const config = JSON.parse(data);

    Object.assign(config, newConfig);

    try {
      writeFileSync(filePath, JSON.stringify(config).split(",").join(",\n"));
    } catch (err) {
      console.error(err);
    }
  } catch (error) {
    throw new Error(error);
  }

  res.status(200).send(getGcodeConfig());
};

module.exports = { getConfig, updateConfig };
