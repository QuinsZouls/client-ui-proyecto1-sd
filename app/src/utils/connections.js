export const connectServer = () => {
  const socket = new WebSocket(process.env.REACT_APP_SERVER_URL);

  socket.onmessage = ({ data }) => {
    let parsed = JSON.parse(data);
    console.log(parsed);
  };
  return [socket];
};
