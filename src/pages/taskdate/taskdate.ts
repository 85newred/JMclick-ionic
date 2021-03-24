import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TaskDetailPage } from '../taskdetail/taskdetail';
import { MyTaskPage } from '../mytask/mytask';

/**
 * Generated class for the TaskdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-taskdate',
  templateUrl: 'taskdate.html',
})
export class TaskdatePage {

  items: any;
  token: string = '';
  Start_Date: any='';
  End_Date: any='';
  timesheet: any='';

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 2);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    this.Start_Date = firstDay.toISOString();
    this.End_Date = lastDay.toISOString();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskdatePage');
  }

  myFunction(date) {
    var d = new Date(date);
    var monthNames = [
       "Jan", "Feb", "Mar",
       "Apr", "May", "Jun", "Jul",
       "Aug", "Sep", "Oct",
       "Nov", "Dec"
     ];

     var day = date.substring(8,10);
     var monthIndex = parseInt(date.substring(5,7))-1;
     var year = date.substring(0,4);

     return day + '-' + monthNames[monthIndex] + '-' + year;
  }

  submitClaim() {

    this.navCtrl.push(MyTaskPage, {
      Start_Date: this.myFunction(this.Start_Date),
      End_Date: this.myFunction(this.End_Date)
    });
    // let loading = this.loadingCtrl.create({
    //   content: "Logging in...",
    //   spinner: 'crescent'
    // });

  }

}
