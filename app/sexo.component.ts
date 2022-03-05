import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sexo',
  templateUrl: './sexo.component.html',
  styleUrls: ['./sexo.component.css']
})
export class SexoComponent implements OnInit {

  sexo = 'mujer';
  constructor() { }

  ngOnInit(): void {
  }

}
