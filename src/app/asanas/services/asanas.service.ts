import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Asana } from '../interface/asana';

@Injectable({
  providedIn: 'root'
})
export class AsanasService {

  private apiAsana = 'assets/data/db.json';
  private apiMorfemas = 'assets/data/traduccion.json';
  morfemas!: any;
  asanas!: any;
  asanasID!: any;
  asanasEn!: any;
  asanasSp!: any;
  asanasSk!: any;
  asanasRuta!: any;

  constructor( private http: HttpClient) { }

  obtenerMorfema(): void{
    this.http.get(`${ this.apiMorfemas }`)
    .subscribe( resp => {
      this.morfemas = resp;
    })
  }

  obtenerAsanas(): void{
    this.http.get(`${ this.apiAsana }`)
    .subscribe( resp => {
      this.asanas = resp;
    })
  }

  obtenerAsanasRuta(){
    this.http.get<Asana[]>(`${ this.apiAsana }`)
    .pipe(
      map(rutas => rutas.map(ruta => ruta.ruta))
    )
    .subscribe( resp => {
      this.asanasRuta = resp
    })
  }

  obtenerAsanasEnglish(){
    this.http.get<Asana[]>(`${ this.apiAsana }`)
    .pipe(
      map(asanas => asanas.map(asa => asa.en))
    )
    .subscribe( resp => {
      this.asanasEn = resp
    })
  }

  obtenerAsanasSpanish(){
    this.http.get<Asana[]>(`${ this.apiAsana }`)
    .pipe(
      map(spanish => spanish.map(sp => sp.sp))
    )
    .subscribe( resp => {
      this.asanasSp = resp
    })
  }
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
