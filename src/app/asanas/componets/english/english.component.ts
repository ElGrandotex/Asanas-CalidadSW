import { Component, OnInit } from '@angular/core';
import { AsanasService } from '../../services/asanas.service';

@Component({
  selector: 'com-english',
  templateUrl: './english.component.html',
  styleUrls: ['./english.component.css']
})
export class EnglishComponent implements OnInit{

  seleccion !: number;
  controlLista: boolean = false;

  constructor( private asanasSrv: AsanasService){}

  ngOnInit(){
    this.asanasSrv.obtenerAsanas();
    this.asanasSrv.obtenerAsanasRuta();
    this.asanasSrv.obtenerAsanasEnglish();
    this.asanasSrv.obtenerAsanasSanskrit();
    this.asanasSrv.obtenerAsanasSpanish();
  }

  get asanasAll(){
    return this.asanasSrv.asanas;
  }
  get asanasRutas(){
    return this.asanasSrv.asanasRuta;
  }
  get asanasIngles(){
    return this.asanasSrv.asanasEn;
  }
  get asanasEspaniol(){
    return this.asanasSrv.asanasSp;
  }
  get asanasSanscrito(){
    return this.asanasSrv.asanasSk;
  }
  mostrar(){
    this.controlLista = true;
  }
}
