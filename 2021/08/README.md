# maxProfit

Invertir en criptomonedas puede ser un deporte de riesgo, especialmente con los recientes hackeos como el de Bitmart. 😅 Sin embargo, si sabes cómo maximizar tus ganancias, puedes hacerlo de manera más inteligente. Este ejercicio te ayudará a calcular la mejor ganancia posible en un solo día de inversión.

## Descripción

La función `maxProfit` recibe un array de precios de una criptomoneda a lo largo de un día, y debe devolver la ganancia máxima que podríamos obtener si compramos y vendemos la criptomoneda el mismo día.

### Reglas:
- No puedes comprar a un precio que esté a la derecha de la venta.
- No puedes vender a un precio que esté a la izquierda de la compra.
- Si no es posible obtener ganancia (cuando los precios siempre bajan o se mantienen), la función debe devolver `-1`.

## Ejemplos

```js
const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
maxProfit(pricesBtc); // Resultado: 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70];
maxProfit(pricesEth); // Resultado: 60 (compra a 10, vende a 70)

const pricesDoge = [18, 15, 12, 11, 9, 7];
maxProfit(pricesDoge); // Resultado: -1 (no hay ganancia posible)

const pricesAda = [3, 3, 3, 3, 3];
maxProfit(pricesAda); // Resultado: -1 (no hay ganancia posible)
