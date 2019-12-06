const { taskOne, taskTwo } = require('./task');

// Ejecutara taskOne se queda escuchando la respuesta. Como taskTwo se procesa tiene menos tiempo de respuesta se muestra primero
taskOne();
taskTwo();

async function main() {
    await taskOne();
    await taskTwo();
}

main();