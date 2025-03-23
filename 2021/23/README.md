# 🎄 ¿Puedes reconfigurar las fábricas para no parar de crear regalos? 🎁

En la fábrica de Santa Claus 🎅, estamos creando regalos sin parar. Sin embargo, para optimizar la producción, Jelf Bezos ha ideado una estrategia para reconfigurar nuestras máquinas y fabricar diferentes regalos más eficientemente.

## 📌 Descripción del Problema

Cada máquina está configurada con un **string** y queremos saber si podemos reconfigurarla para que fabrique otro regalo. Para ello, debemos cumplir las siguientes reglas:

1. **La longitud de ambos strings debe ser la misma**.  
2. **Cada carácter de `from` debe transformarse en un único carácter de `to`**.  
3. **No se puede asignar el mismo carácter de `from` a dos letras diferentes en `to`** (pero sí a sí mismo).  
4. **Debe mantenerse el orden de transformación**.

## ✨ Ejemplos

```js
const from = "BAL";
const to   = "LIB";
console.log(canReconfigure(from, to)); // true

/* La transformación es válida:
B -> L
A -> I
L -> B
*/

const from = "CON";
const to   = "JUU";
console.log(canReconfigure(from, to)); // false

/* No se puede hacer la transformación:
C -> J
O -> U
N -> ❌ ERROR (no hay correspondencia válida)
*/

const from = "XBOX";
const to   = "XXBO";
console.log(canReconfigure(from, to)); // false

/* No se puede hacer la transformación:
X -> X
B -> X ❌ (Error: la B no puede asignarse a X porque X ya fue usado)
O -> B
X -> O ❌ (Error: la X no puede asignarse a la O porque O ya fue usado)
*/

const from = "XBOX";
const to   = "XOBX";
console.log(canReconfigure(from, to)); // true

const from = "MMM";
const to   = "MID";
console.log(canReconfigure(from, to)); // false

/* No se puede hacer la transformación:
M -> M ✅ (Correcto)
M -> I ❌ (Error: M ya estaba asignado a M)
M -> D ❌ (Error: M no puede transformarse en dos letras diferentes)
*/

const from = "AA";
const to   = "MID";
console.log(canReconfigure(from, to)); // false

/* ❌ Error: los strings no tienen la misma longitud */
