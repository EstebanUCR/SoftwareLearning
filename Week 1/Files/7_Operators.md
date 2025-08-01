
# Operadores más comunes en computación

Los operadores son símbolos que permiten realizar operaciones en programación, como comparar valores, asignar datos o combinar condiciones. Aquí tienes los más usados y cómo se emplean en TypeScript:

| Operador | Nombre                | Explicación y ejemplo |
|----------|-----------------------|----------------------|
| `=`      | Asignación            | Asigna un valor a una variable.<br>Ejemplo: `let x = 5;` |
| `+`      | Suma                  | Suma dos valores.<br>Ejemplo: `2 + 3 // 5` |
| `-`      | Resta                 | Resta dos valores.<br>Ejemplo: `5 - 2 // 3` |
| `*`      | Multiplicación        | Multiplica dos valores.<br>Ejemplo: `4 * 2 // 8` |
| `/`      | División              | Divide dos valores.<br>Ejemplo: `10 / 2 // 5` |
| `%`      | Módulo (resto)        | Devuelve el resto de una división.<br>Ejemplo: `7 % 3 // 1` |
| `++`     | Incremento            | Suma 1 al valor de la variable.<br>Ejemplo: `x++` |
| `--`     | Decremento            | Resta 1 al valor de la variable.<br>Ejemplo: `x--` |
| `+=`     | Suma y asigna         | Suma y asigna el resultado.<br>Ejemplo: `x += 2 // x = x + 2` |
| `-=`     | Resta y asigna        | Resta y asigna el resultado.<br>Ejemplo: `x -= 2 // x = x - 2` |
| `*=`     | Multiplica y asigna   | Multiplica y asigna el resultado.<br>Ejemplo: `x *= 2 // x = x * 2` |
| `/=`     | Divide y asigna       | Divide y asigna el resultado.<br>Ejemplo: `x /= 2 // x = x / 2` |
| `%=`     | Módulo y asigna       | Calcula el resto y asigna.<br>Ejemplo: `x %= 2 // x = x % 2` |
| `==`     | Igualdad débil        | Compara si dos valores son iguales (sin comparar tipo).<br>Ejemplo: `5 == "5" // true` |
| `===`    | Igualdad estricta     | Compara si dos valores y tipos son iguales.<br>Ejemplo: `5 === "5" // false` |
| `!=`     | Desigualdad débil     | Compara si dos valores son diferentes (sin comparar tipo).<br>Ejemplo: `5 != "5" // false` |
| `!==`    | Desigualdad estricta  | Compara si dos valores o tipos son diferentes.<br>Ejemplo: `5 !== "5" // true` |
| `!`      | Negación lógica (NOT) | Invierte el valor lógico.<br>Ejemplo: `!true // false` |
| `&&`     | AND (Y lógico)        | Ambas condiciones deben ser verdaderas.<br>Ejemplo: `true && false // false` |
| `2 palitos`     | OR (O lógico)         | Al menos una condición debe ser verdadera.<br>Ejemplo: `true || false // true` |
| `>`      | Mayor que             | Compara si el valor de la izquierda es mayor.<br>Ejemplo: `5 > 3 // true` |
| `<`      | Menor que             | Compara si el valor de la izquierda es menor.<br>Ejemplo: `2 < 4 // true` |
| `>=`     | Mayor o igual         | Compara si el valor de la izquierda es mayor o igual.<br>Ejemplo: `5 >= 5 // true` |
| `<=`     | Menor o igual         | Compara si el valor de la izquierda es menor o igual.<br>Ejemplo: `3 <= 4 // true` |
| `? :`    | Ternario              | Operador condicional.<br>Ejemplo: `let resultado = (x > 5) ? "Mayor" : "Menor o igual";` |
| `//`     | Comentario            | Operador Comentario, sirve para dejar comentarios en el codigo y que no se van a ejecutar|
| `/**/`     | Comentario            | Operador Comentario, sirve para dejar comentarios en el codigo y que no se van a ejecutar|

---

## Ejemplos en TypeScript

```typescript
// Asignación
let edad = 20;

// Suma, resta, multiplicación, división, módulo
let suma = 2 + 3;         // 5
let resta = 5 - 2;        // 3
let multiplicacion = 4 * 2; // 8
let division = 10 / 2;    // 5
let resto = 7 % 3;        // 1


/* 
Incremento y decremento
Esta sección son ejemplos
de operadores que vimos en el 
documento numero 7 donde habrán
ejemplos relacionados a el 
incremento con el simbología de ++
y decremento con la simbología --
*/
let contador = 0;
contador++; // 1
contador--; // 0

// Asignación compuesta
let x = 10;
x += 2; // x = 12
x -= 3; // x = 9
x *= 2; // x = 18
x /= 3; // x = 6
x %= 4; // x = 2

// Comparación
console.log(edad == "20");    // true
console.log(edad === "20");   // false
console.log(edad != 18);       // true
console.log(edad !== "20");   // true

// Negación
let esMayor = !(edad < 18);    // true

// AND y OR
let tieneLicencia = true;
if (edad > 18 && tieneLicencia) {
  console.log("Puede conducir");
}
if (edad > 18 || tieneLicencia) {
  console.log("Cumple al menos una condición");
}

// Mayor, menor, mayor o igual, menor o igual
console.log(edad > 18);   // true
console.log(edad < 30);   // true
console.log(edad >= 20);  // true
console.log(edad <= 21);  // true

// Operador ternario
let mensaje = (edad >= 18) ? "Mayor de edad" : "Menor de edad";
console.log(mensaje);
```
