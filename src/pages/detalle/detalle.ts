import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class Detalle {
  deuda_id=0;
  deuda={};
  constructor(
    public navCtrl: NavController
    , public navParams: NavParams
    , public http: Http
  ) {
    this.deuda_id=this.navParams.get('deuda_id');
    this.obtener();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Detalle');
    console.log(this.navParams.get('deuda_id'));
  }

  obtener(){
    this.http.get('http://localhost:3000/deudas/'+this.deuda_id).map(res => res.json()).subscribe(data => {
        console.log(data);
        this.deuda = data;
      });
  }

}
