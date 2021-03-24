import { Component } from "@angular/core";
import { NavController } from "ionic-angular/navigation/nav-controller";

import { NewJobPage } from '../newjob/newjob';
import { AllJobPage } from "../alljob/alljob";
import { Storage } from '@ionic/storage';
import { HttpClient } from "@angular/common/http";
import { MyjobdatePage } from "../myjobdate/myjobdate";

@Component({
  selector: 'page-myjob',
  templateUrl: 'myjob.html',
})
export class MyJobPage{

  newBadge: any;
  jobBadge: any;

  constructor(
    private navCtrl: NavController,
    private storage: Storage,
    private http:HttpClient
  ) {
    this.newBadge = 0;
    this.jobBadge = 0;
  }

  newjob()
  {
    this.navCtrl.push(NewJobPage);
  }
  job(){
    // this.navCtrl.push(AllJobPage);
    this.navCtrl.push(MyjobdatePage);
  }
  loadData() {
    this.storage.get('token').then((val) => {
      this.http.get<{badge_count: any}>('https://jmclicks.com/api/notifications/getNewJob?token=' + val.token).subscribe(result => {
        this.newBadge = result.badge_count;
      })
      this.http.get<{ badge_count: any }>('https://jmclicks.com/api/notifications/getJobBadge?token=' + val.token).subscribe(result => {
        this.jobBadge = result.badge_count;
      })
    });


  }
  ionViewDidEnter() {
    this.loadData();
  }
}
