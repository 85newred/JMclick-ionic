import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';

import { LeaverejectdetailPage } from '../leaverejectdetail/leaverejectdetail';

/**
 * Generated class for the LeaverejectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-leavereject',
  templateUrl: 'leavereject.html',
})

export class LeaverejectPage {

  public items:any = [];
  private token: string = '';
  public notifications: any = [];
  leaverejectdetail = LeaverejectdetailPage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    public app: App,
    private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeaverejectedPage');
  }

  ionViewDidEnter() {
    this.loadData();
  }

  gotoPage(item){
    let nav = this.app.getRootNav();
    nav.push(this.leaverejectdetail, item)
  }

  loadData(){

    let data:Observable<any>;

    // Or to get a key/value pair
    this.storage.get('token').then((val) => {
      data = this.http.get('https://jmclicks.com/api/getleavesrejected?token=' + val.token);
      data.subscribe(result => {
        this.items = result;
      })
      this.storage.get('token').then((val) => {
        this.http.get<{badge_count: any, notifications: any}>('https://jmclicks.com/api/notifications/leaverejected?token=' + val.token).subscribe(result => {
          let that = this
          result.notifications.map(function(value) {
            that.notifications[value.TargetId] = value
          })

          console.log(this.notifications)
        })
      });
    });
  }

}
