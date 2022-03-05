import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent implements OnInit {


  nombre="";
  imc="";

  peso:number=0;

  i=1

  pluspeso(){
    if(this.i !=100){
      this.i++;
      this.peso=this.i;
    }
  }

  minuspeso(){
    if(this.i !=0){
      this.i--;
      this.peso=this.i;
    }
  }
  altura:number=0;
  j=1
  plusaltura(){
    if(this.j !=100){
      this.j++;
      this.altura=this.j;
    }
  }

  minusaltura(){
    if(this.j !=0){
      this.j--;
      this.altura=this.j;
    }
  }
   calcularIMC(){

     this.imc =((this.peso /(this.altura ** 2)*10000).toFixed(1)); //seguramente esto se pueda hacer de alguna más simple,pero me funciona así))

   }



  constructor() {
      //this.historial=[this.nombre,this.imc];
  }

  historial = [this.nombre,this.imc]; //no se como mostrar el array con el historial((





  ngOnInit(): void {}
}

