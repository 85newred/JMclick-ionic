import { Component } from '@angular/core';
import { NavController, NavParams, App, AlertController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { Toast } from '@ionic-native/toast';
import { Events } from 'ionic-angular';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

import { LeavePendingRedirectPage } from '../leavependingredirect/leavependingredirect';

/**
 * Generated class for the LeavependingdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-leavependingdetail',
  templateUrl: 'leavependingdetail.html',
})

export class LeavependingdetailPage {

  leavependingredirect = LeavePendingRedirectPage;
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
  private leave : any;
  private Web_Path : any;

  ls:any=[]

  constructor(
    private toast: Toast,
    public navCtrl: NavController,
    public navParams: NavParams,
    public app: App,
    public http: HttpClient,
    public alertCtrl: AlertController,
    private storage: Storage,
    public events: Events
    )
    {
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
      console.log(this.Project_Name);
      this.LeaveId = this.navParams.get('Id');
      this.leave = {LeaveId:this.LeaveId,Project_Name:this.Project_Name};
      this.Web_Path = this.navParams.get('Web_Path')

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeavedetailPage');
  }

  ionViewDidEnter() {
    this.loadData();
  }

  loadData(){

    let data:Observable<any>;

    // Or to get a key/value pair
    this.storage.get('token').then((val) => {
        data = this.http.get('https://jmclicks.com/api/getleaves?token=' + val.token );
        data.subscribe(result => {
          this.items = result;
        })
    });

    this.storage.get('token').then((val) => {
      data = this.http.get('https://jmclicks.com/api/getls/'+this.Id+'?token=' + val.token );
      data.subscribe(result => {
        this.ls = result[1];
      })
  });
  }

  cancelLeave() {

    const confirm = this.alertCtrl.create({
      title: 'Cancel leave submitted?',
      message: 'Are you sure want to cancel leave submitted?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('No clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Yes clicked');
            this.storage.get('token').then((val) => {
              this.http.post('https://jmclicks.com/api/cancelleave?token=' + val.token + '&Id='+ this.LeaveId, {
                },
                httpOptions)
              .subscribe(
                (res: any) =>{
                  this.events.publish('leavepending');
                  this.navCtrl.pop();
                console.log(res)
                this.toast.show(`Leave cancelled`, '5000', 'center').subscribe(
                  toast => {
                    console.log(toast);
                  }
                );
              })
              this.http.post('https://jmclicks.com/api/notifications/updateleavecancelled?token=' + val.token, {TargetId: this.LeaveId}).subscribe(result => {
                console.log(result)
              })
            });
          }
        }
      ]
    });
    confirm.present();

  }

}
