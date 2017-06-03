import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';


/*
  Generated class for the Data provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Data {

  constructor(public storage: Storage, public http: Http){

  }

  getService() {
    var url = 'http://beta.blwchurchlive.com/includes/getservice.php';
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(url,options)
    .map(res => {return res.json()})
  }

  getData() {
    return this.storage.get('services');
  }

  saveService(data){
    //let newData = JSON.stringify(data);
    this.storage.set('services', data);
    return this.getData();
  }


  // get members

  getMembers(data){
    var url = 'http://beta.blwchurchlive.com/includes/getmembers.php';
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(url, data, options)
    .map(res => {return res.json()})
  }

  getSavedMembers() {
    return this.storage.get('members');
  }

  saveMembers(data){
    //let newData = JSON.stringify(data);
    this.storage.set('members', data);
    return this.getSavedMembers();
  }

  presentData(data){
    var url = 'http://beta.blwchurchlive.com/includes/memberpresent.php';
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(url,JSON.stringify(data),options)
    .map(res => {return res.json()})

  }

  absentData(data){
    var url = 'http://beta.blwchurchlive.com/includes/memberabsent.php';
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(url,JSON.stringify(data),options)
    .map(res => {return res.json()})

  }

}
