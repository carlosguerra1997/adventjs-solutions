# Contains

Dani trabaja en una tienda y, con la llegada de las navidades, el almacén está hecho un desastre. Necesita una función que le ayude a encontrar los productos rápidamente.

## Descripción

Se nos da una función que recibe dos parámetros:

1. Un **objeto** que representa la estructura del almacén.
2. Un **string** con el nombre del producto a buscar.

La función debe devolver **un booleano** (`true` o `false`) indicando si el producto se encuentra en algún nivel de la estructura del almacén.

## Ejemplos

```js
const almacen = {
  estanteria1: {
    cajon1: {
      producto1: 'coca-cola',
      producto2: 'fanta',
      producto3: 'sprite'
    }
  },
  estanteria2: {
    cajon1: 'vacio',
    cajon2: {
      producto1: 'pantalones',
      producto2: 'camiseta' // <- ¡Está aquí!
    }
  }
};

contains(almacen, 'camiseta'); // true

const otroAlmacen = {
  baul: {
    fondo: {
      objeto: 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando'
    }
  }
};

contains(otroAlmacen, 'gameboy'); // false

