// Tarea asincrónica 1: Saludos personalizados

const args = process.argv.slice(2);

let nombre = null;
let idioma = "es"; // dejamos el español por defecto

for (let i = 0; i < args.length; i++) {
  if (args[i] === "--idioma" || args[i] === "-i") {
    if (i + 1 < args.length) {
      idioma = args[i + 1];
      i++;
    }
  } else if (!nombre) {
    nombre = args[i];
  }
}

if (!nombre) {
  console.error("Error: El nombre es obligatorio.");
  process.exit(1);
}

const saludos = {
  es: (nombre) => `¡Hola, ${nombre}! Bienvenido/a a Node.js.`,
  en: (nombre) => `Hello, ${nombre}! Welcome to Node.js.`,
  fr: (nombre) => `Bonjour, ${nombre}! Bienvenue à Node.js.`,
};

if (!saludos[idioma]) {
  console.warn("Idioma no válido, se usará español por defecto.");
  idioma = "es";
}

console.log(saludos[idioma](nombre));
