import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HaberPage } from '../../pages/haber-page/haber-page';
import { DeudaPage } from '../../pages/deuda-page/deuda-page';
import { Detalle } from '../../pages/detalle/detalle';
import { Detalledeuda } from '../../pages/detalledeuda/detalledeuda';
import { Inicio } from '../../pages/inicio/inicio';
import { Headers, RequestOptions } from '@angular/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-todo',
  templateUrl: 'todo.html',
})
export class Todo {

  lista = [];
  monto_deuda: number = 0;
  monto_haber: number = 0;

  constructor(
    public navCtrl: NavController
    , public navParams: NavParams
    , public http: Http
    , public modalCtrl: ModalController
  ) {
  }

  ionViewDidLoad() {
    var link = 'http://192.168.0.10:3000/deudas';
    var datos = JSON.stringify({});
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.get(link).map(res => res.json()).subscribe(data => {
      console.log(data.deudas);
      this.lista = data.deudas.reverse();
      this.monto_deuda = data.monto_deuda;
      this.monto_haber = data.monto_haber;
    });
  }


  detalledeuda(id, tipo){
    let modal = this.modalCtrl.create(Detalle, { deuda_id: id, tipo: tipo });
    modal.present();
    modal.onDidDismiss(() => {
      var link = 'http://192.168.0.10:3000/deudas';
      var datos = JSON.stringify({});
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.get(link).map(res => res.json()).subscribe(data => {
        console.log(data);
        this.lista = data.deudas.reverse().slice(0,10);
        this.monto_deuda = data.monto_deuda;
        this.monto_haber = data.monto_haber;
      });
    });
  }

  getItems(ev) {
    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.lista = this.lista.filter((item) => {
        return (item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    else {
      var link = 'http://192.168.0.10:3000/deudas';
      var datos = JSON.stringify({});
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.get(link).map(res => res.json()).subscribe(data => {
        console.log(data.deudas);
        this.lista = data.deudas.reverse();
        this.monto_deuda = data.monto_deuda;
        this.monto_haber = data.monto_haber;
      });
    }

  }

}
