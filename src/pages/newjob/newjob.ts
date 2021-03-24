import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Storage } from '@ionic/storage';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

import { NavController, ModalController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { Observable } from 'rxjs';
import { NewJobModalPage } from '../newjobmodal/newjobmodal';
/**
 * Generated class for the MyleavePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-newjob',
  templateUrl: 'newjob.html',
})

export class NewJobPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    public http: HttpClient,
    public modalCtrl:ModalController
  ) { }

  job: any;
  info: any;
  notifications: any=[];
  async loadData() {
    let data: Observable<any>;
    await this.storage.get('token').then((val) => {
      data = this.http.get("https://jmclicks.com/api/myjob/newjob?token=" + val.token);
      data.subscribe(result => {
        this.job = result;
      })
    })
    this.storage.get('token').then((val) => {
      this.http.get<{badge_count: any, notifications: any}>('https://jmclicks.com/api/notifications/getNewJob?token=' + val.token).subscribe(result => {
        let t = this;
        result.notifications.map(function (value) {
          t.notifications[value.TargetId] = value
        })
      })
    });
  }

  async popup(d) {
    // await this.storage.get('token').then((val) => {
    //   this.http.get("http://192.168.0.101:8200/api/myjob/ ?token=" + val.token)
    //   .subscribe(result=>{
    //     this.info=result;
    //   })

    // })

    let modal = this.modalCtrl.create(NewJobModalPage,{data:d});
    modal.present();
    modal.onWillDismiss((data)=>{
      this.loadData();
    })
  }
  ionViewDidEnter(){
    this.loadData();
  }

}
