
# 🔁 Ciclos (Repeticiones)

Los **ciclos** permiten repetir una acción varias veces sin tener que escribirla una y otra vez.

---

## 🧩 Ejemplos lógicos

- Mientras no esté limpia la mesa, seguir limpiando.
- Repite 5 veces: dar una vuelta.

---

Es como decirle a la computadora:


> “Haz esto una y otra vez hasta que algo cambie o se cumpla.”

---

## 💻 Ejemplos de ciclos en TypeScript

### 1. Ciclo for
Repite una acción un número determinado de veces.

```typescript
for (let i = 1; i <= 5; i++) {
  console.log(`Vuelta número ${i}`);
}
```

### 2. Ciclo while
Repite una acción mientras se cumpla una condición.

```typescript
let mesaLimpia = false;
let intentos = 0;
while (!mesaLimpia && intentos < 3) {
  console.log("Limpiando la mesa...");
  intentos++;
  if (intentos === 3) {
    mesaLimpia = true;
  }
}
```

### 3. Ciclo do...while
Ejecuta la acción al menos una vez y luego repite mientras se cumpla la condición.

```typescript
let contador = 0;
do {
  console.log("Ejecutando al menos una vez");
  contador++;
} while (contador < 2);
```