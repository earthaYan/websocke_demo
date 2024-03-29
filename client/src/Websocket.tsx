import React, { useEffect, useState } from "react";

const WebSocketComponent: React.FC = () => {
  const [data, setData] = useState<number | null>(null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");

    socket.onopen = () => {
      console.log("WebSocket 连接已建立");
    };

    socket.onmessage = (event) => {
      const { data } = JSON.parse(event.data);
      setData(data);
    };

    socket.onclose = () => {
      console.log("WebSocket 连接已关闭");
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      <h1>WebSocket 数据更新示例</h1>
      <p>从服务器接收到的数据: {data}</p>
    </div>
  );
};

export default WebSocketComponent;
