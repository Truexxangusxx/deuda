import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Detalledeuda } from './detalledeuda';

@NgModule({
  declarations: [
    Detalledeuda,
  ],
  imports: [
    IonicPageModule.forChild(Detalledeuda),
  ],
  exports: [
    Detalledeuda
  ]
})
export class DetalledeudaModule {}
