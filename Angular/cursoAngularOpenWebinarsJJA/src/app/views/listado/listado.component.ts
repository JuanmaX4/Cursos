import { Component, OnInit } from '@angular/core';
import { Entrada } from '../../shared/interfaces/entrada';
import { EntradaService } from 'src/app/shared/services/entrada.service'

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public listadoEntradas: Entrada[];

  constructor(private entradaService: EntradaService) {
    this.listadoEntradas = [
      {
        titulo: 'Introduccion a Angular',
        resumen: 'En esta leccion realizaremos una pequeña introduccion',
      }
    ];

  }

  ngOnInit(): void {

    this.recuperarEntrada();
  }

  private recuperarEntrada(): void {
    this.entradaService.recuperarEntrada().subscribe((data) => {
      this.listadoEntradas = data;
    },
    (error) => {

    },
    ()=> {

    }
    )
  }

  public mostrarTitulo(titulo: String): void {
    alert(`Entrada seleccionada: ${titulo}.`);
  }

}
