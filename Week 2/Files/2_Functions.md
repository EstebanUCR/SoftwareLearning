
# 🔁 Funciones en TypeScript

## ¿Qué es una función?
Una **función** es un bloque de código que ejecuta una tarea específica. Permite organizar, reutilizar y simplificar el código.

---

## ¿Por qué usar funciones?
- Evitan repetir código
- Mejoran la organización
- Facilitan la lectura y el mantenimiento
- Permiten dividir problemas grandes en partes pequeñas

---

## ¿Cómo se crea una función?

Para crear una función en TypeScript se usa la palabra clave `function`, seguida del nombre de la función y paréntesis. El código de la función va entre llaves `{}`.

```typescript
function saludar(): void {
  console.log("Hola, bienvenido");
}
```

Para ejecutar la función, simplemente escribe su nombre seguido de paréntesis:

```typescript
saludar(); // Llama a la función y muestra el mensaje
```

---

## Funciones con parámetros
Las funciones pueden recibir datos (parámetros) para trabajar con ellos.

```typescript
function saludarNombre(nombre: string): void {
  console.log("Hola, " + nombre);
}

saludarNombre("Ana"); // Muestra: Hola, Ana
```

Puedes usar varios parámetros:

```typescript
function sumar(a: number, b: number): void {
  console.log(a + b);
}

sumar(3, 5); // Muestra: 8
```

---

## Funciones que devuelven valores
Puedes usar `return` para devolver un resultado desde la función:

```typescript
function cuadrado(x: number): number {
  return x * x;
}

const resultado = cuadrado(4);
console.log(resultado); // Muestra: 16
```

---

## Información importante
- El nombre de la función debe ser descriptivo y no llevar espacios.
- Los parámetros permiten que la función sea flexible y reutilizable.
- Puedes llamar a una función tantas veces como quieras.
- Si una función no tiene `return`, devuelve `undefined` por defecto.
- Las funciones ayudan a dividir el código en partes más fáciles de entender y probar.