```typescript
function EsMayorDeEdad( edad: number ): bool{
    if ( edad >= 18 ) {
        return true;
    }
    else { 
        return false; 
    } 
}

function Sumar10(x: number ): string{
    while ( x < 100 ) {
        x += 10; 
    }
    return "hola mundo";
} 

function MiCancionFav(cancion: string): string{
    if ( cancion == "locos" ) {
        return "es mi cancion fav";
    }
    else {
        return "no es mi cancion fav";
    } 
}
```