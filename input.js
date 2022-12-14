
let connection;

const setupInput = function(conn) {
  
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function(key) {

  if (key === '\u0003') {
    process.exit();
  }

  if (key === 'w') {
    connection.write("Move: up");
  }

  if (key === 'a') {
    connection.write("Move: left");
  }

  if (key === 's') {
    connection.write("Move: down");
  }

  if (key === 'd') {
    connection.write("Move: right");
  }

  if (key === 'j') {
    connection.write("Say: Sneaky snake");
  }

  if (key === 'k') {
    connection.write("Say: Muhahahaha!!!");
  }

  if (key === 'l') {
    connection.write("Say: Snake away!");
  }

};

module.exports = { setupInput };

//w '\u0077'
//a '\u0061'
//s '\u0073'
//d '\u0064'