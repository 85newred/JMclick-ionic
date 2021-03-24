import { Component } from '@angular/core';
import { NavController, NavParams, App, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Toast } from '@ionic-native/toast';
import { AppPreferences } from '@ionic-native/app-preferences';
import { Badge } from '@ionic-native/badge';
import { AppVersion } from '@ionic-native/app-version';
import { AlertController } from 'ionic-angular';
import { Device } from '@ionic-native/device';

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
}

import { LoginPage } from '../login/login';
import { NoticePage } from '../notice/notice';
import { LeavePage } from '../leave/leave';
import { AttendancePage } from '../attendance/attendance';
import { TimesheetPage } from '../timesheet/timesheet';
import { HolidayPage } from '../holiday/holiday';
import { AdvancePage } from '../advance/advance';
import { NoticeallPage } from '../noticeall/noticeall';
import { TaskPage } from '../task/task';
import { MyJobPage } from '../myjob/myjob';
import { SchedulesPage } from '../schedules/schedules';
import { AssetPage } from '../asset/asset';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  splash = true;

  currentDate;
  formattedDate;
  formattedTime;
  VersionNumber : string;
  deviceUUID:any='';
  deviceModel:any='';

  public userImage: string;
  public Name: string = '';
  public Position : string = '';
  public Player_Id : string ='';
  public allAdvanceBadgeCount: any;
  public allLeaveBadgeCount: any;

  public noticeBadgeCount: any;
  public noticeBadgeCount2: any;
  public allProjectBadgeCount: any;
  public allContractorBadgeCount: any;

  public allBadgeCount: any;
  jobBadgeCount: any;
  user_type: any;
  allTaskBadge: any;
  allScheduleBadge:any;
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
    private alertCtrl: AlertController,
    private device: Device,
    ) {
    this.currentDate = new Date();
    this.getFormattedDate()
    this.allAdvanceBadgeCount = 0;
    this.allLeaveBadgeCount = 0;
    this.allBadgeCount = 0;
    this.jobBadgeCount = 0;
    this.allTaskBadge = 0;
    this.allScheduleBadge = 0;

    this.noticeBadgeCount = 0;
    this.noticeBadgeCount2 = 0;

    this.allProjectBadgeCount = 0;
    this.allContractorBadgeCount = 0;
    console.log('projectluar')
    // this.loadData();

    // this.device.uuid = this.deviceUUID;
    // this.device.model = this.deviceModel;
    this.deviceUUID = device.uuid;
    this.deviceModel = device.model;
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
    this.navCtrl.push(NoticeallPage);
  }

  onGoToLeaves(){
    this.navCtrl.push(LeavePage);
  }

  onGoToAttendance(){
    this.navCtrl.push(AttendancePage);
  }

  onGoToTimesheet(){
    this.navCtrl.push(TimesheetPage);
  }

  onGoToHoliday(){
    this.navCtrl.push(HolidayPage);
  }

  advance(){
    this.navCtrl.push(AdvancePage);
  }

  onGoToTask() {
    this.navCtrl.push(TaskPage);
  }

  onGoToMyJob(){
    this.navCtrl.push(MyJobPage);
  }

  onGoToSchedule(){
    this.navCtrl.push(SchedulesPage);
  }

  onGoToAsset(){
    this.navCtrl.push(AssetPage);
  }

  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }

  ionViewWillEnter(){
    this.loadData();
    this.loaddata2();
    
  }

  // ngOnInit(){
  //   this.loadData();
  //   this.loaddata2();
  //   console.log('projectdalam')
  // }

  loadData() {
    this.storage.get('user').then((val) => {
      this.userImage = val.Web_Path;
      this.Name = val.Name;
      this.Position = val.Position;
      this.user_type = val.User_Type;
      console.log(val);
      console.log('usertype',this.user_type)
    });
    console.log('type: ' + this.user_type);
    console.log(this.VersionNumber);
    this.appVersion.getVersionNumber().then(
      (versionNumber) => {
        this.VersionNumber = versionNumber;
      },
      (error) => {
        console.log(error);
    });

    this.allBadgeCount = 0;
    this.storage.get('token').then((val) => {
      this.http.get<{badge_count: any}>('https://jmclicks.com/api/notifications/advanceall?token=' + val.token).subscribe(result => {
        console.log('dalam')
        this.allAdvanceBadgeCount = result.badge_count;
        this.allBadgeCount = this.allBadgeCount + this.allAdvanceBadgeCount;
        this.setBadges(this.allBadgeCount);
      })
    });
    console.log('luar')
    this.storage.get('token').then((val) => {
      this.http.get<{badge_count: any}>('https://jmclicks.com/api/notifications/allleave?token=' + val.token).subscribe(result => {
        this.allLeaveBadgeCount = result.badge_count;
        this.allBadgeCount = this.allBadgeCount + this.allLeaveBadgeCount;
        this.setBadges(this.allBadgeCount);
      })

      this.http.get<{badge_count: any}>('https://jmclicks.com/api/notifications/getAllJob?token=' + val.token).subscribe(result => {
        this.jobBadgeCount = result.badge_count;
        this.allBadgeCount += result.badge_count;
        this.setBadges(this.allBadgeCount);
      })
      this.http.get<{ badge_count: any }>('https://jmclicks.com/api/notifications/getTaskBadge?token=' + val.token).subscribe(result => {
        this.allTaskBadge = result.badge_count;
        this.allBadgeCount += result.badge_count;
        this.setBadges(this.allBadgeCount);
      })
      

      this.http.get<{ badge_count: any }>('https://jmclicks.com/api/notifications/getScheduleBadge?token=' + val.token).subscribe(result => {
        this.allBadgeCount += result.badge_count;
        this.allScheduleBadge = result.badge_count;
        this.setBadges(this.allBadgeCount);
      })
      this.http.get<{ badge_count: any }>('https://jmclicks.com/api/notifications/getcontractornoticebadge?token=' + val.token).subscribe(result => {
        this.allContractorBadgeCount = result.badge_count;
        this.allBadgeCount = this.allBadgeCount + this.allContractorBadgeCount;
        this.setBadges(this.allBadgeCount);
      })
      
     
    });
 
  }

  loaddata2(){
    this.storage.get('token').then((val) => {
      this.http.get<{ badge_count: any }>('https://jmclicks.com/api/notifications/getprojectnoticebadge?token=' + val.token).subscribe(result => {
        this.allProjectBadgeCount = result.badge_count;
        console.log('res',result.badge_count,this.allProjectBadgeCount)
        this.allBadgeCount = this.allBadgeCount + this.allProjectBadgeCount;
        this.setBadges(this.allBadgeCount);
      })
    });
    console.log('projectA',this.allProjectBadgeCount)


    this.storage.get('token').then((val) => {
      this.http.get<{badge_count: any}>('https://jmclicks.com/api/notifications/getnoticebadge?token=' + val.token).subscribe(result => {
        this.noticeBadgeCount = result.badge_count;
        this.allBadgeCount = this.allBadgeCount + this.noticeBadgeCount;
        this.setBadges(this.allBadgeCount);
      })
    });
    console.log('noticeA',this.noticeBadgeCount)
    console.log('usertype',this.user_type)
    console.log('notice',this.noticeBadgeCount)
    console.log('project',this.allProjectBadgeCount)
    console.log('contract',this.allContractorBadgeCount)
    if(this.user_type == 'Staff'){
      this.noticeBadgeCount2 = (this.noticeBadgeCount + this.allProjectBadgeCount);
    }
    else{
      this.noticeBadgeCount2 = this.allContractorBadgeCount;
    }
    console.log('noticebadge2',this.noticeBadgeCount2)
  }

  logout() {

    let alert = this.alertCtrl.create({
      title: 'Confirm Logout',
      message: 'Do you want to logout?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Yes clicked');
            let loading = this.loadingCtrl.create({
              content: "Logging out...",
              spinner: 'crescent'
            });

            this.storage.get('token').then((val) => {
              this.appPreferences.fetch('os','id').then((playerid) => {
                loading.present();

                this.http.post('https://jmclicks.com/api/clearplayerid?token=' + val.token, {Player_Id: playerid}).finally(()=>{
                  loading.dismiss();

                  Promise.resolve('done');
                }).subscribe(result => {

                  this.navCtrl.setRoot(LoginPage);
                  console.log('player id cleared')

                }, err => {
                  console.log(JSON.parse(err))
                })
              }).then(() => {
                this.storage.remove('token');
              })
            });
          }
        }
      ]
    });
    alert.present();
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
