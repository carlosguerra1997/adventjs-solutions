# Filtrar Ovejas por Color y Nombre

Este ejercicio tiene como objetivo crear una función que filtre un array de objetos representando **ovejas**, basándose en dos criterios:

1. **Color:** Solo se considerarán las ovejas de color **rojo**.
2. **Nombre:** El nombre de la oveja debe contener **ambas** letras **'n'** y **'a'** (sin importar el orden, las mayúsculas o los espacios).

## Requisitos

La función debe tomar como entrada un array de ovejas, y devolver un nuevo array que cumpla con los siguientes criterios:

- La oveja debe tener el color **rojo**.
- El nombre de la oveja debe contener las letras **'n'** y **'a'** en cualquier orden (ignorando mayúsculas y minúsculas, así como los espacios).

## Ejemplo

### Entrada:

```javascript
const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' },
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
];
```

### Resultado:
```
[
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' }
]
```