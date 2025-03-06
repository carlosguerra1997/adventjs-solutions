# La máquina de cambio

## Enunciado y Regkas

Para mejorar la productividad de la tienda en la que trabajamos, vamos a crear una pequeña máquina que calcula el **mínimo número de monedas** que debemos usar para dar el cambio de una compra en metálico.

Las monedas para cambio que puedes usar son estas:

- 1 céntimo
- 2 céntimos
- 5 céntimos
- 10 céntimos
- 20 céntimos
- 50 céntimos

## Descripción

La función recibe como parámetro el número de céntimos que hay que devolver al cliente. La función debe devolver un array con la combinación de monedas mínimas que debemos usar para conseguir el cambio.

## Ejemplos

```javascript
getCoins(51)  // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
getCoins(3)   // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2 céntimos
getCoins(5)   // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
getCoins(16)  // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 céntimos y una de 10 céntimos
getCoins(100) // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos
