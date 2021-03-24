import { Component } from '@angular/core';
import { NavController, NavParams, Form } from 'ionic-angular';
import { ElementRef, ViewChild} from '@angular/core';
import { App, LoadingController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { Toast } from '@ionic-native/toast';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertController } from 'ionic-angular';

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
}

import { FormControl, FormGroup, Validators, ValidatorFn, ValidationErrors} from '@angular/forms';

// import { formControlBinding } from '@angular/forms/src/directives/ng_model';

/**
 * Generated class for the SiteadvancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
*/

export const identityRevealedValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const day_meal = control.get('day_meal');
  // const all_meal = control.get('all_meal');
  const day_acco = control.get('day_acco');
  // const all_acco = control.get('all_acco');
  const day_mile = control.get('day_mile');
  // const all_mile = control.get('all_mile');
  const day_parking = control.get('day_parking');
  // const all_parking = control.get('all_parking');
  const day_fare = control.get('day_fare');
  // const all_fare = control.get('all_fare');
  const day_other = control.get('day_other');
  // const all_other = control.get('all_other');
  const purchase = control.get('purchase');
  // const all_purchase = control.get('all_purchase');

  return (!day_meal.value || day_meal.value == 0) && (!day_acco.value || day_acco.value ==0) && (!day_mile.value || day_mile.value ==0) && (!day_parking.value || day_parking.value ==0) && (!day_fare.value || day_fare.value ==0) && (!day_other.value || day_other.value ==0) && (!purchase.value || purchase.value ==0) ? { 'identityRevealed': true } : null;
};

@Component({
  selector: 'page-siteadvance',
  templateUrl: 'siteadvance.html',
})

