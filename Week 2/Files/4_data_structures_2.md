# 📚 Estructuras de Datos Clásicas en Computación

Las estructuras de datos permiten organizar y manipular información de manera eficiente. Además de los arrays y objetos de TypeScript, existen otras estructuras fundamentales en computación:

---

## 🔹 Listas Enlazadas (Linked List)
Una lista enlazada es una secuencia de nodos, donde cada nodo apunta al siguiente.

**Ventajas:**
- Inserción y eliminación rápida en cualquier posición
- No requiere espacio contiguo en memoria

**Desventajas:**
- Acceso lento por posición (hay que recorrer desde el inicio)

**Ejemplo básico en TypeScript:**
```typescript
class Nodo {
  valor: number;
  siguiente: Nodo | null;
  constructor(valor: number) {
    this.valor = valor;
    this.siguiente = null;
  }
}
```

---

## 🔹 Pilas (Stack)
Una pila es una estructura LIFO (Last In, First Out). El último elemento en entrar es el primero en salir.

**Ventajas:**
- Útil para deshacer acciones, recorridos, algoritmos

**Desventajas:**
- Acceso solo al elemento superior

**Ejemplo:**
```typescript
const pila: number[] = [];
pila.push(1); // Agrega
pila.push(2);
const ultimo = pila.pop(); // Saca el último
```

---

## 🔹 Colas (Queue)
Una cola es una estructura FIFO (First In, First Out). El primer elemento en entrar es el primero en salir.

**Ventajas:**
- Útil para gestionar tareas, procesos, turnos

**Desventajas:**
- Acceso solo al frente y al final

**Ejemplo:**
```typescript
const cola: number[] = [];
cola.push(1); // Entra al final
cola.push(2);
const primero = cola.shift(); // Sale el primero
```

---

## 🔹 Árboles (Tree)
Un árbol es una estructura jerárquica donde cada nodo puede tener hijos.

**Ventajas:**
- Representa relaciones jerárquicas (archivos, menús, etc)
- Búsqueda eficiente (árboles binarios de búsqueda)

**Desventajas:**
- Implementación más compleja

**Ejemplo básico de nodo de árbol:**
```typescript
class NodoArbol {
  valor: number;
  hijos: NodoArbol[];
  constructor(valor: number) {
    this.valor = valor;
    this.hijos = [];
  }
}
```

---

## 🔹 Grafos (Graph)
Un grafo es un conjunto de nodos conectados por aristas. Permite representar redes y relaciones complejas.

**Ventajas:**
- Modela conexiones y rutas (redes, mapas, relaciones)

**Desventajas:**
- Implementación y recorrido más avanzado

**Ejemplo de grafo simple:**
```typescript
const grafo: { [nodo: string]: string[] } = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A"],
  D: ["B"]
};
```

---

## Resumen
- Las estructuras de datos clásicas permiten resolver problemas específicos de manera eficiente.
- Elige la estructura adecuada según el tipo de acceso, inserción, eliminación y relación entre los datos.
