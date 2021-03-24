import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
}

/**
 * Generated class for the LeavebalancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-leavebalance',
  templateUrl: 'leavebalance.html',
})
export class LeavebalancePage {

  items: any;
  token: string = '';
  Id: any;
  types: any;
  Leave_Type: any='';


  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public app: App,
    private storage: Storage,
    public navParams: NavParams) {
    this.loadData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeavebalancePage');
  }

  loadData(){
    let data:Observable<any>;

    this.storage.get('token').then((val) => {
      data = this.http.get('https://jmclicks.com/api/myleavebalance?token=' + val.token );
      data.subscribe(result => {
        this.types = result;

      })
    });

  }

}
