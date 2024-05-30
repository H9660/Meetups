import { createContext, useEffect, useState } from "react-redux";
import { io } from "socket-io.client";
const SocketContext = createContext(null);

export const SocketProvider = (props) => {
  const { children } = props;
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    const connection = io();
    setSocket(connection);
  }, []);

  return (
    <SocketContext.provider value={socket}>{children}</SocketContext.provider>
  );
};
