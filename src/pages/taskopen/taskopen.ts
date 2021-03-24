import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
})
}
import { Component } from "@angular/core";
import { Observable } from 'rxjs';
import { App } from 'ionic-angular';
import { TaskDetailPage } from '../taskdetail/taskdetail';

@Component({
  selector: 'page-taskopen',
  templateUrl: 'taskopen.html',
})

export class TaskOpenPage{
  task: any = '';

  start:any;
  end:any;

  constructor(
    private storage: Storage,
    private http: HttpClient,
    public app: App,
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.start = this.navParams.get('start')
    this.end = this.navParams.get('end')
    console.log(this.start,this.end)
  }


  notifications: any = [];
  loadData() {
    this.storage.get("token").then((val) => {
      this.http.post(
        "https://jmclicks.com/api/gettask?token=" + val.token,
        {
          Start_Date: this.start,
          End_Date: this.end,
        },
        httpOptions
      )
      .subscribe((res: any) => {
        this.task = res;
        // this.groups = this.groupBy(res, 'Date');
        // this.keys = Object.keys(this.groups);
      });

      this.http.get<{badge_count: any, notifications: any}>('https://jmclicks.com/api/notifications/getTask?token=' + val.token,{params:{type:"Open"}}).subscribe(result => {
        let t = this;
        result.notifications.map(function (value) {
          t.notifications[value.TargetId] = value
        })
      })

    });
  }

  gotoPage(item){
    let nav = this.app.getRootNav();
    nav.push(TaskDetailPage, item)
  }

  ionViewWillEnter() {
    this.loadData();
  }

  onCancel(ev) {
    // Reset the field
    console.log('reset')
    ev.target.value = '';
    this.loadData();
  }

  getList(ev: any) {
    // this.loadData();
    console.log(ev.target.value);
    // this.gen();

    let serVal = ev.target.value;
    if (serVal && serVal.trim() != '') {
      this.task = this.task.filter((item) => {
        return (item.Project_Name.toLowerCase().indexOf(serVal.toLowerCase()) > -1 
        || item.Site_Name.toLowerCase().indexOf(serVal.toLowerCase()) > -1
        || item.Completed_Date.toLowerCase().indexOf(serVal.toLowerCase()) > -1
        || item.Due_Date.toLowerCase().indexOf(serVal.toLowerCase()) > -1
        );
      })
    }else {
      this.onCancel(ev);
    }

  }
}
