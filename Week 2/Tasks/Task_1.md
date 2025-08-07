
# 📝 Tarea: Funciones en TypeScript

## Instrucciones
Resuelve los siguientes ejercicios usando funciones en TypeScript. Escribe tu respuesta en el espacio indicado.

---

### 1. Crea una función llamada `saludar` que reciba un nombre (string) como parámetro y muestre en consola el mensaje: "Hola, [nombre]!".

```typescript
// Escribe tu función aquí

```

---

### 2. Escribe una función llamada `esMayorDeEdad` que reciba una edad (number) y devuelva `true` si la persona es mayor o igual a 18 años, o `false` en caso contrario.

```typescript
// Escribe tu función aquí

function esMayorDeEdad(edad: number): bool {
    let esMayor: bool;
    if (edad >= 18){
        esMayor = true;
    }
    else {
        esMayor = false;
    }
    return esMayor;
}

function esMayorDeEdad(edad: number): bool {
    if (edad >= 18){
        return true;
    }
    else {
        return false;
    }
}

```

---

### 3. Crea una función llamada `calcularIMC` que reciba dos parámetros: peso (number) y altura (number), y devuelva el índice de masa corporal (IMC). El IMC se calcula como peso / (altura * altura).

```typescript
// Escribe tu función aquí

```

---

### 4. Escribe una función llamada `presentarPersona` que reciba nombre, edad y altura, y muestre en consola un mensaje como:
"Hola, me llamo [nombre], tengo [edad] años y mido [altura] metros."

```typescript
// Escribe tu función aquí

```
