const http = require("http");
const PORT = 3001;

const server = http.createServer((req, res) => {
  if (req.url === "/events") {
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    res.setHeader("Access-Control-Allow-Origin", "*");

    const sendData = () => {
      const data = new Date().toLocaleTimeString();
      res.write(`data: ${data}\n\n`);
    };

    const intervalId = setInterval(sendData, 1000);

    req.on("close", () => {
      clearInterval(intervalId);
    });
  } else {
    res.writeHead(404);
    res.end();
  }
});
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
