import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { Headers, RequestOptions } from '@angular/http';
import { Http } from '@angular/http';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Registro } from '../../pages/registro/registro';
import { MyNewPage } from '../../pages/my-new-page/my-new-page';
import { Inicio } from '../../pages/inicio/inicio';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class Login {

  text: string;
  usuario = { correo: "", password: "" };

  constructor(
    public alertCtrl: AlertController
    , public http: Http
    , public navCtrl: NavController
    , private storage: Storage
  ) {
  }

  

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }

  signin() {
    var link = 'http://192.168.0.10:3000/users/buscar';
    var datos = JSON.stringify({ correo: this.usuario.correo, password: this.usuario.password });
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post(link, datos, { headers: headers })
      .subscribe(data => {
        console.log(data);
        this.storage.set('id', this.usuario.correo);
        this.navCtrl.push(Inicio);
      });
  }

  registrar() {
    this.navCtrl.push(Registro);
  }

  mipagina() {
    this.navCtrl.push(MyNewPage);
  }

}
