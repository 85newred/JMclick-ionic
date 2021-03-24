import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
}

import { AdminpendingadvancePage } from '../adminpendingadvance/adminpendingadvance';
import { AdminapproveadvancePage } from '../adminapproveadvance/adminapproveadvance';
import { AdminrejectadvancePage } from '../adminrejectadvance/adminrejectadvance';

/**
 * Generated class for the AdminadvancestatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-adminadvancestatus',
  templateUrl: 'adminadvancestatus.html',
})
export class AdminadvancestatusPage {
  tab1:any;
  tab2:any;
  tab3:any;
  adminPendingAdvanceBadgeCount : any;

    constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private storage: Storage,
      public http: HttpClient) {
      this.tab1 = AdminpendingadvancePage ;
      this.tab2 = AdminapproveadvancePage;
      this.tab3 = AdminrejectadvancePage;
      this.adminPendingAdvanceBadgeCount = 0;
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminadvancestatusPage');
  }

  ionViewDidEnter() {
    this.loadData();
  }

  loadData() {

    this.storage.get('token').then((val) => {
      this.http.get<{badge_count: any}>('https://jmclicks.com/api/notifications/advancepending?token=' + val.token).subscribe(result => {
        this.adminPendingAdvanceBadgeCount = result.badge_count > 0 ? result.badge_count : null;

      })
    });

  }

}
