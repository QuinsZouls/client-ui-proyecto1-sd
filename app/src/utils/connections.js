export const connectServer = () => {
  const socket = new WebSocket(process.env.REACT_APP_SERVER_URL);
  return [socket];
};
