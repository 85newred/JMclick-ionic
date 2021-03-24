import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';

import { MyapprovedetailPage } from '../myapprovedetail/myapprovedetail';

/**
 * Generated class for the MyapproveadvancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-myapproveadvance',
  templateUrl: 'myapproveadvance.html',
})
export class MyapproveadvancePage {

  public items:any;
  private token: string = '';
  public notifications: any = [];

  myapprovedetail = MyapprovedetailPage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    public app: App,
    private storage: Storage) {
  }

  gotoPage(item){
    let nav = this.app.getRootNav();
    nav.push(this.myapprovedetail, item)
  }

  ionViewWillEnter() {
    this.loadData();
  }

  loadData(){
    let data:Observable<any>;

    // Or to get a key/value pair
    this.storage.get('token').then((val) => {
      data = this.http.get('https://jmclicks.com/api/getmyadvance?token=' + val.token);
      data.subscribe(result => {
        console.log(result)
        this.items = [];

        for (let res of result) {

          if(res.Status!= null && res.Status.indexOf("Approved") >= 0) {
            this.items.push(res)
          }
        }
      })

      this.storage.get('token').then((val) => {
        this.http.get<{badge_count: any, notifications: any}>('https://jmclicks.com/api/notifications/advanceapproved?token=' + val.token).subscribe(result => {
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
