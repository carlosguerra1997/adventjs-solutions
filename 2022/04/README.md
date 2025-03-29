# 🎁 Una caja dentro de otra caja y otra... 🎄  

Santa Claus necesita hacer una revisión de sus cajas de regalos para asegurarse de que puede empaquetarlas todas en su trineo.  
Cuenta con una serie de cajas de diferentes tamaños, que se caracterizan por su **longitud**, **anchura** y **altura**.

## 📌 Descripción del problema

Tu tarea es escribir una función que, dada una lista de cajas con sus tamaños, determine si **es posible empaquetarlas todas en una sola**.  
Esto significa que cada caja debe caber dentro de otra más grande, y así sucesivamente, hasta que todas estén dentro de la más grande.  

📦 **Reglas para encajar las cajas:**  
✅ **Cada caja debe ser más pequeña en todas sus dimensiones** que la siguiente caja que la contenga.  
❌ **Las cajas no pueden rotarse.** Si una caja tiene dimensiones `2x3x2`, no puede entrar en una de `3x2x2`.  
🔀 **Las cajas pueden venir en cualquier orden**, por lo que deberás ordenarlas correctamente antes de comprobar si encajan.

## ✨ Ejemplos

### ✅ Ejemplo 1: Cajas que sí encajan  
```js
const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 }
];

fitsInOneBox(boxes); // true
```

### ❌ Ejemplo 2: Cajas que no encajan  
```js
const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 }
];

fitsInOneBox(boxes); // false
