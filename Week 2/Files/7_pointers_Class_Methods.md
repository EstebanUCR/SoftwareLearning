# 👉 1. Punteros

Un puntero en computación es una variable que almacena la dirección de memoria de otro dato o variable. Permite acceder, modificar o recorrer datos en memoria de forma eficiente, y es fundamental en lenguajes como C y C++. Los punteros facilitan el manejo de estructuras dinámicas como listas enlazadas y árboles.

---

# 📚 Conceptos clave en programación orientada a objetos

## ¿Qué es una función?
Una **función** es un bloque de código independiente que realiza una tarea específica y puede ser llamada desde cualquier parte del programa.

**Ejemplo de función en TypeScript:**
```typescript
function saludar(nombre: string): void {
	console.log("Hola, " + nombre);
}
saludar("Ana");
```

---

## ¿Qué es un método?
Un **método** es una función asociada a un objeto o clase. Se llama usando el objeto o la clase y normalmente opera sobre sus datos internos.

**Ejemplo de método en una clase:**
```typescript
class Persona {
	nombre: string;
	constructor(nombre: string) {
		this.nombre = nombre;
	}
	saludar(): void {
		console.log("Hola, soy " + this.nombre);
	}
}

const persona1 = new Persona("Luis");
persona1.saludar();
```

---

## Diferencias entre función y método
- Una **función** es independiente y no pertenece a ningún objeto o clase.
- Un **método** está definido dentro de una clase u objeto y suele operar sobre sus propiedades.

---

## ¿Qué es una clase?
Una **clase** es un molde o plantilla para crear objetos. Define propiedades y métodos que tendrán los objetos creados a partir de ella.

**Ejemplo de clase:**
```typescript
class Animal {
	especie: string;
	constructor(especie: string) {
		this.especie = especie;
	}
	hacerSonido(): void {
		console.log("Sonido de " + this.especie);
	}
}
```

---

## ¿Qué es un objeto?
Un **objeto** es una instancia de una clase. Tiene sus propias propiedades y puede usar los métodos definidos en la clase.

**Ejemplo de objeto:**
```typescript
const miAnimal = new Animal("gato");
miAnimal.hacerSonido();
```

---