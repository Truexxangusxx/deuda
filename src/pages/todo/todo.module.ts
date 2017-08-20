import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Todo } from './todo';

@NgModule({
  declarations: [
    Todo,
  ],
  imports: [
    IonicPageModule.forChild(Todo),
  ],
  exports: [
    Todo
  ]
})
export class TodoModule {}
