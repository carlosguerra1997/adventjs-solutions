# 🎁 ¿Cuántas cajas de regalos puede llevar Papá Noel?

Santa Claus tiene una caja de regalos de Navidad que quiere entregar a los niños. Cada regalo está representado por una cadena de texto, y su peso es igual al número de letras en su nombre.

Además, Santa tiene una lista de renos que pueden ayudarlo a repartir los regalos. Cada reno tiene un límite de peso máximo que puede llevar, el cual es el doble del número de letras en su nombre.

## 📌 Enunciado

Debes implementar la función `distributeGifts(packOfGifts, reindeers)`, que recibe:

- `packOfGifts`: un array de strings con los nombres de los regalos.
- `reindeers`: un array de strings con los nombres de los renos.

La función debe devolver el número máximo de cajas de estos regalos que Santa Claus puede entregar a los niños.  

### 📍 Reglas:
- Las cajas de regalos **no se pueden dividir**.
- Los nombres de los regalos y los renos siempre tendrán al menos un carácter.

## 📋 Ejemplo de uso

```js
const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];

// El pack de regalos pesa: 4 + 4 + 4 = 12
// Los renos pueden llevar: (2 * 6) + (2 * 6) = 24
// Santa Claus puede entregar 2 cajas de regalos.

console.log(distributeGifts(packOfGifts, reindeers)); // 2
