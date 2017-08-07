import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Inicio } from '../../pages/inicio/inicio';
import 'rxjs/add/operator/map';



@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class Detalle {
  deuda_id=0;
  tipo='';
  deuda={nombre: '',descripcion:'',telefono: '',valor: '', tipo: ''};
  constructor(
    public navCtrl: NavController
    , public navParams: NavParams
    , public http: Http
  ) {
    this.deuda_id=this.navParams.get('deuda_id');
    this.tipo=this.navParams.get('tipo');
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
  eliminar(){
    var link = 'http://localhost:3000/deudas/eliminar/'+this.deuda_id;
    var datos = JSON.stringify({  });
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post(link, datos, { headers: headers })
      .subscribe(data => {
        console.log(data);
        this.navCtrl.push(Inicio);
      });
  }

  actualizar(){
    var link = 'http://localhost:3000/deudas/'+this.deuda_id;
    var datos = JSON.stringify({ nombre: this.deuda.nombre, descripcion: this.deuda.descripcion, telefono: this.deuda.telefono, valor: this.deuda.valor, tipo: this.tipo });
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.put(link, datos, { headers: headers })
      .subscribe(data => {
        console.log(data);
        this.navCtrl.push(Inicio);
      });
  }

}
