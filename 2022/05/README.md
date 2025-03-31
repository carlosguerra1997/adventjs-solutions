# Optimizando viajes de Santa

Papá Noel tiene la tarea de repartir regalos en varias ciudades, pero sus renos solo pueden visitar un número limitado de ciudades y el saco de regalos tiene un límite de capacidad. ¡Ayúdalo a repartir el máximo número de regalos sin exceder esos límites!

## 📌 Descripción del problema

Papá Noel tiene una lista de ciudades, y cada ciudad tiene un número determinado de regalos que puede dejar. Por ejemplo, el array `giftsCities = [12, 3, 11, 5, 7]` significa que en la primera ciudad puede dejar 12 regalos, en la segunda 3, y así sucesivamente. Además, Papá Noel tiene las siguientes restricciones:

- **maxGifts**: Es el número máximo de regalos que puede llevar en su saco.
- **maxCities**: Es el número máximo de ciudades que sus renos pueden visitar.

**Objetivo**: Implementa la función `getMaxGifts` para que Papá Noel reparta la **mayor cantidad posible de regalos** visitando como máximo `maxCities` ciudades, sin exceder `maxGifts` regalos en total.

## ✨ Ejemplos

```js
getMaxGifts([12, 3, 11, 5, 7], 20, 3) // 20
getMaxGifts([50], 15, 1) // 0
getMaxGifts([50], 100, 1) // 50
getMaxGifts([50, 70], 100, 1) // 100
getMaxGifts([50, 70, 30], 100, 2) // 100
getMaxGifts([50, 70, 30], 100, 3) // 100
