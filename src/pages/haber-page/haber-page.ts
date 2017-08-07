import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-haber-page',
  templateUrl: 'haber-page.html',
})
export class HaberPage {

  constructor(
    public navCtrl: NavController
    , public navParams: NavParams
    , public viewCtrl: ViewController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HaberPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
