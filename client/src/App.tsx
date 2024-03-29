// App.tsx
import React from "react";
import WebSocketComponent from "./Websocket";
import EventStreamComponent from "./SseComponent";

const App: React.FC = () => {
  return (
    <>
      <WebSocketComponent />
      <hr />
      <EventStreamComponent />
    </>
  );
};

export default App;
