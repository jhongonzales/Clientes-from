import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClienteService } from 'src/app/service/cliente.service';
import { Cliente } from '../cliente';
import { switchMap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;

  titulo = 'Registro de clientes';
  email = new FormControl('', [Validators.required, Validators.email])
  constructor(
    private clienteService: ClienteService,
    private snackbar: MatSnackBar,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'nombre': new FormControl(''),
      'apellido': new FormControl(''),
      'email': new FormControl('')
    });

  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'escriba un valor';
    }

    return this.email.hasError('email') ? 'email no valido' : '';
  }

  onSubmit(){
    let cliente = new Cliente();
    cliente.setNombre(this.form.value['nombre']);
    cliente.setApellido(this.form.value['apellido']);
    cliente.setEmail(this.form.value['email']);

    this.clienteService.registrar(cliente).pipe(switchMap(()=>{
      return this.clienteService.getClientes();
    }))
    .subscribe((data)=>{
      this.clienteService.setClienteCambio(data);
      this.clienteService.setMensajeCambio("Se registró");
    });

    this.route.navigate(['clientes']);
  }

}
