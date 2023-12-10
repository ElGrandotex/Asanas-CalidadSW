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
      console.log(this.morfemas);
    })
  }

  obtenerAsanas(): void{
    this.http.get(`${ this.apiAsana }`)
    .subscribe( resp => {
      this.asanas = resp;
      console.log(this.asanas);
    })
  }

  obtenerAsanasRuta(){
    this.http.get<Asana[]>(`${ this.apiAsana }`)
    .pipe(
      map(rutas => rutas.map(ruta => ruta.ruta))
    )
    .subscribe( resp => {
      this.asanasRuta = resp
      console.log(this.asanasRuta);
    })
  }

  obtenerAsanasEnglish(){
    this.http.get<Asana[]>(`${ this.apiAsana }`)
    .pipe(
      map(asanas => asanas.map(asa => asa.en))
    )
    .subscribe( resp => {
      this.asanasEn = resp
      console.log(this.asanasEn);
    })
  }

  obtenerAsanasSpanish(){
    this.http.get<Asana[]>(`${ this.apiAsana }`)
    .pipe(
      map(spanish => spanish.map(sp => sp.sp))
    )
    .subscribe( resp => {
      this.asanasSp = resp
      console.log(this.asanasSp);
    })
  }
  obtenerAsanasSanskrit(){
    this.http.get<Asana[]>(`${ this.apiAsana }`)
    .pipe(
      map(sanskrit => sanskrit.map(sk => sk.sk))
    )
    .subscribe( resp => {
      this.asanasSk = resp
      console.log(this.asanasSk);
    })
  }
}
