
# 📦 3. Estructuras de Datos en TypeScript

Las **estructuras de datos** permiten organizar y almacenar información de manera eficiente. En TypeScript, las más comunes son:

---

## 🔹 Arrays
Un **array** es una colección ordenada de elementos del mismo tipo.

**Ventajas:**
- Permiten acceder a los elementos por su posición (índice)
- Fáciles de recorrer y modificar

**Desventajas:**
- El tamaño puede cambiar, pero no tienen métodos avanzados como otras estructuras

**Ejemplo:**
```typescript
const frutas: string[] = ["manzana", "banana", "naranja"];
console.log(frutas[1]); // "banana"
frutas.push("pera"); // Agrega un elemento
frutas.splice(0, 1); // Quita el primer elemento
```

---

## 🔹 Objetos
Un **objeto** es una colección de pares clave-valor. Se usa para representar entidades con propiedades.

**Ventajas:**
- Permiten agrupar datos relacionados
- Acceso por nombre de propiedad

**Desventajas:**
- No tienen orden
- Las claves deben ser únicas

**Ejemplo:**
```typescript
const persona = { nombre: "Ana", edad: 25 };
console.log(persona.nombre); // "Ana"
```

---

## 🔹 Mapas (Map)
Un **Map** permite guardar pares clave-valor, pero acepta cualquier tipo de clave y mantiene el orden de inserción.

**Ventajas:**
- Claves de cualquier tipo
- Métodos útiles (`set`, `get`, `has`, `delete`)

**Desventajas:**
- No se accede por índice

**Ejemplo:**
```typescript
const mapa = new Map<string, number>();
mapa.set("uno", 1);
mapa.set("dos", 2);
console.log(mapa.get("uno")); // 1
```

---

## 🔹 Conjuntos (Set)
Un **Set** almacena valores únicos, sin duplicados.

**Ventajas:**
- Evita elementos repetidos
- Métodos para agregar, eliminar y verificar

**Desventajas:**
- No acceso por índice

**Ejemplo:**
```typescript
const conjunto = new Set<number>();
conjunto.add(1);
conjunto.add(2);
conjunto.add(1); // No se agrega porque ya existe
console.log(conjunto.has(2)); // true
```

---

## ¿Para qué sirven?
- Organizar datos para búsquedas rápidas
- Agrupar información relacionada
- Evitar duplicados
- Representar entidades y relaciones

---

## Resumen
- Usa **arrays** para listas ordenadas
- Usa **objetos** para datos estructurados
- Usa **Map** para pares clave-valor con claves flexibles
- Usa **Set** para colecciones únicas