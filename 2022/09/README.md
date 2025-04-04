# 💡 Las locas luces de Navidad

## 📌 Descripción del problema

Una empresa que fabrica luces de Navidad nos ha pedido que le echemos una mano 🎄.

Tienen unas **tiras LED** que se representan como un **array de números**. Cada posición del array representa un LED, que puede estar:

- 🔴 Apagado: `0`
- 🟢 Encendido: `1`

Cada **7 segundos**, los LEDs cambian de estado con la siguiente lógica:

- Si un LED está **apagado (`0`)**, se **enciende (`1`)** si el LED a su **izquierda (`index - 1`) estaba encendido** antes del cambio.
- Si un LED está **encendido**, se queda **encendido para siempre**.

Tu tarea es crear una función `countTime` que reciba un array de LEDs y devuelva el número de **segundos necesarios** para que **todos los LEDs estén encendidos**.

## 🧪 Ejemplos

```js
countTime([0, 1, 1, 0, 1]) // 7
// 0s: [0, 1, 1, 0, 1]
// 7s: [1, 1, 1, 1, 1]

countTime([0, 0, 0, 1]) // 21
// 0s:  [0, 0, 0, 1]
// 7s:  [1, 0, 0, 1]
// 14s: [1, 1, 0, 1]
// 21s: [1, 1, 1, 1]

countTime([0, 0, 1, 0, 0]) // 28
// 0s:  [0, 0, 1, 0, 0]
// 7s:  [0, 0, 1, 1, 0]
// 14s: [0, 0, 1, 1, 1]
// 21s: [1, 0, 1, 1, 1]
// 28s: [1, 1, 1, 1, 1]
