import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Headers, RequestOptions } from '@angular/http';
import { Http } from '@angular/http';
import { Inicio } from '../../pages/inicio/inicio';


@IonicPage()
@Component({
  selector: 'page-deuda-page',
  templateUrl: 'deuda-page.html',
})
export class DeudaPage {

  deuda = { nombre: "", correo: "", telefono: "", valor: "", descripcion: "" };

  constructor(
    public navCtrl: NavController
    , public navParams: NavParams
    , public viewCtrl: ViewController
    , public http: Http
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeudaPage');
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }

  grabar() {
    console.log('vamos a grabar');
    var link = 'http://localhost:3000/deudas';
    var datos = JSON.stringify({ nombre: this.deuda.nombre, descripcion: this.deuda.descripcion, telefono: this.deuda.telefono, valor: this.deuda.valor, tipo: "deuda" });
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post(link, datos, { headers: headers })
      .subscribe(data => {
        this.viewCtrl.dismiss();
      });
  }




}
