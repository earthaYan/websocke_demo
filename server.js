// server.js

const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

// 用于生成随机数据
function generateRandomData() {
  return Math.floor(Math.random() * 100);
}

// 定期推送数据到客户端
setInterval(() => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      const data = generateRandomData();
      client.send(JSON.stringify({ data }));
    }
  });
}, 1000);
