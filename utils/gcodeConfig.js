const initialState = {
  lineNumbering: false,
  initialCommand: [],
  sampleCount: 30,
  fill: false,
};
let gcodeConfig = { ...initialState };

const getGcodeConfig = () => gcodeConfig;
const updateGcodeConfig = (newConfig) => Object.assign(gcodeConfig, newConfig);
const resetGcodeConfig = () => Object.assign(gcodeConfig, initialState);

module.exports = { getGcodeConfig, updateGcodeConfig, resetGcodeConfig };
