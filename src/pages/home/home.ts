import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Registro } from '../registro/registro';
import { MyNewPage } from '../my-new-page/my-new-page';
import { Storage } from '@ionic/storage';
import { Inicio } from '../../pages/inicio/inicio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController
    , private storage: Storage
  ) {
  }

  ionViewDidLoad() {

    this.storage.get('id').then((val) => {
      console.log('Your mail is', val);
      if (val!=null){
        this.navCtrl.push(Inicio);
      }
    });

  }


}
