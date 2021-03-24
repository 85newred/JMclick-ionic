import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ElementRef, ViewChild} from '@angular/core';
import { App, LoadingController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { Toast } from '@ionic-native/toast';
import { DomSanitizer } from '@angular/platform-browser';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AlertController } from 'ionic-angular';
const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
}

/**
 * Generated class for the AdminpendingdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-adminapprovedetail',
  templateUrl: 'adminapprovedetail.html',
})
export class AdminapprovedetailPage {

  items: any;
  Leave_Type: any='';
  Leave_Term: any='';
  Start_Date: any='';
  End_Date: any='';
  Reason: any='';
  Department: any='';
  Approver: any='';
  image: string;
  myphoto: string;
  reason: string;
  apps: any;
  approverOptions: any;
  departs: any;
  types:any;
  terms: any;
  advancedetails: any = [];
  advance: any = {};
  advanceid: any;
  user: any = {};
  private token: string = '';
  AdvanceId: any;
  Total_Approved: any;
  Project_Name: any;
  mylevel: any;



  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera,
    public alertCtrl: AlertController,
    public domSanitizer: DomSanitizer,
    public app: App,
    public http: HttpClient,
    private storage: Storage,
    private toast: Toast,
    public loadingCtrl: LoadingController
  )
  {
    this.advanceid = this.navParams.get('Id');
    console.log("advanceid", this.advanceid)
    this.Project_Name =this.navParams.get('Project_Name');

    this.AdvanceId = this.navParams.get('AdvanceId');
    this.AdvanceId = {AdvanceId:this.AdvanceId,Project_Name:this.Project_Name};
  }

  ionViewWillEnter() {
    this.loadData();
  }

  setApproverOptions(value) {
    let arrApps = new Array();
    let projectName = '';
    for (let depart of this.departs) {
        if (depart.Id == value) {
          projectName = depart.Project_Name;
          break;
        }
    }
    for (let app of this.apps) {
      if(app.Project_Name == projectName) {
          arrApps.push(app);
      }
    }

    this.approverOptions = arrApps;
  }


  loadData(){

    let data:Observable<any>;

    // Leave_Type
    this.storage.get('token').then((val) => {
        data = this.http.get('https://jmclicks.com/api/myadvancedetail/'+ this.advanceid +'?token=' + val.token);
        data.subscribe(result => {
          console.log(result.advance);
          this.advance = result.advance[0];
          this.advancedetails = result.advancedetails;
          this.user = result.me;
          console.log(this.user);
        })
    });

  }

  approveAdvance() {
    const confirm = this.alertCtrl.create({
      title: 'Approve Advance',
      message: 'Are you sure want to approve this advance?',
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

            let loading = this.loadingCtrl.create({
              content: 'Submitting ...'
            });

            loading.present();

            setTimeout(() => {
              loading.dismiss();
            }, 2000);

            this.storage.get('token').then((val) => {
              let status = 'Approved'
              if(this.mylevel) {
                if (this.mylevel.Level=="1st Approval") {
                  status="1st Approved";
                }
                if (this.mylevel.Level=="2nd Approval") {
                  status="2nd Approved";
                }
                if (this.mylevel.Level=="3rd Approval") {
                  status="3rd Approved";
                }
                if (this.mylevel.Level=="4th Approval") {
                  status="4th Approved";
                }
                if (this.mylevel.Level=="5th Approval") {
                  status="5th Approved";
                }
                if (this.mylevel.Level=="Final Approval") {
                  status="Final Approved";
                }
              }

               this.http.post('https://jmclicks.com/api/advanceapprove?token=' + val.token, {
                Total_Approved: this.Total_Approved,
                AdvanceId: this.advanceid,
                Status: status
                },
                httpOptions)
              .subscribe(
                (res: any) =>{
                  this.navCtrl.pop();
                console.log(res)
                this.toast.show(`Advance Approved`, '5000', 'center').subscribe(
                  toast => {
                    console.log(toast);
                  }
                );
              })
              this.http.post('https://jmclicks.com/api/notifications/updateadvancepending?token=' + val.token, {TargetId: this.advanceid}).subscribe(result => {
                console.log(result)
              })
            });
          }
        }
      ]
    });
    confirm.present();
  }

  rejectAdvance() {

    const confirm = this.alertCtrl.create({
      title: 'Reject Advance',
      message: 'Are you sure want to reject this advance?',
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
            let loading = this.loadingCtrl.create({
              content: 'Submitting ...'
            });
            loading.present();
            setTimeout(() => {
              loading.dismiss();
            }, 2000);

            this.storage.get('token').then((val) => {
              let status = 'Rejected'
              if(this.mylevel) {
                if (this.mylevel.Level=="1st Approval") {
                  status="1st Rejected";
                }
                if (this.mylevel.Level=="2nd Approval") {
                  status="2nd Rejected";
                }
                if (this.mylevel.Level=="3rd Approval") {
                  status="3rd Rejected";
                }
                if (this.mylevel.Level=="4th Approval") {
                  status="4th Rejected";
                }
                if (this.mylevel.Level=="5th Approval") {
                  status="5th Rejected";
                }
                if (this.mylevel.Level=="Final Approval") {
                  status="Final Rejected";
                }
              }
               this.http.post('https://jmclicks.com/api/advancereject?token=' + val.token + '&AdvanceId=' + this.advanceid , {
                AdvanceId: this.advanceid,
                Status : status
                },
                httpOptions)
              .subscribe(
                (res: any) =>{
                  this.navCtrl.pop();
                console.log(res)
                this.toast.show(`Advance Rejected`, '5000', 'center').subscribe(
                  toast => {
                    console.log(toast);
                  }
                );
              })
              this.http.post('https://jmclicks.com/api/notifications/updateadvancerejected?token='    + val.token, {TargetId: this.advanceid}).subscribe(result => {
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
