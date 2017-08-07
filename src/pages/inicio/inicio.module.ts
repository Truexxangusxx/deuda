import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Inicio } from './inicio';

@NgModule({
  declarations: [
    Inicio,
  ],
  imports: [
    IonicPageModule.forChild(Inicio),
  ],
  exports: [
    Inicio
  ]
})
export class InicioModule {}
