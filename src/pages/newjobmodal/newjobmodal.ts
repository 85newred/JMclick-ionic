import { LoadingController, AlertController, ToastController } from "ionic-angular";
import { NavParams } from "ionic-angular/navigation/nav-params";
import { Component } from "@angular/core";
import { ViewController } from "ionic-angular/navigation/view-controller";
import { HttpClient } from "@angular/common/http";
import { Toast } from '@ionic-native/toast';
import { Storage } from '@ionic/storage';
import { Platform } from "ionic-angular/platform/platform";
import { File } from '@ionic-native/file';
import { FileTransfer,  FileTransferObject } from '@ionic-native/file-transfer';
import { FileOpener } from '@ionic-native/file-opener';
import { Subject } from "rxjs";

@Component({
  selector: 'page-newjobmodal',
  templateUrl: 'newjobmodal.html',
})
export class NewJobModalPage{

  id:any;
  pr:any;
  region:any;
  project:any;
  data:any;
  payment_term:any;
  by:any;
  pdfUrl:any;
  constructor(
    private navParam:NavParams,
    private view:ViewController,
    private storage:Storage,
    private loadingCtrl:LoadingController,
    private http:HttpClient,
    private toast:Toast,
    private file:File,
    private platform:Platform,
    private fileOpener:FileOpener,
    private alertCtrl:AlertController,
    private transfer: FileTransfer,
    private toastCtrl:ToastController
  ){
    this.data=this.navParam.get('data');
    this.pr = this.data.pr_no;
    this.project = this.data.Project_Name;
    this.region = this.data.region;
    this.id = this.data.Id;
    this.payment_term =  this.data.Payment_Terms;
    this.by = this.data.createdBy;
  }
  notifications: any;
  loadData() {
    this.storage.get('token').then((val) => {
      this.http.post('https://jmclicks.com/api/notifications/updateNewJob?token=' + val.token, {TargetId: this.id}).subscribe(result => {
      })
    })
  }
  ionViewDidEnter() {
    this.loadData();
  }
  rejectJob(reason) {

    let loading = this.loadingCtrl.create({
      content: "Rejecting job",
      spinner: 'crescent'
    });
    this.storage.get('token').then((val) => {
      loading.present();
      this.http.post('https://jmclicks.com/api/myjob/rejectJob?token=' + val.token, {
        id:this.id,
        reason:reason
      }, {})
        .finally(() => {
          loading.dismiss();
      })
        .subscribe(result => {
        if (result == 1) {
          this.view.dismiss();
          this.toast.show(`Job rejected`, '5000', 'center').subscribe(
            toast => {
            }

          );
        }
      });
    });
  }
  acceptJob() {
    let loading = this.loadingCtrl.create({
      content: "Accepting job",
      spinner: 'crescent'
    });
    this.storage.get('token').then((val) => {
      loading.present();
      this.http.post('https://jmclicks.com/api/myjob/acceptJob?token=' + val.token, {
        id:this.id
      }, {})
        .finally(() => {
          loading.dismiss();
      })
        .subscribe(result => {
        if (result == 1) {
          this.view.dismiss();
          this.toast.show(`Job accepted`, '5000', 'center').subscribe(
            toast => {
            }

          );
        }
      });
    });
  }
  accept(){

    let alert = this.alertCtrl.create({
      title: "Comfirmation",
      message:"Are you sure you want to accept this job?",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: "Accept",
          handler:()=> {
            this.acceptJob();
          }
        }
      ]
    });
    alert.present();
  }
  reject() {
    const prompt = this.alertCtrl.create({
      title: "Reject",
      message: "Enter reason",
      inputs: [
        {
          name: 'reason',
          placeholder:'Enter reason'
        },
      ],
      buttons: [
        {
          text: 'Reject', handler: data => {
            if (data.reason == "") {
              this.error();
              return false;
            }
            else {
              this.rejectJob(data.reason);
              return true;
            }
        }},
        {text: 'Cancel', role: 'cancel'},
      ]
    })
    prompt.present();
  }

  error() {
    let toast = this.toastCtrl.create({
      message: "Please enter reason",
      duration: 2000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  closeModal(){
    this.view.dismiss();
  }


    pdf() {
      let path = 'null';
      if (this.platform.is('ios')) {
        path = this.file.externalDataDirectory;
      } else if (this.platform.is('android')) {
        path = this.file.externalRootDirectory +'/Download/';
      }


      this.storage.get('token').then((val)=>{
        const fileTransfer: FileTransferObject = this.transfer.create();
        fileTransfer.download('https://jmclicks.com/api/myjob/pdf?token='+ val.token +'&id=' + this.id , path + 'pdf', true).then(entry => {
        let url = entry.toURL();
        let mime = '';
        mime = 'application/pdf';
        this.fileOpener.open(url, mime)
        .then(() => console.log('File is opened'))
        .catch(e => {
          let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'error',
          buttons: ['Dismiss']
        });
        alert.present();
        });

      }, (error) => {
        console.log(error)
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: error,
          buttons: ['Dismiss']
        });
          alert.present();
        });
      })
  }
}
