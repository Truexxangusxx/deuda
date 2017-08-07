import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HaberPage } from './haber-page';

@NgModule({
  declarations: [
    HaberPage,
  ],
  imports: [
    IonicPageModule.forChild(HaberPage),
  ],
  exports: [
    HaberPage
  ]
})
export class HaberPageModule {}
