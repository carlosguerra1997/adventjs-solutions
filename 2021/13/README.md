# 🎁 Envuelve regalos con asteriscos 🎁

En este ejercicio de JavaScript, vamos a envolver regalos con asteriscos (`*`).  
Dado un array de regalos (representados como emojis), debemos devolver otro array donde todos los regalos estén envueltos con asteriscos por arriba, por los lados y por abajo.

## 📌 Reglas

1. Si el array está vacío, la función debe devolver un array vacío.
2. Cada regalo tiene la misma longitud en todas las posiciones del array.
3. Los regalos deben estar envueltos con `*` en los bordes superior e inferior, y también a los lados.

## 📥 Entrada

Un array de strings, donde cada string representa un regalo.

```js
const gifts = [["📷", "⚽️"]]
wrapGifts(gifts); 
/* Resultado:
  [ '****',
    '*📷*',
    '*⚽️*',
    '****'
  ]
*/