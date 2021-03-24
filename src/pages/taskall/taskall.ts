import { Storage } from '@ionic/storage';
import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { App } from 'ionic-angular';
import { TaskDetailPage } from '../taskdetail/taskdetail';

@Component({
  selector: 'page-taskall',
  templateUrl: 'taskall.html',
})

export class TaskallPage{
  task: any = '';

  constructor(
    private storage: Storage,
    private http: HttpClient,
    public app: App,
  ) { }
  notifications: any = [];
  loadData() {
    let data: Observable<any>;
    this.storage.get('token').then((val) => {
      data = this.http.get('https://jmclicks.com/api/getAllTask?token=' + val.token);
      data.subscribe(result => {
        this.task = result;
      })

      // this.http.get<{badge_count: any, notifications: any}>('https://jmclicks.com/api/notifications/getTask?token=' + val.token,{params:{type:"Open"}}).subscribe(result => {
      //   let t = this;
      //   result.notifications.map(function (value) {
      //     t.notifications[value.TargetId] = value
      //   })
      // })

    });
  }

  gotoPage(item){
    let nav = this.app.getRootNav();
    nav.push(TaskDetailPage, item)
  }

  ionViewWillEnter() {
    this.loadData();
  }
}
