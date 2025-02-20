# Contador de Regalos

## Descripción

Hemos recibido una carta ✉️ con todos los regalos que debemos preparar. Sin embargo, el texto es un poco difícil de leer 😱, ya que los regalos están separados por espacios y pueden haber múltiples espacios entre ellos.

Además, algunos regalos vienen con un `_` delante, lo que indica que están tachados y no deben contarse.

## Objetivo

Tu tarea es transformar el texto de la carta en un objeto donde las claves sean los nombres de los regalos y los valores sean la cantidad de veces que aparecen en la carta.

## Ejemplo

### Entrada:

```javascript
const carta = 'bici coche balón _playstation bici coche peluche';
```

### Resultado:

```javascript
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
```

