import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Login } from '../components/login/login'
import { Registro } from '../pages/registro/registro'
import { MyNewPage } from '../pages/my-new-page/my-new-page'
import { Inicio } from '../pages/inicio/inicio'
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { HaberPage } from '../pages/haber-page/haber-page';
import { DeudaPage } from '../pages/deuda-page/deuda-page';
import { Detalle } from '../pages/detalle/detalle';
import { Detalledeuda } from '../pages/detalledeuda/detalledeuda';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Registro,
    MyNewPage,
    Inicio,
    HaberPage,
    DeudaPage,
    Detalle,
    Detalledeuda,
    Login
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__mydb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Registro,
    MyNewPage,
    Inicio,
    HaberPage,
    DeudaPage,
    Detalle,
    Detalledeuda,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    IonicStorageModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
