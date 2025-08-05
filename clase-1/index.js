const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("¿Cuál es tu nombre? ", (nombre) => {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 12) {
    console.log("Buenos días, " + nombre);
  } else if (hour >= 12 && hour < 20) {
    console.log("¡Buenas tardes, " + nombre);
  } else {
    console.log("¡Buenas noches, " + nombre);
  }
  rl.close();
});
