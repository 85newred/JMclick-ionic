import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { App, LoadingController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { Toast } from '@ionic-native/toast';
import { DomSanitizer } from '@angular/platform-browser';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AlertController } from 'ionic-angular';

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
}

/**
 * Generated class for the MypendingdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-mypendingdetail',
  templateUrl: 'mypendingdetail.html',
})

export class MypendingdetailPage {

  items: any;
  Leave_Type: any='';
  Leave_Term: any='';
  Start_Date: any='';
  End_Date: any='';
  Reason: any='';
  Department: any='';
  Date: any='';
  Approver: any='';
  image: string;
  myphoto: string;
  reason: string;
  apps: any;
  approverOptions: any;
  departs: any;
  types:any;
  terms: any;
  advancedetails: any = [];
  advance: any = {};
  advanceid: any;
  user: any = {};
  private token: string = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera,
    public alertCtrl: AlertController,
    public domSanitizer: DomSanitizer,
    public app: App,
    public http: HttpClient,
    private storage: Storage,
    private toast: Toast,
    public loadingCtrl: LoadingController) {
      this.advanceid = this.navParams.get('Id');
      console.log("advanceid", this.advanceid)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MypendingdetailPage');
  }


  ionViewWillEnter() {
    this.loadData();
  }

  setApproverOptions(value) {
    let arrApps = new Array();
    let projectName = '';
    for (let depart of this.departs) {
        if (depart.Id == value) {
          projectName = depart.Project_Name;
          break;
        }
    }
    for (let app of this.apps) {
      if(app.Project_Name == projectName) {
          arrApps.push(app);
      }
    }

    this.approverOptions = arrApps;
  }

  loadData(){

    let data:Observable<any>;

    // Leave_Type
    this.storage.get('token').then((val) => {
        data = this.http.get('https://jmclicks.com/api/myadvancedetail/'+ this.advanceid +'?token=' + val.token);
        data.subscribe(result => {
          console.log(result.advance);
          this.advance = result.advance[0];
          this.advancedetails = result.advancedetails;
          this.user = result.me;
          console.log(this.user);
        })
    });

  }

}
