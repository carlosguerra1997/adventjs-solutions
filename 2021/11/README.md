# ¿Vale la pena la tarjeta de fidelidad del cine?

Este ejercicio tiene como objetivo ayudarte a optimizar cómo gastas tu dinero en el cine durante el mes de diciembre. En tu cine favorito tienes dos opciones:

1. **Entrada de un sólo uso**: Cuesta **12$** por cada película.
2. **Tarjeta de fidelidad**: Cuesta **250$** inicialmente, pero cada vez que vas, pagas sólo el **75%** del precio del ticket anterior. Además, este descuento se acumula con cada entrada posterior.

## Ejemplo

Supongamos que decides comprar **3 entradas** al cine, comparando ambas opciones:

### Entrada Normal
El costo total de la tarjeta de fidelidad será:

```js
const totalCost = 250$ (coste inicial) + (12$ * 0,75) + (12$ * 0,75 * 0,75) + (12$ * 0,75 * 0,75 * 0,75) = 270,8125$
```

## Objetivo

Necesitas implementar una función `shouldBuyFidelity()` que, dado el número de veces que vas a ir al cine, determine si es más barato comprar la tarjeta de fidelidad o simplemente pagar por las entradas de un solo uso.

### Ejemplos

```javascript
shouldBuyFidelity(1) // false -> Mejor comprar tickets de un sólo uso
shouldBuyFidelity(100) // true -> Mejor comprar tarjeta fidelidad
