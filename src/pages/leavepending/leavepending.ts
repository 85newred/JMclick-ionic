import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';

import { LeavependingdetailPage } from '../leavependingdetail/leavependingdetail';

/**
 * Generated class for the LeavependingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-leavepending',
  templateUrl: 'leavepending.html',
})

export class LeavependingPage {

  public items:any = [];
  private token: string = '';
  leavependingdetail = LeavependingdetailPage;
  public notifications: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public app: App,
    public http: HttpClient,
    public events: Events,
    private storage: Storage) {
      events.subscribe('leavepending', () => {
        // user and time are the same arguments passed in `events.publish(user, time)`
        this.loadData();
      });
  }

  ionViewDidEnter() {
    this.loadData();
  }

  gotoPage(item){
    let nav = this.app.getRootNav();
    nav.push(this.leavependingdetail, item)
  }

  loadData(){

    let data:Observable<any>;

    // Or to get a key/value pair
    this.storage.get('token').then((val) => {
      data = this.http.get('https://jmclicks.com/api/getleaves?token=' + val.token);
      data.subscribe(result => {
        this.items = result;
      })
      this.storage.get('token').then((val) => {
        this.http.get<{badge_count: any, notifications: any}>('https://jmclicks.com/api/notifications/leavepending?token=' + val.token).subscribe(result => {
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
