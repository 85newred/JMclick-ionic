import { Component } from '@angular/core';
import { NavController, App, LoadingController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { NavParams } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';
import { Events } from 'ionic-angular';
import { FormControl, FormGroup, Validators} from '@angular/forms';

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
}

@Component({
  selector: 'page-adminpendingadvanceredirect',
  templateUrl: 'adminpendingadvanceredirect.html'
})

export class AdminpendingadvanceredirectPage {

  private Id: any;
  public items:any;
  private token: string = '';
  Department: any='';
  Approver: string;
  approverOptions: any;
  departs: any;
  leave: any;
  Project_Name: any;
  LeaveId: any;
  StatusIds: any;
  apps: any;
  AdvanceId: any;
  advanceid: any;
  public signupform: FormGroup;

  constructor(
    public navCtrl: NavController,
    public app: App,
    public http: HttpClient,
    private storage: Storage,
    public loadingCtrl: LoadingController,
    private toast: Toast,
    public navParams: NavParams,
    public events: Events
  )
  {
    //this.loadData();
    this.Project_Name =this.navParams.get('Project_Name');
    // this.Approver = this.navParams.get('Approver');//
    this.Id = this.navParams.get('Id');
    this.LeaveId = this.navParams.get('LeaveId');
    this.advanceid = this.navParams.get('Id');

    this.AdvanceId = this.navParams.get('Id');
    console.log("advanceid", this.AdvanceId)
    // console.log(this.LeaveId);

  }


  ionViewWillEnter() {
    this.loadData();
  }

  ngOnInit() {
    this.signupform = new FormGroup({
      Approver: new FormControl('',[Validators.required]),
    })
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
          // let arrApps = [];
          // for (let app of this.apps) {
          //   if(app.Project_Name == this.Project_Name) {
          //       arrApps.push(app);
          //   }
          // }
          // console.log(arrApps);
          // this.apps=arrApps;
        })
    });

  }

  redirectAdvance() {

    let loading = this.loadingCtrl.create({
      content: 'Redirecting ...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 2000);

    this.storage.get('token').then((val) => {
      return this.http.post('https://jmclicks.com/api/advanceredirect?token=' + val.token, {
        Approver: this.Approver,
        AdvanceId: this.AdvanceId,
      },
        httpOptions)
      .subscribe(
        (res: any) =>{
          this.http.post('https://jmclicks.com/api/notifications/updateadvancepending?token='    + val.token, {TargetId: this.advanceid}).subscribe(result => {
            console.log(result)
          })
          this.events.publish('adminpendingadvance');
          this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-3));
          console.log(res)
          this.toast.show(`Redirect succesfull`, '5000', 'center').subscribe(
            toast => {
              console.log(toast);
            }
          );
        }
      )
    });
  }

}
