import { Storage } from '@ionic/storage';
import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TaskOpenPage } from '../taskopen/taskopen';
import { TaskClosePage } from '../taskclose/taskclose';

@Component({
  selector: 'page-mytask',
  templateUrl: 'mytask.html',
})

export class MyTaskPage{
  task: any = '';
  tab1: any;
  tab2: any;
  open: any;
  close: any;
  
  start:any;
  end:any;
  tab1Params:any;
  tab2Params:any;
  constructor(
    private http: HttpClient,
    private storage:Storage,
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.tab1 = TaskOpenPage;
    this.tab2 = TaskClosePage;
    this.open = 0;
    this.close = 0;
    this.loadData();
    this.start = this.navParams.get('Start_Date')
    this.end = this.navParams.get('End_Date')
    this.tab1Params = {start:this.start,end:this.end};
    this.tab2Params = {start:this.start,end:this.end};

    console.log(this.start)

  }

  loadData() {
    this.storage.get('token').then((val) => {
      this.http.get<{badge_count: any}>('https://jmclicks.com/api/notifications/getTask?token=' + val.token,{params:{type:"Open"}}).subscribe(result => {
        this.open = result.badge_count > 0 ? result.badge_count:null;
      })
      this.http.get<{badge_count: any}>('https://jmclicks.com/api/notifications/getTask?token=' + val.token,{params:{type:"Close"}}).subscribe(result => {
        this.close = result.badge_count > 0 ? result.badge_count:null;
      })
    })

  }
}
