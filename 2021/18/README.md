# 📂 El sistema operativo de Santa Claus

## Descripción

En el taller de Santa Claus 🎅, los elfos no prestan mucha atención a los nombres de los archivos y a veces intentan guardar el mismo fichero más de una vez. Para evitar conflictos, necesitamos una función que gestione los nombres duplicados.

Si un archivo ya existe, se le debe agregar un sufijo `(k)`, donde `k` es el número de veces que se ha encontrado repetido.

## 📥 Entrada

Recibimos un array de nombres de archivos.

## 📤 Salida

Devolvemos un array con los mismos nombres, pero gestionando los duplicados con la nomenclatura `(k)`.

## 📝 Ejemplos

```js
const files = ['photo', 'postcard', 'photo', 'photo', 'video'];
console.log(fixFiles(files)); 
// ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

const files2 = ['file', 'file', 'file', 'game', 'game'];
console.log(fixFiles(files2)); 
// ['file', 'file(1)', 'file(2)', 'game', 'game(1)']

const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)'];
console.log(fixFiles(files3)); 
// ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']
