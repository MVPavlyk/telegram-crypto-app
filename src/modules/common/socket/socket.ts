import useWebSocket, { ReadyState } from 'react-use-websocket';

export const useSocket = () => {
  const SOCKET_URL = import.meta.env.SOCKET_URL;

  const {
    sendMessage: send,
    lastMessage,
    readyState,
  } = useWebSocket(SOCKET_URL, {
    shouldReconnect: true,
  });

  const isReady = readyState === ReadyState.OPEN;

  // TODO: add type
  const sendMessage = (payload) => {
    if (isReady) {
      send(JSON.stringify(payload));
    }
  };

  return { sendMessage, lastMessage };
};
