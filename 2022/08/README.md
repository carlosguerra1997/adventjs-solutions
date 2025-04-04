# 🔧 ¡Necesitamos un mecánico!

## 📌 Descripción del problema

Se han estropeado algunos trineos eléctricos y los elfos están buscando piezas de repuesto para arreglarlos, pero no tienen claro si las piezas que tienen sirven.


Las piezas de repuesto son **cadenas de texto**, y el mecánico **Elfon Masc** ha dicho que una pieza de repuesto es **válida** si puede convertirse en un **palíndromo eliminando, como máximo, un carácter**.

Un **palíndromo** es una palabra o frase que se lee igual de izquierda a derecha que de derecha a izquierda.

Tu tarea es implementar una función `checkPart` que reciba una cadena y devuelva un **booleano** que indique si la pieza es válida según las reglas.

## 🧪 Ejemplos

```js
checkPart("uwu") // true
// "uwu" es un palíndromo sin eliminar ningún carácter

checkPart("miidim") // true
// "miidim" puede ser un palíndromo después de eliminar la primera "i"
// ya que "midim" es un palíndromo

checkPart("midu") // false
// "midu" no puede ser un palíndromo después de eliminar un carácter
