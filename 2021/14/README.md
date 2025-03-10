# 🦌 En busca del reno perdido

¡Hemos perdido a un reno y falta poco más de una semana para Navidad! 😱  

Lo peor es que son tantos que no sabemos cuál es el que nos falta... ¡Qué lío!  

A ver, **Elfon Musk** ha hecho inventario y nos pasa un array con los **IDs** de cada reno.

## ✅ Reglas

- Los **IDs** son números enteros **del 0 al 100**.
- No están **repetidos**.
- **Sólo falta un reno** en la lista.
- La lista puede estar **desordenada**.
- Podría faltar el **último número** en el rango.

## 🎯 Objetivo

Necesitamos una función `missingReindeer()` que, al pasarle la lista de **IDs de renos**, nos devuelva el número que falta.

## 📌 Ejemplos

```js
missingReindeer([0, 2, 3]); 
// -> 1

missingReindeer([5, 6, 1, 2, 3, 7, 0]); 
// -> 4

missingReindeer([0, 1]); 
// -> 2 (¡es el último el que falta!)

missingReindeer([3, 0, 1]); 
// -> 2

missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]); 
// -> 8

missingReindeer([0]); 
// -> 1 (¡es el último el que falta!)
