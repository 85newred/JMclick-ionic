import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
}

import { MyapproveadvancePage } from '../myapproveadvance/myapproveadvance';
import { MyrejectadvancePage } from '../myrejectadvance/myrejectadvance';
import { MypendingadvancePage } from '../mypendingadvance/mypendingadvance';

/**
 * Generated class for the MyadvancestatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
*/

@Component({
  selector: 'page-myadvancestatus',
  templateUrl: 'myadvancestatus.html',
})

export class MyadvancestatusPage {
  tab1:any;
  tab2:any;
  tab3:any;
  approvedAdvanceBadgeCount: any;
  rejectedAdvanceBadgeCount: any;

    constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private storage: Storage,
      public http: HttpClient) {
      this.tab1 = MypendingadvancePage ;
      this.tab2 = MyapproveadvancePage;
      this.tab3 = MyrejectadvancePage;
      this.approvedAdvanceBadgeCount = 0;
      this.rejectedAdvanceBadgeCount = 0;
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyadvancestatusPage');
  }

  ionViewDidEnter() {
    this.loadData();
  }

  loadData() {

    this.storage.get('token').then((val) => {
      this.http.get<{badge_count: any}>('https://jmclicks.com/api/notifications/advanceapproved?token=' + val.token).subscribe(result => {
        this.approvedAdvanceBadgeCount = result.badge_count > 0 ? result.badge_count : null;

      })
    });

    this.storage.get('token').then((val) => {
      this.http.get<{badge_count: any}>('https://jmclicks.com/api/notifications/advancerejected?token=' + val.token).subscribe(result => {
        this.rejectedAdvanceBadgeCount = result.badge_count > 0 ? result.badge_count : null;

      })
    });

  }

}
