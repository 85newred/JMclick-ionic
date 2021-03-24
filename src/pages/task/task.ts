import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
}


import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { TaskAssignPage } from '../taskassign/taskassign';
import { MyTaskPage } from '../mytask/mytask';
import { Storage } from '@ionic/storage';
import { TaskallPage } from '../taskall/taskall';
import { TaskdatePage } from '../taskdate/taskdate';

/**
 * Generated class for the TaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-task',
  templateUrl: 'task.html',
})

export class TaskPage {
  private token: string = '';

  Name:any=''
  Position:any=''
  user_type:any=''
  template:any=''
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    public http: HttpClient
  ) {
    this.jobBadge = 0;
  };

  jobBadge: any;

  assign(){
    this.navCtrl.push(TaskAssignPage);
  }

  myTask() {
    this.navCtrl.push(TaskdatePage);
  }

  allTask(){
    this.navCtrl.push(TaskallPage)
  }
  loadData() {
    this.storage.get('token').then((val) => {
      this.http.get<{ badge_count: any }>('https://jmclicks.com/api/notifications/getTaskBadge?token=' + val.token).subscribe(result => {
        this.jobBadge = result.badge_count;
      })
    })

    this.storage.get('user').then((val) => {
      // this.userImage = val.Web_Path;
      this.Name = val.Name;
      this.Position = val.Position;
      this.user_type = val.User_Type;
      this.template = val.AccessControlTemplateId;
      console.log(val);
      console.log(this.template);

    });
  }
  ionViewDidEnter() {
    this.loadData();
  }
}
