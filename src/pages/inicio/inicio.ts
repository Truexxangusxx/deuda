import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HaberPage } from '../../pages/haber-page/haber-page';
import { DeudaPage } from '../../pages/deuda-page/deuda-page';
import { Detalle } from '../../pages/detalle/detalle';
import { Detalledeuda } from '../../pages/detalledeuda/detalledeuda';
import { Headers, RequestOptions } from '@angular/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class Inicio {

  lista = [];

  constructor(
    public navCtrl: NavController
    , public navParams: NavParams
    , public modalCtrl: ModalController
    , public http: Http
  ) {

  }

  ionViewWillEnter() {
    console.log('activo');
  }

  ionViewDidLoad() {

    var link = 'http://localhost:3000/deudas';
    var datos = JSON.stringify({});
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.get(link).map(res => res.json()).subscribe(data => {
      console.log(data);
      this.lista = data.reverse();
    });

  }

  presentModal() {
    let modal = this.modalCtrl.create(HaberPage);
    modal.present();
  }
  deudaModal() {
    let modal = this.modalCtrl.create(DeudaPage, this.lista);
    modal.present();
    modal.onDidDismiss(() => {
      var link = 'http://localhost:3000/deudas';
      var datos = JSON.stringify({});
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.get(link).map(res => res.json()).subscribe(data => {
        console.log(data);
        this.lista = data.reverse();
      });
    });
  }

  verdetalle(id){
    console.log(id);
    this.navCtrl.push(Detalle, {deuda_id: id});
  }


}
