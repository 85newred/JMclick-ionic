import { Component } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { Toast } from '@ionic-native/toast';
import { AlertController } from 'ionic-angular';

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
}

import { MyApprovalRedirectPage } from '../myapprovalredirect/myapprovalredirect';

/**
 * Generated class for the MyapprovaldetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-myapprovaldetail',
  templateUrl: 'myapprovaldetail.html',
})

export class MyapprovaldetailPage {

  myapprovalredirect = MyApprovalRedirectPage;
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
  private Name: string;
  private leave : any;
  public id: any;
  private Web_Path : any;

  constructor(
    public navCtrl: NavController,
    public app: App,
    public http: HttpClient,
    private storage: Storage,
    private toast: Toast,
    public alertCtrl: AlertController,
    public navParams: NavParams
  ) {
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
    this.Name =this.navParams.get('Name');
    this.Approver = this.navParams.get('Approver')
    this.LeaveId = this.navParams.get('LeaveId');
    this.leave = {LeaveId:this.LeaveId,Project_Name:this.Project_Name,Id:this.Id};
    this.Web_Path = this.navParams.get('Web_Path')
  }

  loadData(){

    let data:Observable<any>;

    // Or to get a key/value pair
    this.storage.get('token').then((val) => {
        data = this.http.get('https://jmclicks.com/api/myApprover?token=' + val.token);
        data.subscribe(result => {
          this.items = result;
        })

    });
  }

  approveLeave() {

    const confirm = this.alertCtrl.create({
      title: 'Approve Leave',
      message: 'Are you sure want to approve this leave?',
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
              this.http.post('https://jmclicks.com/api/adminapproval?token=' + val.token, {
                LeaveId: this.LeaveId,
                Id: this.LeaveId
                },
                httpOptions)
              .subscribe(
                (res: any) =>{
                  this.navCtrl.pop();
                console.log(res)
                this.toast.show(`Leave approved`, '5000', 'center').subscribe(
                  toast => {
                    console.log(toast);
                  }
                );
              })
              this.http.post('https://jmclicks.com/api/notifications/updateleavepending?token=' + val.token, {TargetId: this.LeaveId}).subscribe(result => {
                console.log(result)
              })
            });
          }
        }
      ]
    });
    confirm.present();
  }

  rejectLeave() {

    const confirm = this.alertCtrl.create({
      title: 'Reject Leave',
      message: 'Are you sure want to reject this leave?',
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
              this.http.post('https://jmclicks.com/api/adminrejected?token=' + val.token + '&Id=' + this.LeaveId , {
                Id: this.LeaveId
                },
                httpOptions)
              .subscribe(
                (res: any) =>{
                  this.navCtrl.pop();
                console.log(res)
                this.toast.show(`Leave rejected`, '5000', 'center').subscribe(
                  toast => {
                    console.log(toast);
                  }
                );
              })
              this.http.post('https://jmclicks.com/api/notifications/updateleavepending?token=' + val.token, {TargetId: this.LeaveId}).subscribe(result => {
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
