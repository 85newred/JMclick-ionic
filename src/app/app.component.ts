import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { OneSignal } from '@ionic-native/onesignal';
// import { AlertController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppPreferences } from '@ionic-native/app-preferences';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { AndroidPermissions } from '@ionic-native/android-permissions';

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(
    private platform: Platform, 
    private statusBar: StatusBar, 
    private storage: Storage, 
    private splashScreen: SplashScreen, 
    private oneSignal: OneSignal, 
    // private alertCtrl: AlertController,    
    public http: HttpClient,
    private appPreferences: AppPreferences,
    private locationAccuracy: LocationAccuracy,
    private androidPermissions: AndroidPermissions,
  ) {
    
    this.platformReady();
    this.enableLocation()
  }

  platformReady() {
    this.platform.ready().then(() => {

      this.storage.get('token').then((val) => {
        if(val && val.token) {
          this.rootPage = HomePage;
        } else {
          this.rootPage = LoginPage;
        }
      });
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // OneSignal Code start:
      // Enable to debug issues:
      // window["plugins"].OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});

      this.androidPermissions.requestPermissions(
        [
          this.androidPermissions.PERMISSION.CAMERA, 
          // this.androidPermissions.PERMISSION.CALL_PHONE, 
          // this.androidPermissions.PERMISSION.GET_ACCOUNTS, 
          this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE, 
          this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE
        ]
      );

     // check if in browser or on device before running OneSignal Code
     if(this.platform.is('core') || this.platform.is('mobileweb')) {
      console.log("Platform is core or is mobile web");
    } else {
      var notificationOpenedCallback = function(jsonData) {
        console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
      };

      window["plugins"].OneSignal
        .startInit("3d569294-3f12-4687-93cd-60c1ad8b8ee0", "201816951895")
        .handleNotificationOpened(notificationOpenedCallback)
        .endInit();
    }
    });

    // this.appPreferences.fetch('dict', 'key').then((res) => { 
    //   this.oneSignal.endInit();
    //   this.oneSignal.getIds().then((id) => {
    //   });
    // });
    this.oneSignal.endInit();
      this.oneSignal.getIds().then((id) => {
        this.appPreferences.store('os', 'id', id.userId);
    });
    
    // this.oneSignal.endInit();
    // this.oneSignal.getIds().then((id) => {
    //   this.storage.get('token').then((val) => {
    //     this.http.post(' http://192.168.0.88:8000/jmclicks/public/api/postplayerid?token=' + val.token, {
    //       Player_Id: id.userId,
    //        },
    //       httpOptions)
    //     .subscribe()
    //   });
    // });

    
  }

  enableLocation(){
    return this.locationAccuracy.canRequest().then((canRequest: boolean) => {

      if(canRequest) {
        // the accuracy option will be ignored by iOS
        this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
          () => alert('Location information is on'),
          error => alert('Location information is turn off')
          );
      }

    });
  }
  
}

