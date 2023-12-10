import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Asana } from '../interface/asana';

@Injectable({
  providedIn: 'root'
})
export class AsanasService {

  //Variables
  private apiAsana = 'assets/data/db.json';
  private apiMorfemas = 'assets/data/traduccion.json';
  morfemas!: any;
  asanas!: any;
  asanasID!: any;
  asanasEn!: any;
  asanasSp!: any;
  asanasSk!: any;
  asanasRuta!: any;

  //Constructor
  constructor( private http: HttpClient) { }

  /**
   * Consulta de morfemas de la BD
   */
  obtenerMorfema(): void{
    this.http.get(`${ this.apiMorfemas }`)
    .subscribe( resp => {
      this.morfemas = resp;
    })
  }

  /**
   * Consulta de todas las asanas en BD
   */
  obtenerAsanas(): void{
    this.http.get(`${ this.apiAsana }`)
    .subscribe( resp => {
      this.asanas = resp;
    })
  }

  /**
   * Consulta de 'ruta' de todas las asanas
   */
  obtenerAsanasRuta(){
    this.http.get<Asana[]>(`${ this.apiAsana }`)
    .pipe(
      map(rutas => rutas.map(ruta => ruta.ruta))
    )
    .subscribe( resp => {
      this.asanasRuta = resp
    })
  }

  /**
   * Consulta de 'en' de todas las asanas
   */
  obtenerAsanasEnglish(){
    this.http.get<Asana[]>(`${ this.apiAsana }`)
    .pipe(
      map(asanas => asanas.map(asa => asa.en))
    )
    .subscribe( resp => {
      this.asanasEn = resp
    })
  }

    /**
   * Consulta de 'sp' de todas las asanas
   */
  obtenerAsanasSpanish(){
    this.http.get<Asana[]>(`${ this.apiAsana }`)
    .pipe(
      map(spanish => spanish.map(sp => sp.sp))
    )
    .subscribe( resp => {
      this.asanasSp = resp
    })
  }

    /**
   * Consulta de 'sk' de todas las asanas
   */
  obtenerAsanasSanskrit(){
    this.http.get<Asana[]>(`${ this.apiAsana }`)
    .pipe(
      map(sanskrit => sanskrit.map(sk => sk.sk))
    )
    .subscribe( resp => {
      this.asanasSk = resp
    })
  }
}