export class SiteadvancePage {
  banks: any;
  items: any;
  SiteId: any='';
  Bank_Name: any='';
  Reason: any='';
  Department: any='';
  departs: any;
  Purpose: any='';
  token: string = '';
  userImage: string;
  Name: string = '';
  Position : string = '';
  Mode_Of_Transport: any;
  Number_Motorcycle : any = '';
  day_meal : any = '';
  all_meal : any = '';
  day_acco : any = '';
  all_acco : any = '';
  day_mile : any = '';
  all_mile : any = '';
  day_parking : any = '';
  all_parking : any = '';
  day_fare : any = '';
  all_fare : any = '';
  day_other : any = '';
  all_other : any = '';
  purchase : any = '';
  all_purchase : any = 0;
  Start_Date: any;
  End_Date: any;
  Destination: any;
  Car_No: any;
  Purchase: any;
  modes:any;
  public signupform: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public domSanitizer: DomSanitizer,
    public app: App,
    public http: HttpClient,
    private storage: Storage,
    private toast: Toast,
    public loadingCtrl: LoadingController  ) {

  }

  ngOnInit() {
    this.signupform = new FormGroup({
      Destination: new FormControl('', [Validators.required]),
      Car_No: new FormControl('', [Validators.required]),
      Bank_Name: new FormControl('',[Validators.required]),
      Department: new FormControl('',[Validators.required]),
      Start_Date: new FormControl('',[Validators.required]),
      End_Date: new FormControl('',[Validators.required]),
      Mode_Of_Transport: new FormControl('',[Validators.required]),
      all_meal: new FormControl('',[]),
      day_meal: new FormControl('',[]),
      all_acco: new FormControl('',[]),
      day_acco: new FormControl('',[]),
      all_mile: new FormControl('',[]),
      day_mile: new FormControl('',[]),
      all_parking: new FormControl('',[]),
      day_parking: new FormControl('',[]),
      all_fare: new FormControl('',[]),
      day_fare: new FormControl('',[]),
      Purpose: new FormControl('',[]),
      all_other: new FormControl('',[]),
      day_other: new FormControl('',[]),
      purchase: new FormControl('',[]),
      all_purchase: new FormControl('',[])
    },{ validators: identityRevealedValidator });
  }

  ionViewWillEnter() {
    this.loadData();
    this.Name = this.navParams.get('Name');
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

  loadData(){

    let data:Observable<any>;

    // Name & Position
    this.storage.get('user').then((val) => {
      this.userImage = val.Web_Path;
      this.Name = val.Name;
      this.Position = val.Position;
    });

    // Bank Accounts
    this.storage.get('token').then((val) => {
      data = this.http.get('https://jmclicks.com/api/bankaccount?token=' + val.token);
      data.subscribe(result => {
        console.log(result);
        let banks = new Array();
        banks.push({Bank_Name : result.me.Bank_Name,Bank_Account_No : result.me.Bank_Account_No});
        this.Position = result.me.Position;
        this.banks = banks;
        let modes = new Array();
          for (let res of result.options) {
            if(res.Field == 'Mode_Of_Transport') {
              modes.push(res);
            }
          }
          this.modes = modes;
      })
    });

    // Department
    this.storage.get('token').then((val) => {
        data = this.http.get('https://jmclicks.com/api/getprojectsdepart?token=' + val.token);
        data.subscribe(result => {
          console.log(result);
          this.departs = result;
        })
    });

    // // Transport
    // this.storage.get('token').then((val) => {
    //   data = this.http.get('https://jmclicks.com/api/transport?token=' + val.token);
    //   data.subscribe(result => {
    //     console.log(result);
    //     let modes = new Array();
    //       for (let res of result) {
    //         if(res.Field == 'Mode_Of_Transport') {
    //           modes.push(res);
    //         }
    //       }
    //       this.modes = modes;
    //   })
    // });

  }

  totalMeal(){
    var meal = Number.parseFloat(this.day_meal) * Number.parseFloat(this.all_meal);
    return Number.isNaN(Number(meal.toFixed(2))) ? 0.00 : meal.toFixed(2);
  }

  totalAcco(){
    var acco = Number.parseFloat(this.day_acco) * Number.parseFloat(this.all_acco);
    return Number.isNaN(Number(acco.toFixed(2))) ? 0.00 : acco.toFixed(2);

  }

  totalMile(){
    var mile = Number.parseFloat(this.day_mile) * Number.parseFloat(this.all_mile);
    return Number.isNaN(Number(mile.toFixed(2))) ? 0.00 : mile.toFixed(2);

  }

  totalParking(){
    var parking = Number.parseFloat(this.day_parking) * Number.parseFloat(this.all_parking);
    return Number.isNaN(Number(parking.toFixed(2))) ? 0.00 : parking.toFixed(2);

  }

  totalFare(){
    var fare = Number.parseFloat(this.day_fare) * Number.parseFloat(this.all_fare);
    return Number.isNaN(Number(fare.toFixed(2))) ? 0.00 : fare.toFixed(2);

  }

  totalOther(){
    var other = Number.parseFloat(this.day_other) * Number.parseFloat(this.all_other);
    return Number.isNaN(Number(other.toFixed(2))) ? 0.00 : other.toFixed(2);

  }

  totalAdvance(){
    var advance = Number(this.totalMeal()) + Number(this.totalAcco()) + Number(this.totalMile()) + Number(this.totalParking()) + Number(this.totalFare()) + Number(this.totalOther()) + Number(this.all_purchase);
    return advance.toFixed(2);

  }

  submitClaim() {
    let loading = this.loadingCtrl.create({
      content: 'Submitting ...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 2000);


    this.storage.get('token').then((val) => {
      return this.http.post('https://jmclicks.com/api/myadvanceapply?token=' + val.token+ "&Start_Date=" + this.myFunction(this.Start_Date) + "&End_Date=" + this.myFunction(this.End_Date), {
        ProjectId: this.Department,
        Bank_Account_No: this.Bank_Name,
        SiteId: this.SiteId,
        Purpose: this.Purpose,
        Purchase: this.purchase,
        // Start_Date: this.Start_Date + this.myFunction,
        // End_Date: this.End_Date + this.myFunction,
        Destination: this.Destination,
        Mode_Of_Transport: this.Mode_Of_Transport,
        Car_No: this.Car_No,
        Sum1: this.totalMeal(),
        Sum2: this.totalAcco(),
        Sum3: this.totalMile(),
        Sum4: this.totalParking(),
        Sum5: this.totalFare(),
        Sum6: this.totalOther(),
        Sum7: this.all_purchase,
        Total_Requested: this.totalAdvance(),
        Meal_Days: this.day_meal,
        Meal_Per_Day: this.all_meal,
        Accomodation_Days: this.day_acco,
        Accomodation_Per_Day: this.all_acco,
        Mileage_Days: this.day_mile,
        Mileage_Per_Day: this.all_mile,
        Parking_Days: this.day_parking,
        Parking_Per_Day: this.all_parking,
        Ticket_Days: this.day_fare,
        Ticket_Per_Day: this.all_fare,
        Other_Days: this.day_other,
        Other_Per_Day: this.all_other,
      },
      httpOptions)
      .subscribe(
        (res: any) =>{
          this.navCtrl.pop();
        console.log(res)
        this.toast.show('New Site Advance created', '5000', 'center').subscribe(
          toast => {
            console.log(toast);
          }
        );
      })
    });
  }


}
