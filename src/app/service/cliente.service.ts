import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// el decorador indica que tipo de clase representan en angular cual es su rol dentro de la aplicación
// los servicios se deben registrar en la parte de providers
export class ClienteService {

  constructor() { }
}
