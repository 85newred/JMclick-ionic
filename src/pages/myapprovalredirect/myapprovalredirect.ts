import { Component } from '@angular/core';
import { NavController, App, LoadingController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { NavParams } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';
import { FormControl, FormGroup, Validators} from '@angular/forms';

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
}

@Component({
  selector: 'page-myapprovalredirect',
  templateUrl: 'myapprovalredirect.html'
})

export class MyApprovalRedirectPage {


    // private StatusIds: any;
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
    Name: any;
    Id:any;
    public signupform: FormGroup;

    constructor(
      public navCtrl: NavController,
      public app: App,
      public http: HttpClient,
      private storage: Storage,
      public loadingCtrl: LoadingController,
      private toast: Toast,
      public navParams: NavParams
    )
    {
      //this.loadData();
      this.Project_Name =this.navParams.get('Project_Name');
      this.Approver = this.navParams.get('Approver');
      // this.StatusIds = this.navParams.get('StatusIds');
      this.LeaveId = this.navParams.get('LeaveId');
      this.Name = this.navParams.get('Name');
  
      this.StatusIds = this.navParams.get('Id');
      console.log(this.LeaveId);
      console.log('statid',this.StatusIds);
      console.log('ID',this.StatusIds);


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
          data = this.http.get('https://jmclicks.com/api/getleavesapproved?token=' + val.token);
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
          data = this.http.get('https://jmclicks.com/api/getapprover3?token=' + val.token);
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

    redirectApproval() {

      this.storage.get('token').then((val) => {
        return this.http.post('https://jmclicks.com/api/redirect?token=' + val.token, {
          ProjectId: this.Department,
          Approver: this.Approver,
          Id: this.LeaveId,
          // StatusIds: this.LeaveId
        },
          httpOptions)
        .subscribe(
          (res: any) =>{
            this.http.post('https://jmclicks.com/api/notifications/updateleavepending?token=' + val.token, {TargetId: this.LeaveId}).subscribe(result => {
            console.log(result)
          })
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
