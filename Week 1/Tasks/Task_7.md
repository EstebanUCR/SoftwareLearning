
# 📝 Tarea: Práctica de operadores lógicos, comparación y comentarios

Resuelve los siguientes ejercicios usando los operadores indicados. Escribe tu respuesta en TypeScript y agrega un comentario con el valor de verdad o el resultado.

---

## 1. Negación lógica (!)
1. ¿Cuál es el resultado de `!true`?
```typescript
// false
```
2. ¿Cuál es el resultado de `!false`?
```typescript
// true
```
3. ¿Cuál es el resultado de `!0`?
```typescript
// true
```

## 2. AND lógico (&&)
1. ¿Cuál es el resultado de `true && false`?
```typescript
// false
```
2. ¿Cuál es el resultado de `true && true`?
```typescript
// true
```
3. ¿Cuál es el resultado de `false && false`?
```typescript
// false
```

## 3. OR lógico (||)
1. ¿Cuál es el resultado de `true || false`?
```typescript
// true
```
2. ¿Cuál es el resultado de `false || false`?
```typescript
// false
```
3. ¿Cuál es el resultado de `true || true`?
```typescript
// true
```

## 4. Mayor que (>), Menor que (<)
1. ¿Cuál es el resultado de `5 > 3`?
```typescript
// true
```
2. ¿Cuál es el resultado de `2 < 4`?
```typescript
// true
```
3. ¿Cuál es el resultado de `10 > 20`?
```typescript
// false
```

## 5. Mayor o igual (>=), Menor o igual (<=)
1. ¿Cuál es el resultado de `5 >= 5`?
```typescript
// true
```
2. ¿Cuál es el resultado de `3 <= 4`?
```typescript
// true
```
3. ¿Cuál es el resultado de `7 <= 2`?
```typescript
// false 
```

## 6. Operador ternario (? :)
1. Usa el operador ternario para mostrar "Mayor" si x es mayor que 5, y "Menor o igual" si no.
```typescript
let x = 7;
let MayorMenor = ( x > 5 ) ? "Mayor" : "Menor o igual";
```
2. Usa el operador ternario para mostrar "Aprobado" si nota es mayor o igual a 70, y "Reprobado" si no.
```typescript
let nota = 65;
let Final = ( nota >= 70 ) ? "Aprobado" : "Reprobado";
```
3. Usa el operador ternario para mostrar "Par" si num es divisible por 2, y "Impar" si no.
```typescript
let num = 8;
let divisible = ( num % 2 === 0) ? "Par" : "Impar";
```

## 7. Comentarios en código
1. Escribe un comentario de una línea explicando qué hace una variable.
```typescript
//  una variavle es como una caja que nos sirve para guardar cosas y le podemos poner un nombre significativo
```
2. Escribe un comentario de varias líneas explicando el propósito de las condicionales.
```typescript
/*
Las condicionales se usan para ejecutar código
solo si se cumple cierta condición.
*/
```
1. Escribe un comentario de una línea explicando el ciclo while y for y cuando usarlos.
```typescript
// el ciclo for sirve para repetir una accion cuando sabemos cuanto se va a repetir,  el while sirve para repetir la accion mientras se cumpla una condicion.
```
