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
  public morfemasEncontrados: any[] = [];

  //Obtiene informacion del input
  @ViewChild('txtTraduccion')
  public palabraTraducir!: ElementRef<HTMLInputElement>;

  //Constructor
  constructor(private asanaSrv: AsanasService) { }

  //Tareas de inicializacion
  ngOnInit() {
    this.asanaSrv.obtenerMorfema();
  }

  /**
   * Traduce una palabra de sanscrito a espaniol
   * Separa en morfemas para hacer la traduccion
   */
  traducir() {
    this.traduccion = 'Traducción no encontrada';
    const input = this.palabraTraducir.nativeElement.value.toLowerCase();
    const morfemas = input.split(' ');
    this.morfemasEncontrados = [];

    for (const morfema of morfemas) {
      let morfemaRestante = morfema;

      while (morfemaRestante.length > 0) {
        let morfemaEncontrado = false;

        for (const dato of this.asanaSrv.morfemas) {

          if (morfemaRestante.startsWith(dato.morfema)) {
            this.morfemasEncontrados.push({
              morfema: dato.morfema,
              traduccion: dato.traduccion,
            });

            morfemaEncontrado = true;
            morfemaRestante = morfemaRestante.substring(dato.morfema.length);
            break;
          }
        }
        if (!morfemaEncontrado) {
          break; // No se encontró coincidencia, salir del bucle
        }
      }
    }
    this.palabraTraducir.nativeElement.value = '';
    this.controlResultado = true;
  }



}
