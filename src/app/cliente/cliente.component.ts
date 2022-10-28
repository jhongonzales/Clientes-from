import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes: Cliente[] = [
    {idCliente: 1, nombre: "pedro", apellido: "Juarez", createAt: "2020-05-15", email: "jago455@gmail.com"},
    {idCliente: 2, nombre: "Gloria", apellido: "Campos", createAt: "2029-09-18", email: "Gloria755@gmail.com"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
