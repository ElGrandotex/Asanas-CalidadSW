import { Component, ElementRef, ViewChild } from '@angular/core';
import { AsanasService } from '../../services/asanas.service';

@Component({
  selector: 'com-traductor',
  templateUrl: './traductor.component.html',
  styleUrls: ['./traductor.component.css']
})
export class TraductorComponent {

  public traduccion: string = '';
  public controlResultado: boolean = false;
  public palabra: string = '';

  @ViewChild('txtTraduccion')
  public palabraTraducir!: ElementRef<HTMLInputElement>;

  constructor( private asanaSrv: AsanasService){}
  ngOnInit(){
    this.asanaSrv.obtenerMorfema();
  }

  traducir(){
    this.traduccion = 'Traducción no encontrada';
    this.palabra = this.palabraTraducir.nativeElement.value.toLowerCase();

    for(const dato of this.asanaSrv.morfemas){
      if(this.palabra === dato.morfema){
        this.traduccion =  dato.traduccion
      }
    }
    this.palabra = this.palabra.toUpperCase()
    this.palabraTraducir.nativeElement.value = '';
    this.controlResultado = true;
  }
}
