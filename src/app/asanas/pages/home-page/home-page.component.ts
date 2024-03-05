import { Component } from '@angular/core';
import { Asana } from '../../interface/asana';
import { AsanasService } from '../../services/asanas.service';

@Component({
  selector: 'pag-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  newAsana: Asana = {
    en: 'string',
    sk: 'string',
    sp: 'string',
    ruta: 'string',
  };

  constructor(private asanasService: AsanasService) { }

  crearAsana(): void {
    this.asanasService.crearAsana(this.newAsana);
  }
}
