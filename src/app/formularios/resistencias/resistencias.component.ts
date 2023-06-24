import { Component } from '@angular/core';

@Component({
  selector: 'app-resistencias',
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})
export class ResistenciasComponent {

  banda1 = "";
  banda2 = "";
  banda3 = "";
  banda4 = "";
  valores = {};
  multiplicadores = {};
  tolerancias = {};
  bandas: string[] = [];
  valor:number=0;
  resultado:number=0;
  tolerancia:number=0;
  resultadoma:number=0;
  resultadomi:number=0;

  resis() {
    interface Valores {
      [key: string]: number;
    }

    const valores: Valores = {
      'negro': 0, 'cafe': 1, 'rojo': 2, 'naranja': 3, 'amarillo': 4,
      'verde': 5, 'azul': 6, 'violeta': 7, 'gris': 8, 'blanco': 9
    };
     const multiplicadores: Valores = {
      'negro': 1, 'cafe': 10, 'rojo': 100, 'naranja': 1000,
      'amarillo': 10000, 'verde': 100000, 'azul': 1000000,
      'violeta': 10000000, 'gris': 100000000, 'blanco': 1000000000
    };
    const tolerancias: Valores = { 'oro': .05, 'plata': .10 };


    this.bandas = [this.banda1, this.banda2, this.banda3, this.banda4];

    this.valor = parseFloat(String(valores[this.bandas[0]]) + (valores[this.bandas[1]]));

    this.resultado = this.valor * multiplicadores[this.bandas[2]]
    this.tolerancia = this.resultado * tolerancias[this.bandas[3]]
    this.resultadoma = this.resultado + this.tolerancia
    this.resultadomi = this.resultado - this.tolerancia
  }


}
