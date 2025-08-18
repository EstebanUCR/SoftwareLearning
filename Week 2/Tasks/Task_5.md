
---

## ✏️ Tarea: Pseudocódigo y código para preparar un viaje

Escribe un pseudocódigo y luego el código en TypeScript donde:

- Definas las variables necesarias para: pasaporte, boleto de avión, visa y maleta.
- Evalúes con condicionales si la persona puede viajar (debe tener todos los elementos).
- Si falta algún elemento, muestra un mensaje indicando cuál falta.
- Si tiene todo, muestra un mensaje indicando que puede viajar.

### Pseudocódigo:
```
Inicio
    definir requerimientos como [ "visa", "maleta", "pasaporte", "boleto de vion"]
    Si "visa" está en requerimientos
        Si "maleta" está en requerimientos
            Si "pasaporte" está en requerimientos
                Si "boleto de avion" está en requerimientos
                    Mostrar " Puede Viajar "
                Sino
                    Mostrar "Falta boleto de avion"
            Sino
                Mostrar "Falta pasaporte"
        sino
            Mostrar "Falta maleta"
    Sino
        Mostrar "Falta visa"
Fin
```

### Código en TypeScript:
```typescript
    let requerimientos: string[] = [ "visa", "maleta", "pasaporte", "boleto de avion" ];

    if (requerimientos.includes("visa")) {
        if (requerimientos.includes("maleta")) {
            if (requerimientos.includes("pasaporte")) {
                if (requerimientos.includes("boleto de avion")) {
                    console.log("Puede Viajar");
                } else {
                    console.log("Falta boleto de avion");
                }
            } else {
                console.log("Falta pasaporte");
            }
        } else {
            console.log("Falta maleta");
        }
    } else {
        console.log("Falta visa");
    }
```
