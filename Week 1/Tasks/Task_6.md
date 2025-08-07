
# 📝 Tarea: Práctica de operadores de igualdad y desigualdad

Resuelve los siguientes ejercicios usando los operadores:
- `==` Igualdad débil
- `===` Igualdad estricta
- `!=` Desigualdad débil
- `!==` Desigualdad estricta

Para cada operador:
1. Escribe la operación en TypeScript y devuelve el valor de verdad (true/false).
2. Realiza otras 3 operaciones donde solo debes poner el valor de verdad esperado.

---

## 1. Igualdad débil (==)
### Escribe la operación y devuelve el valor de verdad:

1. 5 == "5"
```typescript
let cinco = 5 == "5"; // true

```
2. "hola" == "hola"
```typescript
let saludo = "hola" == "hola"; // true

```
3. true == 1
```typescript
let comparacion = true == 1; // true

```

### Solo valor de verdad:

4. 10 == "10"
```typescript
// true

```
5. 0 == false
```typescript
// true

```
6. "abc" == "def"
```typescript
// false

```

## 2. Igualdad estricta (===)
### Escribe la operación y devuelve el valor de verdad:

1. 5 === "5"
```typescript
let CincoEstricto =  5 === "5"; // false

```
2. "hola" === "hola"
```typescript
let SaludoEstricto =  "hola" === "hola"; // true

```
3. true === 1
```typescript
let ComparacionEstricta = true === 1; // false

```

### Solo valor de verdad:

4. 10 === "10"
```typescript
// false

```
5. 0 === false
```typescript
// false

```
6. "abc" === "abc"
```typescript
// true

```

## 3. Desigualdad débil (!=)
### Escribe la operación y devuelve el valor de verdad:

1. 5 != "5"
```typescript
let CincoDiferente = 5 != "5"; // false

```
2. "hola" != "adios"
```typescript
let SaludoDiferente = "hola" != "adios"; // true 

```
3. true != 0
```typescript
let ComparacionDiferente = true != 0; // true 

```

### Solo valor de verdad:

4. 10 != "10"
```typescript
// false

```
5. 0 != false
```typescript
// false

```
6. "abc" != "def"
```typescript
// true

```

## 4. Desigualdad estricta (!==)
### Escribe la operación y devuelve el valor de verdad:

1. 5 !== "5"
```typescript
let NumDesEst = 5 !== "5"; // true

```
2. "hola" !== "hola"
```typescript
let SalDesEst = "hola" !== "hola"; // false

```
3. true !== 1
```typescript
let ComDesEst = true !== 1; // true 

```

### Solo valor de verdad:

4. 10 !== "10"
```typescript
// true

```
5. 0 !== false
```typescript
// true

```
6. "abc" !== "def"
```typescript
// true

```

---


