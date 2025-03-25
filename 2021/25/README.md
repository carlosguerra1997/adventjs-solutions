# El último juego y hasta el año que viene

En nochebuena, una familia cenó por todo lo alto... Con tanta copa 🍾 encima todavía no han retirado los platos y la comida de ayer.

Un ratoncillo llamado **Midurat** 🐭, que vio ayer el festín escondido, está relamiéndose los bigotes al ver todos los manjares que hay en el comedor.

Eso sí, hay que tener cuidado 😶 y solo hacer los movimientos correctos para comer algo. Por eso, el ratón, que se ha visto los vídeos de midudev, va a crear una función para saber si su próximo movimiento es correcto o no ✅.

## 📌 Descripción del problema

El ratoncillo se puede mover en **4 direcciones**:  
- `up` (arriba)
- `down` (abajo)
- `left` (izquierda)
- `right` (derecha)  

El comedor es una **matriz (array de arrays)** donde cada posición puede ser:

- Un espacio vacío (`' '`) indica que no hay nada.
- Una `'m'` representa al ratón.
- Un `'*'` representa la comida.

La función `canMouseEat(direction, room)` debe devolver `true` si el ratón puede moverse en la dirección indicada y comer comida (`'*'`), y `false` en caso contrario.

## ✏️ Ejemplos
```js
const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*']
]

console.log(canMouseEat('up',    room)) // false
console.log(canMouseEat('down',  room)) // true
console.log(canMouseEat('right', room)) // false
console.log(canMouseEat('left',  room)) // false
