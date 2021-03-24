import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';

import { LeavecanceldetailPage } from '../leavecanceldetail/leavecanceldetail';

/**
 * Generated class for the LeavecancelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-leavecancel',
  templateUrl: 'leavecancel.html',
})
export class LeavecancelPage {

  public items:any = [];
  private token: string = '';
  public notifications: any = [];
  leavecanceldetail = LeavecanceldetailPage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public app: App,
    public http: HttpClient,
    private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeavecancelledPage');
  }

  ionViewWillEnter() {
    this.loadData();
  }

  gotoPage(item){
    let nav = this.app.getRootNav();
    nav.push(this.leavecanceldetail, item)
  }

  loadData(){

    let data:Observable<any>;

    // Or to get a key/value pair
    this.storage.get('token').then((val) => {
      data = this.http.get('https://jmclicks.com/api/getleavescancelled?token=' + val.token);
      data.subscribe(result => {
      this.items = result;
      })
      this.storage.get('token').then((val) => {
        this.http.get<{badge_count: any, notifications: any}>('https://jmclicks.com/api/notifications/leavecancelled?token=' + val.token).subscribe(result => {
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
