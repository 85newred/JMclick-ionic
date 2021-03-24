import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { LeaveapprovedetailPage } from '../leaveapprovedetail/leaveapprovedetail';

/**
 * Generated class for the LeaveapprovePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-leaveapprove',
  templateUrl: 'leaveapprove.html',
})
export class LeaveapprovePage {

  public items:any;
  private token: string = '';
  leaveapprovedetail = LeaveapprovedetailPage;
  public notifications: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public app: App,
    public http: HttpClient,
    private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeaveapprovePage');
  }

  ionViewDidEnter() {
    this.loadData();
  }

  gotoPage(item){
    let nav = this.app.getRootNav();
    nav.push(this.leaveapprovedetail, item)
  }

  loadData(){

    let data:Observable<any>;

    // Or to get a key/value pair
    this.storage.get('token').then((val) => {
      data = this.http.get('https://jmclicks.com/api/getleavesapproved?token=' + val.token);
      data.subscribe(result => {
        this.items = result;
      })
      this.storage.get('token').then((val) => {
        this.http.get<{badge_count: any, notifications: any}>('https://jmclicks.com/api/notifications/leaveapproved?token=' + val.token).subscribe(result => {
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
