export class Cliente {
  private idCliente: number;
  private nombre: string;
  private apellido: string;
  //public createAt: string,
  private email: string;

  setIdCliente(id: number){
    this.idCliente = id;
  }

  getIdCliente(): number{
    return this.idCliente;
  }

  setNombre(nombre: string){
    this.nombre = nombre;
  }

  getNombre(): string{
    return this.nombre;
  }

  setApellido(apellidos: string){
    this.apellido = apellidos;
  }

  getApellido(): string{
    return this.apellido;
  }

  setEmail(email: string){
    this.email = email;
  }

  getEmail(): string{
    return this.email;
  }


  constructor(
  ) {}
  
}
