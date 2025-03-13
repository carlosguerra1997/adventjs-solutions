# 🚚 La locura de enviar paquetes en esta época

## Descripción

En esta actividad, queremos saber cuántos paquetes puede gestionar un transportista en un día, teniendo en cuenta tanto su propio rendimiento como el de su equipo. La flota de transportistas está organizada jerárquicamente, y debemos contar el total de paquetes gestionados por un transportista y sus subordinados, sin importar cuántos niveles de subordinados haya.

Cada transportista tiene un nombre, una cantidad de paquetes que puede gestionar por día y una lista de subordinados (que son otros transportistas).

## 📥 Entrada

Recibimos un array de arrays donde cada sub-array contiene tres elementos:

1. El nombre o ID del transportista.
2. El número de paquetes que ese transportista puede gestionar en un día.
3. Un array de subordinados (transportistas que están bajo su responsabilidad).

## 📤 Salida

Una función que recibe el array de transportistas y un ID de transportista y devuelve el número total de paquetes que puede gestionar ese transportista y todos sus subordinados.

## 📝 Ejemplos

```js
const carriers = [
  ['dapelu', 5, ['midu', 'jelowing']],
  ['midu', 2, []],
  ['jelowing', 2, []]
];

countPackages(carriers, 'dapelu'); // 9
```

```js
const carriers2 = [
  ['lolivier', 8, ['camila', 'jesuspoleo']],
  ['camila', 5, ['sergiomartinez', 'conchaasensio']],
  ['jesuspoleo', 4, []],
  ['sergiomartinez', 4, []],
  ['conchaasensio', 3, ['facundocapua', 'faviola']],
  ['facundocapua', 2, []],
  ['faviola', 1, []]
];

countPackages(carriers2, 'camila'); // 15
