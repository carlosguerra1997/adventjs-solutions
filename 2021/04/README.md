# Árbol de Navidad 🎄

¡Es hora de poner el árbol de Navidad en casa! En este ejercicio, crearemos una función que genere un árbol navideño en formato de texto.

## Descripción

La función recibirá un número entero positivo que representará la altura del árbol. La altura mínima será `1` y la máxima `100`.

El árbol estará compuesto por:

- Un triángulo de asteriscos (`*`) con la altura proporcionada.
- Espacios representados con guiones bajos (`_`) para alinear correctamente el árbol.
- Un tronco de dos líneas con el carácter `#`.

### Ejemplo de salida:

Si la altura es `5`:

```javascript
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
```

### Ejemplo de salida:

Si la altura de salida es `3`:

```javascript
__*__
_***_
*****
__#__
__#__
```