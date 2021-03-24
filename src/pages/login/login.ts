import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Credentials } from './../../models/credentials';
import { Auth } from './../../models/auth';
import { AuthProvider } from './../../providers/auth/auth';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {OneSignal} from '@ionic-native/onesignal';
import {Platform} from 'ionic-angular';
import { AppPreferences } from '@ionic-native/app-preferences';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
}

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  public credentials: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private auth: AuthProvider,
    public formBuilder: FormBuilder,

    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private storage: Storage,
    public http: HttpClient,
    private oneSignal: OneSignal,
    private _platform: Platform,
    private appPreferences: AppPreferences


  ) {
      this.credentials = this.formBuilder.group({
        StaffId: ['', [Validators.required]],
        Password: ['', Validators.required]
      })

      // this.initializeApp();
    }

    // initializeApp() {
    //   this._platform.ready().then(() => {
    //     this._OneSignal.startInit("278871d2-ebbb-4e30-a3d5-ca2f41d2ef73", "536009947036");
    //     this._OneSignal.inFocusDisplaying(this._OneSignal.OSInFocusDisplayOption.Notification);
    //     this._OneSignal.setSubscription(true);
    //     this._OneSignal.handleNotificationReceived().subscribe(() => {
    //       // handle received here how you wish.
    //     });
    //     this._OneSignal.handleNotificationOpened().subscribe(() => {
    //       // handle opened here how you wish.
    //     });
    //     this._OneSignal.endInit();
    //   })
    // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    let loading = this.loadingCtrl.create({
      content: "Logging in...",
      spinner: 'crescent'
    });

    loading.present();
    console.log(this.credentials.value)
    this.auth.authUsingCredentials(this.credentials.value)
    .delay(2000)
    .finally(() => loading.dismiss())
    .subscribe(
      (res: any) =>{
      console.log(res)

      if (res.error) {
        let alert = this.alertCtrl.create({
          title: 'Error!',
          subTitle: 'Invalid username or password! Please try again',
          buttons: [{
            text: 'Ok',
            handler: () => {
              console.log('Disagree clicked');
            }
          }]
        });
        alert.present();
        alert.onDidDismiss(() => {
          console.log('dismissed')
        })
        console.log(res.error)

        return;
      }
      // set a key/value
     this.storage.set('token', res);

     this.http.get('https://jmclicks.com/api/getuser?token=' + res.token)
     .subscribe(result => {
       this.storage.set('user', result);
       this.navCtrl.setRoot(HomePage);
       this.appPreferences.fetch('os','id').then((userId) => {
        console.log(JSON.stringify(userId));

        this.http.post('https://jmclicks.com/api/postplayerid?token=' + res.token, {
          Player_Id: userId,
        }, httpOptions).subscribe(result => {
            console.log('result', result)
        })
      });
     });

      },
      err => {
        let alert = this.alertCtrl.create({
          title: 'Error!',
          subTitle: 'Invalid username or password! Please try again',
          buttons: [{
            text: 'Ok',
            handler: () => {
              console.log('Disagree clicked');
            }
          }]
        });
        alert.present();
        alert.onDidDismiss(() => {
          console.log('dismissed')
        })
        console.log(err)
      }
    )


    // this.appPreferences.fetch('os','id').then((res) => {
    //   console.log(res);
    //   // this.oneSignal.getIds().then((id) => {
    //       // this.storage.get('token').then((val) => {
    //         this.http.post(' https://jmclicks.com/api/postplayerid?token=' + val.token, {
    //           Player_Id: res.userId,
    //            },
    //           httpOptions)
    //         .subscribe()
    //       // });
    //     // });
    // });
  }
}
