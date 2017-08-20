import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Headers, RequestOptions } from '@angular/http';
import { Http } from '@angular/http';
import { Inicio } from '../../pages/inicio/inicio';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-deuda-page',
  templateUrl: 'deuda-page.html',
})
export class DeudaPage {

  deuda = { nombre: "", correo: "", telefono: "", valor: "", descripcion: "", usuario:"" };

  constructor(
    public navCtrl: NavController
    , public navParams: NavParams
    , public viewCtrl: ViewController
    , public http: Http
    , private storage: Storage
  ) {
    this.storage.get('id').then((val) => {
      this.deuda.usuario = val;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeudaPage');
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }

  grabar() {
    var link = 'http://192.168.0.10:3000/deudas';
    var datos = JSON.stringify({ nombre: this.deuda.nombre, descripcion: this.deuda.descripcion, telefono: this.deuda.telefono, valor: this.deuda.valor, tipo: "deuda", usuario: this.deuda.usuario });
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post(link, datos, { headers: headers })
      .subscribe(data => {
        console.log(data);
        this.viewCtrl.dismiss();
      });
  }




}
