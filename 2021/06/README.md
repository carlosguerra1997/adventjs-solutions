# Sum Pairs

¡Hora de resolver un reto matemático antes de disfrutar la Navidad! 🎄🎁

## Descripción

Se nos da una función que recibe dos parámetros:

1. Un **array** de números.
2. Un **número objetivo** que representa la suma esperada.

La función debe devolver **el primer par de números** (de izquierda a derecha) dentro del array cuya suma sea igual al número objetivo. Si no existe tal par, la función debe retornar `null`.

## Ejemplos

```js
sumPairs([3, 5, 7, 2], 10); // [3, 7]
sumPairs([-3, -2, 7, -5], 10); // null
sumPairs([2, 2, 3, 1], 4); // [2, 2]
sumPairs([6, 7, 1, 2], 8); // [6, 2]
sumPairs([0, 2, 2, 3, -1, 1, 5], 6); // [1, 5]