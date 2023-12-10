import { Component, ElementRef, ViewChild } from '@angular/core';
import { AsanasService } from '../../services/asanas.service';
import { Morfema } from '../../interface/morfema';

@Component({
  selector: 'com-traductor',
  templateUrl: './traductor.component.html',
  styleUrls: ['./traductor.component.css']
})
export class TraductorComponent {

  //Variables
  public traduccion: string = '';
  public controlResultado: boolean = false;
  public palabra: string = '';
  public morfemasEncontrados : any[] =[];

  //Obtiene informacion del input
  @ViewChild('txtTraduccion')
  public palabraTraducir!: ElementRef<HTMLInputElement>;

  //Constructor
  constructor( private asanaSrv: AsanasService){}

  //Tareas de inicializacion
  ngOnInit(){
    this.asanaSrv.obtenerMorfema();
  }

  /**
   * Traduce una palabra de sanscrito a espaniol
   * Separa en morfemas para hacer la traduccion
   */
  traducir(){
    // Variables de inicio
    this.traduccion = 'Traducción no encontrada';
    this.palabra = this.palabraTraducir.nativeElement.value.toLowerCase();
    this.morfemasEncontrados = [{
      morfema: this.palabra,
      traduccion: this.traduccion
    }]

    // Recorre la palabra en busca de coincidencias con los morfemas
    for (const dato of this.asanaSrv.morfemas) {
      if (this.palabra.startsWith(dato.morfema)) {
        this.morfemasEncontrados = [];
        this.morfemasEncontrados.push({
          morfema: dato.morfema,
          traduccion: dato.traduccion,
        });
        this.palabra = this.palabra.substring(dato.morfema.length);
      }
    }

    // Si se encontraron morfemas, busca la traducción de la palabra completa
    if (this.morfemasEncontrados.length > 0) {
      for (const dato of this.asanaSrv.morfemas) {
        if (this.palabra === dato.morfema) {
          this.morfemasEncontrados.push({
            morfema: dato.morfema,
            traduccion: dato.traduccion,
          });
          break;
        }
      }
    }

    this.palabraTraducir.nativeElement.value = '';
    this.controlResultado = true;
  }

}
