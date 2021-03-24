import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}


/**
 * Generated class for the LeavecanceldetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
*/

@Component({
  selector: 'page-leavecanceldetail',
  templateUrl: 'leavecanceldetail.html',
})

export class LeavecanceldetailPage {

  private LeaveId:any;
  public items:any;
  private token: string = '';
  private Id: any;
  private Start_Date : string;
  private Status: string;
  private Leave_Type: string;
  private Leave_Term: string;
  private End_Date: string;
  private No_of_Days: string;
  private  Reason: string;
  private Approver: string;
  private Project_Name: string;
  private Web_Path : any;

  constructor(
    public navCtrl: NavController,
    public app: App,
    public http: HttpClient,
    private storage: Storage,
    public navParams: NavParams)
    {
      this.loadData();
      this.Id = this.navParams.get('Id');
      this.Start_Date = this.navParams.get('Start_Date')
      this.Status = this.navParams.get('Status')
      this.Leave_Type = this.navParams.get('Leave_Type')
      this.Leave_Term = this.navParams.get('Leave_Term')
      this.End_Date = this.navParams.get('End_Date')
      this.No_of_Days = this.navParams.get('No_of_Days')
      this.Reason = this.navParams.get('Reason')
      this.Project_Name =this.navParams.get('Project_Name');
      this.Approver = this.navParams.get('Approver')
      this.Web_Path = this.navParams.get('Web_Path')

      this.LeaveId = this.navParams.get('Id');

  }

  loadData(){

    let data:Observable<any>;

    // Or to get a key/value pair
    this.storage.get('token').then((val) => {
      data = this.http.get('https://jmclicks.com/api/getleavescancelled?token=' + val.token );
      data.subscribe(result => {
        this.items = result;
      })

      this.http.post('https://jmclicks.com/api/notifications/updateleavecancelled?token='    + val.token, {TargetId: this.LeaveId}).subscribe(result => {
        console.log(result)
      })
    });
  }

}

