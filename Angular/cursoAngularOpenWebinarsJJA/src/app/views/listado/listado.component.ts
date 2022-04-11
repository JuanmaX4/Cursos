import { Component, OnInit } from '@angular/core';
import { Entrada } from '../../shared/interfaces/entrada';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public listadoEntradas: Entrada[];

  constructor() {
    this.listadoEntradas = [
      {
        titulo: 'Introduccion a Angular',
        resumen: 'En esta leccion realizaremos una pequeña introduccion',
      }
    ];

  }

  ngOnInit(): void {
  }

  public mostrarTitulo(titulo: String): void {
    alert(`Entrada seleccionada: ${titulo}.`);
  }

}
