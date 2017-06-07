import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavParams, NavController, ViewController, LoadingController, ToastController } from 'ionic-angular';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-member',
  templateUrl: 'member.html'
})
export class MemberPage {
  myForm: FormGroup;
  constructor(private dataService: Data, public formBuilder: FormBuilder,public toastCtrl: ToastController, public loadCtrl: LoadingController, public viewCtrl: ViewController, public navCtrl: NavController,  public navparams: NavParams) {
   //this.initializeService();
   this.myForm = formBuilder.group({
        fname: ['', Validators.compose([Validators.required])],
        lname: ['', Validators.compose([Validators.required])],
        phone: ['', Validators.compose([Validators.required])],
        email: [''],
        address: [''],
        cell: [''],
        course: [''],
        level: [''],
        serv: this.navparams.get('id'),
        sex: ['', Validators.compose([Validators.required])]        
    });
  }

  initializeService() {
    
  }

  saveInput(val){

    //this.submitAttempt = true;
    console.log(val);

    let loader = this.loadCtrl.create({
      content: "Please wait...",
      spinner: "crescent"
    });
    loader.present();

    if(!this.myForm.valid){
       loader.dismiss();
        let toast = this.toastCtrl.create({
            message: 'Some required fields are missing!',
            duration: 3000,
            position: 'top'
          });
          toast.present();
     }else{
       this.dataService.saveFt(this.myForm.value).subscribe((resp) => {
          if(resp.status == 200){
            loader.dismiss();
            let toast = this.toastCtrl.create({
                message: 'First timer successfully saved!',
                duration: 3000,
                position: 'top'
              });
           toast.present();
           this.myForm.reset();
        
          }
        }, (error) => {
          loader.dismiss();
            let toast = this.toastCtrl.create({
                message: 'Oops! poor internet connection',
                duration: 3000,
                position: 'top'
              });
           toast.present();
        });
      }

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
