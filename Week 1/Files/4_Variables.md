
# 🔤 Conceptos clave: Variables

## ¿Qué es una variable?

Una **variable** es como una cajita donde se guarda información para usarla después. Puede cambiar (por eso se llama “variable”) y tiene un nombre que tú eliges.

---

### 🗃️ Ejemplo visual

Imagina una caja llamada `edad`, donde guardas el número **20**.

Luego puedes decir:


> Si la **edad** es mayor a 18, puede votar.

---

## 💻 Variables básicas en TypeScript


En TypeScript, las variables pueden ser de diferentes tipos básicos:

- **number** (números)
- **string** (cadenas de texto)
- **boolean** (true o false)
- **any** (cualquier tipo)
- **undefined** (valor no asignado)
- **null** (ausencia intencional de valor)


### Ejemplos en código

```typescript
// Variable numérica
let edad: number = 20;

// Variable de texto
let nombre: string = "Ana";

// Variable booleana
let esMayorDeEdad: boolean = true;

// Variable de cualquier tipo
let dato: any = "puede ser cualquier cosa";

// Variable undefined
let sinValor: undefined = undefined;

// Variable null
let vacio: null = null;

// Uso de variables en una condición
if (edad > 18) {
  console.log(nombre + " puede votar");
} else {
  console.log(nombre + " no puede votar");
}
```