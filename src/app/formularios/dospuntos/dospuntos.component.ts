import { Component } from '@angular/core';

@Component({
  selector: 'app-dospuntos',
  templateUrl: './dospuntos.component.html',
  styleUrls: ['./dospuntos.component.css']
})
export class DospuntosComponent {
  x1="";
  y1="";
  x2="";
  y2="";
  res:number=0;

    calcular(){
      this.res = Math.sqrt(Math.pow((parseFloat(this.x2)-parseFloat(this.x1)), 2) + 
      Math.pow(parseFloat(this.y2)-parseFloat(this.y1), 2));

    }

}
