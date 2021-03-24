import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { ElementRef, ViewChild} from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { App, LoadingController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { Toast } from '@ionic-native/toast';
import { ToastController } from 'ionic-angular';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

/*
 * Generated class for the AttendancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
*/


@Component({
  selector: 'page-attendance',
  templateUrl: 'attendance.html',
})

export class AttendancePage {
  currentDate;
  formattedDate;
  formattedDateObj;

  Date: string;
  Time: string;
  Latitude_In: any;
  Longitude_In: any;
  Latitude_Out: any;
  Longitude_Out: any;
  Check_In_Type: string;
  Department: any='';
  Site_Name: string;
  Timesheet_Name: string;
  Id: string;
  Leader_Member: string;
  Next_Person: string;
  ProjectId: string;
  State: string;
  Work: string;
  Reason: string;
  Remarks: string;
  Work_Description: string;
  hideUI: any;
  types: any;
  departs: any;
  Name: string = '';
  items: any;
  UserId: any;
  token: string = '';
  Site_Name_Display:string = '';
  public signupform: FormGroup;

  @ViewChild('myInput') myInput: ElementRef;
  resize() {
    var element = this.myInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
    var scrollHeight = element.scrollHeight;
    element.style.height = scrollHeight + 'px';
    this.myInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
  }

  constructor(
    public navCtrl: NavController,
    public geo: Geolocation,
    public alertCtrl: AlertController,
    public app: App,
    public http: HttpClient,
    private storage: Storage,
    public loadingCtrl: LoadingController,
    public navParams: NavParams,
    private locationAccuracy: LocationAccuracy,
    private platform: Platform,
    private toast: Toast,
    private toastCtrl: ToastController
  )
  {
    //this.enableLocation().then(() =>
    //  this.loadData(), () => this.loadData());
    this.currentDate = new Date();
    this.getFormattedDate()

    this.Date = new Date().toISOString();
    this.Time = this.calculateTime('-4');

    this.Id = this.navParams.get('Id');
    this.Timesheet_Name = this.navParams.get('Timesheet_Name');
    this.Name = this.navParams.get('Name');

    // if(this.Longitude_In == "" || this.Longitude_In =='' || this.Longitude_In == null){
    //   this.enableLocation();
    // }
    // this.Check_In_Type = 'On Duty';
  }

  ngOnInit(){
    this.signupform = new FormGroup({
      Check_In_Type: new FormControl('', [Validators.required]),
      Department: new FormControl('', [Validators.required]),
      Site_Name: new FormControl('',[Validators.required]),
      Work_Description: new FormControl('',[])
      // Latitude_In: new FormControl('', [Validators.required]),
      // Longitude_In: new FormControl('', [Validators.required]),
    })

    this.Check_In_Type = 'On Duty';
  }



  enableLocation(){
    return this.locationAccuracy.canRequest().then((canRequest: boolean) => {

      if(canRequest) {
        // the accuracy option will be ignored by iOS
        this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
          () => alert('Location information is on'),
          error => alert('Location information is on'+JSON.stringify(error))
          );
      }

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttendancePage');
  }

  doRefresh() {

    // if(this.Longitude_In == "" || this.Longitude_In =='' || this.Longitude_In == null){
    //   this.enableLocation();
    // } else {
      this.platform.ready().then(() => {
        //request location here
          // this.navCtrl.setRoot(this.navCtrl.getActive());
          let loading = this.loadingCtrl.create({
            content: "Refreshing in...",
            spinner: 'crescent'
          });
          // loading.present();

        this.geo.getCurrentPosition().then( pos => {


          this.Latitude_In = pos.coords.latitude;
          this.Longitude_In = pos.coords.longitude;
          loading.dismiss()
          alert('Location Refreshed')
        }).catch( err => console.log(err));
      })
    // }


    // console.log('Begin async operation', refresher);


    // this.geo.getCurrentPosition().then( pos => {
    //   this.Latitude_In = pos.coords.latitude;
    //   this.Longitude_In = pos.coords.longitude;
    //   alert('Location Refreshed')
    // }).catch( err => console.log(err));

      // this.loadData()
      // this.enableLocation();

      // this.ionViewDidEnter();

    // setTimeout(() => {
    //   console.log('Async operation has ended');
    //   refresher.complete();
    // },10);
  }

  ionViewWillEnter() {

    // this.geo.getCurrentPosition().then((position) => {

    //   this.Latitude_In = position.coords.latitude
    //   this.Longitude_In = position.coords.longitude

    //   alert('Location')
    // }).catch((error) => {
    //   alert('error')
    // });

    // this.enableLocation();
    this.loadData();
  }

  getFormattedDate(){
    var dateObj = new Date()

    var year = dateObj.getFullYear().toString()
    var month = dateObj.getMonth().toString()
    var date = dateObj.getDate().toString()

    var monthArray = ['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sep','Oct','Nov','Dec']

    this.formattedDate = year + '-' + monthArray[month] + '-' + date;
    this.formattedDateObj = new Date(this.formattedDate)
  }

  calculateTime(offset: any) {
    // create Date object for current location
    let d = new Date();

    // create new Date object for different city
    // using supplied offset
    let nd = new Date(d.getTime() + (3600000 * offset));

    return nd.toISOString();
  }

  myFunction(date) {
    var d = new Date(date);
    var monthNames = [
      "Jan", "Feb", "Mar",
      "Apr", "May", "Jun", "Jul",
      "Aug", "Sep", "Oct",
      "Nov", "Dec"
    ];

    var day = ('0'+ d.getDate()).slice(-2);
    var monthIndex = d.getMonth();
    var year = d.getFullYear();

    return day + '-' + monthNames[monthIndex] + '-' + year;
  }

  startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10

    return h + ":" + m + ":" + s;
  }


  loadData(){

    this.storage.get('timein_id').then((val) => {
      this.Id = val;
    });

    this.storage.get('timein').then((val) => {
      this.hideUI = val;
    });

    this.storage.get('user').then((val) => {
      this.Name = val.Name;
    });

    this.storage.get('Site_Name').then((val) => {
      this.Site_Name_Display = val;
    });

    let data:Observable<any>;

    this.geo.getCurrentPosition().then( pos => {
      this.Latitude_In = pos.coords.latitude;
      this.Longitude_In = pos.coords.longitude;
    }).catch( err => console.log(err));

    //  this.geo.getCurrentPosition().then((position) => {

    //   this.Latitude_In = position.coords.latitude
    //   this.Longitude_In = position.coords.longitude

    //     alert('Location')
    //   }).catch((error) => {
    //     alert('error')

    //   });

    // Check_In_Type
    this.storage.get('token').then((val) => {
        data = this.http.get('https://jmclicks.com/api/gettimesheetoption?token=' + val.token);
        data.subscribe(result => {
          console.log(result);
          let types = new Array();
          for (let res of result) {
            if(res.Field == 'Check_In_Type') {
              types.push(res);
            }
          }
          this.types = types;
        })
    });

    // Department
    this.storage.get('token').then((val) => {
        data = this.http.get('https://jmclicks.com/api/getdepartments?token=' + val.token);
        data.subscribe(result => {
          console.log(result);
          this.departs = result;
        })
    });

  }
  private disabled: boolean = false;
  submitTimeIn() {

    console.log('department',this.Department)

    if(this.Longitude_In == "" || this.Longitude_In =='' || this.Longitude_In == null){
      this.toast.show(`Please turn on your location and make sure Latitude & Longitude got value`, '50000', 'center').subscribe(
        toast => {
          console.log(toast);
          // this.navCtrl.setRoot(this.navCtrl.getActive().component);
        }

    )} else{
      this.disabled = true;
      this.storage.get('token').then((val) => {
        return this.http.post('https://jmclicks.com/api/newtimesheet?token=' + val.token, {
          Latitude_In: this.Latitude_In,
          Longitude_In: this.Longitude_In,
          Date: this.myFunction(this.Date),
          Time: this.startTime(),
          Check_In_Type: this.Check_In_Type,
          Department: this.Department.Id,
          Site_Name: this.Site_Name,
          Leader_Member: '',
          Next_Person: '',
          ProjectId: this.Department.Id,
          State: '',
          Work: '',
          Reason: '',
          Remarks: '',
          Work_Description: this.Work_Description

        },
          httpOptions)
        .subscribe(
          (res: any) =>{
            // this.navCtrl.pop();
            this.storage.set('timein', true);
            this.storage.set('timein_id', res);
            this.hideUI = true;
            this.Id = res;
            this.Site_Name_Display = this.Site_Name;
            this.storage.set('Site_Name',this.Site_Name);

            this.presentToastIn();
            this.disabled = false;
            // this.toast.show(`Time-In success`, '5000', 'center').subscribe(
            //   toast => {
            //     console.log(toast);
            //   }
            // );
        })
      });
    }
  }

  presentToastIn() {
    let toast = this.toastCtrl.create({
      message: 'Time-In success',
      position: 'middle',
      closeButtonText: "Ok",
      showCloseButton: true,
      cssClass: 'green'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();

  }
  private disabledOut: boolean = false;
  submitTimeOut() {
    // this.geo.getCurrentPosition().then( pos => {
    //   this.Latitude_Out = pos.coords.latitude;
    //   this.Longitude_Out = pos.coords.longitude;
    if(this.Longitude_In == "" || this.Longitude_In =='' || this.Longitude_In == null){
      this.toast.show(`Please turn on your location and make sure Latitude & Longitude got value`, '50000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      )
    } else {
      this.disabledOut = true;
      this.storage.get('token').then((val) => {
        return this.http.post('https://jmclicks.com/api/timeout?token=' + val.token, {
          Latitude_Out: this.Latitude_In,
          Longitude_Out: this.Longitude_In,
          Time_Out: this.startTime(),
          Id: this.Id

        },
        httpOptions)
        .subscribe(
          (res: any) =>{
            // this.navCtrl.pop();
            this.storage.set('timein', false);
            this.hideUI = false;
            console.log(res)
            this.disabledOut = false;
            this.presentToastOut();

            // this.toast.show(`Time-Out success`, '5000', 'center').subscribe(
            //   toast => {
            //     console.log(toast);
            //   }
            // );
          }
        )
        // });
      }).catch( err => console.log(err));
    }
  }

  presentToastOut() {
    let toast = this.toastCtrl.create({
      message: 'Time-Out success',
      position: 'middle',
      closeButtonText: "Ok",
      showCloseButton: true,
      cssClass: 'green'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }






}

