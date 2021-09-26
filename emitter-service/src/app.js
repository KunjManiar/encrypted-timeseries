require("dotenv").config();

const server = require("http").createServer();
const io = require("socket.io")(server);
io.on("connection", (socket) => {
  console.log("Connection Successful");
  // socket.on("event", (data) => {
  //   /* … */
  // });
  // socket.on("disconnect", () => {
  //   /* … */
  // });
});
server.listen(3000);
