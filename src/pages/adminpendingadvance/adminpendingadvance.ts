import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { Badge } from '@ionic-native/badge';
import { Events } from 'ionic-angular';

import { AdminpendingdetailPage } from '../adminpendingdetail/adminpendingdetail';

/**
 * Generated class for the AdminpendingadvancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-adminpendingadvance',
  templateUrl: 'adminpendingadvance.html',
})
export class AdminpendingadvancePage {

  public items:any = [];
  private token: string = '';
  adminpendingdetail = AdminpendingdetailPage;
  public notifications: any = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public app: App,
    public http: HttpClient,
    private storage: Storage,
    private badge: Badge,
    public events: Events
    ) {
      events.subscribe('adminpendingadvance', () => {
        // user and time are the same arguments passed in `events.publish(user, time)`
        this.loadData();
      });
  }

  gotoPage(item){
    let nav = this.app.getRootNav();
    nav.push(this.adminpendingdetail, item)
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

          if(res.Status.indexOf("Pending") >= 0) {
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
