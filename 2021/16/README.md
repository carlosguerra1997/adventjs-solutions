# Descifrando los números...

Lara Eloft ha encontrado unos restos élficos en una cueva, cerca del Círculo Polar Ártico, a 8 km al norte de Rovaniemi.

Ahora se encuentra descifrando unas misteriosas cartas que contienen información sobre unos números que le pueden hacer llegar al próximo objetivo.

## Descripción del Problema

Lara tiene un documento que contiene una serie de números que pueden ser usados para descifrarlos. Cada número está representado por un símbolo:

| Símbolo | Valor |
|---------|-------|
| `.`     | 1     |
| `,`     | 5     |
| `:`     | 10    |
| `;`     | 50    |
| `!`     | 100   |

Además, los símbolos se restan si están inmediatamente a la izquierda de otro mayor.

## Objetivo

Crear una función `decodeNumbers` que reciba una cadena de texto con estos símbolos y devuelva su valor numérico correspondiente. Si encuentra un símbolo desconocido, debe devolver `NaN`.

## Consideraciones
- Los símbolos solo pueden ser `.`, `,`, `:`, `;`, `!`.
- Si se encuentra un símbolo desconocido, la función debe retornar `NaN`.
- Aplicar la regla de resta solo si un símbolo menor está antes de uno mayor.

## Ejemplos

```js
decodeNumbers('...') // 3
decodeNumbers('.,') // 4 (5 - 1)
decodeNumbers(',.') // 6 (5 + 1)
decodeNumbers(',...') // 8 (5 + 3)
decodeNumbers('.........!') // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
decodeNumbers('.;') // 49 (50 - 1)
decodeNumbers('..,') // 5 (-1 + 1 + 5)
decodeNumbers('..,!') // 95 (1 - 1 - 5 + 100)
decodeNumbers('.;!') // 49 (-1 -50 + 100)
decodeNumbers('!!!') // 300
decodeNumbers(';!') // 50
decodeNumbers(';.W') // NaN
```
