
# 🔀 Condicionales (Decisiones)

Las **condicionales** permiten que un programa tome decisiones. Funcionan como una pregunta con una condición:

> "Si algo es verdadero, haz esto. Si no, haz otra cosa."

---

## 🧩 Ejemplo lógico

- Si llueve, llevo paraguas.
- Si no llueve, salgo sin paraguas.

---


---


## 📝 Tipos de condicionales en programación (con ejemplos en TypeScript)

En programación, existen varios tipos de condicionales que permiten tomar decisiones según diferentes situaciones. A continuación se explica cada tipo junto a su ejemplo en código:

---

### 1. Condicional simple
Ejecuta una acción solo si la condición es verdadera.

**Ejemplo lógico:** “Si tienes más de 18 años, puedes votar.”

```typescript
let edad = 20;
if (edad > 18) {
  console.log("Puedes votar");
}
```

---

### 2. Condicional compuesta (if-else)
Permite elegir entre dos caminos: uno si la condición es verdadera y otro si es falsa.

**Ejemplo lógico:** “Si llueve, llevo paraguas. Si no, salgo sin paraguas.”

```typescript
let llueve = false;
if (llueve) {
  console.log("Llevo paraguas");
} else {
  console.log("Salgo sin paraguas");
}
```

---

### 3. Condicional múltiple (if-else if-else / switch)
Permite evaluar varias condiciones diferentes y ejecutar acciones distintas según cada caso.

**Ejemplo lógico:** “Si la nota es mayor a 90, es A. Si es mayor a 80, es B. Si no, es C.”

```typescript
let nota = 75;
if (nota > 90) {
  console.log("A");
} else if (nota > 80) {
  console.log("B");
} else {
  console.log("C");
}
```

---

### 4. Condicional anidada
Son condicionales dentro de otras condicionales, para tomar decisiones más complejas.

**Ejemplo lógico:** “Si es mayor de edad, y además tiene licencia, puede conducir.”

```typescript
let mayorEdad = true;
let tieneLicencia = false;
if (mayorEdad) {
  if (tieneLicencia) {
    console.log("Puede conducir");
  } else {
    console.log("No puede conducir: no tiene licencia");
  }
} else {
  console.log("No puede conducir: no es mayor de edad");
}

if (mayorEdad && tieneLicencia ){
  console.log("Puede conducir");
} else {
  console.log("No puede conducir: no es mayor de edad");
}
```