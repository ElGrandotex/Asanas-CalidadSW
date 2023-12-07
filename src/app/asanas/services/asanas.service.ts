import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { concatMap, map } from 'rxjs/operators';
import { Asana } from '../interface/asana';

@Injectable({
  providedIn: 'root'
})
export class AsanasService {

  private apiUrl = 'assets/data/db.json';
  asanas!: any;
  asanasID!: any;
  asanasEn!: any;
  asanasSp!: any;
  asanasSk!: any;
  asanasRuta!: any;

  constructor( private http: HttpClient) { }

  obtenerAsanas(): void{
    this.http.get(`${ this.apiUrl }`)
    .subscribe( resp => {
      this.asanas = resp;
      console.log(this.asanas);
    })
  }

  obtenerAsanasRuta(){
    this.http.get<Asana[]>(`${ this.apiUrl }`)
    .pipe(
      map(rutas => rutas.map(ruta => ruta.ruta))
    )
    .subscribe( resp => {
      this.asanasRuta = resp
      console.log(this.asanasRuta);
    })
  }

  obtenerAsanasEnglish(){
    this.http.get<Asana[]>(`${ this.apiUrl }`)
    .pipe(
      map(asanas => asanas.map(asa => asa.en))
    )
    .subscribe( resp => {
      this.asanasEn = resp
      console.log(this.asanasEn);
    })
  }

  obtenerAsanasSpanish(){
    this.http.get<Asana[]>(`${ this.apiUrl }`)
    .pipe(
      map(spanish => spanish.map(sp => sp.sp))
    )
    .subscribe( resp => {
      this.asanasSp = resp
      console.log(this.asanasSp);
    })
  }
  obtenerAsanasSanskrit(){
    this.http.get<Asana[]>(`${ this.apiUrl }`)
    .pipe(
      map(sanskrit => sanskrit.map(sk => sk.sk))
    )
    .subscribe( resp => {
      this.asanasSk = resp
      console.log(this.asanasSk);
    })
  }
}
