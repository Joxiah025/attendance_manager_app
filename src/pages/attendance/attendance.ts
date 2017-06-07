import { Component } from '@angular/core';
import { NavParams, NavController, LoadingController, ToastController, ModalController} from 'ionic-angular';
import { Data } from '../../providers/data';
import { MemberPage } from '../member/member';

@Component({
  selector: 'page-attendance',
  templateUrl: 'attendance.html'
})
export class AttendancePage {
  attendance;
  search;
  servid;
  title;
  constructor(private dataService: Data, public navParams: NavParams, public navCtrl: NavController, public modalCtrl: ModalController, public toastCtrl: ToastController, public loadCtrl: LoadingController) {
   this.servid = navParams.get('id');
   this.title = navParams.get('title');
   console.log(this.servid);
    this.initializeAttendance();
    
  }

  initializeAttendance() {
    this.attendance = "";
    this.dataService.getMembers({'serv': this.servid}).subscribe((resp) => {
       
       this.attendance = this.search = resp.data;
          console.log(resp.data);
       
     },
     (error) => {
          let toast = this.toastCtrl.create({
            message: 'Oops! check your internet connection.',
            duration: 3000,
            position: 'top'
          });
          toast.present();
    }
     );
  }


  getAttendance(ev) {
    // Reset items back to all of the items
    //this.initializeAttendance();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val) {
      console.log(val);
      this.attendance = this.attendance.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }else{
       //this.initializeAttendance();
       this.attendance = this.search;
    }

  }

  present(item){
    let loader = this.loadCtrl.create({
      content: "Please wait...",
      spinner: "crescent"
    });
    loader.present();

    let data = {
      'memberid': item.id,
      'serviceid': this.servid
    }
    
    this.dataService.presentData(data).subscribe(
      data => {
        let index = this.attendance.indexOf(item);
              console.log(index);
              if (index > -1){
                this.attendance[index].present = true;
                loader.dismiss();
                console.log('false');
              }
               
          },
      error => {
        loader.dismiss();
        let toast = this.toastCtrl.create({
          message: 'Check your internet connection!',
          duration: 5000,
          position: 'bottom'
        });
        toast.present();
        
        console.log(this.attendance);
        console.log(item);
      }
    );

  }


  absent(item){
    let loader = this.loadCtrl.create({
      content: "Please wait...",
      spinner: "crescent"
    });
    loader.present();

    let data = {
      'memberid': item.id,
      'serviceid': this.servid
    }
    
    this.dataService.absentData(data).subscribe(
      data => {
        let index = this.attendance.indexOf(item);
              console.log(index);
              if (index > -1){
                this.attendance[index].present = false;
                loader.dismiss();
                console.log('false');
              }
               
          },
      error => {
        loader.dismiss();
        let toast = this.toastCtrl.create({
          message: 'Check your internet connection!',
          duration: 5000,
          position: 'bottom'
        });
        toast.present();
        
        console.log(this.attendance);
        console.log(item);
      }
    );

  }

addFirst(){
    let modal = this.modalCtrl.create(MemberPage, { id: this.servid });
    modal.present();
    modal.onDidDismiss(() => {
        this.initializeAttendance();
    })
    
}

}
