import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';

import { AdminrejectdetailPage } from '../adminrejectdetail/adminrejectdetail';

/**
 * Generated class for the AdminrejectadvancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-adminrejectadvance',
  templateUrl: 'adminrejectadvance.html',
})
export class AdminrejectadvancePage {

  adminrejectdetail = AdminrejectdetailPage;
  public items:any = [];
  private token: string = '';
  public notifications: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public app: App,
    public http: HttpClient,
    private storage: Storage) {
  }
  gotoPage(item){
    let nav = this.app.getRootNav();
    nav.push(this.adminrejectdetail, item)
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

          if(res.Status.indexOf("Rejected") >= 0) {
            this.items.push(res)
          }
        }
      })

      // this.storage.get('token').then((val) => {
      //   this.http.get<{badge_count: any, notifications: any}>('http://localhost:8200/jmclicks/public/api/notifications/advancerejected?token=' + val.token).subscribe(result => {
      //     let that = this
      //     result.notifications.map(function(value) {
      //       that.notifications[value.TargetId] = value
      //     })

      //     console.log(this.notifications)
      //   })
      // });
    });
  }

}
