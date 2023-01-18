import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { FormComponent } from './cliente/form/form.component';

// comando para crear este modulo: ng g m app-routing --flat --module=app
// pathMatch le indica a angula la cantidad de url que debe coincidir

const routes: Routes = [
  {path: '', redirectTo:'/clientes', pathMatch: 'full'},
  {path: 'clientes', component: ClienteComponent},
  {path: 'directiva', component: DirectivaComponent},
  {path: 'form', component: FormComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
