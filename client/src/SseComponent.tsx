import React, { useEffect, useState } from "react";

const EventStreamComponent: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  useEffect(() => {
    const eventSource = new EventSource("http://localhost:3001/events");
    eventSource.onmessage = function (event) {
      console.log("message");
      setMessage(event.data);
    };
    eventSource.onerror = function (error) {
      console.error("EventSource failed:", error);
      eventSource.close();
    };
    return () => {
      eventSource.close();
    };
  }, []);

  return <div>sse消息:{message}</div>;
};

export default EventStreamComponent;
