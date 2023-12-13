import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListAsanasComponent } from './componets/list-asanas/list-asanas.component';
import { SidebarComponent } from './componets/sidebar/sidebar.component';
import { EnglishComponent } from './componets/english/english.component';
import { FormsModule } from '@angular/forms';
import { SpanishComponent } from './componets/spanish/spanish.component';
import { SanskritComponent } from './componets/sanskrit/sanskrit.component';
import { TraductorComponent } from './componets/traductor/traductor.component';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    HomePageComponent,
    ListAsanasComponent,
    SidebarComponent,
    EnglishComponent,
    SpanishComponent,
    SanskritComponent,
    TraductorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgSelectModule
  ],
  exports: [
    HomePageComponent,
    ListAsanasComponent,
    SidebarComponent
  ]
})
export class AsanasModule { }
