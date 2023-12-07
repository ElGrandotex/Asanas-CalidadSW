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
  asanasID!: object;
  asanasEn!: object;
  asanasSp!: object;
  asanasSk!: object;
  asanasRuta!: object;

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
      map(asanas => asanas.map(asa => asa.ruta))
    )
    .subscribe( resp => {
      this.asanas = resp
      console.log(this.asanas);
    })
  }
}
