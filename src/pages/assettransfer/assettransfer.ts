import { Component } from '@angular/core';
import { NavController, App, LoadingController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { Toast } from '@ionic-native/toast';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { text } from "@angular/core/src/render3/instructions";
import { IonicSelectableComponent } from 'ionic-selectable';

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
}

@Component({
  selector: 'page-assettransfer',
  templateUrl: 'assettransfer.html'
})

export class AssettransferPage {

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
  Staff: any='';
  AssetId: any='';
  private TrackingId: any='';
  Staff_Name: any='';
  StaffOptions: any=[];
  PIC_Type: any = '';

  StaffAll: any='';

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
    this.AssetId = this.navParams.get('AssetId');
    this.TrackingId = this.navParams.get('TrackingId');
    
console.log(this.Id);
console.log(this.TrackingId);
console.log('asset',this.AssetId)
  }

  ngOnInit() {
    this.signupform = new FormGroup({
        // Department: new FormControl('',[Validators.required]),
        // Staff: new FormControl('', [Validators.required]),
        Staff_Name : new FormControl('', [Validators.required]),
        PIC_Type:  new FormControl('',[Validators.required]),
    })
  }

  ionViewWillEnter() {
    this.loadData();
  }

  setStaff(value){
    let staffArr = new Array();
    for (let s of this.Staff) {
      if (s.User_Type == value)
        staffArr.push(s);
    }
    this.StaffOptions = staffArr;
  }

  filterPorts(StaffOptions: any, text: string) {
    return StaffOptions.filter(StaffOptions => {
       if(StaffOptions.Name.toLowerCase().indexOf(text) !== -1)
        return StaffOptions.Name;
      console.log(StaffOptions.Name)

    }).map(function(obj){
       return obj.Name;
     });
  }

  searchStaff(event: {
    component: IonicSelectableComponent,
    text: string
  }){
    let text = event.text.trim().toLowerCase();

    event.component.startSearch();
    if(text.length < 1 ){
      event.component.items = [];
      event.component.endSearch();
      return;
    }
    if (!text){
      event.component.items = [];
      event.component.endSearch();
      return;
    }
    event.component.items = this.filterPorts(this.StaffOptions, text);
    console.log(event.component.items)
    event.component.endSearch();
  }

  loadData(){

    let data:Observable<any>;

    // Or to get a key/value pair
    this.storage.get('token').then((val) => {
      data = this.http.get('https://jmclicks.com/api/assetuser?token=' + val.token);
        data.subscribe(result => {
          this.items = result;
        })
    });

    this.storage.get('token').then((val) => {
      data = this.http.get('https://jmclicks.com/api/getstaffasset?token=' + val.token);
      data.subscribe(result => {
        console.log(result);
        this.Staff = result;
      })
    });

  }
  
  transferstaff() {

    let a : any='';
    a = this.Staff_Name;
    let data:Observable<any>;

    this.storage.get('token').then((val) => {
      data = this.http.get('https://jmclicks.com/api/getstaff2?token=' + val.token +'&name='+this.Staff_Name);
      data.subscribe(result => {
        console.log(result);
        this.StaffAll = result;
        console.log('sa',this.StaffAll.Id)
      })
    });


    console.log('staffallId',this.StaffAll)

    const confirm = this.alertCtrl.create({
      title: 'Transfer to Staff ?',
      message: 'Are you sure want to transfer ?',
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
            let a : any='';
            a = this.Staff_Name;
            let data:Observable<any>;

            this.storage.get('token').then((val) => {
              data = this.http.get('https://jmclicks.com/api/getstaff2?token=' + val.token +'&name='+this.Staff_Name);
              data.subscribe(result => {
                console.log(result);
                this.StaffAll = result;
                console.log('sa',this.StaffAll.Id)
              })
            });

            this.storage.get('token').then((val) => {
               this.http.post('https://jmclicks.com/api/assettransfer?token=' + val.token, {
                  Name: this.Staff_Name,
                  TrackingId: this.TrackingId,
                  AssetId: this.AssetId,
                  Transfer_To: this.StaffAll.Id,
              },
                httpOptions)
              .subscribe(
                (res: any) =>{
              console.log(this.Staff);
              console.log(this.TrackingId);

                  this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-3));
                console.log(res)

                this.toast.show('Redirect succesfull', '5000', 'center').subscribe(
                  toast => {
                    console.log(toast);
                  }
                );
              })
              // this.http.post('http://192.168.0.88:8000/jmclicks/public/api/notifications/updateleavepending?token=' + val.token, {TargetId: this.LeaveId}).subscribe(result => {
              //   console.log(result)
              // })
            });
          }
        }
      ]
    });
    confirm.present();
  }

}
