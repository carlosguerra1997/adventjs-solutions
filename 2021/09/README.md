# groupBy

Mark Zucktheelf 🧝 trabaja en la fábrica de Papa Noél y, con la llegada del día especial, ha creado una función para agrupar elementos de una colección de manera eficiente. ¡Ayuda a organizar los regalos y las listas de Navidad! 🎅

## Descripción

La función `groupBy` recibe dos parámetros:

1. **Colección**: Un array que puede contener valores simples o objetos.
2. **Criterio**: Un **string** que es el nombre de la propiedad a la que se agruparán los elementos, o una **función** que será aplicada a cada elemento para obtener la clave.

La función debe devolver un objeto cuyas claves serán los resultados de aplicar la función o extraer el valor de la propiedad de cada elemento. Los valores del objeto resultante serán arrays con los elementos que tengan la misma clave.

## Ejemplos

```js
// Agrupar números por su valor entero
groupBy([6.1, 4.2, 6.3], Math.floor);
// Resultado: { 6: [6.1, 6.3], 4: [4.2] }

// Agrupar cadenas por su longitud
groupBy(['one', 'two', 'three'], 'length');
// Resultado: { 3: ['one', 'two'], 5: ['three'] }

// Agrupar objetos por la propiedad 'age'
groupBy([{age: 23}, {age: 24}], 'age');
// Resultado: { 23: [{age: 23}], 24: [{age: 24}] }

// Agrupar timestamps por el año
groupBy(
  [1397639141184, 1363223700000],
  timestamp => new Date(timestamp).getFullYear()
);
// Resultado: { 2013: [1363223700000], 2014: [1397639141184] }

// Agrupar libros por su rating
groupBy([
  { title: 'JavaScript: The Good Parts', rating: 8 },
  { title: 'Aprendiendo Git', rating: 10 },
  { title: 'Clean Code', rating: 9 },
], 'rating');
// Resultado: { 8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
//              9: [{ title: 'Clean Code', rating: 9 }],
//              10: [{ title: 'Aprendiendo Git', rating: 10 }] }
