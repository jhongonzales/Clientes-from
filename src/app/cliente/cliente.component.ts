import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { switchMap } from 'rxjs';
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

  constructor(
    private service: ClienteService,
    private snackbar: MatSnackBar
    ) { }

  dataSource: MatTableDataSource<Cliente>;

  displayedColumns: string[] = ["idCliente", "nombre", "apellido", "email","acciones"];

  @ViewChild(MatTable) table: MatTable<Cliente>;

  //clientes: Cliente[];

  obtenerClientes(){
    this.service.getClientes().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  ngOnInit(): void {
    this.obtenerClientes();

    this.service.getClienteCambio().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

    this.service.getMensajeCambio().subscribe(data => {
      this.snackbar.open(data, 'Aviso', {duration: 3000});
    })


  }

  removeClient(idCliente: number){
    this.service.remover(idCliente).pipe(switchMap(()=>{
      return this.service.getClientes();
    }))
    .subscribe(data =>{
      this.service.setClienteCambio(data);
      this.service.setMensajeCambio("Se eliminó");
    })
  }

}
