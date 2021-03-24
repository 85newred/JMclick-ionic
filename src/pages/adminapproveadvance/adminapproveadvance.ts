import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { Badge } from '@ionic-native/badge';

import { AdminapprovedetailPage } from '../adminapprovedetail/adminapprovedetail';

/**
 * Generated class for the AdminapproveadvancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-adminapproveadvance',
  templateUrl: 'adminapproveadvance.html',
})

export class AdminapproveadvancePage {

  public items:any = [];
  private token: string = '';
  adminapprovedetail = AdminapprovedetailPage;
  public notifications: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public app: App,
    public http: HttpClient,
    private storage: Storage,
    private badge: Badge
    ) {
  }

  gotoPage(item){
    let nav = this.app.getRootNav();
    nav.push(this.adminapprovedetail, item)
  }

  ionViewWillEnter() {
    this.loadData();
  }

  loadData(){
    let data:Observable<any>;

    // Or to get a key/value pair
    this.storage.get('token').then((val) => {
      data = this.http.get('https://jmclicks.com/api/advancemanagement?token=' + val.token);
      data.subscribe(result => {
        console.log(result)
        var r = result.advances;
        this.items = [];

        for (let res of r) {

          if(res.Status.indexOf("Approved") >= 0) {
            this.items.push(res)
          }
        }
      })

      this.storage.get('token').then((val) => {
        this.http.get<{badge_count: any, notifications: any}>('https://jmclicks.com/api/notifications/advancepending?token=' + val.token).subscribe(result => {
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
