
# 🐞 4. Introducción a la Depuración (Debugging)

La **depuración** (debugging) es el proceso de encontrar y corregir errores (bugs) en un programa. Es una habilidad fundamental para cualquier programador.

---

## ¿Qué es un bug?
Un **bug** es un error o comportamiento inesperado en el código. Puede ser causado por:
- Errores de sintaxis
- Errores de lógica
- Problemas de datos
- Fallos en la interacción con otras partes del sistema

---

## Tipos de errores
- **Sintaxis:** El código no cumple las reglas del lenguaje (por ejemplo, falta un punto y coma)
- **Lógica:** El programa corre pero no hace lo que esperabas
- **Runtime:** El error ocurre mientras el programa se ejecuta (por ejemplo, dividir por cero)

---

## Pasos para depurar
1. **Lee con calma el mensaje de error**
2. **Revisa línea por línea** el código
3. **Usa `console.log()`** (o `print()` en otros lenguajes) para ver valores y el flujo del programa
4. **Utiliza el depurador (debugger)** en editores como VSCode para poner puntos de interrupción y analizar paso a paso
5. **Busca en internet** el mensaje de error si no lo entiendes

---

## Herramientas útiles
- **Depurador de VSCode:** Permite ejecutar el código paso a paso, inspeccionar variables y ver el flujo
- **Console.log():** Imprime información en la consola para entender qué está pasando
- **Linting:** Herramientas que detectan errores comunes antes de ejecutar el código

---

## Ejemplo de depuración en TypeScript
```typescript
function dividir(a: number, b: number): number {
  if (b === 0) {
    console.log("Error: No se puede dividir por cero");
    return NaN;
  }
  return a / b;
}

console.log(dividir(10, 0)); // Muestra el mensaje de error
```

---

## Consejos para principiantes
- No te frustres. Los errores son parte del aprendizaje.
- Aprende a leer y entender los mensajes de error.
- Depura poco a poco, no intentes arreglar todo de golpe.
- Pregunta y busca ayuda si te atoras.

---

> Aprender a depurar es una habilidad clave para mejorar como programador. ¡Practica y no te rindas!