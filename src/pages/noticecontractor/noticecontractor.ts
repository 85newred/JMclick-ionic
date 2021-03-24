import { Component } from '@angular/core';
import { NavController, NavParams, App, Platform  } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { IonicImageLoader } from 'ionic-image-loader';
import { File } from '@ionic-native/file';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import { FileTransfer,  FileTransferObject } from '@ionic-native/file-transfer';
import { FileOpener } from '@ionic-native/file-opener';
import { DomSanitizer } from '@angular/platform-browser';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AlertController } from 'ionic-angular';
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}



import { NoticedetailPage } from '../noticedetail/noticedetail'
import { NoticecontractordetailPage } from '../noticecontractordetail/noticecontractordetail';

/**
 * Generated class for the NoticePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-noticecontractor',
  templateUrl: 'noticecontractor.html',
})

export class NoticecontractorPage {

  private LeaveId:any;
  public items:any;
  private token: string = '';
  private Id: any;

  private Title: string;
  private Content: string;
  private Start_Date: string;
  private End_Date: string;
  private Attachment: string;
  private Created_By: string;
  private FileName: string;

  private imageSrc: string;

  noticedetailpage = NoticecontractordetailPage;
  noticeBadgeCount: any;
  public notifications: any = [];

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
    private platform: Platform,
    private alertCtrl: AlertController,
    private fileOpener: FileOpener)
    {
      this.loadData();
      this.Id = this.navParams.get('Id');
      this.Title = this.navParams.get('Title')
      this.Content = this.navParams.get('Content')
      this.Start_Date = this.navParams.get('Start_Date')
      this.End_Date = this.navParams.get('End_Date')
      this.Attachment = this.navParams.get('Attachment')
      this.Created_By = this.navParams.get('Created_By')
      this.FileName = this.navParams.get('FileName')
    }

  noticedetail(){
    this.navCtrl.push(NoticecontractordetailPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticePage');
  }

  download(Attachment, FileName) {
    let path = 'null';

    if (this.platform.is('ios')) {
      path = this.file.externalDataDirectory;
    } else if (this.platform.is('android')) {
      path = this.file.externalRootDirectory +'/Download/';
    }

    // const transfer = this.transfer.create();
    const fileTransfer: FileTransferObject = this.transfer.create();

    fileTransfer.download('https://jmclicks.com/' + Attachment, path + FileName, true).then(entry => {
      let url = entry.toURL();

      // entry.file(function(data) {
      //    // get mime type
      //    var mime = data.type;
          // this.document.viewDocument(url, mime, {});
      let ext = Attachment.substr(Attachment.lastIndexOf('.') + 1).toUpperCase();
      let mime = '';
      if(ext == 'PDF') {
       mime = 'application/pdf';
      } else if (ext == 'DOC') {
        mime = 'application/msword';
      } else if (ext == 'DOCX') {
        mime = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
      } else if (ext == 'XLS') {
        mime = 'application/vnd.ms-excel';
      } else if (ext == 'XLSX') {
        mime = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      } else if (ext == 'PPT') {
        mime = 'application/vnd.ms-powerpoint';
      } else if (ext == 'PPTX') {
        mime = ' application/vnd.openxmlformats-officedocument.presentationml.presentation';
      } else {
         mime = 'application/pdf';
      }


        this.fileOpener.open(url, mime)
        .then(() => console.log('File is opened'))
        .catch(e => {
          let alert = this.alertCtrl.create({
          title: 'Low battery',
          subTitle: 'error',
          buttons: ['Dismiss']
        });
        alert.present();
        });

    }, (error) => {
      console.log(error)
      let alert = this.alertCtrl.create({
        title: 'Low battery',
        subTitle: error,
        buttons: ['Dismiss']
      });
        alert.present();
      });
  }

  loadData(){

    let data:Observable<any>;

    // Or to get a key/value pair
    this.storage.get('token').then((val) => {
      data = this.http.get('https://jmclicks.com/api/notifications/getcontractornotice?token=' + val.token );
      data.subscribe(result => {
        this.items = result;
      })
    });

    this.storage.get('token').then((val) => {
      this.http.get<{badge_count: any, notifications: any}>('https://jmclicks.com/api/notifications/getcontractornoticebadge?token=' + val.token).subscribe(result => {
        let that = this
        result.notifications.map(function(value) {
          that.notifications[value.TargetId] = value
        })

        console.log(this.notifications)
      })
    });
  }


}
