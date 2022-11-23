//TCP server

const net = require("net");

const { IP, PORT } = require("./constants");

const host = IP;
const port = PORT;

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
    console.log("Successfully connected to the game server.");
    conn.write("Name: ESZ");
    

  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect };

//"Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move (??right)left one square (unless facing left)



// let timer = 1000;
//     setTimeout(() => {
//       conn.write("Move: up");
//     }, timer);
//     timer += 1000;
//     setTimeout(() => {
//       conn.write("Move: up");
//     }, timer);
//     timer += 1000;
//     setTimeout(() => {
//       conn.write("Move: up");
//     }, timer);
//     timer += 1000;
//     setTimeout(() => {
//       conn.write("Move: left");
//     }, timer);
//     timer += 1000;
//     setTimeout(() => {
//       conn.write("Move: down");
//     }, timer);
//     timer += 1000;
//     setTimeout(() => {
//       conn.write("Move: down");
//     }, timer);
//     timer += 1000;
//     setTimeout(() => {
//       conn.write("Move: down");
//     }, timer);
//     timer += 1000;
//     setTimeout(() => {
//       conn.write("Move: left");
//     }, timer);
//     timer += 1000;
//     setTimeout(() => {
//       conn.write("Move: down");
//     }, timer);
//     setTimeout(() => {
//       conn.write("Move: down");
//     }, timer);
//     timer += 1000;
//     setTimeout(() => {
//       conn.write("Move: right");
//     }, timer);