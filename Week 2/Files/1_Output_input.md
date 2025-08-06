edad = 20

# 🧮 Variables, Tipos de Datos y Entrada/Salida (Input/Output) en Python

## ¿Qué es una variable?
Una **variable** es un nombre que se usa para guardar un valor (número, texto, etc.) que puede cambiar durante la ejecución del programa.

**Ejemplo conceptual:**
```python
edad = 20  # Guarda el número 20 en la variable 'edad'
```

---

## Tipos de datos más comunes en Python

| Tipo   | Descripción                        | Ejemplo           |
|--------|------------------------------------|-------------------|
| int    | Números enteros                    | 10, -3, 1000      |
| float  | Números decimales                  | 3.14, -0.5        |
| str    | Texto o cadenas de caracteres      | "hola", "Python" |
| bool   | Verdadero o falso                  | True, False       |

---

## Entrada (input) y salida (output)

- **Entrada (input):** Permite al usuario escribir un dato y guardarlo en una variable.
- **Salida (print):** Muestra un mensaje o resultado en pantalla.

### ¿Por qué es importante?
Usar input y output te permite interactuar con el usuario, guardar información y mostrar resultados. Es la base para crear programas útiles y dinámicos.

---

## Ejemplo práctico de input y output

```python
nombre = input("¿Cuál es tu nombre?")  # El usuario escribe su nombre y se guarda en la variable
print("Hola, " + nombre)                # Se muestra un saludo usando el valor guardado
```

---

## Ejemplo: Guardar varios valores

```python
edad = int(input("¿Cuál es tu edad? "))      # Convierte la entrada a número entero
altura = float(input("¿Cuál es tu altura? ")) # Convierte la entrada a número decimal
print("Tienes", edad, "años y mides", altura, "metros.")
```

---

## Información importante
- Siempre guarda el resultado de `input()` en una variable para poder usarlo después.
- Por defecto, `input()` devuelve texto (str). Si necesitas un número, usa `int()` o `float()` para convertirlo.
- Usa `print()` para mostrar cualquier valor, variable o mensaje en pantalla.
- Puedes combinar variables y texto usando `+` o comas en `print()`.