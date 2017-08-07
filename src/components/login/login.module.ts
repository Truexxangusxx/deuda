import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Login } from './login';
import { Registro } from '../../pages/registro/registro'
import { MyNewPage } from '../../pages/my-new-page/my-new-page'

@NgModule({
  declarations: [
    Login,
    Registro,
    MyNewPage,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    Login
  ]
})
export class LoginModule {}
