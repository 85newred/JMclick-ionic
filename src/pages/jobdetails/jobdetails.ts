import { Component } from "@angular/core";
import { NavParams } from "ionic-angular/navigation/nav-params";
import { ActionSheetController, AlertController, LoadingController } from "ionic-angular";
import { CameraOptions, Camera } from "@ionic-native/camera";
import { Base64 } from "@ionic-native/base64";
import { DomSanitizer } from "@angular/platform-browser";
import { ImagePickerOptions, ImagePicker } from "@ionic-native/image-picker";
import { FormGroup, FormControl } from "@angular/forms";
import { FilePath } from '@ionic-native/file-path';
import { FileChooser } from "@ionic-native/file-chooser";
import { FileEntry,File } from "@ionic-native/file";
import { Storage } from '@ionic/storage';
import { catchError } from "rxjs/operators";
import { HttpErrorResponse, HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { NavController } from "ionic-angular/navigation/nav-controller";
import { Toast } from '@ionic-native/toast';

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
}

@Component({
  selector: 'page-jobdetails',
  templateUrl: 'jobdetails.html',
})

export class JobDetailsPage{

  pr:any;
  project:any;
  region:any;
  payment_term:any;
  id:any;
  countNum = 0;
  taskFile = [];
  taskFileView = [];
  signupform: FormGroup;
  formData: FormData;
  status: any;
  invoice: any;
  oriStatus: any;
  requestorName:any
  jobId: any;
  sitecode: any=''
  constructor(
    private navParam:NavParams,
    private actCtrl:ActionSheetController,
    private camera:Camera,
    private base64:Base64,
    private domSanitizer:DomSanitizer,
    private alertCtrl: AlertController,
    private imagePicker:ImagePicker,
    private fileChooser:FileChooser,
    private filePath: FilePath,
    private file: File,
    private storage: Storage,
    private loadingCtrl:LoadingController,
    private http: HttpClient,
    private navCtrl: NavController,
    private toast:Toast

  ){
    this.pr = this.navParam.get('pr_no');
    this.project = this.navParam.get('Project_Name');
    this.region= this.navParam.get('region');
    this.payment_term = this.navParam.get('payment_terms');
    this.id = this.navParam.get('Id');
    this.status = this.navParam.get('status');
    this.oriStatus = this.navParam.get('status');
    this.jobId = this.navParam.get('jobId');
    this.sitecode = this.navParam.get('Site_ID')
    this.requestorName = this.navParam.get('requestorName')

    console.log('jobdetailspage')
    console.log('oristatus',this.oriStatus)

  }

