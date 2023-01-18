import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Cliente } from '../cliente/cliente';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

// el decorador indica que tipo de clase representan en angular cual es su rol dentro de la aplicación
// los servicios se deben registrar en la parte de providers
export class ClienteService {

  constructor(private cliente: HttpClient) { }

  private clienteCambio = new Subject<Cliente[]>();
  private mensajeCambio = new Subject<string>();

  getClientes(): Observable<Cliente[]>{
    // get devuelve un tipo generico debemos castear al tipo de dato que requerimos
    // el método get siempre devuelve un tipo observable
    return this.cliente.get<Cliente[]>(`${environment.HOST}/clientes`);
  }

  registrar(cliente: Cliente){
    return this.cliente.post(`${environment.HOST}/clientes`, cliente);
  }

  remover(id: number){
    return this.cliente.delete(`${environment.HOST}/clientes/${id}`);
  }

  getClienteCambio(): Observable<Cliente[]>{ 
    return this.clienteCambio.asObservable();
  }

  setClienteCambio(cliente:  Cliente[]){
    this.clienteCambio.next(cliente);
  }

  getMensajeCambio(): Observable<string>{
    return this.mensajeCambio.asObservable();
  }

  setMensajeCambio(mensaje: string){
    this.mensajeCambio.next(mensaje);
  }

  

}
