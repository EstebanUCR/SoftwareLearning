edad = 20

# 🧮 Variables, Tipos de Datos y Entrada/Salida (Input/Output) en TypeScript

## ¿Qué es una variable?
Una **variable** es un nombre que se usa para guardar un valor (número, texto, etc.) que puede cambiar durante la ejecución del programa.

**Ejemplo conceptual:**
```typescript
let edad: number = 20; // Guarda el número 20 en la variable 'edad'
```

---

## Tipos de datos más comunes en TypeScript

| Tipo     | Descripción                        | Ejemplo                |
|----------|------------------------------------|------------------------|
| number   | Números enteros o decimales        | 10, -3, 3.14, 1000     |
| string   | Texto o cadenas de caracteres      | "hola", "TypeScript"   |
| boolean  | Verdadero o falso                  | true, false            |

---

## Entrada (input) y salida (output)

- **Entrada (input):** Permite al usuario escribir un dato y guardarlo en una variable. En TypeScript (Node.js), se puede usar la librería `prompt-sync` para leer datos desde la consola.
- **Salida (console.log):** Muestra un mensaje o resultado en pantalla.

### ¿Por qué es importante?
Usar input y output te permite interactuar con el usuario, guardar información y mostrar resultados. Es la base para crear programas útiles y dinámicos.

---

## Ejemplo práctico de input y output

Para usar entrada de datos en consola en TypeScript, primero instala la librería `prompt-sync`:

```bash
npm install prompt-sync
```

Luego puedes usarla así:

```typescript
import promptSync from 'prompt-sync';
const prompt = promptSync();

const nombre: string = prompt("¿Cuál es tu nombre? "); // El usuario escribe su nombre
console.log("Hola, " + nombre); // Se muestra un saludo usando el valor guardado
```

---

## Ejemplo: Guardar varios valores

```typescript
import promptSync from 'prompt-sync';
const prompt = promptSync();

const edad: number = Number(prompt("¿Cuál es tu edad? "));
const altura: number = Number(prompt("¿Cuál es tu altura? "));
console.log(`Tienes ${edad} años y mides ${altura} metros.`);
```

---

## Información importante
- Siempre guarda el resultado de `prompt()` en una variable para poder usarlo después.
- Por defecto, `prompt()` devuelve texto (`string`). Si necesitas un número, usa `Number()` para convertirlo.
- Usa `console.log()` para mostrar cualquier valor, variable o mensaje en pantalla.
- Puedes combinar variables y texto usando `+` o plantillas con backticks (`` `texto ${variable}` ``).