  invoicePath = [];
  loadData() {
    this.storage.get('token').then((val) => {
      this.http.post('https://jmclicks.com/api/notifications/updateJob?token=' + val.token, {TargetId: this.id,status:this.oriStatus}).subscribe(result => {
      })
    })
  }
  ionViewDidEnter() {
    this.loadData();
  }
  readfile() {

    this.fileChooser.open()
      .then((uri) => {
       this. invoicePath = [];
        this.invoice = uri;
        this.filePath.resolveNativePath(uri).then(file => {
          let filePath: string = file;
          if (filePath) {
            this.base64.encodeFile(filePath).then((base64File: string) => {
              let name = this.invoice.substr(this.invoice.lastIndexOf('/') + 1);
              this.invoicePath.push({
                path: this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + base64File.substring(base64File.indexOf(',') + 1)),
                name:name,
                ext: name.substr(name.lastIndexOf('.') + 1)
              });
            }), (err) => {
              console.log(err);
            }
          }
        })
      })
    .catch((e) => {console.log(e)});
  }
  ngOnInit() {
    this.signupform = new FormGroup({
      status: new FormControl('', []),
    });

  }

  async selectImage() {
    const act = await this.actCtrl.create({
      title: "Select Image Source",
      buttons: [{
        text:"Select file",
        handler: () => {
          this.readfile();
        }
      },{
        text: "Use Camera",
        handler: () => {
          this.TakePic();
        }
      }, {
        text: "Load from gallery",
        handler: () => {
          this.getImage();
        }
        }, {
          text: "Cancel",
          role:"cancel"
        }
      ]
    });
    await act.present();
  }

  async deleteInvoice() {
    this.invoice = null;
    this.invoicePath = [];
  }
  async deleteTask(id) {
    let filter = this.taskFile.filter(tsk => tsk.id != id);
    this.taskFile= filter;
    filter = this.taskFileView.filter(tsk => tsk.id != id);
    this.taskFileView = filter;
  }

  async TakePic() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    await this.camera.getPicture(options).then((imageData) => {
      // this.images.push({
      //   id:this.countNum,
      //   path: imageData
      // })
      this.invoicePath = [];
      this.invoice=imageData;
        this.base64.encodeFile(imageData).then((base64File: string) => {
          this.invoicePath.push({
            ext:'jpg',
            path: this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + base64File.substring(base64File.indexOf(',') + 1))
          });
          // this.countNum++;
      }, (err) => {
          console.log(err);
        });
      }, (err) => {
      this.displayErrorAlert(err);
    });
  }

  displayErrorAlert(err){
    console.log(err);
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Error while trying to capture picture',
      buttons: ['OK']
    });
     alert.present();
  }

  async getImage() {
    const options: ImagePickerOptions = {
      // quality: 70,
      // outputType: 0,
      maximumImagesCount:1
    }
    await this.imagePicker.hasReadPermission().then(res => {
      if (res) {
        this.imagePicker.getPictures(options).then((results) => {
          this.invoicePath = [];

          for (var i = 0; i < results.length; i++) {
            // this.images.push({
            //   id:this.countNum,
            //   path:results[i]})
            this.invoice = results[i];
              this.base64.encodeFile(results[i]).then((base64File: string) => {
                this.invoicePath.push({
                  ext:'img',
                  path:this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + base64File.substring(base64File.indexOf(',') + 1))
                })
              }, (err) => {
                console.log(err);
              });
          }
        }, (err) => { });
      } else {
        this.imagePicker.requestReadPermission().then(res => {
          this.imagePicker.getPictures(options).then((results) => {
            this.invoicePath = [];

            for (var i = 0; i < results.length; i++) {
              // this.images.push({
              //   id:this.countNum,
              //   path:results[i]})
              this.invoice = results[i];
                this.base64.encodeFile(results[i]).then((base64File: string) => {
                  this.invoicePath.push({
                    ext:'img',
                    path:this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + base64File.substring(base64File.indexOf(',') + 1))
                  })
                  this.countNum++;
                }, (err) => {
                  console.log(err);
                });
            }
          }, (err) => { });
        })
      }
    })

  }


  async updateStatus() {
    let temp = [];
    console.log(this.jobId);
    for (var i = 0; i < this.taskFile.length; i++) {
      await temp.push({
        name:'task',
        path: this.taskFile[i].path
      });
    }
    if (this.invoice != "" && this.invoice != null && this.invoice.length != 0) {
      await temp.push({
        name:"invoice",
        path: this.invoice
      });
    }

    let loading = this.loadingCtrl.create({
      content: "Updating task",
      spinner: 'crescent'
    });

    this.storage.get('token').then((val) => {
      loading.present();

      let p = new Promise((resolveReady) => {
        var defs = [];
        this.formData = new FormData();
        temp.forEach((i) => {
          var self = this;
          var def = new Promise((resolve) => {
            this.file.resolveLocalFilesystemUrl(i.path)
            .then((entry: FileEntry) => {
              entry.file(function(file) {
                var reader = new FileReader();
                reader.onloadend = function(e) {
                  var imgBlob = new Blob([this.result], { type: file.type });
                  if(i.name == "invoice")
                    self.formData.append('invoice', imgBlob, file.name);
                  else
                    self.formData.append('attachment[]', imgBlob, file.name);
                  resolve(i.path)
                };
                reader.readAsArrayBuffer(file);
              }, function(e) {
                console.log('error getting file', e);
              });
            }, (err) => {
              console.log("Put error message here", JSON.stringify(err));
            })
          });
          defs.push(def)
        });

        Promise.all(defs).then((res) => {
          this.formData.append('Status', this.status);
          this.formData.append('Id', this.id);
          this.formData.append('oriStatus', this.oriStatus);
          // this.formData.append('jobId', this.jobId);
          resolveReady();
        })

      });
      p.then(() => {
        return this.http.post('https://jmclicks.com/api/myjob/updateStatus?token=' + val.token, this.formData,
          {})
          .pipe(
            catchError(this.handleError)
          )
          .finally(() => {
            loading.dismiss();
          })
        .subscribe(
          (res: any) => {
            console.log(res);
            if (res == 1) {
              console.log(JSON.stringify(res))
              this.navCtrl.pop();
              this.toast.show(`Job updated`, '5000', 'center').subscribe(
                toast => {
                  console.log(toast);
                }
              );

            }else if (res == 2) {
              console.log(JSON.stringify(res))
              this.navCtrl.pop();
              this.toast.show(`Job updated`, '5000', 'center').subscribe(
                toast => {
                  console.log(toast);
                }
              );

            } else {
                var obj = res;
                console.log(obj);
                var errormessage ="";

                for (var item in obj) {
                  errormessage = obj[item];
                  console.log(errormessage);

                }
                this.toast.show(errormessage[0], '5000', 'center').subscribe(
                  toast => {
                    console.log(toast);
                  }
                );
            }
        })
      });
    });
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
        return Observable.throw('An error occurred:' + error.error.message);
    } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(
            `Backend returned code ${JSON.stringify(error)}, ` +
            `body was: ${JSON.stringify(error)}`);
        if (error.status == 422) {
            return Observable.throw('Invalid username or password');
        }
        return Observable.throw('An error occured. Try again later');
    }
  };

  async getTaskImage() {
    const options: ImagePickerOptions = {
      quality: 70,
      outputType: 0,
      maximumImagesCount:1
    }
    await this.imagePicker.hasReadPermission().then(res => {
      if (res) {
        this.imagePicker.getPictures({}).then((results) => {

          for (var i = 0; i < results.length; i++) {
            this.taskFile.push({
              id:this.countNum,
              path:results[i]})
              this.base64.encodeFile(results[i]).then((base64File: string) => {
                this.taskFileView.push({
                  id:this.countNum,
                  ext:'img',
                  path:this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + base64File.substring(base64File.indexOf(',') + 1))
                })
                this.countNum++;
              }, (err) => {
                console.log(err);
              });
          }
        }, (err) => { });
      } else {
        this.imagePicker.requestReadPermission().then(res => {
          this.imagePicker.getPictures({}).then((results) => {
            for (var i = 0; i < results.length; i++) {
              this.taskFile.push({
                id:this.countNum,
                path:results[i]})
                this.base64.encodeFile(results[i]).then((base64File: string) => {
                  this.taskFileView.push({
                    id:this.countNum,
                    ext:'img',
                    path:this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + base64File.substring(base64File.indexOf(',') + 1))
                  })
                  this.countNum++;
                }, (err) => {
                  console.log(err);
                });
            }
          }, (err) => { });
        })
      }
    })

  }

  async TakeTaskPic() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    await this.camera.getPicture(options).then((imageData) => {
      this.taskFile.push({
        id:this.countNum,
        path: imageData
      })
        this.base64.encodeFile(imageData).then((base64File: string) => {
          this.taskFileView.push({
            id:this.countNum,
            ext:'jpg',
            path: this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + base64File.substring(base64File.indexOf(',') + 1))
          });
          this.countNum++;
      }, (err) => {
          console.log(err);
        });
      }, (err) => {
      this.displayErrorAlert(err);
    });
  }

  async selectTask() {
    const act = await this.actCtrl.create({
      title: "Select",
      buttons: [{
        text:"Select file",
        handler: () => {
          this.readTaskfile();
        }
      },{
        text: "Use Camera",
        handler: () => {
          this.TakeTaskPic();
        }
      }, {
        text: "Load from gallery",
        handler: () => {
          this.getTaskImage();
        }
        }, {
          text: "Cancel",
          role:"cancel"
        }
      ]
    });
    await act.present();
  }

  readTaskfile() {
    this.fileChooser.open()
      .then((uri) => {
        let temp = uri;
        this.taskFile.push({
          id: this.countNum,
          path: uri,
        });

        this.filePath.resolveNativePath(uri).then(file => {
          let filePath: string = file;
          if (filePath) {
            this.base64.encodeFile(filePath).then((base64File: string) => {
              let name = temp.substr(temp.lastIndexOf('/') + 1);
              this.taskFileView.push({
                id:this.countNum,
                path: this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + base64File.substring(base64File.indexOf(',') + 1)),
                name:name,
                ext: name.substr(name.lastIndexOf('.') + 1)
              });
              this.countNum ++;
            }), (err) => {
              console.log(err);
            }
          }
        })
      })
    .catch((e) => {console.log(e)});
  }

}
