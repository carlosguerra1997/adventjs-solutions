# Validador de Cartas de Navidad

El Grinch está causando problemas y ha revuelto las cartas dirigidas a Santa Claus. Como resultado, algunas cartas tienen errores en sus paréntesis y necesitan ser validadas.

## Descripción del Problema

Las cartas son cadenas de texto que contienen regalos y paréntesis `()`. Para considerar una carta como **válida**, debe cumplir las siguientes reglas:

1. **Los paréntesis deben cerrar correctamente.**
2. **No deben estar vacíos.**
3. **No deben contener llaves `{}` ni corchetes `[]` dentro de los paréntesis.**

Si la carta no cumple estas reglas, se considera **inválida**.

### Ejemplos:

```javascript
"bici coche (balón) bici coche peluche" // ✅ Válida
"(muñeca) consola bici" // ✅ Válida

"bici coche (balón bici coche" // ❌ Inválida
"peluche (bici [coche) bici coche balón" // ❌ Inválida
"(peluche {) bici" // ❌ Inválida
"() bici" // ❌ Inválida
```