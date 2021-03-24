import { Component } from '@angular/core';
import { NavController, NavParams, App, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Toast } from '@ionic-native/toast';
import { AppPreferences } from '@ionic-native/app-preferences';
import { Badge } from '@ionic-native/badge';
import { AppVersion } from '@ionic-native/app-version';
import { AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
}

import { NoticePage } from '../notice/notice';
import { NoticecontractorPage } from '../noticecontractor/noticecontractor';
import { NoticeprojectPage } from '../noticeproject/noticeproject';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-noticeall',
  templateUrl: 'noticeall.html',
})
export class NoticeallPage {

  splash = true;

  currentDate;
  formattedDate;
  formattedTime;
  VersionNumber : string;
  public user:any='';
  public userImage: string;
  public Name: string = '';
  public Position : string = '';
  public Player_Id : string ='';

  public allStaffBadgeCount: any;
  public allContractorBadgeCount: any;
  public allProjectBadgeCount: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    public app: App,
    private toast: Toast,
    public loadingCtrl: LoadingController,
    public http: HttpClient,
    private appPreferences: AppPreferences,
    private badge: Badge,
    private appVersion: AppVersion,
    private alertCtrl: AlertController
    ) {
      this.currentDate = new Date();
      this.getFormattedDate()
      this.allStaffBadgeCount = 0;
      this.allContractorBadgeCount = 0;
      this.allProjectBadgeCount = 0;

      this.loadData();
  }

  getFormattedDate(){
    var dateObj = new Date()

    var year = dateObj.getFullYear().toString()
    var month = dateObj.getMonth().toString()
    var date = dateObj.getDate().toString()

    var monthArray = ['January','February','March','April','May','Jun','July','August','September','October','November','Disember']

    this.formattedDate = year + '-' + monthArray[month] + '-' + date;
  }

  onGoToNotice(){
    this.navCtrl.push(NoticePage);
  }

  onGoToNoticeContractor(){
    this.navCtrl.push(NoticecontractorPage);
  }

  onGoToNoticeProject(){
    this.navCtrl.push(NoticeprojectPage);
  }


  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }

  isObject(variable){
    return typeof variable === 'object';
  }


  loadData(){

    let data:Observable<any>;

    // User
    this.storage.get('token').then((val) => {
      data=this.http.get('https://jmclicks.com/api/getuser?token=' + val.token)
      data.subscribe(result => {
        console.log(result);
        this.user = result;
      })
    });

    this.storage.get('token').then((val) => {
      this.http.get<{badge_count: any}>('https://jmclicks.com/api/notifications/getnoticebadge?token=' + val.token).subscribe(result => {
        this.allStaffBadgeCount = result.badge_count;
        // this.allContractorBadgeCount = result.badge_count;
        // this.allProjectBadgeCount = result.badge_count;
      })
    });

    this.storage.get('token').then((val) => {
      this.http.get<{badge_count: any}>('https://jmclicks.com/api/notifications/getcontractornoticebadge?token=' + val.token).subscribe(result => {
        // this.allStaffBadgeCount = result.badge_count;
        this.allContractorBadgeCount = result.badge_count;
        // this.allProjectBadgeCount = result.badge_count;
      })
    });

    this.storage.get('token').then((val) => {
      this.http.get<{badge_count: any}>('https://jmclicks.com/api/notifications/getprojectnoticebadge?token=' + val.token).subscribe(result => {
        // this.allStaffBadgeCount = result.badge_count;
        // this.allContractorBadgeCount = result.badge_count;
        this.allProjectBadgeCount = result.badge_count;
      })
    });
  }

  // badge icon count
  async setBadges(badgeNumber: number) {
    try {
      let badges = await this.badge.set(badgeNumber);
      console.log(badges);
    } catch (e) {
      console.error(e);
    }
  }

}
