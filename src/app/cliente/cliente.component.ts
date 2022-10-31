import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ClienteService } from '../service/cliente.service';
import { Cliente } from './cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  /*
  clientes: Cliente[] = [
    {idCliente: 1, nombre: "pedro", apellido: "Juarez", createAt: "2020-05-15", email: "jago455@gmail.com"},
    {idCliente: 2, nombre: "Gloria", apellido: "Campos", createAt: "2029-09-18", email: "Gloria755@gmail.com"}
  ];
  */

  constructor(private service: ClienteService) { }

  dataSource: MatTableDataSource<Cliente>;

  displayedColumns: string[] = ["idCliente", "nombre", "apellido", "email"];

  @ViewChild(MatTable) table: MatTable<Cliente>;

  //clientes: Cliente[];

  obtenerClientes(){
    this.service.getClientes().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  ngOnInit(): void {
    this.obtenerClientes();
  }

  addClient(){

  }

  removeClient(){

  }

}
