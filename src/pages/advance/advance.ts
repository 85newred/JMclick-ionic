import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
}

import { SiteadvancePage } from '../siteadvance/siteadvance';
import { MyadvancestatusPage } from '../myadvancestatus/myadvancestatus';
import { AdminadvancestatusPage } from '../adminadvancestatus/adminadvancestatus';

/**
 * Generated class for the AdvancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-advance',
  templateUrl: 'advance.html',
})
export class AdvancePage {

  pendingAdvanceBadgeCount : any;
  allmyAdvanceBadgeCount : any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    public http: HttpClient) {
      this.pendingAdvanceBadgeCount = 0;
      this.allmyAdvanceBadgeCount = 0;
  }
  siteadvance(){
    this.navCtrl.push(SiteadvancePage);
  }
  mystatus(){
    this.navCtrl.push(MyadvancestatusPage);
  }
  adminstatus(){
    this.navCtrl.push(AdminadvancestatusPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdvancePage');
  }

  ionViewDidEnter(){
    this.loadData();
  }

  async loadData(){
    await this.storage.get('token').then((val) => {
      this.http.get<{badge_count: any}>('https://jmclicks.com/api/notifications/myadvanceall?token=' + val.token).subscribe(result => {
        this.allmyAdvanceBadgeCount = result.badge_count;
      })
    });

    await this.storage.get('token').then((val) => {
      this.http.get<{badge_count: any}>('https://jmclicks.com/api/notifications/advancepending?token=' + val.token).subscribe(result => {
        this.pendingAdvanceBadgeCount = result.badge_count;
      })
    });


  }

}
