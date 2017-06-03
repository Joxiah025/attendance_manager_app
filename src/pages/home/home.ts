import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { EventPage } from '../event/event';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public  event = {}; 
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {
   
  }

  addEvent(event){
    console.log(event);
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();



    let toast = this.toastCtrl.create({
      message: 'User was added successfully',
      duration: 3000,
      position: 'top'
    });
    toast.present();
       
  }

  gotoEventList(){
    this.navCtrl.push(EventPage);
  }



}
