import { Component } from '@angular/core';
import { NavController, App, Platform } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { NavParams } from 'ionic-angular';
import { IonicImageLoader } from 'ionic-image-loader';
import { File } from '@ionic-native/file';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import { Toast } from '@ionic-native/toast';

import { FileTransfer,  FileTransferObject } from '@ionic-native/file-transfer';
import { FileOpener } from '@ionic-native/file-opener';
import { DomSanitizer } from '@angular/platform-browser';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AlertController } from 'ionic-angular';
import { AssethistoryPage } from '../assethistory/assethistory';
import { AssettransferPage } from '../assettransfer/assettransfer';
import { AssetreportPage } from '../assetreport/assetreport';
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}
/**
 * Generated class for the NoticedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-assetonhand',
  templateUrl: 'assetonhand.html',
})
export class AssetonhandPage {

  assethistory = AssethistoryPage;
  assettransfer = AssettransferPage;

  private LeaveId:any;
  public items:any;
  private token: string = '';
  private Id: any;

  private imageSrc: string;

  private Label: string;
  private Type: string;
  private Serial_No: string;
  private IMEI: string;
  private Model_No: string;
  private Car_No: string;
  private Color: string;
  private Date: string;
  private Transfer_To: string;
  private Transfer_Date_Time: string;
  private Remarks: string;
  private AssetId: string;
  private TrackingId: any='';
  private asset: any='';
  private transferstaff: any='';
  Holder:any=''
  Acknowledge_Date_Time:any=''
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera,
    public domSanitizer: DomSanitizer,
    public app: App,
    public http: HttpClient,
    private storage: Storage,
    public ionicImageLoader: IonicImageLoader,
    private document: DocumentViewer,
    private file: File,
    private transfer: FileTransfer,
    private toast: Toast,
    private platform: Platform,
    private alertCtrl: AlertController,
    private fileOpener: FileOpener
  )
  {
    this.loadData();
    this.Id = this.navParams.get('Id');
    this.Label = this.navParams.get('Label');
    this.Type = this.navParams.get('Type')
    this.Serial_No = this.navParams.get('Serial_No')
    this.IMEI = this.navParams.get('IMEI')
    this.Model_No = this.navParams.get('Model_No')
    this.Car_No = this.navParams.get('Car_No')
    this.Color = this.navParams.get('Color')
    this.Date = this.navParams.get('Date')
    this.Transfer_To = this.navParams.get('Transfer_To')
    this.Transfer_Date_Time = this.navParams.get('Transfer_Date_Time')
    this.Remarks= this.navParams.get('Remarks')
    this.AssetId = this.navParams.get('AssetId')
    this.TrackingId = this.navParams.get('TrackingId')
    this.Holder = this.navParams.get('Holder')
    this.Acknowledge_Date_Time = this.navParams.get('Acknowledge_Date_Time')
    console.log('holder',this.Holder)
    this.asset = {AssetId:this.AssetId}
    this.transferstaff = {AssetId:this.AssetId,Id:this.Id,TrackingId:this.TrackingId}
    console.log(this.Id)
    console.log(this.AssetId)
    console.log('track',this.TrackingId)
  }

  loadData(){

    let data:Observable<any>;

    // Or to get a key/value pair
    this.storage.get('token').then((val) => {
      // data = this.http.get('http://localhost:8200/jmclicks/public/api/getnotice?token=' + val.token );
      // data.subscribe(result => {
      //   this.items = result;
      // })

      // this.http.post('https://jmclicks.com/api/notifications/updatenoticebadge?token='    + val.token, {TargetId: this.Id}).subscribe(result => {
      //   console.log(result)
      // })
    });
  }

  Transfer(){
    this.navCtrl.push(AssettransferPage);
  }

  report(){
    this.navCtrl.push(AssetreportPage,{
      AssetId:this.AssetId,
      TrackingId:this.TrackingId
    });
    console.log(this.AssetId,'asse')
  }

  Acknowledge(){
    this.storage.get("token").then((val) => {
      const confirm = this.alertCtrl.create({
        title: "Acknowledge",
        message: "Click for Acknowledge",
        buttons: [
         
          {
            text: "Acknowledge",
            handler: () => {
              this.http
                .post(
                  "https://jmclicks.com/api/assetacknowledge?token=" + val.token,
                  {
                    TrackingId : this.TrackingId
                  },
                  httpOptions
                )
                .subscribe((res) => {
                  if (res == 1) {
                    // this.loadData();

                    this.navCtrl.pop();
                    this.toast
                      .show(`Acknowledged`, "3000", "center")
                      .subscribe((toast) => {
                        // console.log(toast);
                      });
                  } else {
                    this.displayErrorAlert("Acknowledge operation failed!");
                  }
                });
            },
          },
          {
            text: "Cancel",
            handler: () => {
              // console.log("no clicked");
            },
          },
        ],
      });
      confirm.present();
    });
  }

  displayErrorAlert(err) {
    console.log(err);
    let alert = this.alertCtrl.create({
      title: "Error",
      subTitle: err,
      buttons: ["OK"],
    });
    alert.present();
  }

}
