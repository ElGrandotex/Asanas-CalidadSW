import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './asanas/pages/home-page/home-page.component';
import { EnglishComponent } from './asanas/componets/english/english.component';
import { SpanishComponent } from './asanas/componets/spanish/spanish.component';
import { SanskritComponent } from './asanas/componets/sanskrit/sanskrit.component';
import { TraductorComponent } from './asanas/componets/traductor/traductor.component';
import { ListAsanasComponent } from './asanas/componets/list-asanas/list-asanas.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'english',
    component: EnglishComponent
  },
  {
    path: 'spanish',
    component: SpanishComponent
  },
  {
    path: 'sanskrit',
    component: SanskritComponent
  },
  {
    path: 'translate',
    component: TraductorComponent
  },
  {
    path: 'list',
    component: ListAsanasComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
