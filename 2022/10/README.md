# 🛷 El salto del trineo de Papá Noel

## 📌 Descripción del problema

Santa Claus está probando su nuevo trineo volador y necesita que comprobemos si hace un **salto parabólico** perfecto al viajar entre ciudades 🏙️.

Recibirás un array de números que representan la **altura** del trineo en cada momento. El salto será válido si:

- Comienza **subiendo**.
- Llega a un **pico máximo**.
- Termina **bajando**.
- No puede volver a subir **después** de haber bajado.
- Si se mantiene en la misma altura, **la parábola continúa**.

### 🧪 Ejemplos

```js
checkJump([1, 3, 8, 5, 2]) // true

/*
Es `true`.
El trineo sube (1 → 3 → 8) y luego baja (8 → 5 → 2), formando una parábola:

    8
   ↗ ↘
  3   5
 ↗     ↘
1       2
*/

checkJump([1, 7, 3, 5]) // false

/*
Es `false`.
El trineo sube (1 → 7), baja (7 → 3) pero luego vuelve a subir (3 → 5).
Eso rompe la parábola.
*/

checkJump([1, 2, 2, 2, 1]) // true
// Sigue siendo una parábola válida si se mantiene plano en el pico

checkJump([3, 2, 1]) // false
// Empieza bajando, lo cual no es válido
