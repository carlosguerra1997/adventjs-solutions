# 🎄 Comparando árboles de Navidad 🎄

El abuelo 👴 dice que todos los árboles de Navidad son iguales...  
La abuela 👵, en cambio, piensa que no. Que cada árbol de Navidad es distinto...  

## 📌 Descripción del problema

Vamos a crear una función `checkIsSameTree` que nos diga si dos árboles de Navidad son iguales. Para ello, debemos comparar los árboles teniendo en cuenta su estructura y los valores en todas sus ramas.

## Reglas

1. Dos árboles son iguales si tienen la **misma estructura** y **los mismos valores** en cada nodo.
2. El truco de `JSON.stringify` podría no ser válido, ya que el orden de representación de las ramas izquierda y derecha podría variar.

## ✨ Ejemplos

```javascript
const tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null }
}

const tree2 = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
}

checkIsSameTree(tree, tree) // true
checkIsSameTree(tree, tree2) // false
checkIsSameTree(tree2, tree2) // true
