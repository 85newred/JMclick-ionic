import { Component } from '@angular/core';
import { NavController, App, LoadingController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { Toast } from '@ionic-native/toast';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { AlertController } from 'ionic-angular';

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
}

@Component({
  selector: 'page-leavependingredirect',
  templateUrl: 'leavependingredirect.html'
})

export class LeavePendingRedirectPage {

  private Id: any;
  public items:any;
  private token: string = '';
  Department: any='';
  Approver: any='';
  approverOptions: any;
  departs: any;
  leave: any;
  Project_Name: any;
  LeaveId: any;
  StatusIds: any;
  apps: any;
  public signupform: FormGroup;

  constructor(
    public navCtrl: NavController,
    public app: App,
    public http: HttpClient,
    private storage: Storage,
    public loadingCtrl: LoadingController,
    private toast: Toast,
    public alertCtrl: AlertController,
    public navParams: NavParams
  )
  {
    //this.loadData();
    this.Project_Name =this.navParams.get('Project_Name');
    this.Approver = this.navParams.get('Approver');
    this.Id = this.navParams.get('Id');
    this.LeaveId = this.navParams.get('LeaveId');
// console.log(this.LeaveId);
  }

  ngOnInit() {
    this.signupform = new FormGroup({
        // Department: new FormControl('',[Validators.required]),
        Approver: new FormControl('', [Validators.required]),
    })
  }

  ionViewWillEnter() {
    this.loadData();
  }

  loadData(){

    let data:Observable<any>;

    // Or to get a key/value pair
    this.storage.get('token').then((val) => {
      data = this.http.get('https://jmclicks.com/api/getclaimsheet?token=' + val.token);
        data.subscribe(result => {
          this.items = result;
        })
    });

    // Department
    this.storage.get('token').then((val) => {
        data = this.http.get('https://jmclicks.com/api/getprojects?token=' + val.token);
        data.subscribe(result => {
          console.log(result);
          this.departs = result;
        })
    });

    // Approver
    this.storage.get('token').then((val) => {
        data = this.http.get('https://jmclicks.com/api/getapprover?token=' + val.token);
        data.subscribe(result => {
          console.log(result);
          this.apps = result;
          //filter array
          let arrApps = [];
          for (let app of this.apps) {
            if(app.Project_Name == this.Project_Name) {
                arrApps.push(app);
            }
          }
          console.log(arrApps);
          this.apps=arrApps;
        })
    });

  }

  redirectLeave() {

    const confirm = this.alertCtrl.create({
      title: 'Redirect Leave?',
      message: 'Are you sure want to redirect this leave?',
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
               this.http.post('https://jmclicks.com/api/redirect2?token=' + val.token, {
                  ProjectId: this.Department,
                  Approver: this.Approver,
                  Id: this.LeaveId,
                  LeaveId: this.LeaveId,
              },
                httpOptions)
              .subscribe(
                (res: any) =>{
                  this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-3));
                console.log(res)
                this.toast.show('Redirect succesfull', '5000', 'center').subscribe(
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
