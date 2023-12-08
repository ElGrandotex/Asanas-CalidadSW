import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListAsanasComponent } from './componets/list-asanas/list-asanas.component';
import { SidebarComponent } from './componets/sidebar/sidebar.component';
import { EnglishComponent } from './componets/english/english.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomePageComponent,
    ListAsanasComponent,
    SidebarComponent,
    EnglishComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HomePageComponent,
    ListAsanasComponent,
    SidebarComponent
  ]
})
export class AsanasModule { }
