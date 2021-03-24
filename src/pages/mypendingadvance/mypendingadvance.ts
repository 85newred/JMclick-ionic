import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { MypendingdetailPage } from '../mypendingdetail/mypendingdetail';

/**
 * Generated class for the MypendingadvancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-mypendingadvance',
  templateUrl: 'mypendingadvance.html',
})

export class MypendingadvancePage {

  public items:any = [];
  private token: string = '';
  mypendingdetail = MypendingdetailPage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public app: App,
    public http: HttpClient,
    private storage: Storage) {
  }

  goToDetail(item){
    let nav = this.app.getRootNav();
    nav.push(this.mypendingdetail,item);
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

          if(res.Status!= null && res.Status.indexOf("Pending Approval") >= 0) {
            this.items.push(res)
          }
        }
      })
    });
  }

}
