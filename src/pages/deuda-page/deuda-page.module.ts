import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeudaPage } from './deuda-page';

@NgModule({
  declarations: [
    DeudaPage,
  ],
  imports: [
    IonicPageModule.forChild(DeudaPage),
  ],
  exports: [
    DeudaPage
  ]
})
export class DeudaPageModule {}
