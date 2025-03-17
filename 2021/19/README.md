# 🎁 ¿Qué deberiamos aprender en Platzi?

## Descripción

Con motivo de las fechas más bonitas del año, en Platzi han lanzado una promoción muy especial porque la educación es un regalo 🎁 para siempre.

En Platzi tienen más de 800 cursos 📚 pero, claro, nuestro tiempo es limitado. Así que vamos a optimizar nuestro tiempo disponible para completar dos cursos usando el máximo número de horas disponible.

Tenemos que crear una función que recibe dos parámetros. El primero es el número de horas que tenemos disponible ⏳ y el segundo es un array donde cada índice es un curso y el valor el tiempo que se tarda en completar.

Tenemos claro que queremos hacer dos cursos, así que la función debe devolver un array con el índice de los dos cursos que vamos a poder completar con el tiempo disponible proporcionado y usando el máximo tiempo disponible. Si no nos da tiempo, devolvemos `null`.

## 📥 Entrada

- Un número `time` que indica las horas disponibles.
- Un array `courses` donde cada índice es un curso y el valor el tiempo que se tarda en completar ese curso.

## 📤 Salida

La función debe devolver un array con los índices de los dos cursos que podemos completar dentro del tiempo disponible y con el máximo uso de ese tiempo. Si no es posible completar dos cursos, la función debe devolver `null`.

## 📝 Ejemplos

```js
learn(10, [2, 3, 8, 1, 4]) 
// [0, 2] -> Con 10 horas disponibles, lo mejor es completar los cursos en los índices 0 y 2.

learn(15, [2, 10, 4, 1]) 
// [1, 2] -> Los cursos en [1, 2] son 14 horas, es la mejor opción.

learn(25, [10, 15, 20, 5]) 
// [0, 1] -> Los cursos [0, 1] y [2, 3] completan exactamente 25 horas, pero siempre devolvemos el primero que encontremos.

learn(8, [8, 2, 1]) 
// [1, 2] -> Para hacer dos cursos, no podemos hacer el de 8 horas, así que devolvemos el de 1 y 2.

learn(8, [8, 2, 1, 4, 3]) 
// [3, 4] -> Usamos el máximo tiempo disponible (7 horas) y los cursos [3, 4] son los mejores.

learn(4, [10, 14, 20]) 
// null -> No nos da tiempo a hacer dos cursos.

learn(5, [5, 5, 5]) 
// null -> No nos da tiempo a hacer dos cursos.
