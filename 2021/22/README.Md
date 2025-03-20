# ¿Cuántos adornos necesita el arbol?

## Enunciado

¡Ay! Que llega la Navidad y no hemos decorado todavía el árbol. 🎄😱

Necesitamos una función que, al recibir un árbol binario, nos diga el número de decoraciones que necesitamos. Cada nodo del árbol tiene un valor que representa el número de decoraciones que requiere esa rama. La raíz siempre es el número 1 porque es la estrella ⭐.

### Definición del Árbol

El árbol binario es representado por un objeto de JavaScript de la siguiente forma:

- **value**: El número de decoraciones necesarias en ese nodo.
- **left**: El nodo izquierdo, que puede ser otro árbol binario o `null` si no existe.
- **right**: El nodo derecho, que también puede ser otro árbol binario o `null` si no existe.

### Ejemplo

#### Árbol de ejemplo 1

```js
const tree = {
  value: 1,
  left: {
    value: 2,
    left: null,
    right: null
  },
  right: {
    value: 3,
    left: null,
    right: null
  }
};

const result = countDecorations(tree)
console.log('Result: ', result) // 6
```

```js
const bigTree = {
  value: 1,
  left: {
    value: 5,
    left: {
      value: 7,
      left: {
        value: 3,
        left: null,
        right: null
      },
      right: null
    },
    right: null
  },
  right: {
    value: 6,
    left: {
      value: 5,
      left: null,
      right: null
    },
    right: {
      value: 1,
      left: null,
      right: null
    }
  }
};

const result = countDecorations(bigTree)
console.log('Result: ', result) // 28
