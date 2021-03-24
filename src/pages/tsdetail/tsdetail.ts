import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
}

/**
 * Generated class for the TsdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-tsdetail',
  templateUrl: 'tsdetail.html',
})

export class TsdetailPage {

  private LeaveId:any;
  public items:any;
  private token: string = '';
  private Id: any;
  private Start_Date: string;
  private Status: string;
  private Time_In: string;
  private Time_Out: string;
  private Check_In_Type: string;
  private No_of_Days: string;
  private Site_Name: string;
  private Approver: string;
  private Project_Name: string;
  private leave : any;

  constructor(
    public navCtrl: NavController,
    public app: App,
    public http: HttpClient,
    private storage: Storage,
    public navParams: NavParams
  ){
    this.loadData();
    this.Id = this.navParams.get('Id');
    this.Start_Date = this.navParams.get('Start_Date')
    this.Status = this.navParams.get('Status')
    this.Time_In = this.navParams.get('Time_In')
    this.Time_Out = this.navParams.get('Time_Out')
    this.Check_In_Type = this.navParams.get('Check_In_Type')
    this.No_of_Days = this.navParams.get('No_of_Days')
    this.Site_Name = this.navParams.get('Site_Name')
    this.Project_Name =this.navParams.get('Project_Name');
    this.Approver = this.navParams.get('Approver')
    console.log(this.Project_Name);
    this.LeaveId = this.navParams.get('Id');
    this.leave = {LeaveId:this.LeaveId,Project_Name:this.Project_Name};
  }

  myFunction(date) {
    var d = new Date(date);
    var weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tues";
    weekday[3] = "Wed";
    weekday[4] = "Thur";
    weekday[5] = "Fri";
    weekday[6] = "Sat";

    return weekday[d.getDay()];
  }

  loadData(){
    this.storage.get('token').then((val) => {
      return this.http.post('https://jmclicks.com/api/mytimesheet?token=' + val.token, {
        Start_Date:this.navParams.get('Start_Date'),
        End_Date: this.navParams.get('End_Date')
      },
        httpOptions)
      .subscribe(
        (res: any) =>{
          this.items = res;
        console.log(res)
      })
    });
  }

}
