//TCP server

const net = require("net");

const host = '165.227.47.243';
const port = 50541;

const connectionConfig = {
  host,
  port
};

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection(connectionConfig);

  //Update the connect function to handle incoming data and console.log it for the player.
  conn.on("data", (message) => {
    console.log("Server says: ", message);
  });
  conn.on("connect", (message) => {
    console.log("Successfully connected to the server.");
    conn.write("Name: sti");
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {connect};