import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Storage } from '@ionic/storage';
import { AlertController, LoadingController, ToastController, NavController } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { text } from "@angular/core/src/render3/instructions";
import { IonicSelectableComponent } from 'ionic-selectable';


@Component({
  selector: 'page-taskassign',
  templateUrl: 'taskassign.html',
})

export class TaskAssignPage{

  Site_Name: any = '';
  Due_Date: any = '';
  PIC_Type: any = '';
  Staff: any =[];
  Staff_Name: any = '';
  project: any;
  Remarks: any = '';
  Project_Name: any;
  StaffOptions: any=[];
  formData: FormData;
  public signupform: FormGroup;

  constructor(
    private storage: Storage,
    public alertCtrl: AlertController,
    public http: HttpClient,
    public loadingCtrl: LoadingController,
    public toast: Toast,
    public navCtrl:NavController
  ) { }

  ngOnInit() {
    this.signupform = new FormGroup({
      Site_Name: new FormControl('', [Validators.required]),
      Due_Date:new FormControl('', [Validators.required]),
      PIC_Type:  new FormControl('',[Validators.required]),
      Staff_Name : new FormControl('', [Validators.required]),
      Project_Name: new FormControl('', [Validators.required]),
      Remarks:new FormControl('',[Validators.required]),
    });
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
    if(text.length < 3 ){
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

  loadData() {
    let data: Observable<any>;

    this.storage.get('token').then((val) => {
      data = this.http.get('https://jmclicks.com/api/getProject?token=' + val.token);
      data.subscribe(result => {
        this.project = result;
      })
    });

    this.storage.get('token').then((val) => {
      data = this.http.get('https://jmclicks.com/api/getstaff?token=' + val.token);
      data.subscribe(result => {
        console.log(result);
        this.Staff = result;
      })
    });
  }
  submitTask()
  {
    let loading = this.loadingCtrl.create({
      content: "Submitting task",
      spinner: 'crescent'
    });
    this.storage.get('token').then((val) => {
      loading.present();
      this.http.post('https://jmclicks.com/api/createTask?token=' + val.token, {
        Project_Name: this.Project_Name,
        Site_Name: this.Site_Name,
        Due_Date: this.Due_Date,
        Staff_Name: this.Staff_Name,
        Remarks: this.Remarks,
        pic:this.PIC_Type
      }, {})
        .finally(() => {
          loading.dismiss();
      })
        .subscribe(result => {
          this.navCtrl.pop();
        if (result == 1) {

          this.toast.show(`Task submitted`, '5000', 'center').subscribe(
            toast => {

            }

          );
        }
      });

    });
  }
}
