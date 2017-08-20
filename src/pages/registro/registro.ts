import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, RequestOptions } from '@angular/http';
import { Http } from '@angular/http';
import { HomePage } from '../home/home';
import { Inicio } from '../inicio/inicio';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class Registro {
  usuario = { nombre: "", correo: "", password: "" };

  constructor(
    public navCtrl: NavController
    , public navParams: NavParams
    , public http: Http
    , private storage: Storage
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Registro');
  }

  registrar() {
    var link = 'http://192.168.0.10:3000/users';
    var datos = JSON.stringify({ nombre: this.usuario.nombre, correo: this.usuario.correo, password: this.usuario.password });
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post(link, datos, { headers: headers })
      .subscribe(data => {
        console.log(data);
        this.storage.set('id', this.usuario.correo);
        this.navCtrl.push(Inicio);
      });
  }

  regresar(){
    this.navCtrl.push(HomePage);
  }


}
