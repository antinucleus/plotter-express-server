let isDeviceConnected = false;

const getDeviceState = () => isDeviceConnected;
const updateDeviceState = (state) => (isDeviceConnected = state);

module.exports = { updateDeviceState, getDeviceState };
