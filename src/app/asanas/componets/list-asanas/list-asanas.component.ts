import { Component, OnInit } from '@angular/core';
import { AsanasService } from '../../services/asanas.service';

@Component({
  selector: 'com-list-asanas',
  templateUrl: './list-asanas.component.html',
  styleUrls: ['./list-asanas.component.css']
})
export class ListAsanasComponent implements OnInit {

  asanasRuta!: void;

  constructor( private asanasSrv: AsanasService){}

  ngOnInit(){
    this.asanasSrv.obtenerAsanasRuta();
  }

  get asanasRutas(){
    return this.asanasSrv.asanas;
  }
}
