require("dotenv").config();

const express = require("express");

const cors = require("cors");
const app = express();

const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/status", (req, res) => {
  res.status(200).end();
});
app.head("/status", (req, res) => {
  res.status(200).end();
});
app.use(cors());

app.use(require("morgan")("development"));

require("./socketio")(io);

app.use((req, res, next) => {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

async function startServer() {
  server.listen(process.env.PORT || 3000, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(
      `Your server is ready to listen PORT: ${process.env.PORT || 3000}!`
    );
  });
}

// Run the async function to start our server
startServer();
