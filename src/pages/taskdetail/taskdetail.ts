import { Component } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { NavParams, LoadingController, NavController, AlertController, ActionSheetController } from "ionic-angular";
import { FormGroup, FormControl } from "@angular/forms";
import { Toast } from '@ionic-native/toast';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from "@ionic-native/camera";
import { Base64 } from "@ionic-native/base64";
import { DomSanitizer } from "@angular/platform-browser";
import { ImagePicker, ImagePickerOptions } from "@ionic-native/image-picker";
import { FileEntry,File } from "@ionic-native/file";
import { catchError } from "rxjs/operators";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
}

@Component({
  selector: 'page-taskdetail',
  templateUrl: 'taskdetail.html',
})
export class TaskDetailPage{

  private project: any ;
  private site: any;
  private due: any;
  private status: any;
  private Remarks: any;
  Status_Val: any;
  Completed_Date: any=null;
  signupform: FormGroup;
  formData: FormData;
  Id: any;
  images = [];
  imagesN = [];
  countNum = 0;
  completed: any;
  taskImage: any;
  tempStatus: any;
  ngOnInit() {
    this.signupform = new FormGroup({
      Status_Val: new FormControl('', []),
      Completed_Date:new FormControl('', []),
      Remarks:new FormControl('',[]),
    });

  }
  constructor(
    private http: HttpClient,
    public navParams: NavParams,
    private storage: Storage,
    private loadingCtrl: LoadingController,
    private toast: Toast,
    private camera: Camera,
    private navCtrl: NavController,
    private base64: Base64,
    public domSanitizer: DomSanitizer,
    private imagePicker: ImagePicker,
    private alertCtrl: AlertController,
    private file: File,
    private actCtrl:ActionSheetController,
  ) {
    this.project = this.navParams.get('Project_Name');
    this.site = this.navParams.get('Site_Name');
    this.due = this.navParams.get('Due_Date');
    this.Status_Val = this.navParams.get('Status');
    this.Remarks = this.navParams.get('Remarks');
    this.Id = this.navParams.get('Id');
    this.completed = this.navParams.get('Completed_Date');
    this.tempStatus = this.navParams.get('Status');
    this.loadData();
    if( this.tempStatus == "Close")
      this.loadData();
    this.data();
   }
  data() {
    this.storage.get('token').then((val) => {
      this.http.post('https://jmclicks.com/api/notifications/updateTask?token=' + val.token, {TargetId: this.Id,status:this.tempStatus}).subscribe(result => {
      })
    })

   }
  loadData() {

    this.storage.get('token').then((val) => {
      this.http.get("https://jmclicks.com/api/getTaskImage?token=" + val.token, {
        params: { Id: this.Id }
      })
        .subscribe(result => {
          this.taskImage = result;
        });
    });
  }

  async TakePic() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    await this.camera.getPicture(options).then((imageData) => {
      this.images.push({
        id:this.countNum,
        path: imageData
      })
        this.base64.encodeFile(imageData).then((base64File: string) => {
          this.imagesN.push({
            id: this.countNum,
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
      quality: 70,
      outputType: 0,
    }
    await this.imagePicker.hasReadPermission().then(res => {
      if (res) {
        this.imagePicker.getPictures({}).then((results) => {
          for (var i = 0; i < results.length; i++) {
            this.images.push({
              id:this.countNum,
              path:results[i]})
              this.base64.encodeFile(results[i]).then((base64File: string) => {
                this.imagesN.push({
                  id:this.countNum,
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
                console.log('Image URI: ' + results[i]);
              this.images.push({
                id:this.countNum,
                path:results[i]})
                this.base64.encodeFile(results[i]).then((base64File: string) => {
                  this.imagesN.push({
                    id:this.countNum,
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
   async selectImage() {
    const act = await this.actCtrl.create({
      title: "Select Image Source",
      buttons: [{
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

  async deleteImage(img) {
    let filter = this.imagesN.filter(image => image.id != img);
    this.imagesN = filter;
    filter = this.images.filter(image => image.id != img);
    this.images = filter;
  }
  updateTask() {
    let temp = [];
    for (var i = 0; i < this.images.length; i++) {
      temp.push(this.images[i].path);
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
            this.file.resolveLocalFilesystemUrl(i)
            .then((entry: FileEntry) => {
              entry.file(function(file) {
                var reader = new FileReader();
                reader.onloadend = function(e) {
                  var imgBlob = new Blob([this.result], { type:file.type});
                  self.formData.append('attachment[]', imgBlob, file.name);
                  resolve(i)
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
          this.formData.append('Completed_Date', this.Completed_Date);
          this.formData.append('Status', this.Status_Val);
          this.formData.append('Remarks', this.Remarks);
          this.formData.append('Id', this.Id);
          resolveReady();
        })

      });
      p.then(() => {
        return this.http.post('https://jmclicks.com/api/updatetask?token=' + val.token, this.formData,
          {})
          .pipe(
            catchError(this.handleError)
          )
          .finally(() => {
            loading.dismiss();
          })
        .subscribe(
          (res: any) =>{
            if (res == 1) {
              console.log(JSON.stringify(res))
              this.toast.show(`Task updated`, '5000', 'center').subscribe(
                toast => {
                  console.log(toast);
                  this.navCtrl.pop();
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
}
