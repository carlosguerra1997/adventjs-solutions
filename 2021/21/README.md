# 🎅 La ruta con los regalos

Santa Claus 🎅 está organizando su ruta de entrega de regalos 🎁. Para ello, cuenta con varios almacenes distribuidos por todo el mundo donde recoge y deja los regalos a lo largo de su viaje.  

Nuestro objetivo es verificar si una ruta planificada es válida, asegurándonos de que Santa nunca lleva más regalos de los que su trineo puede soportar.  

## 📜 Enunciado  

Debemos implementar una función que determine si Santa Claus puede completar su viaje sin superar la capacidad máxima de su trineo en ningún momento del trayecto.  

Para ello, consideramos una serie de viajes representados en un array de arrays. Cada subarray contiene tres números que indican:  

1. **Número de regalos a transportar**  
2. **Punto de recogida de los regalos**  
3. **Punto de entrega de los regalos**  

El trineo de Santa **siempre avanza de izquierda a derecha**, es decir, los puntos de recogida y entrega siempre estarán en orden creciente. Sin embargo, Santa puede recoger más regalos en el camino antes de haber entregado los que ya transporta.  

Si en algún punto del viaje Santa supera la capacidad máxima de su trineo, la función debe devolver `false`. De lo contrario, si el viaje es realizable sin sobrecargar el trineo, debe devolver `true`.  

## 📥 Parámetros de entrada  

La función recibe los siguientes parámetros:

**capacity**: Capacidad de regalos a transportar.
**trip**: array de arrays con tres posiciones:
  1. Número de regalos a transportar.
  2. Punto de recogida de los regalos.
  3. Punto de entrega de los regalos.

```js
function canCarry(capacity, trip)

canCarry(4, [[2, 5, 8], [3, 6, 10]]) // false
canCarry(3, [[1, 1, 5], [2, 2, 10]]) // true
canCarry(3, [[2, 1, 5], [3, 5, 7]]) // true
canCarry(4, [[2, 3, 8], [2, 5, 7]]) // true
canCarry(1, [[2, 3, 8]]) // false
canCarry(2, [[1, 2, 4], [2, 3, 8]]) // false
