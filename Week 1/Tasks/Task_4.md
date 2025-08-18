# 🔧 Pseudocódigo

El **pseudocódigo** es una forma de escribir la lógica de un programa usando lenguaje común (ni español puro, ni código real). Sirve como puente entre el pensamiento lógico y el código que luego escribirás en un lenguaje de programación.

---

## 📝 Ejemplo de pseudocódigo

```text
Inicio
  Definir edad como 20
  Si edad > 18 entonces
    Mostrar "Puedes votar"
  Sino
    Mostrar "No puedes votar"
Fin

```

---

## ✏️ Tarea: Pseudocódigo para crear una pizza

Escribe un pseudocódigo donde:

- Definas las variables necesarias para los ingredientes: masa, salsa de tomate, hongos, peperoni y queso.
- Realices las condicionales necesarias para evaluar si se puede crear una pizza (todos los ingredientes deben estar presentes).
- Muestra un mensaje indicando si se puede o no crear la pizza, sino se puede crear, mostrar un mensaje donde diga que ingrediente falta.

Escribe tu pseudocódigo aquí:

```text
Inicio
  Definir ingredientes como ["masa", "salsa de tomate", "hongos", "peperoni", "queso"]
  Si "masa" esta en ingredientes y "salsa de tomate" esta en ingredientes y "hongos" esta en ingredientes y "peperoni" esta en ingredientes y "queso" esta en ingredientes 
    Mostrar " Se puede crear pizza "
  Sino
    Si queso no está en ingredientes
      Mostrar "Falta queso"
    Sino si ["masa", "salsa de tomate", "hongos", "queso"]
      Mostrar "Falta peperoni"
    Si ["masa", "salsa de tomate", "peperoni", "queso"]
      Mostrar "Falta hongos"
    Si ["masa", "hongos", "peperoni", "queso"]
      Mostrar "Falta salsa de tomate"
    Si ["salsa de tomate", "hongos", "peperoni", "queso"]
      Mostrar "Falta masa"
Fin


Inicio
  Definir ingredientes como ["masa", "salsa de tomate", "hongos", "peperoni", "queso"]
  Si masa está en ingredientes
    Si "salsa de tomate" está en ingredientes
      Si "hongos" está ingredientes
        Si "peperoni" está ingredientes
          Si "queso" está ingredientes
            Mostrar " Se puede crear pizza "
          Sino
            Mostrar "Falta queso"
        Sino
          Mostrar "Falta peperoni"
      Sino
        Mostrar "Falta hongos"
    sino
      Mostrar "Salsa de tomate"
  Sino
    Mostrar "Falta masa"
Fin

```

