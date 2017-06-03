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
  search; 
  constructor(private dataService: Data, public navCtrl: NavController, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {
   this.reConnect();
   
  }

  reConnect(){
    this.service = "";
    this.dataService.getService().subscribe((resp) => {
        this.dataService.saveService(resp.data).then( (serv) => {
          this.service = this.search = serv;
        });
     });
  }

  

  searchService(ev) {
   
    // Reset items back to all of the items
    //this.service;

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      console.log(val);
      this.service = this.search.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }else{
       this.dataService.getData().then( (serv) => {
          this.service = serv;
        });
    }
  }

  gotoAttendance(ref, item){
    this.navCtrl.push(AttendancePage,{
      id: ref,
      title: item
    });
  }

}
