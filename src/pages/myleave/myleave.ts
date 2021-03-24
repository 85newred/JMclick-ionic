import { catchError } from 'rxjs/operators';
import { Component } from '@angular/core';
import { ModalController, NavController, NavParams, normalizeURL } from 'ionic-angular';
import { ElementRef, ViewChild} from '@angular/core';
import { App, LoadingController } from 'ionic-angular';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { Toast } from '@ionic-native/toast';
import { DomSanitizer } from '@angular/platform-browser';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AlertController } from 'ionic-angular';
import { Base64 } from '@ionic-native/base64';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { File, FileEntry, IFile } from '@ionic-native/file';
import { LeaveModalPage } from '../leave-modal/leave-modal';

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
}

import { FormControl, FormGroup, Validators} from '@angular/forms';

/**
 * Generated class for the MyleavePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-myleave',
  templateUrl: 'myleave.html',
})

export class MyleavePage {

  items: any;
  Leave_Type: any='';
  Leave_Term: any='';
  Start_Date: any='';
  End_Date: any='';
  Reason: any='';
  Department: any='';
  Approver: any='';
  image: string;
  myphoto: string;
  reason: string;
  apps: any;
  approverOptions: any;
  departs: any;
  types:any;
  terms: any;
  formData: FormData;
  imageURI:any;
  images = [];
  imagesN = [];
  totalDays = 0;
  leaveDaysList = [];
  Leave_Period = [];
  private token: string = '';
  public signupform: FormGroup;


  @ViewChild('myInput') myInput: ElementRef;
  resize() {
      var element = this.myInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
      var scrollHeight = element.scrollHeight;
      element.style.height = scrollHeight + 'px';
      this.myInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
  }


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
    private base64: Base64,
    private imagePicker: ImagePicker,
    private file: File,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController) {
  }

  ngOnInit() {
    this.signupform = new FormGroup({
      Leave_Type: new FormControl('', [Validators.required]),
      // Leave_Term:new FormControl('', [Validators.required]),
      Department:  new FormControl('',[Validators.required]),
      Approver:  new FormControl('',[]),
      Start_Date: new FormControl('',[Validators.required]),
      End_Date:  new FormControl('',[Validators.required]),
      Reason:  new FormControl('',[Validators.required])
    });
  }

  ionViewWillEnter() {
    this.loadData();
    }

    getLeaveDays() {
      return this.totalDays > 1 ? this.totalDays + " days" : this.totalDays + " day";
    }

  onTakePicture() {
  const options: CameraOptions = {
    quality: 70,
    destinationType: this.camera.DestinationType.FILE_URI,
    // saveToPhotoAlbum: true,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  this.camera.getPicture(options).then((imageData) => {
    // this.image = 'data:image/jpeg;base64,' + imageData;
      this.images.push(imageData)
      console.log(imageData)
      this.base64.encodeFile(imageData).then((base64File: string) => {
        this.imagesN.push(this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + base64File.substring(base64File.indexOf(',')+1)))
      }, (err) => {
        console.log(err);
      });
    }, (err) => {
    this.displayErrorAlert(err);
    });
  }

  clearImage() {
    this.images.length = 0
    this.imagesN.length = 0
  }

  getImage() {

    const options: ImagePickerOptions = {
      quality: 70,
      outputType: 0,
    }
    this.imagePicker.hasReadPermission().then(res => {
      if (res) {
        this.imagePicker.getPictures({}).then((results) => {
          for (var i = 0; i < results.length; i++) {
              console.log('Image URI: ' + results[i]);
              this.images.push(results[i])
              this.base64.encodeFile(results[i]).then((base64File: string) => {
                this.imagesN.push(this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + base64File.substring(base64File.indexOf(',')+1)))
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
                this.images.push(results[i])
                this.base64.encodeFile(results[i]).then((base64File: string) => {
                  this.imagesN.push(this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + base64File.substring(base64File.indexOf(',')+1)))
                }, (err) => {
                  console.log(err);
                });
            }
          }, (err) => { });
        })
      }
    })

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

  myFunction(date) {
    var d = new Date(date);
    var monthNames = [
       "Jan", "Feb", "Mar",
       "Apr", "May", "Jun", "Jul",
       "Aug", "Sep", "Oct",
       "Nov", "Dec"
     ];

     var day = ('0'+ d.getDate()).slice(-2);
     var monthIndex = d.getMonth();
     var year = d.getFullYear();

     return day + '-' + monthNames[monthIndex] + '-' + year;
  }

  fetchCalculatedLeaveDays(value) {
    if (this.End_Date != "" && this.Start_Date != "" && this.Leave_Type != "") {
      this.storage.get('token').then((val) => {
        this.Leave_Period.length = 0 //reset array
        // console.log('http://localhost:8300/api/fetchCalculatedLeaveDays?token=' + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjU2MiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MzAwL2FwaS9sb2dpbiIsImlhdCI6MTUzNjA0Mzg2MSwiZXhwIjoxNjMwNjUxODYxLCJuYmYiOjE1MzYwNDM4NjEsImp0aSI6Ikx3ck9jdUEwMkFwcE9xcnoifQ.PAs9HLy5TALxkFVAegiaCNz_NbXaX6_eRX_zmfl9IvE" + "&Start_Date=" + this.myFunction(this.Start_Date) + "&End_Date=" + this.myFunction(this.End_Date) + "&Leave_Type=" + this.Leave_Type);
        this.http.get('https://jmclicks.com/api/fetchCalculatedLeaveDays?token=' + val.token + "&Start_Date=" + this.myFunction(this.Start_Date) + "&End_Date=" + this.myFunction(this.End_Date) + "&Leave_Type=" + this.Leave_Type)
        .subscribe((result : any) => {
          var days = 0;
          this.leaveDaysList = result.list;
          this.totalDays = result.calculated_days;
          if (this.Leave_Type == 'Maternity Leave' || this.Leave_Type == 'Hospitalization Leave') {
            this.leaveDaysList.forEach((l, index) => {
              this.Leave_Period[index] = "Full Day";
            });
          } else {
             if (this.Leave_Type != '1 Hour Time Off' && this.Leave_Type != '2 Hours Time Off') {
                this.leaveDaysList.forEach((l, index) => {
                    if (l.Day_Type == 0 || l.Day_Type == 2 || l.Day_Type == -1) {
                      this.Leave_Period[index] = l.Period;
                    } else {
                      this.Leave_Period[index] = "Full Day";
                    }
                });
             } else {
               this.leaveDaysList.forEach((l, index) => {
                 if (l.Day_Type == 0 || l.Day_Type == 2 || l.Day_Type == -1) {
                 } else {
                   if (this.Leave_Type == '1 Hour Time Off') {
                      days += 0.125;
                      this.Leave_Period[index] = l.Period;
                   } else if (this.Leave_Type == '2 Hours Time Off') {
                      days += 0.25;
                      this.Leave_Period[index] = this.Leave_Type == '1 Hour Time Off' ? '1 Hour' : '2 Hours';
                   }
                 }
               });
               this.totalDays = days;
             }
          }

          console.log(JSON.stringify(result));

        })
      });
    }
  }

  presentLeaveModal() {
    let profileModal = this.modalCtrl.create(LeaveModalPage, {leavelist: this.leaveDaysList, leavetype: this.Leave_Type, Leave_Period: this.Leave_Period});
    profileModal.onDidDismiss(data => {
      this.Leave_Period = data
      var days = 0;
      data.forEach((item, index) => {
        if (item == "Full Day") {
          days += 1;
        } else if (item == 'Half Day Morning [9AM-1PM]' || item == 'Half Day Afternoon [1PM-6PM]') {
          days += 0.5;
        } else if (item == '1 Hour') {
          days += 0.125;
        } else if (item == '2 Hours') {
          days += 0.25;
        }
      });

      this.totalDays = days;
      console.log(data);
    });
    profileModal.present();
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
    this.Approver = arrApps[0].Id;
  }

  loadData(){

    let data:Observable<any>;

    // Leave_Type
    this.storage.get('token').then((val) => {
        data = this.http.get('https://jmclicks.com/api/getleaveoption?token=' + val.token);
        data.subscribe(result => {
          console.log(result);
          let types = new Array();
          for (let res of result) {
            if(res.Field == 'Leave_Type') {
              types.push(res);
            }
          }
          this.types = types;
        })
    });

    // Leave_Term
    this.storage.get('token').then((val) => {
        data = this.http.get('https://jmclicks.com/api/getleaveoption?token=' + val.token);
        data.subscribe(result => {
          console.log(result);
          let terms = new Array();
          for (let res of result) {
            if(res.Field == 'Leave_Term') {
              terms.push(res);
            }
          }
          this.terms = terms;
        })
    });

    // Department
    this.storage.get('token').then((val) => {
        data = this.http.get('https://jmclicks.com/api/getprojects?token=' + val.token);
      data.subscribe(result => {
        console.log(result);
        let departs = new Array();
        for (let r of result) {
          if (r.Customer.includes('Department')) {
            departs.push(r);
          }
        }
          this.departs = departs;
        })
    });

    // Approver
    this.storage.get('token').then((val) => {
        data = this.http.get('https://jmclicks.com/api/getapprover2?token=' + val.token);
        data.subscribe(result => {
          console.log(result);
          // let apps = new Array();
          // for (let res of result) {
          //   if(res.Project_Name == res.Name == res.Id) {
          //     apps.push(res);
          //   }
          // }
          this.apps = result;
        })
    });

  }

  test(){
    console.log('testleaveterm',this.Leave_Period[0])
  }

  submitClaim() {

    let loading = this.loadingCtrl.create({
      content: "Submitting leave application",
      spinner: 'crescent'
    });

    this.storage.get('token').then((val) => {
      loading.present();
      let p = new Promise((resolveReady) => {
        var defs = [];
        this.formData = new FormData();
        this.images.forEach((i) => {
          console.log('processing '+i);
          var self = this;
          var def = new Promise((resolve) => {
            this.file.resolveLocalFilesystemUrl(i)
            .then((entry: FileEntry) => {
              entry.file(function(file) {
                console.log('now i have a file ob', file.name);
                console.dir(JSON.stringify(file));
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
          console.log(this.Leave_Term);
          this.formData.append('Leave_Type', this.Leave_Type);
          console.log('leaveterm',JSON.stringify(this.Leave_Period))
          this.Leave_Period.forEach((item, index) => {
            this.formData.append('Leave_Period['+ index+']', item);
          });
          this.formData.append('Leave_Term', this.Leave_Period[0]);
          this.formData.append('Start_Date', this.myFunction(this.Start_Date));
          this.formData.append('End_Date', this.myFunction(this.End_Date));
          this.formData.append('Reason', this.Reason);
          this.formData.append('Project', this.Department);
          this.formData.append('Cover_By', '');
          this.formData.append('Approver', this.Approver);
          console.log(JSON.stringify(res))
          console.log('all preparation done')
          // this.upload()
          resolveReady();
        })

      });
      p.then(() => {
        return this.http.post('https://jmclicks.com/api/newleavewithperiod?token=' + val.token, this.formData,
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
              this.navCtrl.pop();
              console.log(JSON.stringify(res))
              this.toast.show(`Leave application submitted`, '5000', 'center').subscribe(
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

      // ************** old ************
      // return this.http.post('https://jmclicks.com/api/newleave?token=' + val.token, {
      //   Leave_Type: this.Leave_Type,
      //   Leave_Term: this.Leave_Term,
      //   Start_Date: this.myFunction(this.Start_Date),
      //   End_Date: this.myFunction(this.End_Date),
      //   Reason: this.Reason,
      //   ProjectId: this.Department,
      //   Cover_By: '',
      //   Approver: this.Approver},
      //   httpOptions)
      // .subscribe(
      //   (res: any) =>{
      //     this.navCtrl.pop();
      //   console.log(res)
      //   this.toast.show(`New Leave created`, '5000', 'center').subscribe(
      //     toast => {
      //       console.log(toast);
      //     }
      //   );
      // })
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
