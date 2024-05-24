const initialState = false;
let isDeviceConnected = initialState;

const getDeviceState = () => isDeviceConnected;
const updateDeviceState = (state) => (isDeviceConnected = state);
const resetDeviceState = () => (isDeviceConnected = initialState);

module.exports = { updateDeviceState, getDeviceState, resetDeviceState };
