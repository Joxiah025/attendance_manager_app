import { Component } from '@angular/core';
import { NavParams, NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-member',
  templateUrl: 'member.html'
})
export class MemberPage {
  service; 
  constructor(public viewCtrl: ViewController, public navCtrl: NavController,  public navparams: NavParams) {
   this.initializeService();
  }

  initializeService() {
    
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
