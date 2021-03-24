import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl, FormGroup, Validators} from '@angular/forms';
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
/**
 * Generated class for the AssetreportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-assetreport',
  templateUrl: 'assetreport.html',
})
export class AssetreportPage {

  public signupform: FormGroup;
  Issue:any=''
  Replacement:any=''
  AssetId:any=''
  TrackingId:any

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public domSanitizer: DomSanitizer,
    public app: App,
    public http: HttpClient,
    private storage: Storage,
    private toast: Toast,
    public loadingCtrl: LoadingController) {
      this.AssetId = this.navParams.get('AssetId')
      this.TrackingId = this.navParams.get('TrackingId')
      console.log('aasetid',this.AssetId)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssetreportPage');
  }

  ngOnInit() {
    this.signupform = new FormGroup({
      Issue: new FormControl('', [Validators.required]),
      Replacement: new FormControl('', [Validators.required]),
    })
  }

  report(){
    let loading = this.loadingCtrl.create({
      content: 'Submitting ...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 2000);

    console.log('issue',this.Issue)
    console.log('rep',this.Replacement)
    console.log('traking',this.TrackingId)

    this.storage.get('token').then((val) => {
      return this.http.post('https://jmclicks.com/api/assetreport?token=' +val.token, {
        AssetId: this.AssetId,
        Issue: this.Issue,
        Replacement: this.Replacement,
        TrackingId: this.TrackingId,
      },
      httpOptions)
      .subscribe(
        (res: any) =>{
          this.navCtrl.pop();
        console.log(res)
        this.toast.show('Report sent', '5000', 'center').subscribe(
          toast => {
            console.log(toast);
          }
        );
      })
    });
  }

}
