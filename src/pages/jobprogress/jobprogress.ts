import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { JobDetailsPage } from "../jobdetails/jobdetails";
import { App } from 'ionic-angular';

@Component({
  selector: 'page-jobprogress',
  templateUrl: 'jobprogress.html',
})
export class JobProgressPage{

  start:any
  end:any

  constructor(
    private http:HttpClient,
    private storage:Storage,
    private app:App,
    public navCtrl: NavController, 
    public navParams: NavParams
  ){
    this.start = this.navParams.get('start')
    this.end = this.navParams.get('end')

    console.log(this.start)
    console.log(this.end)

  }
  job: any;
  notifications: any = [];
  loaddata(){
    this.storage.get('token').then((val)=>{
      this.http.get('https://jmclicks.com/api/myjob/getMyJob?token=' + val.token,{
        params:{
          status:'In-Progress',
          Start_Date:this.start,
          End_Date:this.end
        }
      }).subscribe(result=>{
        this.job = result;
      })

      this.http.get<{badge_count: any, notifications: any}>('https://jmclicks.com/api/notifications/getJob?token=' + val.token,{params:{type:"Job In-Progress"}}).subscribe(result => {
        let t = this;
        result.notifications.map(function (value) {
          t.notifications[value.TargetId] = value
        })
      })
    })

  }
  details(d){
    let nav = this.app.getRootNav();
    nav.push(JobDetailsPage, d)
  }
  ionViewWillEnter(){
    this.loaddata();
  }
  
  onCancel(ev) {
    // Reset the field
    console.log('reset')
    ev.target.value = '';
    this.loaddata();
  }

  getList(ev: any) {
    // this.loadData();
    console.log(ev.target.value);
    // this.gen();

    let serVal = ev.target.value;
    if (serVal && serVal.trim() != '') {
      this.job = this.job.filter((item) => {
        return (item.Company_Name.toLowerCase().indexOf(serVal.toLowerCase()) > -1 
        || item.acceptedName.toLowerCase().indexOf(serVal.toLowerCase()) > -1
        || item.payment_terms.toLowerCase().indexOf(serVal.toLowerCase()) > -1
        || item.pr_no.toLowerCase().indexOf(serVal.toLowerCase()) > -1
        );
      })
    }else {
      this.onCancel(ev);
    }

  }
}
