# ⛷️ El salto perfecto

## Descripción

Estamos haciendo los últimos ajustes para el trineo de Santa Claus. Como ya sabes, el trineo es volador y estamos ajustando el motor para que haga parábolas lo más óptimas posibles.

Para esto, el salto debe cumplir con las siguientes condiciones:

1. **Debe comenzar con una subida estricta** (cada número debe ser mayor que el anterior).
2. **Debe alcanzar un punto máximo** (el valor más alto del array).
3. **Debe continuar con una bajada estricta** (cada número debe ser menor que el anterior).
4. **No puede haber valores repetidos en la subida ni en la bajada**.
5. **Debe haber al menos un elemento en la subida y otro en la bajada**.

Si el array cumple con estas condiciones, la función deberá retornar `true`. En caso contrario, retornará `false`.

## 📥 Entrada

Un array de números enteros que representan las alturas del salto.

## 📤 Salida

Un booleano (`true` o `false`) indicando si el salto cumple con las reglas establecidas.

## 📌 Ejemplos

```js
checkSledJump([1, 2, 3, 2, 1]); // true: sube y baja de forma estricta
checkSledJump([0, 1, 0]);       // true: sube y baja de forma estricta
checkSledJump([0, 3, 2, 1]);    // true: sube y baja de forma estricta
checkSledJump([0, 1000, 1]);    // true: sube y baja de forma estricta

checkSledJump([2, 4, 4, 6, 2]);     // false: no sube de forma estricta
checkSledJump([1, 2, 3]);           // false: solo sube
checkSledJump([1, 2, 3, 2, 1, 2, 3]); // false: sube, baja y luego sube de nuevo
