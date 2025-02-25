# 🎄 Días hasta Navidad

¡La emoción está en el aire! 📆 Se acerca el 25 de diciembre y queremos contar cuántos días faltan para Navidad.  

## 📌 Descripción del ejercicio  

Vamos a crear una función `daysToXmas` que, al recibir una instancia de `Date`, nos devuelva el número de días que faltan para Navidad.  

### 📝 Reglas:
- El resultado debe ser un número entero.
- Si la fecha es el 25 de diciembre, debe devolver `0`.
- Si la fecha es posterior al 25 de diciembre, debe devolver un número negativo.
- No importa la hora, solo contamos días completos.  

## 🔍 Ejemplos

```javascript
const date1 = new Date('Dec 1, 2021')
console.log(daysToXmas(date1)) // 24

const date2 = new Date('Dec 24, 2021 00:00:01')
console.log(daysToXmas(date2)) // 1

const date3 = new Date('Dec 24, 2021 23:59:59')
console.log(daysToXmas(date3)) // 1

const date4 = new Date("December 20, 2021 03:24:00")
console.log(daysToXmas(date4)) // 5
```