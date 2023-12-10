import { Component, OnInit } from '@angular/core';
import { AsanasService } from '../../services/asanas.service';

@Component({
  selector: 'com-list-asanas',
  templateUrl: './list-asanas.component.html',
  styleUrls: ['./list-asanas.component.css']
})
export class ListAsanasComponent implements OnInit {

  //Constructor
  constructor( private asanasSrv: AsanasService){}

  //Tareas de inicializacion
  ngOnInit(){
    this.asanasSrv.obtenerAsanasRuta();
    this.asanasSrv.obtenerAsanasEnglish();
    this.asanasSrv.obtenerAsanasSanskrit();
    this.asanasSrv.obtenerAsanasSpanish();
  }

  //Obtener la informacion de asanas
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
}
