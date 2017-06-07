import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { AttendancePage } from '../attendance/attendance';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-event',
  templateUrl: 'event.html'
})
export class EventPage {
  service; 
  noservice; 
  constructor(private dataService: Data, public navCtrl: NavController, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {
   this.reConnect();
   
  }

  reConnect(){
    this.service = "";
    this.dataService.getService().subscribe( (resp) => {
          console.log(resp.data);
          if(resp.status === 300){
            this.noservice = true;
          }else if(resp.status === 200){
            this.service = resp.data; 
          }                 
     },
     (error) => {
          let toast = this.toastCtrl.create({
            message: 'Oops! check your internet connection.',
            duration: 3000,
            position: 'top'
          });
          toast.present();
    });
  }

  gotoAttendance(ref, item){
    this.navCtrl.push(AttendancePage,{
      id: ref,
      title: item
    });
  }

}
