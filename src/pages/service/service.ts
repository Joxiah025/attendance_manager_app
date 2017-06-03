import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { AttendancePage } from '../attendance/attendance';


@Component({
  selector: 'page-service',
  templateUrl: 'service.html'
})
export class ServicePage {
  service; 
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {
   this.initializeService();
  }

   initializeService() {
    this.service = [
      {
        "service": "Sunday Service",
        "id": 1,
        "venue": "Afe Babalola",
        "date": "2017-05-28"
      },
      {
        "service": "Worship and Communion Service",
        "id": 2,
        "venue": "Afe Babalola",
        "date": "2017-05-28"
      },
      {
        "service": "Prayer Meeting",
        "id": 3,
        "venue": "Guest House",
        "date": "2017-05-28"
      },
      {
        "service": "Bible Study Service",
        "id": 4,
        "venue": "Afe Babalola",
        "date": "2017-05-28"
      }

    ]
  }

  getService(ev) {
    // Reset items back to all of the items
    this.initializeService();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      console.log(val);
      this.service = this.service.filter((item) => {
        return (item.service.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  gotoAttendance(xy){
    this.navCtrl.push(AttendancePage, {
      id: xy
    })
  }

}
