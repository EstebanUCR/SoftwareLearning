
# 📝 Tarea: Mensaje personalizado con entrada de datos

## Instrucciones
Escribe un código en TypeScript que:

1. Pida al usuario su nombre y su edad usando `prompt-sync`.
2. Muestre en consola un mensaje personalizado como:
   - "Hola, [nombre]. Tienes [edad] años. ¡Bienvenido!"

### Ejemplo de salida esperada:
```
¿Cuál es tu nombre? Ana
¿Cuántos años tienes? 22
Hola, Ana. Tienes 22 años. ¡Bienvenido!
```

```typescript

import promptSync from 'prompt-sync';
const prompt = promptSync();

const nombre: string = prompt("¿Cuál es tu nombre? ");
const edad: number = Number(prompt("¿Cuál es tu edad? "));
console.log(`Hola, ${nombre}. Tienes ${edad} años. ¡Bienvenido!`);
```