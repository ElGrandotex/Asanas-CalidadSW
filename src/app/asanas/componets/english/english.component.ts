import { Component, OnInit } from '@angular/core';
import { AsanasService } from '../../services/asanas.service';

@Component({
  selector: 'com-english',
  templateUrl: './english.component.html',
  styleUrls: ['./english.component.css']
})
export class EnglishComponent implements OnInit{

  //Variables
  seleccion !: number;
  controlLista: boolean = false;

  //Constructor
  constructor( private asanasSrv: AsanasService){}

  //Tareas de inicializacion
  ngOnInit(){
    this.asanasSrv.obtenerAsanas();
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

  //Controlador para mostrar el select
  mostrar(){
    this.controlLista = true;
    if(!this.seleccion){
      this.controlLista = false;
    }
  }
}
