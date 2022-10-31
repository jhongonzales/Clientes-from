import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {

  habilitar: boolean = true;
  cursos: string[] = ['Java', 'Python', 'C', 'C#', 'Php'];

  constructor() { 
  }


  ngOnInit(): void {

  }

  mostrar(){
    this.habilitar = this.habilitar ? false : true;
  }

}
