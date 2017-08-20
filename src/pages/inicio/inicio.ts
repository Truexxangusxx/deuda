import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HaberPage } from '../../pages/haber-page/haber-page';
import { DeudaPage } from '../../pages/deuda-page/deuda-page';
import { Detalle } from '../../pages/detalle/detalle';
import { Detalledeuda } from '../../pages/detalledeuda/detalledeuda';
import { Todo } from '../../pages/todo/todo';
import { Headers, RequestOptions } from '@angular/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class Inicio {

  lista = [];
  monto_deuda: number = 0;
  monto_haber: number = 0;
  usuario_local = { correo: '' };

  constructor(
    public navCtrl: NavController
    , public navParams: NavParams
    , public modalCtrl: ModalController
    , public http: Http
    , private storage: Storage
  ) {

  }


  ionViewDidLoad() {
    this.storage.get('id').then((val) => {
      this.usuario_local.correo = val;
      console.log('correo: ' + this.usuario_local.correo);
      this.listar_deudas();
    });

  }

  presentModal() {
    let modal = this.modalCtrl.create(HaberPage);
    modal.present();
    modal.onDidDismiss(() => {
      this.listar_deudas();
    });
  }
  deudaModal() {
    let modal = this.modalCtrl.create(DeudaPage, this.lista);
    modal.present();
    modal.onDidDismiss(() => {
      this.listar_deudas();
    });
  }

  detalledeuda(id, tipo) {
    let modal = this.modalCtrl.create(Detalle, { deuda_id: id, tipo: tipo });
    modal.present();
    modal.onDidDismiss(() => {
      this.listar_deudas();
    });
  }

  verdetalle(id, tipo) {
    console.log(id);
    this.navCtrl.push(Detalle, { deuda_id: id, tipo: tipo });
  }

  todo() {
    this.navCtrl.push(Todo);
  }

  listar_deudas() {
    var link = 'http://192.168.0.10:3000/deudas/listar';
    var datos = JSON.stringify({ usuario: this.usuario_local.correo });
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post(link, datos, { headers: headers }).map(res => res.json()).subscribe(data => {
        console.log(data);
          this.lista = data.deudas.reverse().slice(0, 10);
          this.monto_deuda = data.monto_deuda;
          this.monto_haber = data.monto_haber;
      });
    /*
        this.http.get(link+"?usuario="+this.usuario_local.correo).map(res => res.json()).subscribe(data => {
          console.log(link+"?usuario="+this.usuario_local.correo);
          console.log(data);
          this.lista = data.deudas.reverse().slice(0, 10);
          this.monto_deuda = data.monto_deuda;
          this.monto_haber = data.monto_haber;
        });
    */
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.listar_deudas();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }


}
