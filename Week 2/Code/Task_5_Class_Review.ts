//agregar el codigo del gato
let nombre = "Derek";
class Client {
  private contrasenaBanco: string; // atributo privado
  public nombre: string;           // atributo público

  constructor(nombre: string, contrasenaBanco: string) {
    this.nombre = nombre;
    this.contrasenaBanco = contrasenaBanco; // inicializando la contraseña
  }

  getName(): string {
    return this.nombre;
  }

  private getPassword(): string {
    return this.contrasenaBanco;
  }

  validatePassword(): boolean {
    let password: string = this.getPassword();
    if (password === "1234") {
      return true;
    }
    return false; // Si la contraseña no es correcta, retorna false
  }

  setName(newName: string): void {
    this.nombre = newName;
  }
}
const client1 = new Client("LilDrips", "1234");
const client2 = new Client("Esteban", "5678");

console.log(client2.getName());
client1.validatePassword(); // Validar contraseña
client1.setName("NuevoNombre"); // Cambiar el nombre del cliente 1
console.log(client2.getName());
