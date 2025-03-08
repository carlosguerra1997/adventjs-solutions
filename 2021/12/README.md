# 🛷 Reto: La ruta perfecta para dejar los regalos 🎅

## 📜 Descripción

En el taller de Santa 🎅 se están preparando los trineos de motor eléctrico para poder hacer la ruta perfecta y entregar los regalos.

La ruta comienza en la posición `0` y se mueve hacia la derecha en línea recta. Sin embargo, hay **obstáculos** en el camino que debemos evitar.  

El problema es que el **salto del trineo es fijo**, es decir, solo puede moverse de una posición a otra con un intervalo determinado.  

El objetivo es encontrar la **longitud mínima de salto** necesaria para esquivar todos los obstáculos.

## 🎯 Entradas de ejemplo

```js
const obstacles = [5, 3, 6, 7, 9];
getMinJump(obstacles) // -> 4

const obstacles = [2, 4, 6, 8, 10]
getMinJump(obstacles) // -> 7

const obstacles = [1, 2, 3, 5]
getMinJump(obstacles) // -> 4

const obstacles = [3, 7, 5]
getMinJump(obstacles) // -> 2

const obstacles = [9, 5, 1]
getMinJump(obstacles) // -> 2
