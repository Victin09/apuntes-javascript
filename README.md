# Apuntes javascript

## Callbacks
Un *callback* no es mas que una **funcion que se pasa como argumento a otra funcion**. Sera ejecutado una vez que una operacion asincrona notifique que ha terminado.
```js
function cojoDatos(callback) {
  setTimeout(() => {
    console.log("Cojo los datos")
    callback()
  }, 1000)
}

function pintoDatos() {
  console.log("Pinto los datos");
}
cojoDatos(pintoDatos)
```
De manera sincrona seria:
```js
// Se ejecuta pero se queda en segundo plano esperando la respuesta
function cojoDatos() {
  setTimeout(() => {
    console.log("Cojo los datos")
  }, 1000)
}

function pintoDatos() {
  console.log("Pinto los datos");
}
cojoDatos()
pintoDatos()
```

## Promesas
Una *promesa* es un objecto que **representa el resultado de una operacion asincrona**. Este resultado podria estar disponible **ahora** o en un **futuro**. Las promesas se basan en **callbacks**
```js
const checkServer = (url) => {
  return new Promise((resolve, reject) => { 
    fetch(url)
      .then(response => resolve(`Estado del Servidor: ${response.status === 200 ? "OK" : "NOT OK"}`))
      .catch(() => reject(`Error al localizar URL`));
  });
}

checkServer(document.URL.toString())
  .then(result => console.log(result))
  .catch(e => console.log(e));
```

## Async / Await
Las palabras clave *async* y *await* surgieron para **simplificar el manejo de las promesas**
La etiqueta *async* declara una función como asíncrona e indica que una promesa será automáticamente devuelta. Podemos declarar como async tanto funciones con nombre, anónimas, o funciones flecha. Por otro lado, *await* debe ser usado siempre dentro de una función declarada como async y esperará automáticamente (de forma asíncrona y no bloqueante) a que una promesa se resuelva.
```js
const checkServerWithSugar = async (url) => {
  const response = await fetch(url);
  return `Estado del Servidor: ${response.status === 200 ? "OK" : "NOT OK"}`;
}

checkServerWithSugar(document.URL.toString())
  .then(result => console.log(result));
```
