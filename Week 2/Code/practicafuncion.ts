function EsMayorDeEdad( edad: number ): boolean {
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

let edad: number = 20;
let numero: number = 50;
let cancion: string = "locos";

console.log(EsMayorDeEdad(edad));
console.log(MiCancionFav(cancion));
console.log(Sumar10(numero));
console.log("Fin del programa");