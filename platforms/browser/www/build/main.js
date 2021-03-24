webpackJsonp([0],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_base64__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_image_picker__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_operators__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};













var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
var TaskDetailPage = /** @class */ (function () {
    function TaskDetailPage(http, navParams, storage, loadingCtrl, toast, camera, navCtrl, base64, domSanitizer, imagePicker, alertCtrl, file, actCtrl) {
        this.http = http;
        this.navParams = navParams;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.toast = toast;
        this.camera = camera;
        this.navCtrl = navCtrl;
        this.base64 = base64;
        this.domSanitizer = domSanitizer;
        this.imagePicker = imagePicker;
        this.alertCtrl = alertCtrl;
        this.file = file;
        this.actCtrl = actCtrl;
        this.Completed_Date = null;
        this.images = [];
        this.imagesN = [];
        this.countNum = 0;
        this.project = this.navParams.get('Project_Name');
        this.site = this.navParams.get('Site_Name');
        this.due = this.navParams.get('Due_Date');
        this.Status_Val = this.navParams.get('Status');
        this.Remarks = this.navParams.get('Remarks');
        this.Id = this.navParams.get('Id');
        this.completed = this.navParams.get('Completed_Date');
        this.tempStatus = this.navParams.get('Status');
        if (this.tempStatus == "Close")
            this.loadData();
        this.data();
    }
    TaskDetailPage.prototype.ngOnInit = function () {
        this.signupform = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormGroup */]({
            Status_Val: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', []),
            Completed_Date: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', []),
            Remarks: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', []),
        });
    };
    TaskDetailPage.prototype.data = function () {
        var _this = this;
        this.storage.get('token').then(function (val) {
            _this.http.post('https://jmclicks.com/api/notifications/updateTask?token=' + val.token, { TargetId: _this.Id, status: _this.tempStatus }).subscribe(function (result) {
            });
        });
    };
    TaskDetailPage.prototype.loadData = function () {
        var _this = this;
        this.storage.get('token').then(function (val) {
            _this.http.get("https://jmclicks.com/api/getTaskImage?token=" + val.token, {
                params: { Id: _this.Id }
            })
                .subscribe(function (result) {
                _this.taskImage = result;
            });
        });
    };
    TaskDetailPage.prototype.TakePic = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            quality: 70,
                            destinationType: this.camera.DestinationType.FILE_URI,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE
                        };
                        return [4 /*yield*/, this.camera.getPicture(options).then(function (imageData) {
                                _this.images.push({
                                    id: _this.countNum,
                                    path: imageData
                                });
                                _this.base64.encodeFile(imageData).then(function (base64File) {
                                    _this.imagesN.push({
                                        id: _this.countNum,
                                        path: _this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + base64File.substring(base64File.indexOf(',') + 1))
                                    });
                                    _this.countNum++;
                                }, function (err) {
                                    console.log(err);
                                });
                            }, function (err) {
                                _this.displayErrorAlert(err);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskDetailPage.prototype.displayErrorAlert = function (err) {
        console.log(err);
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Error while trying to capture picture',
            buttons: ['OK']
        });
        alert.present();
    };
    TaskDetailPage.prototype.getImage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            quality: 70,
                            outputType: 0,
                        };
                        return [4 /*yield*/, this.imagePicker.hasReadPermission().then(function (res) {
                                if (res) {
                                    _this.imagePicker.getPictures({}).then(function (results) {
                                        for (var i = 0; i < results.length; i++) {
                                            _this.images.push({
                                                id: _this.countNum,
                                                path: results[i]
                                            });
                                            _this.base64.encodeFile(results[i]).then(function (base64File) {
                                                _this.imagesN.push({
                                                    id: _this.countNum,
                                                    path: _this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + base64File.substring(base64File.indexOf(',') + 1))
                                                });
                                                _this.countNum++;
                                            }, function (err) {
                                                console.log(err);
                                            });
                                        }
                                    }, function (err) { });
                                }
                                else {
                                    _this.imagePicker.requestReadPermission().then(function (res) {
                                        _this.imagePicker.getPictures({}).then(function (results) {
                                            for (var i = 0; i < results.length; i++) {
                                                console.log('Image URI: ' + results[i]);
                                                _this.images.push({
                                                    id: _this.countNum,
                                                    path: results[i]
                                                });
                                                _this.base64.encodeFile(results[i]).then(function (base64File) {
                                                    _this.imagesN.push({
                                                        id: _this.countNum,
                                                        path: _this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + base64File.substring(base64File.indexOf(',') + 1))
                                                    });
                                                    _this.countNum++;
                                                }, function (err) {
                                                    console.log(err);
                                                });
                                            }
                                        }, function (err) { });
                                    });
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskDetailPage.prototype.selectImage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var act;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actCtrl.create({
                            title: "Select Image Source",
                            buttons: [{
                                    text: "Use Camera",
                                    handler: function () {
                                        _this.TakePic();
                                    }
                                }, {
                                    text: "Load from gallery",
                                    handler: function () {
                                        _this.getImage();
                                    }
                                }, {
                                    text: "Cancel",
                                    role: "cancel"
                                }
                            ]
                        })];
                    case 1:
                        act = _a.sent();
                        return [4 /*yield*/, act.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskDetailPage.prototype.deleteImage = function (img) {
        return __awaiter(this, void 0, void 0, function () {
            var filter;
            return __generator(this, function (_a) {
                filter = this.imagesN.filter(function (image) { return image.id != img; });
                this.imagesN = filter;
                filter = this.images.filter(function (image) { return image.id != img; });
                this.images = filter;
                return [2 /*return*/];
            });
        });
    };
    TaskDetailPage.prototype.updateTask = function () {
        var _this = this;
        var temp = [];
        for (var i = 0; i < this.images.length; i++) {
            temp.push(this.images[i].path);
        }
        var loading = this.loadingCtrl.create({
            content: "Updating task",
            spinner: 'crescent'
        });
        this.storage.get('token').then(function (val) {
            loading.present();
            var p = new Promise(function (resolveReady) {
                var defs = [];
                _this.formData = new FormData();
                temp.forEach(function (i) {
                    var self = _this;
                    var def = new Promise(function (resolve) {
                        _this.file.resolveLocalFilesystemUrl(i)
                            .then(function (entry) {
                            entry.file(function (file) {
                                var reader = new FileReader();
                                reader.onloadend = function (e) {
                                    var imgBlob = new Blob([this.result], { type: file.type });
                                    self.formData.append('attachment[]', imgBlob, file.name);
                                    resolve(i);
                                };
                                reader.readAsArrayBuffer(file);
                            }, function (e) {
                                console.log('error getting file', e);
                            });
                        }, function (err) {
                            console.log("Put error message here", JSON.stringify(err));
                        });
                    });
                    defs.push(def);
                });
                Promise.all(defs).then(function (res) {
                    _this.formData.append('Completed_Date', _this.Completed_Date);
                    _this.formData.append('Status', _this.Status_Val);
                    _this.formData.append('Remarks', _this.Remarks);
                    _this.formData.append('Id', _this.Id);
                    resolveReady();
                });
            });
            p.then(function () {
                return _this.http.post('https://jmclicks.com/api/updatetask?token=' + val.token, _this.formData, {})
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_11_rxjs_operators__["catchError"])(_this.handleError))
                    .finally(function () {
                    loading.dismiss();
                })
                    .subscribe(function (res) {
                    if (res == 1) {
                        console.log(JSON.stringify(res));
                        _this.toast.show("Task updated", '5000', 'center').subscribe(function (toast) {
                            console.log(toast);
                            _this.navCtrl.pop();
                        });
                    }
                    else {
                        var obj = res;
                        console.log(obj);
                        var errormessage = "";
                        for (var item in obj) {
                            errormessage = obj[item];
                            console.log(errormessage);
                        }
                        _this.toast.show(errormessage[0], '5000', 'center').subscribe(function (toast) {
                            console.log(toast);
                        });
                    }
                });
            });
        });
    };
    TaskDetailPage.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
            return __WEBPACK_IMPORTED_MODULE_12_rxjs__["Observable"].throw('An error occurred:' + error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + JSON.stringify(error) + ", " +
                ("body was: " + JSON.stringify(error)));
            if (error.status == 422) {
                return __WEBPACK_IMPORTED_MODULE_12_rxjs__["Observable"].throw('Invalid username or password');
            }
            return __WEBPACK_IMPORTED_MODULE_12_rxjs__["Observable"].throw('An error occured. Try again later');
        }
    };
    ;
    TaskDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-taskdetail',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/taskdetail/taskdetail.html"*/'\n\n<ion-header>\n\n\n\n    <ion-navbar color="secondary">\n\n      <ion-title >{{tempStatus == "Open" ? "Update Task":"View Task"}}</ion-title>\n\n    </ion-navbar>\n\n\n\n  </ion-header>\n\n\n\n\n\n  <ion-content padding *ngIf="tempStatus == \'Open\'">\n\n\n\n    <h1 text-center>{{Start_Date}}</h1>\n\n    <ion-item>\n\n      <ion-label stacked color="primary">Project Name</ion-label>\n\n      <ion-input    value="{{project}}" disabled="true" ></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked color="primary">Site Name</ion-label>\n\n      <ion-input  value="{{site}}" disabled="true" ></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label stacked color="primary">Due Date</ion-label>\n\n      <ion-input  value="{{due}}" disabled="true" ></ion-input>\n\n    </ion-item>\n\n\n\n    <form novalidate (ngSubmit)="updateTask()" [formGroup]="signupform">\n\n\n\n          <ion-item>\n\n            <ion-label stacked color="primary">Status</ion-label>\n\n            <ion-select  [(ngModel)]="Status_Val" formControlName="Status_Val">\n\n              <ion-option value="Open">Open</ion-option>\n\n              <ion-option value="Close">Close</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n\n\n\n\n        <ion-item>\n\n          <ion-label stacked color="primary">Completed Date</ion-label>\n\n          <ion-datetime\n\n            pickerFormat="DD MMM YYYY" [(ngModel)]="Completed_Date"\n\n            displayFormat="DD MM YYYY" placeholder="Choose Completed date" max="2200" formControlName="Completed_Date" [class.error1]="!signupform.controls.Completed_Date.valid && signupform.controls.Completed_Date.dirty">\n\n            </ion-datetime>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n        <ion-label stacked color="primary">Remarks</ion-label>\n\n          <ion-textarea [(ngModel)]="Remarks" formControlName="Remarks" value="{{Remarks}}"></ion-textarea>\n\n        </ion-item>\n\n        <ion-item *ngIf="imagesN.length > 0">\n\n          <ion-label stacked color="primary">Image</ion-label>\n\n        </ion-item>\n\n\n\n        <ion-item *ngFor="let img of imagesN;">\n\n          <ion-thumbnail slot="start">\n\n              <img [src]="img.path" width="30px" height="30px">\n\n          </ion-thumbnail>\n\n          <ion-icon slot="icon-only"  name="trash" (click)="deleteImage(img.id)"></ion-icon>\n\n        </ion-item>\n\n\n\n\n\n        <button ion-button icon-right type="button" full (click)="selectImage()">\n\n        <ion-icon name="camera"></ion-icon>Picture</button>\n\n        <button ion-button block color="primary" type="submit" [disabled]="signupform.invalid">Update</button>\n\n      </form>\n\n\n\n\n\n  </ion-content>\n\n  <ion-content *ngIf="tempStatus == \'Close\'">\n\n    <ion-item>\n\n      <p style="color:blueviolet" ALIGN=RIGHT ><b></b></p>\n\n      <h3>Project Name : {{project}}</h3>\n\n      <p>Site Name: {{site}}</p>\n\n      <p>Due Date: {{due}}</p>\n\n      <p>Completed Date: {{completed}}</p>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-slides class="image-slider" >\n\n        <ion-slide *ngFor="let img of taskImage">\n\n          <img [src]="\'https://jmclicks.com\' + img.Web_Path" imageviewer width="100" height="200">\n\n        </ion-slide>\n\n      </ion-slides>\n\n    </ion-item>\n\n  </ion-content>\n\n'/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/taskdetail/taskdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_base64__["a" /* Base64 */],
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */]])
    ], TaskDetailPage);
    return TaskDetailPage;
}());

//# sourceMappingURL=taskdetail.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_app_preferences__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_badge__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_app_version__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__leave_leave__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__attendance_attendance__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__timesheet_timesheet__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__holiday_holiday__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__advance_advance__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__noticeall_noticeall__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__task_task__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__myjob_myjob__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__schedules_schedules__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__asset_asset__ = __webpack_require__(566);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};











/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, storage, app, toast, loadingCtrl, http, appPreferences, badge, appVersion, alertCtrl, device) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.app = app;
        this.toast = toast;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.appPreferences = appPreferences;
        this.badge = badge;
        this.appVersion = appVersion;
        this.alertCtrl = alertCtrl;
        this.device = device;
        this.splash = true;
        this.deviceUUID = '';
        this.deviceModel = '';
        this.Name = '';
        this.Position = '';
        this.Player_Id = '';
        this.currentDate = new Date();
        this.getFormattedDate();
        this.allAdvanceBadgeCount = 0;
        this.allLeaveBadgeCount = 0;
        this.allBadgeCount = 0;
        this.jobBadgeCount = 0;
        this.allTaskBadge = 0;
        this.loadData();
        // this.device.uuid = this.deviceUUID;
        // this.device.model = this.deviceModel;
        this.deviceUUID = device.uuid;
        this.deviceModel = device.model;
    }
    HomePage.prototype.getFormattedDate = function () {
        var dateObj = new Date();
        var year = dateObj.getFullYear().toString();
        var month = dateObj.getMonth().toString();
        var date = dateObj.getDate().toString();
        var monthArray = ['January', 'February', 'March', 'April', 'May', 'Jun', 'July', 'August', 'September', 'October', 'November', 'Disember'];
        this.formattedDate = year + '-' + monthArray[month] + '-' + date;
    };
    HomePage.prototype.onGoToNotice = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__noticeall_noticeall__["a" /* NoticeallPage */]);
    };
    HomePage.prototype.onGoToLeaves = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__leave_leave__["a" /* LeavePage */]);
    };
    HomePage.prototype.onGoToAttendance = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__attendance_attendance__["a" /* AttendancePage */]);
    };
    HomePage.prototype.onGoToTimesheet = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__timesheet_timesheet__["a" /* TimesheetPage */]);
    };
    HomePage.prototype.onGoToHoliday = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__holiday_holiday__["a" /* HolidayPage */]);
    };
    HomePage.prototype.advance = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__advance_advance__["a" /* AdvancePage */]);
    };
    HomePage.prototype.onGoToTask = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__task_task__["a" /* TaskPage */]);
    };
    HomePage.prototype.onGoToMyJob = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_17__myjob_myjob__["a" /* MyJobPage */]);
    };
    HomePage.prototype.onGoToSchedule = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_18__schedules_schedules__["a" /* SchedulesPage */]);
    };
    HomePage.prototype.onGoToAsset = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_19__asset_asset__["a" /* AssetPage */]);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () { return _this.splash = false; }, 4000);
    };
    HomePage.prototype.ionViewDidEnter = function () {
        this.loadData();
    };
    HomePage.prototype.loadData = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            _this.userImage = val.Web_Path;
            _this.Name = val.Name;
            _this.Position = val.Position;
            _this.user_type = val.User_Type;
            console.log(val);
        });
        console.log('type: ' + this.user_type);
        console.log(this.VersionNumber);
        this.appVersion.getVersionNumber().then(function (versionNumber) {
            _this.VersionNumber = versionNumber;
        }, function (error) {
            console.log(error);
        });
        this.allBadgeCount = 0;
        this.storage.get('token').then(function (val) {
            _this.http.get('https://jmclicks.com/api/notifications/advanceall?token=' + val.token).subscribe(function (result) {
                _this.allAdvanceBadgeCount = result.badge_count;
                _this.allBadgeCount = _this.allBadgeCount + _this.allAdvanceBadgeCount;
                _this.setBadges(_this.allBadgeCount);
            });
        });
        this.storage.get('token').then(function (val) {
            _this.http.get('https://jmclicks.com/api/notifications/allleave?token=' + val.token).subscribe(function (result) {
                _this.allLeaveBadgeCount = result.badge_count;
                _this.allBadgeCount = _this.allBadgeCount + _this.allLeaveBadgeCount;
                _this.setBadges(_this.allBadgeCount);
            });
            _this.http.get('https://jmclicks.com/api/notifications/getAllJob?token=' + val.token).subscribe(function (result) {
                _this.jobBadgeCount = result.badge_count;
                _this.allBadgeCount += result.badge_count;
                _this.setBadges(_this.allBadgeCount);
            });
            _this.http.get('https://jmclicks.com/api/notifications/getTaskBadge?token=' + val.token).subscribe(function (result) {
                _this.allTaskBadge = result.badge_count;
                _this.allBadgeCount += result.badge_count;
                _this.setBadges(_this.allBadgeCount);
            });
        });
    };
    HomePage.prototype.logout = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Logout',
            message: 'Do you want to logout?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Yes clicked');
                        var loading = _this.loadingCtrl.create({
                            content: "Logging out...",
                            spinner: 'crescent'
                        });
                        _this.storage.get('token').then(function (val) {
                            _this.appPreferences.fetch('os', 'id').then(function (playerid) {
                                loading.present();
                                _this.http.post('https://jmclicks.com/api/clearplayerid?token=' + val.token, { Player_Id: playerid }).finally(function () {
                                    loading.dismiss();
                                    Promise.resolve('done');
                                }).subscribe(function (result) {
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__login_login__["a" /* LoginPage */]);
                                    console.log('player id cleared');
                                }, function (err) {
                                    console.log(JSON.parse(err));
                                });
                            }).then(function () {
                                _this.storage.clear();
                            });
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    // badge icon count
    HomePage.prototype.setBadges = function (badgeNumber) {
        return __awaiter(this, void 0, void 0, function () {
            var badges, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.badge.set(badgeNumber)];
                    case 1:
                        badges = _a.sent();
                        console.log(badges);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/home/home.html"*/'\n\n\n\n<div id="custom-overlay" [style.display]="splash ? \'flex\': \'none\'">\n\n  <div class="flb">\n\n    <img src="" class="img-slide">\n\n  </div>\n\n</div>\n\n\n\n\n\n<ion-content  class="ion-content">\n\n\n\n<ion-slides class="ion-slides header" autoplay="3000" loop="false" speed="900" pager="true">\n\n  <ion-slide  class="slider1">\n\n    <img class="s1" src="assets/img/logo-round.png">\n\n      <p>Jalur Millenium Sdn Bhd</p>\n\n\n\n  </ion-slide>\n\n\n\n  <ion-slide>\n\n    <div class="profile">\n\n      <ion-item class="item-profile" no-lines>\n\n        <ion-avatar>\n\n          <img class="s1" [src]="\'https://jmclicks.com\' + userImage" onError="src = \'assets/imgs/default.png\'">\n\n        </ion-avatar>\n\n      </ion-item>\n\n    </div>\n\n\n\n    <div class="text-profile">\n\n      <p>{{Name}}</p>\n\n      <p>{{Position}}</p>\n\n    </div>\n\n  </ion-slide>\n\n\n\n  <!-- <ion-slide>\n\n    <div>\n\n      <ion-img width="120" height="120" [src]="\'http://localhost:8200/jmclicks/public\' + userImage" class="round-button button-profile"></ion-img>\n\n    </div>\n\n    <div class="text-profile">\n\n      <p>{{Name}}</p>\n\n      <p>{{Position}}</p>\n\n    </div>\n\n\n\n  </ion-slide>\n\n -->\n\n\n\n\n\n </ion-slides>\n\n\n\n  <!---------------------------------------------------------------------------->\n\n<!--home.html-->\n\n  <div padding class="padding-left">\n\n\n\n    <div class = "row">\n\n      <div class = "col a">\n\n        <button  class="round-button-menu button1" (click)=\'onGoToNotice()\'>\n\n            <ion-icon ios="ios-megaphone" md="md-megaphone" style="zoom:2.0;"></ion-icon>\n\n          </button>\n\n        <div>Notice</div>\n\n      </div>\n\n      <div class = "col a" *ngIf="user_type != \'Staff\'">\n\n        <button  class="round-button-menu button8" (click)=\'onGoToMyJob()\'>\n\n            <ion-icon ios="ios-hammer" md="md-hammer" style="zoom:2.0;"></ion-icon>\n\n            <div class="test">\n\n              <ion-badge color="danger" *ngIf="jobBadgeCount > 0" float-right>{{ jobBadgeCount }}</ion-badge>\n\n            </div>\n\n          </button>\n\n        <div>My Job</div>\n\n      </div>\n\n      <div class = "col a" *ngIf="user_type != \'Contractor\'">\n\n        <button class="round-button-menu button4" (click)=\'advance()\'>\n\n            <ion-icon ios="logo-usd" md="logo-usd" style="zoom:2.0;"></ion-icon>\n\n            <div class="test">\n\n              <ion-badge color="danger" *ngIf="allAdvanceBadgeCount > 0" float-right>{{ allAdvanceBadgeCount }}</ion-badge>\n\n            </div>\n\n          </button>\n\n        <div>Advance</div>\n\n     </div>\n\n\n\n     <div class = "col a" *ngIf="user_type != \'Staff\'">\n\n      <button  class="round-button-menu button8" (click)=\'onGoToTask()\'>\n\n          <ion-icon ios="ios-construct" md="md-construct" style="zoom:2.0;"></ion-icon>\n\n          <div class="test">\n\n            <ion-badge color="danger" *ngIf="allTaskBadge > 0" float-right>{{ allTaskBadge }}</ion-badge>\n\n          </div>\n\n        </button>\n\n      <div>Task</div>\n\n    </div>\n\n\n\n     <div class = "col a" *ngIf="user_type != \'Contractor\'">\n\n      <button class="round-button-menu button3" (click)=\'onGoToAttendance()\'>\n\n          <ion-icon ios="ios-done-all" md="md-done-all" style="zoom:2.0;"></ion-icon>\n\n          </button>\n\n      <div>Attendance</div>\n\n    </div>\n\n    </div>\n\n\n\n      <div class = "row" >\n\n        <div class = "col a" *ngIf="user_type != \'Contractor\'">\n\n        <button  class="round-button-menu button6" (click)=\'onGoToTimesheet()\'>\n\n            <ion-icon ios="ios-list-box" md="md-list-box" style="zoom:2.0;"></ion-icon>\n\n          </button>\n\n        <div>Timesheet</div>\n\n      </div>\n\n\n\n      <div class = "col a " *ngIf="user_type != \'Contractor\'">\n\n        <button class="round-button-menu button5"  (click)=\'onGoToLeaves()\'>\n\n            <ion-icon ios="ios-calendar" md="md-calendar" style="zoom:2.0;"></ion-icon>\n\n            <div class="test">\n\n              <ion-badge color="danger" *ngIf=" allLeaveBadgeCount > 0" float-right>{{ allLeaveBadgeCount }}</ion-badge>\n\n            </div>\n\n          </button>\n\n        <div>Leave</div>\n\n      </div>\n\n\n\n        <div class = "col a">\n\n          <button class="round-button-menu button7" (click)=\'onGoToHoliday()\'>\n\n              <ion-icon ios="ios-plane" md="md-plane" style="zoom:2.0;"></ion-icon>\n\n            </button>\n\n          <div>Holiday</div>\n\n      </div>\n\n\n\n\n\n    </div>\n\n    <div class="row">\n\n      <div class = "col a" *ngIf="user_type == \'Staff\'">\n\n        <button  class="round-button-menu button9" (click)=\'onGoToSchedule()\'>\n\n          <img src="assets/img/schedules2.png" height="30px" width="30px">\n\n            \n\n            <div class="test">\n\n              <!-- <ion-badge color="danger" *ngIf="allTaskBadge > 0" float-right>{{ allTaskBadge }}</ion-badge> -->\n\n            </div>\n\n          </button>\n\n        <div>Schedules</div>\n\n      </div>\n\n      \n\n      <div class = "col a" *ngIf="user_type == \'Staff\'">\n\n        <button  class="round-button-menu button8" (click)=\'onGoToTask()\'>\n\n            <ion-icon ios="ios-construct" md="md-construct" style="zoom:2.0;"></ion-icon>\n\n            <div class="test">\n\n              <ion-badge color="danger" *ngIf="allTaskBadge > 0" float-right>{{ allTaskBadge }}</ion-badge>\n\n            </div>\n\n          </button>\n\n        <div>Task</div>\n\n      </div>\n\n\n\n      <div class = "col a" *ngIf="user_type == \'Staff\'">\n\n        <button  class="round-button-menu button10" (click)=\'onGoToAsset()\'>\n\n            <ion-icon ios="ios-construct" md="md-construct" style="zoom:2.0;"></ion-icon>\n\n            <div class="test">\n\n              <!-- <ion-badge color="danger" *ngIf="allTaskBadge > 0" float-right>{{ allTaskBadge }}</ion-badge> -->\n\n            </div>\n\n          </button>\n\n        <div>Assets</div>\n\n      </div>\n\n\n\n      \n\n    </div>\n\n\n\n    \n\n  <br>\n\n</div>\n\n\n\n\n\n</ion-content>\n\n<!-- <ion-footer>\n\n\n\n    <button ion-button full icon-start class="button-logout" (click)="logout()">\n\n      <ion-icon name="log-out"></ion-icon>Log out\n\n    </button>\n\n</ion-footer> -->\n\n<ion-footer>\n\n  <div class="text-footer">\n\n    &#169; Copyright 2016 Softoya International Sdn. Bhd. All rights reserved. <a style="color:white" href="https://jmclicks.com/policy.php"> Privacy Policy </a> <br>\n\n    <b>Ver. : {{VersionNumber}}</b>\n\n    <!-- <p> {{deviceUUID}}</p>\n\n    <p>{{deviceModel}} </p> -->\n\n  </div>\n\n  <button ion-button full icon-start class="button-logout" (click)="logout()">\n\n    <ion-icon name="log-out"></ion-icon>Log out\n\n  </button>\n\n</ion-footer>\n\n'/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_app_preferences__["a" /* AppPreferences */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_badge__["a" /* Badge */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__["a" /* Device */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_app_preferences__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, auth, formBuilder, loadingCtrl, alertCtrl, storage, http, oneSignal, _platform, appPreferences) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.http = http;
        this.oneSignal = oneSignal;
        this._platform = _platform;
        this.appPreferences = appPreferences;
        this.credentials = this.formBuilder.group({
            StaffId: ['', [__WEBPACK_IMPORTED_MODULE_8__angular_forms__["h" /* Validators */].required]],
            Password: ['', __WEBPACK_IMPORTED_MODULE_8__angular_forms__["h" /* Validators */].required]
        });
        // this.initializeApp();
    }
    // initializeApp() {
    //   this._platform.ready().then(() => {
    //     this._OneSignal.startInit("278871d2-ebbb-4e30-a3d5-ca2f41d2ef73", "536009947036");
    //     this._OneSignal.inFocusDisplaying(this._OneSignal.OSInFocusDisplayOption.Notification);
    //     this._OneSignal.setSubscription(true);
    //     this._OneSignal.handleNotificationReceived().subscribe(() => {
    //       // handle received here how you wish.
    //     });
    //     this._OneSignal.handleNotificationOpened().subscribe(() => {
    //       // handle opened here how you wish.
    //     });
    //     this._OneSignal.endInit();
    //   })
    // }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Logging in...",
            spinner: 'crescent'
        });
        loading.present();
        console.log(this.credentials.value);
        this.auth.authUsingCredentials(this.credentials.value)
            .delay(2000)
            .finally(function () { return loading.dismiss(); })
            .subscribe(function (res) {
            console.log(res);
            if (res.error) {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Error!',
                    subTitle: 'Invalid username or password! Please try again',
                    buttons: [{
                            text: 'Ok',
                            handler: function () {
                                console.log('Disagree clicked');
                            }
                        }]
                });
                alert_1.present();
                alert_1.onDidDismiss(function () {
                    console.log('dismissed');
                });
                console.log(res.error);
                return;
            }
            // set a key/value
            _this.storage.set('token', res);
            _this.http.get('https://jmclicks.com/api/getuser?token=' + res.token)
                .subscribe(function (result) {
                _this.storage.set('user', result);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                _this.appPreferences.fetch('os', 'id').then(function (userId) {
                    console.log(JSON.stringify(userId));
                    _this.http.post('https://jmclicks.com/api/postplayerid?token=' + res.token, {
                        Player_Id: userId,
                    }, httpOptions).subscribe(function (result) {
                        console.log('result', result);
                    });
                });
            });
        }, function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Error!',
                subTitle: 'Invalid username or password! Please try again',
                buttons: [{
                        text: 'Ok',
                        handler: function () {
                            console.log('Disagree clicked');
                        }
                    }]
            });
            alert.present();
            alert.onDidDismiss(function () {
                console.log('dismissed');
            });
            console.log(err);
        });
        // this.appPreferences.fetch('os','id').then((res) => {
        //   console.log(res);
        //   // this.oneSignal.getIds().then((id) => {
        //       // this.storage.get('token').then((val) => {
        //         this.http.post(' https://jmclicks.com/api/postplayerid?token=' + val.token, {
        //           Player_Id: res.userId,
        //            },
        //           httpOptions)
        //         .subscribe()
        //       // });
        //     // });
        // });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/login/login.html"*/'\n\n<ion-content padding class="multi-bg-example">\n\n  <div class="img">\n    <button class="button button2">\n      <img src="assets/img/logo-round.png" width="150px" height="150px">\n    </button>\n  </div>\n\n  <form [formGroup]="credentials" (ngSubmit)="login()" >\n    <ion-item class="content-form">\n      <ion-input type="text" placeholder="Email Address" formControlName="StaffId"></ion-input>\n    </ion-item>\n    <ion-item class="content-form" >\n      <ion-input type="password" placeholder="Password" formControlName="Password"></ion-input>\n    </ion-item>\n    <div>\n      <button ion-button block type="submit" [disabled]="!credentials.valid">Login</button>\n    </div>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_app_preferences__["a" /* AppPreferences */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 190;

/***/ }),

/***/ 233:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 233;

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environment__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { GooglePlus } from '@ionic-native/google-plus';





var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
var AuthProvider = /** @class */ (function () {
    function AuthProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        this.SERVER_AUTH_CODE = 'serverAuthCode';
        this.MSG_ACCESS_DENIED = 'User denied access';
        this.codeAuthUrl = __WEBPACK_IMPORTED_MODULE_3__environment__["a" /* environment */].auth.codeLoginUrl;
        this.credentialsAuthUrl = __WEBPACK_IMPORTED_MODULE_3__environment__["a" /* environment */].auth.credentialsLoginUrl;
        this.lecturersInviteUrl = __WEBPACK_IMPORTED_MODULE_3__environment__["a" /* environment */].auth.lecturersInviteUrl;
    }
    AuthProvider.prototype.authUsingCode = function () {
        return this.http.post(this.codeAuthUrl, { code: this.serverAuthCode }, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["catchError"])(this.handleError));
    };
    AuthProvider.prototype.authUsingCredentials = function (credentials) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environment__["a" /* environment */].auth.credentialsLoginUrl, credentials, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["catchError"])(this.handleError));
    };
    AuthProvider.prototype.submitLecturerInvitationRequest = function (invitationRequest) {
        return this.http.post(this.lecturersInviteUrl, invitationRequest, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["catchError"])(this.handleError));
    };
    AuthProvider.prototype.setAccessToken = function (access_token) {
        this.storage.set('access_token', access_token);
    };
    AuthProvider.prototype.getAccessToken = function () {
        return this.storage.get('access_token');
    };
    AuthProvider.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw('An error occurred:' + error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + JSON.stringify(error.error)));
            if (error.status == 422) {
                return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw('Invalid username or password');
            }
            return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw('An error occured. Try again later');
        }
    };
    ;
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeavePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myleave_myleave__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__myapproval_myapproval__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__leavestatus_leavestatus__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__leavebalance_leavebalance__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
/**
 * Generated class for the LeavePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LeavePage = /** @class */ (function () {
    function LeavePage(navCtrl, navParams, storage, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        this.pendingLeaveBadgeCount = 0;
        this.allLeaveBadgeCount = 0;
    }
    LeavePage.prototype.ionViewDidEnter = function () {
        this.loadData();
    };
    LeavePage.prototype.loadData = function () {
        var _this = this;
        this.storage.get('token').then(function (val) {
            _this.http.get('https://jmclicks.com/api/notifications/leavepending?token=' + val.token).subscribe(function (result) {
                _this.pendingLeaveBadgeCount = result.badge_count;
            });
        });
        this.storage.get('token').then(function (val) {
            _this.http.get('https://jmclicks.com/api/notifications/leaveall?token=' + val.token).subscribe(function (result) {
                _this.allLeaveBadgeCount = result.badge_count;
            });
        });
    };
    LeavePage.prototype.myLeave = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__myleave_myleave__["a" /* MyleavePage */]);
    };
    LeavePage.prototype.myapproval = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__myapproval_myapproval__["a" /* MyapprovalPage */]);
    };
    LeavePage.prototype.leavestatus = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__leavestatus_leavestatus__["a" /* LeavestatusPage */]);
    };
    LeavePage.prototype.LeaveBalance = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__leavebalance_leavebalance__["a" /* LeavebalancePage */]);
    };
    LeavePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-leave',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/leave/leave.html"*/'\n<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>Leave Activity</ion-title>\n  </ion-navbar>\n</ion-header>\n  \n<ion-content class="ion-content">\n\n  <section class = "home-container">\n    <p class="p"> My Application<br></p>\n\n    <ion-list>\n\n      <ion-item (click)=\'myLeave()\'>\n        <button class="round-button button1" >\n          <img src="assets/img/calendar (2).png" height="30px" width="30px">\n        </button>\n        My Leave\n      </ion-item>\n\n      <ion-item (click)=\'leavestatus()\'>\n        <button class="round-button button2" >\n          <img src="assets/img/leave-status.png" width="30px" height="30px" >\n        </button>\n        <ion-badge color="danger" *ngIf="allLeaveBadgeCount > 0" item-end>{{ allLeaveBadgeCount }}</ion-badge>\n        Leave Status\n      </ion-item>\n\n      <ion-item (click)=\'LeaveBalance()\'>\n        <button class="round-button button1" >\n          <img src="assets/icon/clipboard.png" height="30px" width="30px">\n        </button>\n        Leave Balance\n      </ion-item>\n\n    </ion-list>\n\n    <p class="p">My Approval</p>\n\n    <ion-list>\n      <ion-item (click)=\'myapproval()\'>\n        <button class="round-button button6">\n          <img src="assets/img/myapproval (2).png" width="30px" height="30px">\n        </button>\n        <ion-badge color="danger" *ngIf="pendingLeaveBadgeCount > 0" item-end>{{ pendingLeaveBadgeCount }}</ion-badge>\n        My Approval\n      </ion-item>\n    </ion-list>\n\n  </section>\n  \n</ion-content>\n  '/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/leave/leave.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */]])
    ], LeavePage);
    return LeavePage;
}());

//# sourceMappingURL=leave.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyleavePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_operators__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_toast__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_base64__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_image_picker__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__leave_modal_leave_modal__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};

/**
 * Generated class for the MyleavePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyleavePage = /** @class */ (function () {
    function MyleavePage(navCtrl, navParams, camera, alertCtrl, domSanitizer, app, http, storage, toast, base64, imagePicker, file, modalCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.domSanitizer = domSanitizer;
        this.app = app;
        this.http = http;
        this.storage = storage;
        this.toast = toast;
        this.base64 = base64;
        this.imagePicker = imagePicker;
        this.file = file;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.Leave_Type = '';
        this.Leave_Term = '';
        this.Start_Date = '';
        this.End_Date = '';
        this.Reason = '';
        this.Department = '';
        this.Approver = '';
        this.images = [];
        this.imagesN = [];
        this.totalDays = 0;
        this.leaveDaysList = [];
        this.Leave_Period = [];
        this.token = '';
    }
    MyleavePage.prototype.resize = function () {
        var element = this.myInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
        var scrollHeight = element.scrollHeight;
        element.style.height = scrollHeight + 'px';
        this.myInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
    };
    MyleavePage.prototype.ngOnInit = function () {
        this.signupform = new __WEBPACK_IMPORTED_MODULE_13__angular_forms__["c" /* FormGroup */]({
            Leave_Type: new __WEBPACK_IMPORTED_MODULE_13__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_13__angular_forms__["h" /* Validators */].required]),
            // Leave_Term:new FormControl('', [Validators.required]),
            Department: new __WEBPACK_IMPORTED_MODULE_13__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_13__angular_forms__["h" /* Validators */].required]),
            Approver: new __WEBPACK_IMPORTED_MODULE_13__angular_forms__["b" /* FormControl */]('', []),
            Start_Date: new __WEBPACK_IMPORTED_MODULE_13__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_13__angular_forms__["h" /* Validators */].required]),
            End_Date: new __WEBPACK_IMPORTED_MODULE_13__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_13__angular_forms__["h" /* Validators */].required]),
            Reason: new __WEBPACK_IMPORTED_MODULE_13__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_13__angular_forms__["h" /* Validators */].required])
        });
    };
    MyleavePage.prototype.ionViewWillEnter = function () {
        this.loadData();
    };
    MyleavePage.prototype.getLeaveDays = function () {
        return this.totalDays > 1 ? this.totalDays + " days" : this.totalDays + " day";
    };
    MyleavePage.prototype.onTakePicture = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.FILE_URI,
            saveToPhotoAlbum: true,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // this.image = 'data:image/jpeg;base64,' + imageData;
            _this.images.push(imageData);
            console.log(imageData);
            _this.base64.encodeFile(imageData).then(function (base64File) {
                _this.imagesN.push(_this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + base64File.substring(base64File.indexOf(',') + 1)));
            }, function (err) {
                console.log(err);
            });
        }, function (err) {
            _this.displayErrorAlert(err);
        });
    };
    MyleavePage.prototype.clearImage = function () {
        this.images.length = 0;
        this.imagesN.length = 0;
    };
    MyleavePage.prototype.getImage = function () {
        var _this = this;
        var options = {
            quality: 70,
            outputType: 0,
        };
        this.imagePicker.hasReadPermission().then(function (res) {
            if (res) {
                _this.imagePicker.getPictures({}).then(function (results) {
                    for (var i = 0; i < results.length; i++) {
                        console.log('Image URI: ' + results[i]);
                        _this.images.push(results[i]);
                        _this.base64.encodeFile(results[i]).then(function (base64File) {
                            _this.imagesN.push(_this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + base64File.substring(base64File.indexOf(',') + 1)));
                        }, function (err) {
                            console.log(err);
                        });
                    }
                }, function (err) { });
            }
            else {
                _this.imagePicker.requestReadPermission().then(function (res) {
                    _this.imagePicker.getPictures({}).then(function (results) {
                        for (var i = 0; i < results.length; i++) {
                            console.log('Image URI: ' + results[i]);
                            _this.images.push(results[i]);
                            _this.base64.encodeFile(results[i]).then(function (base64File) {
                                _this.imagesN.push(_this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + base64File.substring(base64File.indexOf(',') + 1)));
                            }, function (err) {
                                console.log(err);
                            });
                        }
                    }, function (err) { });
                });
            }
        });
    };
    MyleavePage.prototype.displayErrorAlert = function (err) {
        console.log(err);
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Error while trying to capture picture',
            buttons: ['OK']
        });
        alert.present();
    };
    MyleavePage.prototype.myFunction = function (date) {
        var d = new Date(date);
        var monthNames = [
            "Jan", "Feb", "Mar",
            "Apr", "May", "Jun", "Jul",
            "Aug", "Sep", "Oct",
            "Nov", "Dec"
        ];
        var day = ('0' + d.getDate()).slice(-2);
        var monthIndex = d.getMonth();
        var year = d.getFullYear();
        return day + '-' + monthNames[monthIndex] + '-' + year;
    };
    MyleavePage.prototype.fetchCalculatedLeaveDays = function (value) {
        var _this = this;
        if (this.End_Date != "" && this.Start_Date != "" && this.Leave_Type != "") {
            this.storage.get('token').then(function (val) {
                _this.Leave_Period.length = 0; //reset array
                // console.log('http://localhost:8300/api/fetchCalculatedLeaveDays?token=' + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjU2MiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MzAwL2FwaS9sb2dpbiIsImlhdCI6MTUzNjA0Mzg2MSwiZXhwIjoxNjMwNjUxODYxLCJuYmYiOjE1MzYwNDM4NjEsImp0aSI6Ikx3ck9jdUEwMkFwcE9xcnoifQ.PAs9HLy5TALxkFVAegiaCNz_NbXaX6_eRX_zmfl9IvE" + "&Start_Date=" + this.myFunction(this.Start_Date) + "&End_Date=" + this.myFunction(this.End_Date) + "&Leave_Type=" + this.Leave_Type);
                _this.http.get('https://jmclicks.com/api/fetchCalculatedLeaveDays?token=' + val.token + "&Start_Date=" + _this.myFunction(_this.Start_Date) + "&End_Date=" + _this.myFunction(_this.End_Date) + "&Leave_Type=" + _this.Leave_Type)
                    .subscribe(function (result) {
                    var days = 0;
                    _this.leaveDaysList = result.list;
                    _this.totalDays = result.calculated_days;
                    if (_this.Leave_Type == 'Maternity Leave' || _this.Leave_Type == 'Hospitalization Leave') {
                        _this.leaveDaysList.forEach(function (l, index) {
                            _this.Leave_Period[index] = "Full";
                        });
                    }
                    else {
                        if (_this.Leave_Type != '1 Hour Time Off' && _this.Leave_Type != '2 Hours Time Off') {
                            _this.leaveDaysList.forEach(function (l, index) {
                                if (l.Day_Type == 0 || l.Day_Type == 2 || l.Day_Type == -1) {
                                    _this.Leave_Period[index] = l.Period;
                                }
                                else {
                                    _this.Leave_Period[index] = "Full";
                                }
                            });
                        }
                        else {
                            _this.leaveDaysList.forEach(function (l, index) {
                                if (l.Day_Type == 0 || l.Day_Type == 2 || l.Day_Type == -1) {
                                }
                                else {
                                    if (_this.Leave_Type == '1 Hour Time Off') {
                                        days += 0.125;
                                        _this.Leave_Period[index] = l.Period;
                                    }
                                    else if (_this.Leave_Type == '2 Hours Time Off') {
                                        days += 0.25;
                                        _this.Leave_Period[index] = _this.Leave_Type == '1 Hour Time Off' ? '1 Hour' : '2 Hours';
                                    }
                                }
                            });
                            _this.totalDays = days;
                        }
                    }
                    console.log(JSON.stringify(result));
                });
            });
        }
    };
    MyleavePage.prototype.presentLeaveModal = function () {
        var _this = this;
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12__leave_modal_leave_modal__["a" /* LeaveModalPage */], { leavelist: this.leaveDaysList, leavetype: this.Leave_Type, Leave_Period: this.Leave_Period });
        profileModal.onDidDismiss(function (data) {
            _this.Leave_Period = data;
            var days = 0;
            data.forEach(function (item, index) {
                if (item == "Full") {
                    days += 1;
                }
                else if (item == 'AM' || item == 'PM') {
                    days += 0.5;
                }
                else if (item == '1 Hour') {
                    days += 0.125;
                }
                else if (item == '2 Hours') {
                    days += 0.25;
                }
            });
            _this.totalDays = days;
            console.log(data);
        });
        profileModal.present();
    };
    MyleavePage.prototype.setApproverOptions = function (value) {
        var arrApps = new Array();
        var projectName = '';
        for (var _i = 0, _a = this.departs; _i < _a.length; _i++) {
            var depart = _a[_i];
            if (depart.Id == value) {
                projectName = depart.Project_Name;
                break;
            }
        }
        for (var _b = 0, _c = this.apps; _b < _c.length; _b++) {
            var app = _c[_b];
            if (app.Project_Name == projectName) {
                arrApps.push(app);
            }
        }
        this.approverOptions = arrApps;
        this.Approver = arrApps[0].Id;
    };
    MyleavePage.prototype.loadData = function () {
        var _this = this;
        var data;
        // Leave_Type
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/getleaveoption?token=' + val.token);
            data.subscribe(function (result) {
                console.log(result);
                var types = new Array();
                for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                    var res = result_1[_i];
                    if (res.Field == 'Leave_Type') {
                        types.push(res);
                    }
                }
                _this.types = types;
            });
        });
        // Leave_Term
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/getleaveoption?token=' + val.token);
            data.subscribe(function (result) {
                console.log(result);
                var terms = new Array();
                for (var _i = 0, result_2 = result; _i < result_2.length; _i++) {
                    var res = result_2[_i];
                    if (res.Field == 'Leave_Term') {
                        terms.push(res);
                    }
                }
                _this.terms = terms;
            });
        });
        // Department
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/getprojects?token=' + val.token);
            data.subscribe(function (result) {
                console.log(result);
                var departs = new Array();
                for (var _i = 0, result_3 = result; _i < result_3.length; _i++) {
                    var r = result_3[_i];
                    if (r.Customer.includes('Department')) {
                        departs.push(r);
                    }
                }
                _this.departs = departs;
            });
        });
        // Approver
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/getapprover?token=' + val.token);
            data.subscribe(function (result) {
                console.log(result);
                // let apps = new Array();
                // for (let res of result) {
                //   if(res.Project_Name == res.Name == res.Id) {
                //     apps.push(res);
                //   }
                // }
                _this.apps = result;
            });
        });
    };
    MyleavePage.prototype.submitClaim = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Submitting leave application",
            spinner: 'crescent'
        });
        this.storage.get('token').then(function (val) {
            loading.present();
            var p = new Promise(function (resolveReady) {
                var defs = [];
                _this.formData = new FormData();
                _this.images.forEach(function (i) {
                    console.log('processing ' + i);
                    var self = _this;
                    var def = new Promise(function (resolve) {
                        _this.file.resolveLocalFilesystemUrl(i)
                            .then(function (entry) {
                            entry.file(function (file) {
                                console.log('now i have a file ob', file.name);
                                console.dir(JSON.stringify(file));
                                var reader = new FileReader();
                                reader.onloadend = function (e) {
                                    var imgBlob = new Blob([this.result], { type: file.type });
                                    self.formData.append('attachment[]', imgBlob, file.name);
                                    resolve(i);
                                };
                                reader.readAsArrayBuffer(file);
                            }, function (e) {
                                console.log('error getting file', e);
                            });
                        }, function (err) {
                            console.log("Put error message here", JSON.stringify(err));
                        });
                    });
                    defs.push(def);
                });
                Promise.all(defs).then(function (res) {
                    console.log(_this.Leave_Term);
                    _this.formData.append('Leave_Type', _this.Leave_Type);
                    console.log(JSON.stringify(_this.Leave_Period));
                    _this.Leave_Period.forEach(function (item, index) {
                        _this.formData.append('Leave_Period[' + index + ']', item);
                    });
                    // this.formData.append('Leave_Term', this.Leave_Term);
                    _this.formData.append('Start_Date', _this.myFunction(_this.Start_Date));
                    _this.formData.append('End_Date', _this.myFunction(_this.End_Date));
                    _this.formData.append('Reason', _this.Reason);
                    _this.formData.append('Project', _this.Department);
                    _this.formData.append('Cover_By', '');
                    _this.formData.append('Approver', _this.Approver);
                    console.log(JSON.stringify(res));
                    console.log('all preparation done');
                    // this.upload()
                    resolveReady();
                });
            });
            p.then(function () {
                return _this.http.post('https://jmclicks.com/api/newleavewithperiod?token=' + val.token, _this.formData, {})
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_operators__["catchError"])(_this.handleError))
                    .finally(function () {
                    loading.dismiss();
                })
                    .subscribe(function (res) {
                    if (res == 1) {
                        console.log(JSON.stringify(res));
                        _this.toast.show("Leave application submitted", '5000', 'center').subscribe(function (toast) {
                            console.log(toast);
                            _this.navCtrl.pop();
                        });
                    }
                    else {
                        var obj = res;
                        console.log(obj);
                        var errormessage = "";
                        for (var item in obj) {
                            errormessage = obj[item];
                            console.log(errormessage);
                        }
                        _this.toast.show(errormessage[0], '5000', 'center').subscribe(function (toast) {
                            console.log(toast);
                        });
                    }
                });
            });
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
    };
    MyleavePage.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw('An error occurred:' + error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + JSON.stringify(error) + ", " +
                ("body was: " + JSON.stringify(error)));
            if (error.status == 422) {
                return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw('Invalid username or password');
            }
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw('An error occured. Try again later');
        }
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('myInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ElementRef */])
    ], MyleavePage.prototype, "myInput", void 0);
    MyleavePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-myleave',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/myleave/myleave.html"*/'<ion-header>\n\n\n\n    <ion-navbar color="secondary">\n\n      <ion-title>Leave Submission</ion-title>\n\n    </ion-navbar>\n\n\n\n  </ion-header>\n\n\n\n\n\n  <ion-content  class="ion-content">\n\n    <ion-list>\n\n      <form novalidate (ngSubmit)="submitClaim()" [formGroup]="signupform">\n\n\n\n      <ion-item>\n\n        <ion-label stacked color="primary" class="required">Leave Type</ion-label>\n\n        <ion-select placeholder="please select" [(ngModel)]="Leave_Type" (ngModelChange)="fetchCalculatedLeaveDays($event)" formControlName="Leave_Type" [class.error1]="!signupform.controls.Leave_Type.valid && signupform.controls.Leave_Type.dirty">\n\n          <ion-option *ngFor="let type of types" value="{{type.Option}}">{{type.Option}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item no-lines *ngIf="( signupform.get(\'Leave_Type\').hasError(\'required\') ) && signupform.get(\'Leave_Type\').touched">\n\n        <div class="error" *ngIf="signupform.get(\'Leave_Type\').hasError(\'required\') && signupform.get(\'Leave_Type\').touched">\n\n          Please select your leave type\n\n        </div>\n\n      </ion-item>\n\n\n\n     <!-- <ion-item>\n\n        <ion-label stacked color="primary" class="required">Leave Term</ion-label>\n\n        <ion-select placeholder="please select" [(ngModel)]="Leave_Term" formControlName="Leave_Term" [class.error1]="!signupform.controls.Leave_Term.valid && signupform.controls.Leave_Term.dirty">\n\n          <ion-option value="Full Day">Full Day</ion-option>\n\n          <ion-option value="Afternoon">Half Day Afternoon[1pm-6pm]</ion-option>\n\n          <ion-option value="Morning">Half Day Morning</ion-option>\n\n        </ion-select>\n\n      </ion-item> -->\n\n\n\n      <ion-item>\n\n        <!-- <div alert-radio-label> -->\n\n        <ion-label stacked color="primary" class="required">Department</ion-label>\n\n        <ion-select  text-wrap placeholder="please select" [(ngModel)]="Department" (ngModelChange)="setApproverOptions($event)" formControlName="Department" [class.error1]="!signupform.controls.Department.valid && signupform.controls.Department.dirty">\n\n          <ion-option text-wrap alert-radio-label *ngFor="let depart of departs" value="{{depart.Id}}">{{depart.Project_Name}}</ion-option>\n\n        </ion-select>\n\n        <!-- </div> -->\n\n      </ion-item>\n\n      <ion-item no-lines *ngIf="( signupform.get(\'Department\').hasError(\'required\') ) && signupform.get(\'Department\').touched">\n\n        <div class="error" *ngIf="signupform.get(\'Department\').hasError(\'required\') && signupform.get(\'Department\').touched">\n\n          Please select your department\n\n        </div>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label stacked color="primary" class="required">Approver</ion-label>\n\n        <ion-select placeholder="please select" [(ngModel)]="Approver" formControlName="Approver" [class.error1]="!signupform.controls.Approver.valid && signupform.controls.Approver.dirty">\n\n          <ion-option *ngFor="let app of approverOptions" value="{{app.Id}}">{{app.Name}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item no-lines *ngIf="( signupform.get(\'Approver\').hasError(\'required\') ) && signupform.get(\'Approver\').touched">\n\n        <div class="error" *ngIf="signupform.get(\'Approver\').hasError(\'required\') && signupform.get(\'Approver\').touched">\n\n          Please select your approver\n\n        </div>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label stacked color="primary" class="required">Start Date</ion-label>\n\n          <ion-datetime\n\n          pickerFormat="DD MMM YYYY" [(ngModel)]="Start_Date"\n\n          displayFormat="DD MM YYYY" placeholder="Choose start date" max="2200" (ngModelChange)="fetchCalculatedLeaveDays($event)" formControlName="Start_Date" [class.error1]="!signupform.controls.Start_Date.valid && signupform.controls.Start_Date.dirty">\n\n          </ion-datetime>\n\n        </ion-item>\n\n        <ion-item no-lines *ngIf="( signupform.get(\'Start_Date\').hasError(\'required\') ) && signupform.get(\'Start_Date\').touched">\n\n          <div class="error" *ngIf="signupform.get(\'Start_Date\').hasError(\'required\') && signupform.get(\'Start_Date\').touched">\n\n            Please select your start date\n\n          </div>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label stacked color="primary" class="required">End Date</ion-label>\n\n          <ion-datetime\n\n            pickerFormat="DD MMM YYYY" [(ngModel)]="End_Date"\n\n            displayFormat="DD MM YYYY" placeholder="Choose end date" max="2200" (ngModelChange)="fetchCalculatedLeaveDays($event)" formControlName="End_Date" [class.error1]="!signupform.controls.End_Date.valid && signupform.controls.End_Date.dirty">\n\n          </ion-datetime>\n\n        </ion-item>\n\n        <ion-item no-lines *ngIf="( signupform.get(\'End_Date\').hasError(\'required\') ) && signupform.get(\'End_Date\').touched">\n\n            <div class="error" *ngIf="signupform.get(\'End_Date\').hasError(\'required\') && signupform.get(\'End_Date\').touched">\n\n              Please select your end date\n\n            </div>\n\n          </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-icon item-end name="ios-settings" (click)="presentLeaveModal()"></ion-icon>\n\n          <ion-label stacked color="primary">Total Leave Days </ion-label>\n\n          <ion-label>{{ getLeaveDays() }}</ion-label>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label stacked color="primary" class="required">Reason</ion-label>\n\n          <ion-textarea type="text" [(ngModel)]="Reason" placeholder="State your reason here" formControlName="Reason" [class.error1]="!signupform.controls.Reason.valid && signupform.controls.Reason.dirty"></ion-textarea>\n\n        </ion-item>\n\n        <ion-item no-lines *ngIf="( signupform.get(\'Reason\').hasError(\'required\') ) && signupform.get(\'Reason\').touched">\n\n          <div class="error" *ngIf="signupform.get(\'Reason\').hasError(\'required\') && signupform.get(\'Reason\').touched">\n\n            Please select your reason\n\n          </div>\n\n        </ion-item>\n\n\n\n        <div class="thumbnail-container">\n\n          <ul class="thumbnail-list">\n\n            <li *ngFor="let imageN of imagesN"><span><img class="thumbnail-image" [src]="imageN"></span></li>\n\n          </ul>\n\n        </div>\n\n\n\n        <button ion-button icon-right type="button" full (click)="onTakePicture()">\n\n          Take Picture <ion-icon name="camera"></ion-icon>\n\n        </button>\n\n\n\n\n\n        <button class="center" full ion-button type="button" (click)="getImage()" color="primary">\n\n          Get from Gallery <ion-icon name="aperture"></ion-icon>\n\n        </button>\n\n\n\n        <button ion-button icon-right full type="button" class="center" (click)="clearImage()">\n\n          Clear\n\n        </button>\n\n\n\n        <br><br>\n\n\n\n        <button ion-button block color="primary" type="submit" [disabled]="signupform.invalid">Submit</button>\n\n\n\n      </form>\n\n\n\n      <style>\n\n        .required:after { content:" *"; color:red; }\n\n      </style>\n\n    </ion-list>\n\n  </ion-content>\n\n'/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/myleave/myleave.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_base64__["a" /* Base64 */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* LoadingController */]])
    ], MyleavePage);
    return MyleavePage;
}());

//# sourceMappingURL=myleave.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaveModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LeaveModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LeaveModalPage = /** @class */ (function () {
    function LeaveModalPage(viewCtrl, params) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.leavelist = [];
        this.Leave_Period = [];
        this.leavelist = params.get('leavelist');
        this.Leave_Type = params.get('leavetype');
        this.Leave_Period = params.get('Leave_Period');
        if (this.Leave_Period.length == 0) {
            if (this.Leave_Type == 'Maternity Leave' || this.Leave_Type == 'Hospitalization Leave') {
                this.leavelist.forEach(function (l, index) {
                    _this.Leave_Period[index] = "Full";
                });
            }
            else {
                if (this.Leave_Type != '1 Hour Time Off' && this.Leave_Type != '2 Hours Time Off') {
                    this.leavelist.forEach(function (l, index) {
                        if (l.Day_Type == 0 || l.Day_Type == 2 || l.Day_Type == -1) {
                            _this.Leave_Period[index] = l.Period;
                        }
                        else {
                            _this.Leave_Period[index] = "Full";
                        }
                    });
                }
                else {
                    this.leavelist.forEach(function (l, index) {
                        if (l.Day_Type == 0 || l.Day_Type == 2 || l.Day_Type == -1) {
                            _this.Leave_Period[index] = l.Period;
                        }
                        else {
                            _this.Leave_Period[index] = _this.Leave_Type == '1 Hour Time Off' ? '1 Hour' : '2 Hours';
                        }
                    });
                }
            }
        }
        console.log(this.Leave_Type);
        console.log(this.leavelist);
    }
    LeaveModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LeavePeriodModalPage');
    };
    LeaveModalPage.prototype.dismiss = function () {
        var data = { 'foo': 'bar', 'Leave_Period': this.Leave_Period };
        this.viewCtrl.dismiss(this.Leave_Period);
    };
    LeaveModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-leave-modal',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/leave-modal/leave-modal.html"*/'<!--\n  Generated template for the LeaveModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-toolbar>\n      <ion-title>\n        Leave Period\n      </ion-title>\n      <ion-buttons start>\n        <button ion-button (click)="dismiss()">\n          <span ion-text color="primary">Done</span>          \n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  \n  <ion-content padding>\n      <div *ngIf="(Leave_Type == \'Maternity Leave\' || Leave_Type == \'Hospitalization Leave\'); then thenBlock else elseBlock"></div>\n      <ng-template #thenBlock>\n          <ion-item>\n            <ion-label>From: {{ leavelist[0].Date }}</ion-label>\n            <ion-label>To: {{ leavelist[leavelist.length-1].Date }}</ion-label>\n            <ion-label>Period: Full</ion-label>\n          </ion-item>                                                    \n      </ng-template>\n      <ng-template #elseBlock>\n          <div *ngIf="(Leave_Type != \'1 Hour Time Off\' && Leave_Type != \'2 Hours Time Off\'); then thenBlockTwo else elseBlockTwo"></div>\n          <ng-template #thenBlockTwo>                                  \n            <ion-list>\n              <ion-item *ngFor="let l of leavelist; index as i;">\n                <ion-label>{{ l.Date }}</ion-label>                              \n                <ion-input type="text" readonly value="{{ l.Day_Type_Description }}"></ion-input>\n              \n                <ion-label *ngIf="(l.Day_Type == 0 || l.Day_Type == 2 || l.Day_Type == -1)" item-end>{{ l.Period }}</ion-label>\n              \n                <ion-input type="text" hidden [(ngModel)]="Leave_Period[i]" value="{{ l.Period }}" *ngIf="(l.Day_Type == 0 || l.Day_Type == 2 || l.Day_Type == -1)"></ion-input>\n              \n                <ion-select [(ngModel)]="Leave_Period[i]" *ngIf="(l.Day_Type != 0 && l.Day_Type != 2 && l.Day_Type != -1)">\n                    <ion-option value="Full">Full</ion-option>\n                    <ion-option value="AM">AM</ion-option>\n                    <ion-option value="PM">PM</ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-list>                      \n          </ng-template>\n          <ng-template #elseBlockTwo>\n              <ion-list>\n                  <ion-item *ngFor="let l of leavelist; index as i;">\n                    <ion-label>{{ l.Date }}</ion-label>                              \n                    <ion-input type="text" readonly value="{{ l.Day_Type_Description }}"></ion-input>\n                  \n                    <ion-label *ngIf="(l.Day_Type == 0 || l.Day_Type == 2 || l.Day_Type == -1)" item-end>{{ l.Period }}</ion-label>\n                  \n                    <ion-input type="text" hidden [(ngModel)]="Leave_Period[i]" value="{{ l.Period }}" *ngIf="(l.Day_Type == 0 || l.Day_Type == 2 || l.Day_Type == -1)"></ion-input>\n                    \n                    <ion-label *ngIf="(l.Day_Type != 0 && l.Day_Type != 2 && l.Day_Type != -1)" item-end>{{ Leave_Type == \'1 Hour Time Off\' ? \'1 Hour\' : \'2 Hours\' }}</ion-label>\n                  \n                    <ion-input type="text" hidden [(ngModel)]="Leave_Period[i]" value="{{ Leave_Type == \'1 Hour Time Off\' ? \'1 Hour\' : \'2 Hours\' }}" *ngIf="(l.Day_Type != 0 && l.Day_Type != 2 && l.Day_Type != -1)"></ion-input>\n                    \n                  </ion-item>\n                </ion-list>              \n          </ng-template>\n      \n      </ng-template>      \n  </ion-content>'/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/leave-modal/leave-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], LeaveModalPage);
    return LeaveModalPage;
}());

//# sourceMappingURL=leave-modal.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyapprovalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__myapprovaldetail_myapprovaldetail__ = __webpack_require__(509);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MyapprovalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyapprovalPage = /** @class */ (function () {
    function MyapprovalPage(navCtrl, app, http, storage) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.http = http;
        this.storage = storage;
        this.items = [];
        this.token = '';
        this.notifications = [];
        this.myapprovaldetail = __WEBPACK_IMPORTED_MODULE_4__myapprovaldetail_myapprovaldetail__["a" /* MyapprovaldetailPage */];
    }
    MyapprovalPage.prototype.ionViewWillEnter = function () {
        this.loadData();
    };
    MyapprovalPage.prototype.loadData = function () {
        var _this = this;
        var data;
        // Or to get a key/value pair
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/myApprover?token=' + val.token);
            data.subscribe(function (result) {
                _this.items = result;
            });
            _this.storage.get('token').then(function (val) {
                _this.http.get('https://jmclicks.com/api/notifications/leavepending?token=' + val.token).subscribe(function (result) {
                    var that = _this;
                    result.notifications.map(function (value) {
                        that.notifications[value.TargetId] = value;
                    });
                    console.log(_this.notifications);
                });
            });
        });
    };
    MyapprovalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myapproval',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/myapproval/myapproval.html"*/'<!--\n  Generated template for the MyapprovalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="secondary">\n      <ion-title>My Approval</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n<ion-content class="ion-content">\n  <div *ngIf="items.length < 1">\n    <p class="none">No record found</p>\n  </div>\n\n  <ion-item *ngFor="let item of items;">\n    \n    <ion-avatar item-start width="20px" height="20px" class="ion-avatar">\n      <img src="assets/img/myapproval (3).png"  width="20px" height="20px">\n    </ion-avatar>\n    <ion-col [navPush]="myapprovaldetail" [navParams]="item">\n      <p style="color:blueviolet" ALIGN=RIGHT ><b>{{ notifications[item.LeaveId] ? \'New \': \'\'}}</b></p>\n      <!--div class="date">\n      <p>1 hour ago</p>\n      </div-->\n      <div text-wrap>\n\n        <h3>{{item.Start_Date}} </h3>\n      </div>\n      <div text-wrap>\n        {{item.Name}}\n      </div>\n      <div text-wrap class="detail">\n        {{item.Leave_Type}}\n      </div>\n      <p style="color:#fed330">({{item.Status}})</p>\n    </ion-col>\n  </ion-item>\n\n</ion-content>\n  '/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/myapproval/myapproval.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], MyapprovalPage);
    return MyapprovalPage;
}());

//# sourceMappingURL=myapproval.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyapprovaldetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__myapprovalredirect_myapprovalredirect__ = __webpack_require__(510);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};

/**
 * Generated class for the MyapprovaldetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyapprovaldetailPage = /** @class */ (function () {
    function MyapprovaldetailPage(navCtrl, app, http, storage, toast, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.http = http;
        this.storage = storage;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.myapprovalredirect = __WEBPACK_IMPORTED_MODULE_5__myapprovalredirect_myapprovalredirect__["a" /* MyApprovalRedirectPage */];
        this.token = '';
        this.loadData();
        this.Id = this.navParams.get('Id');
        this.Start_Date = this.navParams.get('Start_Date');
        this.Status = this.navParams.get('Status');
        this.Leave_Type = this.navParams.get('Leave_Type');
        this.Leave_Term = this.navParams.get('Leave_Term');
        this.End_Date = this.navParams.get('End_Date');
        this.No_of_Days = this.navParams.get('No_of_Days');
        this.Reason = this.navParams.get('Reason');
        this.Project_Name = this.navParams.get('Project_Name');
        this.Name = this.navParams.get('Name');
        this.Approver = this.navParams.get('Approver');
        this.LeaveId = this.navParams.get('LeaveId');
        this.leave = { LeaveId: this.LeaveId, Project_Name: this.Project_Name };
        this.Web_Path = this.navParams.get('Web_Path');
    }
    MyapprovaldetailPage.prototype.loadData = function () {
        var _this = this;
        var data;
        // Or to get a key/value pair
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/myApprover?token=' + val.token);
            data.subscribe(function (result) {
                _this.items = result;
            });
        });
    };
    MyapprovaldetailPage.prototype.approveLeave = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Approve Leave',
            message: 'Are you sure want to approve this leave?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('No clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Yes clicked');
                        _this.storage.get('token').then(function (val) {
                            _this.http.post('https://jmclicks.com/api/adminapproval?token=' + val.token, {
                                LeaveId: _this.LeaveId,
                                Id: _this.LeaveId
                            }, httpOptions)
                                .subscribe(function (res) {
                                _this.navCtrl.pop();
                                console.log(res);
                                _this.toast.show("Leave approved", '5000', 'center').subscribe(function (toast) {
                                    console.log(toast);
                                });
                            });
                            _this.http.post('https://jmclicks.com/api/notifications/updateleavepending?token=' + val.token, { TargetId: _this.LeaveId }).subscribe(function (result) {
                                console.log(result);
                            });
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    MyapprovaldetailPage.prototype.rejectLeave = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Reject Leave',
            message: 'Are you sure want to reject this leave?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('No clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Yes clicked');
                        _this.storage.get('token').then(function (val) {
                            _this.http.post('https://jmclicks.com/api/adminrejected?token=' + val.token + '&Id=' + _this.LeaveId, {
                                Id: _this.LeaveId
                            }, httpOptions)
                                .subscribe(function (res) {
                                _this.navCtrl.pop();
                                console.log(res);
                                _this.toast.show("Leave rejected", '5000', 'center').subscribe(function (toast) {
                                    console.log(toast);
                                });
                            });
                            _this.http.post('https://jmclicks.com/api/notifications/updateleavepending?token=' + val.token, { TargetId: _this.LeaveId }).subscribe(function (result) {
                                console.log(result);
                            });
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    MyapprovaldetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myapprovaldetail',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/myapprovaldetail/myapprovaldetail.html"*/'<!--\n\n  Generated template for the LeavedetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="secondary">\n\n    <ion-title>Leave Detail</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <h1 text-center>{{Start_Date}}</h1>\n\n\n\n  <br>\n\n  <div class="detail">\n\n    <p>Status: {{Status}} </p>\n\n    <p>Name: {{Name}}</p>\n\n    <p>Leave Type: {{Leave_Type}}</p>\n\n    <p>Leave Term: {{Leave_Term}}</p>\n\n    <p>End Date: {{End_Date}}</p>\n\n    <p>No. of Days: {{No_of_Days}}</p>\n\n    <p>Reason: {{Reason}}</p>\n\n    <p>Project Name: {{Project_Name}}</p>\n\n    <p>Approver: {{Approver}}</p>\n\n    <br>\n\n  </div>\n\n\n\n  <div *ngIf="Web_Path" class="thumbnail-container">\n\n    <ul class="thumbnail-list">\n\n      <img class="thumbnail-image" [src]="\'https://jmclicks.com\' + Web_Path" imageViewer>\n\n    </ul>\n\n  </div>\n\n\n\n\n\n  <div class="row">\n\n    <div class="col">\n\n      <button ion-button full color="primary" class="button-redirect" [navPush]="myapprovalredirect" [navParams]="leave">\n\n        Redirect\n\n      </button>\n\n    </div>\n\n    <div class="col">\n\n      <button ion-button full class="button-approve" type="submit" (click)="approveLeave()">\n\n        Approve\n\n      </button>\n\n    </div>\n\n      <div class="col">\n\n      <button ion-button full color="danger" type="submit" (click)="rejectLeave()">\n\n        Reject\n\n      </button>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/myapprovaldetail/myapprovaldetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], MyapprovaldetailPage);
    return MyapprovaldetailPage;
}());

//# sourceMappingURL=myapprovaldetail.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApprovalRedirectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
var MyApprovalRedirectPage = /** @class */ (function () {
    function MyApprovalRedirectPage(navCtrl, app, http, storage, loadingCtrl, toast, navParams) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.http = http;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.toast = toast;
        this.navParams = navParams;
        this.token = '';
        this.Department = '';
        this.Approver = '';
        //this.loadData();
        this.Project_Name = this.navParams.get('Project_Name');
        this.Approver = this.navParams.get('Approver');
        this.StatusIds = this.navParams.get('StatusIds');
        this.LeaveId = this.navParams.get('LeaveId');
        this.Name = this.navParams.get('Name');
        // this.StatusIds = this.navParams.get('StatusIds');
        console.log(this.LeaveId);
    }
    MyApprovalRedirectPage.prototype.ngOnInit = function () {
        this.signupform = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormGroup */]({
            // Department: new FormControl('',[Validators.required]),
            Approver: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required]),
        });
    };
    MyApprovalRedirectPage.prototype.ionViewWillEnter = function () {
        this.loadData();
    };
    MyApprovalRedirectPage.prototype.loadData = function () {
        var _this = this;
        var data;
        // Or to get a key/value pair
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/getleavesapproved?token=' + val.token);
            data.subscribe(function (result) {
                _this.items = result;
            });
        });
        // Department
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/getprojects?token=' + val.token);
            data.subscribe(function (result) {
                console.log(result);
                _this.departs = result;
            });
        });
        // Approver
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/getapprover?token=' + val.token);
            data.subscribe(function (result) {
                console.log(result);
                _this.apps = result;
                //filter array
                var arrApps = [];
                for (var _i = 0, _a = _this.apps; _i < _a.length; _i++) {
                    var app = _a[_i];
                    if (app.Project_Name == _this.Project_Name) {
                        arrApps.push(app);
                    }
                }
                console.log(arrApps);
                _this.apps = arrApps;
            });
        });
    };
    MyApprovalRedirectPage.prototype.redirectApproval = function () {
        var _this = this;
        this.storage.get('token').then(function (val) {
            return _this.http.post('https://jmclicks.com/api/redirect?token=' + val.token, {
                ProjectId: _this.Department,
                Approver: _this.Approver,
                Id: _this.LeaveId,
            }, httpOptions)
                .subscribe(function (res) {
                _this.http.post('https://jmclicks.com/api/notifications/updateleavepending?token=' + val.token, { TargetId: _this.LeaveId }).subscribe(function (result) {
                    console.log(result);
                });
                _this.navCtrl.popTo(_this.navCtrl.getByIndex(_this.navCtrl.length() - 3));
                console.log(res);
                _this.toast.show("Redirect succesfull", '5000', 'center').subscribe(function (toast) {
                    console.log(toast);
                });
            });
        });
    };
    MyApprovalRedirectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myapprovalredirect',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/myapprovalredirect/myapprovalredirect.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Admin Leave Redirect</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content  class="ion-content">      \n\n  <form novalidate (ngSubmit)="redirectApproval()" [formGroup]="signupform">\n\n\n\n    <ion-item>\n\n      <ion-label stacked color="primary">Approver</ion-label>\n\n      <P class="error" *ngIf="signupform.get(\'Approver\').hasError(\'required\') && signupform.get(\'Approver\').touched">\n\n        Please select your approver\n\n        </P>\n\n      <ion-select placeholder="please select" [(ngModel)]="Approver" formControlName="Approver" [class.error1]="!signupform.controls.Approver.valid && signupform.controls.Approver.dirty">\n\n          <ion-option *ngFor="let app of apps" value="{{app.Id}}">{{app.Name}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <br><br>\n\n\n\n    <button ion-button full item-right class="doc-button" [disabled]="signupform.invalid">Submit</button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/myapprovalredirect/myapprovalredirect.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], MyApprovalRedirectPage);
    return MyApprovalRedirectPage;
}());

//# sourceMappingURL=myapprovalredirect.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeavestatusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__leavepending_leavepending__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__leaveapprove_leaveapprove__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__leavereject_leavereject__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__leavecancel_leavecancel__ = __webpack_require__(519);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};




/**
 * Generated class for the LeavestatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
*/
var LeavestatusPage = /** @class */ (function () {
    function LeavestatusPage(navCtrl, navParams, storage, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        this.tab1 = __WEBPACK_IMPORTED_MODULE_4__leavepending_leavepending__["a" /* LeavependingPage */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_5__leaveapprove_leaveapprove__["a" /* LeaveapprovePage */];
        this.tab3 = __WEBPACK_IMPORTED_MODULE_6__leavereject_leavereject__["a" /* LeaverejectPage */];
        this.tab4 = __WEBPACK_IMPORTED_MODULE_7__leavecancel_leavecancel__["a" /* LeavecancelPage */];
        this.approvedLeaveBadgeCount = 0;
        this.rejectedLeaveBadgeCount = 0;
        this.cancelledLeaveBadgeCount = 0;
    }
    LeavestatusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LeavestatusPage');
    };
    LeavestatusPage.prototype.ionViewWillEnter = function () {
        this.loadData();
    };
    LeavestatusPage.prototype.loadData = function () {
        var _this = this;
        this.storage.get('token').then(function (val) {
            _this.http.get('https://jmclicks.com/api/notifications/leaveapproved?token=' + val.token).subscribe(function (result) {
                _this.approvedLeaveBadgeCount = result.badge_count > 0 ? result.badge_count : null;
            });
        });
        this.storage.get('token').then(function (val) {
            _this.http.get('https://jmclicks.com/api/notifications/leaverejected?token=' + val.token).subscribe(function (result) {
                _this.rejectedLeaveBadgeCount = result.badge_count > 0 ? result.badge_count : null;
            });
        });
        this.storage.get('token').then(function (val) {
            _this.http.get('https://jmclicks.com/api/notifications/leavecancelled?token=' + val.token).subscribe(function (result) {
                _this.cancelledLeaveBadgeCount = result.badge_count > 0 ? result.badge_count : null;
            });
        });
    };
    LeavestatusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-leavestatus',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/leavestatus/leavestatus.html"*/'\n<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>Leave Status</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-tabs tabsPlacement= \'top\'>\n    <ion-tab [root]="tab1" tabTitle="Pending" tabsHideOnSubPages="true"></ion-tab>\n    <ion-tab [root]="tab2" tabTitle="Approved" [tabBadge]="approvedLeaveBadgeCount" tabsHideOnSubPages="true" ></ion-tab>\n    <ion-tab [root]="tab3" tabTitle="Rejected" [tabBadge]="rejectedLeaveBadgeCount" tabsHideOnSubPages="true"></ion-tab>\n    <ion-tab [root]="tab4" tabTitle="Cancelled" [tabBadge]="cancelledLeaveBadgeCount" tabsHideOnSubPages="true"></ion-tab>\n  </ion-tabs>\n</ion-content>\n'/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/leavestatus/leavestatus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], LeavestatusPage);
    return LeavestatusPage;
}());

//# sourceMappingURL=leavestatus.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeavependingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__leavependingdetail_leavependingdetail__ = __webpack_require__(513);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LeavependingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LeavependingPage = /** @class */ (function () {
    function LeavependingPage(navCtrl, navParams, app, http, events, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.http = http;
        this.events = events;
        this.storage = storage;
        this.items = [];
        this.token = '';
        this.leavependingdetail = __WEBPACK_IMPORTED_MODULE_4__leavependingdetail_leavependingdetail__["a" /* LeavependingdetailPage */];
        this.notifications = [];
        events.subscribe('leavepending', function () {
            // user and time are the same arguments passed in `events.publish(user, time)`
            _this.loadData();
        });
    }
    LeavependingPage.prototype.ionViewDidEnter = function () {
        this.loadData();
    };
    LeavependingPage.prototype.gotoPage = function (item) {
        var nav = this.app.getRootNav();
        nav.push(this.leavependingdetail, item);
    };
    LeavependingPage.prototype.loadData = function () {
        var _this = this;
        var data;
        // Or to get a key/value pair
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/getleaves?token=' + val.token);
            data.subscribe(function (result) {
                _this.items = result;
            });
            _this.storage.get('token').then(function (val) {
                _this.http.get('https://jmclicks.com/api/notifications/leavepending?token=' + val.token).subscribe(function (result) {
                    var that = _this;
                    result.notifications.map(function (value) {
                        that.notifications[value.TargetId] = value;
                    });
                    console.log(_this.notifications);
                });
            });
        });
    };
    LeavependingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-leavepending',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/leavepending/leavepending.html"*/'<!--\n  Generated template for the LeavependingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content>\n  <div *ngIf="items && items.length < 1">\n    <p class="none">No record found</p>\n  </div>\n  <ion-item *ngFor="let item of items;" (click)="gotoPage(item)">\n    <ion-avatar item-start width="20px" height="20px" class="ion-avatar">\n      <img src="assets/img/leave status (2).png"  width="20px" height="20px">\n    </ion-avatar>\n    <p style="color:blueviolet" ALIGN=RIGHT ><b>{{ notifications[item.LeaveId] ? \'New \': \'\'}}</b></p>\n    <h3>{{item.Start_Date}}</h3>\n    <div text-wrap class="detail">\n        {{item.Leave_Type}}\n    </div>\n    <p class="p">{{item.Status}}</p>\n  </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/leavepending/leavepending.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], LeavependingPage);
    return LeavependingPage;
}());

//# sourceMappingURL=leavepending.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeavependingdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__leavependingredirect_leavependingredirect__ = __webpack_require__(514);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};

/**
 * Generated class for the LeavependingdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LeavependingdetailPage = /** @class */ (function () {
    function LeavependingdetailPage(toast, navCtrl, navParams, app, http, alertCtrl, storage, events) {
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.events = events;
        this.leavependingredirect = __WEBPACK_IMPORTED_MODULE_5__leavependingredirect_leavependingredirect__["a" /* LeavePendingRedirectPage */];
        this.token = '';
        this.Id = this.navParams.get('Id');
        this.Start_Date = this.navParams.get('Start_Date');
        this.Status = this.navParams.get('Status');
        this.Leave_Type = this.navParams.get('Leave_Type');
        this.Leave_Term = this.navParams.get('Leave_Term');
        this.End_Date = this.navParams.get('End_Date');
        this.No_of_Days = this.navParams.get('No_of_Days');
        this.Reason = this.navParams.get('Reason');
        this.Project_Name = this.navParams.get('Project_Name');
        this.Approver = this.navParams.get('Approver');
        console.log(this.Project_Name);
        this.LeaveId = this.navParams.get('Id');
        this.leave = { LeaveId: this.LeaveId, Project_Name: this.Project_Name };
        this.Web_Path = this.navParams.get('Web_Path');
    }
    LeavependingdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LeavedetailPage');
    };
    LeavependingdetailPage.prototype.ionViewDidEnter = function () {
        this.loadData();
    };
    LeavependingdetailPage.prototype.loadData = function () {
        var _this = this;
        var data;
        // Or to get a key/value pair
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/getleaves?token=' + val.token);
            data.subscribe(function (result) {
                _this.items = result;
            });
        });
    };
    LeavependingdetailPage.prototype.cancelLeave = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Cancel leave submitted?',
            message: 'Are you sure want to cancel leave submitted?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('No clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Yes clicked');
                        _this.storage.get('token').then(function (val) {
                            _this.http.post('https://jmclicks.com/api/cancelleave?token=' + val.token + '&Id=' + _this.LeaveId, {}, httpOptions)
                                .subscribe(function (res) {
                                _this.events.publish('leavepending');
                                _this.navCtrl.pop();
                                console.log(res);
                                _this.toast.show("Leave cancelled", '5000', 'center').subscribe(function (toast) {
                                    console.log(toast);
                                });
                            });
                            _this.http.post('https://jmclicks.com/api/notifications/updateleavecancelled?token=' + val.token, { TargetId: _this.LeaveId }).subscribe(function (result) {
                                console.log(result);
                            });
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    LeavependingdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-leavependingdetail',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/leavependingdetail/leavependingdetail.html"*/'<!--\n\nGenerated template for the LeavedetailPage page.\n\n\n\nSee http://ionicframework.com/docs/components/#navigation for more info on\n\nIonic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="secondary">\n\n    <ion-title >Leave Detail</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <h1 text-center>{{Start_Date}}</h1>\n\n\n\n  <br>\n\n  <div class="detail">\n\n    <p>Status: {{Status}} </p>\n\n    <p>Leave Type: {{Leave_Type}} </p>\n\n    <p>Leave Term: {{Leave_Term}} </p>\n\n    <p>End Date: {{End_Date}} </p>\n\n    <p>No. of Days: {{No_of_Days}} </p>\n\n    <p>Reason: {{Reason}} </p>\n\n    <p>Project Name: {{Project_Name}} </p>\n\n    <p>Approver: {{Approver}} </p>\n\n  </div>\n\n\n\n  <div *ngIf="Web_Path" class="thumbnail-container">\n\n    <ul class="thumbnail-list">\n\n      <img class="thumbnail-image" [src]="\'https://jmclicks.com\' + Web_Path" imageViewer>\n\n    </ul>\n\n  </div>\n\n\n\n  <div class="row">\n\n    <div class="col" hidden>\n\n      <button ion-button full color="primary" class="button-redirect" [navPush]="leavependingredirect" [navParams]="leave">\n\n        Redirect\n\n      </button>\n\n    </div>\n\n    <div class="col">\n\n      <button ion-button full color="danger" type="submit" (click)="cancelLeave()">\n\n        Cancel Leave\n\n      </button>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/leavependingdetail/leavependingdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], LeavependingdetailPage);
    return LeavependingdetailPage;
}());

//# sourceMappingURL=leavependingdetail.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeavePendingRedirectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
var LeavePendingRedirectPage = /** @class */ (function () {
    function LeavePendingRedirectPage(navCtrl, app, http, storage, loadingCtrl, toast, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.http = http;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.token = '';
        this.Department = '';
        this.Approver = '';
        //this.loadData();
        this.Project_Name = this.navParams.get('Project_Name');
        this.Approver = this.navParams.get('Approver');
        this.Id = this.navParams.get('Id');
        this.LeaveId = this.navParams.get('LeaveId');
        // console.log(this.LeaveId);
    }
    LeavePendingRedirectPage.prototype.ngOnInit = function () {
        this.signupform = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormGroup */]({
            // Department: new FormControl('',[Validators.required]),
            Approver: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required]),
        });
    };
    LeavePendingRedirectPage.prototype.ionViewWillEnter = function () {
        this.loadData();
    };
    LeavePendingRedirectPage.prototype.loadData = function () {
        var _this = this;
        var data;
        // Or to get a key/value pair
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/getclaimsheet?token=' + val.token);
            data.subscribe(function (result) {
                _this.items = result;
            });
        });
        // Department
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/getprojects?token=' + val.token);
            data.subscribe(function (result) {
                console.log(result);
                _this.departs = result;
            });
        });
        // Approver
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/getapprover?token=' + val.token);
            data.subscribe(function (result) {
                console.log(result);
                _this.apps = result;
                //filter array
                var arrApps = [];
                for (var _i = 0, _a = _this.apps; _i < _a.length; _i++) {
                    var app = _a[_i];
                    if (app.Project_Name == _this.Project_Name) {
                        arrApps.push(app);
                    }
                }
                console.log(arrApps);
                _this.apps = arrApps;
            });
        });
    };
    LeavePendingRedirectPage.prototype.redirectLeave = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Redirect Leave?',
            message: 'Are you sure want to redirect this leave?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('No clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Yes clicked');
                        _this.storage.get('token').then(function (val) {
                            _this.http.post('https://jmclicks.com/api/redirect2?token=' + val.token, {
                                ProjectId: _this.Department,
                                Approver: _this.Approver,
                                Id: _this.LeaveId,
                                LeaveId: _this.LeaveId,
                            }, httpOptions)
                                .subscribe(function (res) {
                                _this.navCtrl.popTo(_this.navCtrl.getByIndex(_this.navCtrl.length() - 3));
                                console.log(res);
                                _this.toast.show('Redirect succesfull', '5000', 'center').subscribe(function (toast) {
                                    console.log(toast);
                                });
                            });
                            _this.http.post('https://jmclicks.com/api/notifications/updateleavepending?token=' + val.token, { TargetId: _this.LeaveId }).subscribe(function (result) {
                                console.log(result);
                            });
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    LeavePendingRedirectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-leavependingredirect',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/leavependingredirect/leavependingredirect.html"*/'<ion-header>\n\n  <ion-navbar color="darkblue">\n\n        <ion-toolbar>\n\n            <ion-title>Leave Pending  Redirect</ion-title>\n\n        </ion-toolbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n  \n\n<ion-content  class="ion-content">      \n\n  <form novalidate (ngSubmit)="redirectLeave()" [formGroup]="signupform">\n\n\n\n    <ion-item>\n\n      <ion-label stacked color="primary">Approver</ion-label>\n\n      <P class="error" *ngIf="signupform.get(\'Approver\').hasError(\'required\') && signupform.get(\'Approver\').touched">\n\n        Please select your approver\n\n        </P>\n\n      <ion-select placeholder="please select" [(ngModel)]="Approver" formControlName="Approver" [class.error1]="!signupform.controls.Approver.valid && signupform.controls.Approver.dirty">\n\n          <ion-option *ngFor="let app of apps" value="{{app.Id}}">{{app.Name}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <br><br>\n\n\n\n    <button ion-button full item-right class="doc-button" [disabled]="signupform.invalid">Submit</button>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/leavependingredirect/leavependingredirect.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], LeavePendingRedirectPage);
    return LeavePendingRedirectPage;
}());

//# sourceMappingURL=leavependingredirect.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaveapprovePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__leaveapprovedetail_leaveapprovedetail__ = __webpack_require__(516);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LeaveapprovePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LeaveapprovePage = /** @class */ (function () {
    function LeaveapprovePage(navCtrl, navParams, app, http, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.http = http;
        this.storage = storage;
        this.token = '';
        this.leaveapprovedetail = __WEBPACK_IMPORTED_MODULE_4__leaveapprovedetail_leaveapprovedetail__["a" /* LeaveapprovedetailPage */];
        this.notifications = [];
    }
    LeaveapprovePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LeaveapprovePage');
    };
    LeaveapprovePage.prototype.ionViewDidEnter = function () {
        this.loadData();
    };
    LeaveapprovePage.prototype.gotoPage = function (item) {
        var nav = this.app.getRootNav();
        nav.push(this.leaveapprovedetail, item);
    };
    LeaveapprovePage.prototype.loadData = function () {
        var _this = this;
        var data;
        // Or to get a key/value pair
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/getleavesapproved?token=' + val.token);
            data.subscribe(function (result) {
                _this.items = result;
            });
            _this.storage.get('token').then(function (val) {
                _this.http.get('https://jmclicks.com/api/notifications/leaveapproved?token=' + val.token).subscribe(function (result) {
                    var that = _this;
                    result.notifications.map(function (value) {
                        that.notifications[value.TargetId] = value;
                    });
                    console.log(_this.notifications);
                });
            });
        });
    };
    LeaveapprovePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-leaveapprove',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/leaveapprove/leaveapprove.html"*/'<!--\n  Generated template for the LeaveapprovePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content padding>\n  <div *ngIf="items && items.length < 1">\n    <p class="none">No record found</p>\n  </div>\n  <ion-item *ngFor="let item of items;" (click)="gotoPage(item)">\n    <ion-avatar item-start width="20px" height="20px" class="ion-avatar">\n      <img src="assets/img/leave-approve (2).png"  width="20px" height="20px">\n    </ion-avatar>\n    <p style="color:rgb(72, 48, 95)" ALIGN=RIGHT ><b>{{ notifications[item.Id] ? \'New \': \'\'}}</b></p>\n\n    <h3>{{item.Start_Date}}</h3>\n    <div text-wrap class="detail">\n      {{item.Leave_Type}}\n    </div>\n    <p class="p">{{item.Status}}</p>\n  </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/leaveapprove/leaveapprove.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], LeaveapprovePage);
    return LeaveapprovePage;
}());

//# sourceMappingURL=leaveapprove.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaveapprovedetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
/**
 * Generated class for the LeaveapprovedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LeaveapprovedetailPage = /** @class */ (function () {
    function LeaveapprovedetailPage(navCtrl, app, http, storage, navParams) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.http = http;
        this.storage = storage;
        this.navParams = navParams;
        this.token = '';
        this.loadData();
        this.Id = this.navParams.get('Id');
        this.Start_Date = this.navParams.get('Start_Date');
        this.Status = this.navParams.get('Status');
        this.Leave_Type = this.navParams.get('Leave_Type');
        this.Leave_Term = this.navParams.get('Leave_Term');
        this.End_Date = this.navParams.get('End_Date');
        this.No_of_Days = this.navParams.get('No_of_Days');
        this.Reason = this.navParams.get('Reason');
        this.Project_Name = this.navParams.get('Project_Name');
        this.Approver = this.navParams.get('Approver');
        this.Web_Path = this.navParams.get('Web_Path');
        this.LeaveId = this.navParams.get('Id');
        this.leave = { LeaveId: this.LeaveId, Project_Name: this.Project_Name };
    }
    LeaveapprovedetailPage.prototype.loadData = function () {
        var _this = this;
        var data;
        // Or to get a key/value pair
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/getleavesapproved?token=' + val.token);
            data.subscribe(function (result) {
                _this.items = result;
            });
            _this.http.post('https://jmclicks.com/api/notifications/updateleaveapproved?token=' + val.token, { TargetId: _this.LeaveId }).subscribe(function (result) {
                console.log(result);
            });
        });
    };
    LeaveapprovedetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-leaveapprovedetail',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/leaveapprovedetail/leaveapprovedetail.html"*/'<!--\n\n  Generated template for the LeavedetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="secondary">\n\n    <ion-title>Leave Detail</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <h1 text-center>{{Start_Date}}</h1>\n\n  <br>\n\n  <div class="detail">\n\n    <p>Status: {{Status}} </p>\n\n    <p>Leave Type: {{Leave_Type}} </p>\n\n    <p>Leave Term: {{Leave_Term}} </p>\n\n    <p>End Date: {{End_Date}} </p>\n\n    <p>No. of Days: {{No_of_Days}} </p>\n\n    <p>Reason: {{Reason}} </p>\n\n    <p>Project Name: {{Project_Name}} </p>\n\n    <p>Approver: {{Approver}} </p>\n\n    <br>\n\n  </div>\n\n\n\n  <div *ngIf="Web_Path" class="thumbnail-container">\n\n    <ul class="thumbnail-list">\n\n      <img class="thumbnail-image" [src]="\'https://jmclicks.com\' + Web_Path" imageViewer>\n\n    </ul>\n\n  </div>\n\n\n\n  <!-- <div class="row">\n\n    <div class="col">\n\n      <button ion-button full color="danger">\n\n        Cancel Leave\n\n      </button>\n\n    </div>\n\n  </div> -->\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/leaveapprovedetail/leaveapprovedetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], LeaveapprovedetailPage);
    return LeaveapprovedetailPage;
}());

//# sourceMappingURL=leaveapprovedetail.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaverejectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__leaverejectdetail_leaverejectdetail__ = __webpack_require__(518);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LeaverejectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LeaverejectPage = /** @class */ (function () {
    function LeaverejectPage(navCtrl, navParams, http, app, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.app = app;
        this.storage = storage;
        this.items = [];
        this.token = '';
        this.notifications = [];
        this.leaverejectdetail = __WEBPACK_IMPORTED_MODULE_4__leaverejectdetail_leaverejectdetail__["a" /* LeaverejectdetailPage */];
    }
    LeaverejectPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LeaverejectedPage');
    };
    LeaverejectPage.prototype.ionViewDidEnter = function () {
        this.loadData();
    };
    LeaverejectPage.prototype.gotoPage = function (item) {
        var nav = this.app.getRootNav();
        nav.push(this.leaverejectdetail, item);
    };
    LeaverejectPage.prototype.loadData = function () {
        var _this = this;
        var data;
        // Or to get a key/value pair
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/getleavesrejected?token=' + val.token);
            data.subscribe(function (result) {
                _this.items = result;
            });
            _this.storage.get('token').then(function (val) {
                _this.http.get('https://jmclicks.com/api/notifications/leaverejected?token=' + val.token).subscribe(function (result) {
                    var that = _this;
                    result.notifications.map(function (value) {
                        that.notifications[value.TargetId] = value;
                    });
                    console.log(_this.notifications);
                });
            });
        });
    };
    LeaverejectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-leavereject',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/leavereject/leavereject.html"*/'<!--\n  Generated template for the LeaverejectedPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content class="ion-content">\n  <div *ngIf="items && items.length < 1">\n    <p class="none">No record found</p>\n  </div>\n  <ion-item *ngFor="let item of items;" (click)="gotoPage(item)">\n    <ion-avatar item-start width="20px" height="20px" class="ion-avatar">\n      <img src="assets/img/leave-reject.png"  width="20px" height="20px">\n    </ion-avatar>\n    <p style="color:rgb(72, 48, 95)" ALIGN=RIGHT ><b>{{ notifications[item.Id] ? \'New \': \'\'}}</b></p>\n\n    <h3>{{item.Start_Date}}</h3>\n    <div text-wrap class="detail">\n      {{item.Leave_Type}}\n    </div>\n    <p class="p">{{item.Status}}</p>\n  </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/leavereject/leavereject.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], LeaverejectPage);
    return LeaverejectPage;
}());

//# sourceMappingURL=leavereject.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaverejectdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
/**
 * Generated class for the LeaverejectdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LeaverejectdetailPage = /** @class */ (function () {
    function LeaverejectdetailPage(navCtrl, app, http, storage, navParams) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.http = http;
        this.storage = storage;
        this.navParams = navParams;
        this.token = '';
        this.loadData();
        this.Id = this.navParams.get('Id');
        this.Start_Date = this.navParams.get('Start_Date');
        this.Status = this.navParams.get('Status');
        this.Leave_Type = this.navParams.get('Leave_Type');
        this.Leave_Term = this.navParams.get('Leave_Term');
        this.End_Date = this.navParams.get('End_Date');
        this.No_of_Days = this.navParams.get('No_of_Days');
        this.Reason = this.navParams.get('Reason');
        this.Project_Name = this.navParams.get('Project_Name');
        this.Approver = this.navParams.get('Approver');
        this.Web_Path = this.navParams.get('Web_Path');
        this.LeaveId = this.navParams.get('Id');
    }
    LeaverejectdetailPage.prototype.loadData = function () {
        var _this = this;
        var data;
        // Or to get a key/value pair
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/getleavesrejected?token=' + val.token);
            data.subscribe(function (result) {
                _this.items = result;
            });
            _this.http.post('https://jmclicks.com/api/notifications/updateleaverejected?token=' + val.token, { TargetId: _this.LeaveId }).subscribe(function (result) {
                console.log(result);
            });
        });
    };
    LeaverejectdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-leaverejectdetail',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/leaverejectdetail/leaverejectdetail.html"*/'<!--\n\n  Generated template for the LeavedetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="secondary">\n\n    <ion-title>Leave Detail</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <h1 text-center>{{Start_Date}}</h1>\n\n  <br>\n\n  <div class="detail">\n\n    <p>Status: {{Status}} </p>\n\n    <p>Leave Type: {{Leave_Type}} </p>\n\n    <p>Leave Term: {{Leave_Term}} </p>\n\n    <p>End Date: {{End_Date}} </p>\n\n    <p>No. of Days: {{No_of_Days}} </p>\n\n    <p>Reason: {{Reason}} </p>\n\n    <p>Project Name: {{Project_Name}} </p>\n\n    <p>Approver: {{Approver}} </p>\n\n    <br>\n\n  </div>\n\n\n\n  <div *ngIf="Web_Path" class="thumbnail-container">\n\n    <ul class="thumbnail-list">\n\n      <img class="thumbnail-image" [src]="\'https://jmclicks.com\' + Web_Path" imageViewer>\n\n    </ul>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/leaverejectdetail/leaverejectdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], LeaverejectdetailPage);
    return LeaverejectdetailPage;
}());

//# sourceMappingURL=leaverejectdetail.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeavecancelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__leavecanceldetail_leavecanceldetail__ = __webpack_require__(520);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LeavecancelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LeavecancelPage = /** @class */ (function () {
    function LeavecancelPage(navCtrl, navParams, app, http, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.http = http;
        this.storage = storage;
        this.items = [];
        this.token = '';
        this.notifications = [];
        this.leavecanceldetail = __WEBPACK_IMPORTED_MODULE_4__leavecanceldetail_leavecanceldetail__["a" /* LeavecanceldetailPage */];
    }
    LeavecancelPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LeavecancelledPage');
    };
    LeavecancelPage.prototype.ionViewWillEnter = function () {
        this.loadData();
    };
    LeavecancelPage.prototype.gotoPage = function (item) {
        var nav = this.app.getRootNav();
        nav.push(this.leavecanceldetail, item);
    };
    LeavecancelPage.prototype.loadData = function () {
        var _this = this;
        var data;
        // Or to get a key/value pair
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/getleavescancelled?token=' + val.token);
            data.subscribe(function (result) {
                _this.items = result;
            });
            _this.storage.get('token').then(function (val) {
                _this.http.get('https://jmclicks.com/api/notifications/leavecancelled?token=' + val.token).subscribe(function (result) {
                    var that = _this;
                    result.notifications.map(function (value) {
                        that.notifications[value.TargetId] = value;
                    });
                    console.log(_this.notifications);
                });
            });
        });
    };
    LeavecancelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-leavecancel',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/leavecancel/leavecancel.html"*/'<!--\n  Generated template for the LeaverejectedPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content class="ion-content">\n  <div *ngIf="items && items.length < 1">\n    <p class="none">No record found</p>\n  </div>\n  <ion-item *ngFor="let item of items;" (click)="gotoPage(item)">\n    <ion-avatar item-start width="20px" height="20px" class="ion-avatar">\n      <img src="assets/img/leave-cancel (2).png"  width="20px" height="20px">\n    </ion-avatar>\n    <p style="color:rgb(72, 48, 95)" ALIGN=RIGHT ><b>{{ notifications[item.Id] ? \'New \': \'\'}}</b></p>\n     \n    <h3>{{item.Start_Date}}</h3>\n    <div text-wrap class="detail">\n      {{item.Leave_Type}}\n    </div>\n    <p class="p">{{item.Status}}</p>\n  </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/leavecancel/leavecancel.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], LeavecancelPage);
    return LeavecancelPage;
}());

//# sourceMappingURL=leavecancel.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeavecanceldetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
/**
 * Generated class for the LeavecanceldetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
*/
var LeavecanceldetailPage = /** @class */ (function () {
    function LeavecanceldetailPage(navCtrl, app, http, storage, navParams) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.http = http;
        this.storage = storage;
        this.navParams = navParams;
        this.token = '';
        this.loadData();
        this.Id = this.navParams.get('Id');
        this.Start_Date = this.navParams.get('Start_Date');
        this.Status = this.navParams.get('Status');
        this.Leave_Type = this.navParams.get('Leave_Type');
        this.Leave_Term = this.navParams.get('Leave_Term');
        this.End_Date = this.navParams.get('End_Date');
        this.No_of_Days = this.navParams.get('No_of_Days');
        this.Reason = this.navParams.get('Reason');
        this.Project_Name = this.navParams.get('Project_Name');
        this.Approver = this.navParams.get('Approver');
        this.Web_Path = this.navParams.get('Web_Path');
        this.LeaveId = this.navParams.get('Id');
    }
    LeavecanceldetailPage.prototype.loadData = function () {
        var _this = this;
        var data;
        // Or to get a key/value pair
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/getleavescancelled?token=' + val.token);
            data.subscribe(function (result) {
                _this.items = result;
            });
            _this.http.post('https://jmclicks.com/api/notifications/updateleavecancelled?token=' + val.token, { TargetId: _this.LeaveId }).subscribe(function (result) {
                console.log(result);
            });
        });
    };
    LeavecanceldetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-leavecanceldetail',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/leavecanceldetail/leavecanceldetail.html"*/'<!--\n\n  Generated template for the LeavedetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="secondary">\n\n    <ion-title>Leave Detail</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <h1 text-center>{{Start_Date}}</h1>\n\n  <br>\n\n  <div class="detail">\n\n    <p>Status: {{Status}} </p>\n\n    <p>Leave Type: {{Leave_Type}} </p>\n\n    <p>Leave Term: {{Leave_Term}} </p>\n\n    <p>End Date: {{End_Date}} </p>\n\n    <p>No. of Days: {{No_of_Days}} </p>\n\n    <p>Reason: {{Reason}} </p>\n\n    <p>Project Name: {{Project_Name}} </p>\n\n    <p>Approver: {{Approver}} </p>\n\n    <br>\n\n  </div>\n\n\n\n  <div *ngIf="Web_Path" class="thumbnail-container">\n\n    <ul class="thumbnail-list">\n\n      <img class="thumbnail-image" [src]="\'https://jmclicks.com\' + Web_Path" imageViewer>\n\n    </ul>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/leavecanceldetail/leavecanceldetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], LeavecanceldetailPage);
    return LeavecanceldetailPage;
}());

//# sourceMappingURL=leavecanceldetail.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeavebalancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
/**
 * Generated class for the LeavebalancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LeavebalancePage = /** @class */ (function () {
    function LeavebalancePage(navCtrl, http, app, storage, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.app = app;
        this.storage = storage;
        this.navParams = navParams;
        this.token = '';
        this.Leave_Type = '';
        this.loadData();
    }
    LeavebalancePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LeavebalancePage');
    };
    LeavebalancePage.prototype.loadData = function () {
        var _this = this;
        var data;
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/myleavebalance?token=' + val.token);
            data.subscribe(function (result) {
                _this.types = result;
            });
        });
    };
    LeavebalancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-leavebalance',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/leavebalance/leavebalance.html"*/'<!--\n  Generated template for the LeavebalancePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="secondary">\n      <ion-title>Leave Balance</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding class="ion-content-body">\n  <div class="ion-item-body" *ngFor="let type of types;" >\n    <ion-item class="ion-item-item">\n\n      <!-- Leave Balance Details -->\n  \n\n      <!-- Leave Balance = 0 Details -->\n      <div class="ion-item-body">\n        <ion-item class="ion-item-item">\n          <div class="title">{{ type.Leave_Type }}</div>\n          <!-- <p class="balance">Leave Balance: {{type.Total_Leave_Balance}}</p> -->\n          <div *ngIf="type.Total_Leave_Balance == 0 || type.Total_Leave_Balance == null">\n            <h3 class="balance">{{type.Total_Leave_Balance? type.Total_Leave_Balance: 0}}</h3>\n          </div>\n          <div *ngIf="type.Total_Leave_Balance != \'0\' && type.Total_Leave_Balance != null">\n            <h3 class="balance2">{{type.Total_Leave_Balance}}</h3>\n          </div>\n        </ion-item>\n      </div>\n\n    </ion-item>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/leavebalance/leavebalance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], LeavebalancePage);
    return LeavebalancePage;
}());

//# sourceMappingURL=leavebalance.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttendancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_location_accuracy__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_toast__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
/*
 * Generated class for the AttendancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
*/
var AttendancePage = /** @class */ (function () {
    function AttendancePage(navCtrl, geo, alertCtrl, app, http, storage, loadingCtrl, navParams, locationAccuracy, platform, toast, toastCtrl) {
        this.navCtrl = navCtrl;
        this.geo = geo;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.http = http;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.locationAccuracy = locationAccuracy;
        this.platform = platform;
        this.toast = toast;
        this.toastCtrl = toastCtrl;
        this.Name = '';
        this.token = '';
        this.Site_Name_Display = '';
        this.disabled = false;
        this.disabledOut = false;
        //this.enableLocation().then(() =>
        //  this.loadData(), () => this.loadData());
        this.currentDate = new Date();
        this.getFormattedDate();
        this.Date = new Date().toISOString();
        this.Time = this.calculateTime('-4');
        this.Id = this.navParams.get('Id');
        this.Timesheet_Name = this.navParams.get('Timesheet_Name');
        this.Name = this.navParams.get('Name');
        // if(this.Longitude_In == "" || this.Longitude_In =='' || this.Longitude_In == null){
        //   this.enableLocation();
        // }
        // this.Check_In_Type = 'On Duty';
    }
    AttendancePage.prototype.resize = function () {
        var element = this.myInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
        var scrollHeight = element.scrollHeight;
        element.style.height = scrollHeight + 'px';
        this.myInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
    };
    AttendancePage.prototype.ngOnInit = function () {
        this.signupform = new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormGroup */]({
            Check_In_Type: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["h" /* Validators */].required]),
            Department: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["h" /* Validators */].required]),
            Site_Name: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["h" /* Validators */].required]),
        });
        this.Check_In_Type = 'On Duty';
    };
    AttendancePage.prototype.enableLocation = function () {
        var _this = this;
        return this.locationAccuracy.canRequest().then(function (canRequest) {
            if (canRequest) {
                // the accuracy option will be ignored by iOS
                _this.locationAccuracy.request(_this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function () { return alert('Location information is on'); }, function (error) { return alert('Location information is on' + JSON.stringify(error)); });
            }
        });
    };
    AttendancePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AttendancePage');
    };
    AttendancePage.prototype.doRefresh = function () {
        var _this = this;
        // if(this.Longitude_In == "" || this.Longitude_In =='' || this.Longitude_In == null){
        //   this.enableLocation();
        // } else {
        this.platform.ready().then(function () {
            //request location here
            // this.navCtrl.setRoot(this.navCtrl.getActive());
            var loading = _this.loadingCtrl.create({
                content: "Refreshing in...",
                spinner: 'crescent'
            });
            // loading.present();
            _this.geo.getCurrentPosition().then(function (pos) {
                _this.Latitude_In = pos.coords.latitude;
                _this.Longitude_In = pos.coords.longitude;
                loading.dismiss();
                alert('Location Refreshed');
            }).catch(function (err) { return console.log(err); });
        });
        // }
        // console.log('Begin async operation', refresher);
        // this.geo.getCurrentPosition().then( pos => {
        //   this.Latitude_In = pos.coords.latitude;
        //   this.Longitude_In = pos.coords.longitude;
        //   alert('Location Refreshed')
        // }).catch( err => console.log(err));
        // this.loadData()
        // this.enableLocation();
        // this.ionViewDidEnter();
        // setTimeout(() => {
        //   console.log('Async operation has ended');
        //   refresher.complete();
        // },10);
    };
    AttendancePage.prototype.ionViewWillEnter = function () {
        // this.geo.getCurrentPosition().then((position) => {
        //   this.Latitude_In = position.coords.latitude
        //   this.Longitude_In = position.coords.longitude
        //   alert('Location')
        // }).catch((error) => {
        //   alert('error')
        // });
        // this.enableLocation();
        this.loadData();
    };
    AttendancePage.prototype.getFormattedDate = function () {
        var dateObj = new Date();
        var year = dateObj.getFullYear().toString();
        var month = dateObj.getMonth().toString();
        var date = dateObj.getDate().toString();
        var monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.formattedDate = year + '-' + monthArray[month] + '-' + date;
        this.formattedDateObj = new Date(this.formattedDate);
    };
    AttendancePage.prototype.calculateTime = function (offset) {
        // create Date object for current location
        var d = new Date();
        // create new Date object for different city
        // using supplied offset
        var nd = new Date(d.getTime() + (3600000 * offset));
        return nd.toISOString();
    };
    AttendancePage.prototype.myFunction = function (date) {
        var d = new Date(date);
        var monthNames = [
            "Jan", "Feb", "Mar",
            "Apr", "May", "Jun", "Jul",
            "Aug", "Sep", "Oct",
            "Nov", "Dec"
        ];
        var day = ('0' + d.getDate()).slice(-2);
        var monthIndex = d.getMonth();
        var year = d.getFullYear();
        return day + '-' + monthNames[monthIndex] + '-' + year;
    };
    AttendancePage.prototype.startTime = function () {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        // add a zero in front of numbers<10
        return h + ":" + m + ":" + s;
    };
    AttendancePage.prototype.loadData = function () {
        var _this = this;
        this.storage.get('timein_id').then(function (val) {
            _this.Id = val;
        });
        this.storage.get('timein').then(function (val) {
            _this.hideUI = val;
        });
        this.storage.get('user').then(function (val) {
            _this.Name = val.Name;
        });
        this.storage.get('Site_Name').then(function (val) {
            _this.Site_Name_Display = val;
        });
        var data;
        this.geo.getCurrentPosition().then(function (pos) {
            _this.Latitude_In = pos.coords.latitude;
            _this.Longitude_In = pos.coords.longitude;
        }).catch(function (err) { return console.log(err); });
        //  this.geo.getCurrentPosition().then((position) => {
        //   this.Latitude_In = position.coords.latitude
        //   this.Longitude_In = position.coords.longitude
        //     alert('Location')
        //   }).catch((error) => {
        //     alert('error')
        //   });
        // Check_In_Type
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/gettimesheetoption?token=' + val.token);
            data.subscribe(function (result) {
                console.log(result);
                var types = new Array();
                for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                    var res = result_1[_i];
                    if (res.Field == 'Check_In_Type') {
                        types.push(res);
                    }
                }
                _this.types = types;
            });
        });
        // Department
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/getdepartments?token=' + val.token);
            data.subscribe(function (result) {
                console.log(result);
                _this.departs = result;
            });
        });
    };
    AttendancePage.prototype.submitTimeIn = function () {
        var _this = this;
        if (this.Longitude_In == "" || this.Longitude_In == '' || this.Longitude_In == null) {
            this.toast.show("Please turn on your location and make sure Latitude & Longitude got value", '50000', 'center').subscribe(function (toast) {
                console.log(toast);
                // this.navCtrl.setRoot(this.navCtrl.getActive().component);
            });
        }
        else {
            this.disabled = true;
            this.storage.get('token').then(function (val) {
                return _this.http.post('https://jmclicks.com/api/newtimesheet?token=' + val.token, {
                    Latitude_In: _this.Latitude_In,
                    Longitude_In: _this.Longitude_In,
                    Date: _this.myFunction(_this.Date),
                    Time: _this.startTime(),
                    Check_In_Type: _this.Check_In_Type,
                    Department: _this.Department,
                    Site_Name: _this.Site_Name,
                    Leader_Member: '',
                    Next_Person: '',
                    ProjectId: _this.Department,
                    State: '',
                    Work: '',
                    Reason: '',
                    Remarks: '',
                    Work_Description: ''
                }, httpOptions)
                    .subscribe(function (res) {
                    // this.navCtrl.pop();
                    _this.storage.set('timein', true);
                    _this.storage.set('timein_id', res);
                    _this.hideUI = true;
                    _this.Id = res;
                    _this.Site_Name_Display = _this.Site_Name;
                    _this.storage.set('Site_Name', _this.Site_Name);
                    _this.presentToastIn();
                    _this.disabled = false;
                    // this.toast.show(`Time-In success`, '5000', 'center').subscribe(
                    //   toast => {
                    //     console.log(toast);
                    //   }
                    // );
                });
            });
        }
    };
    AttendancePage.prototype.presentToastIn = function () {
        var toast = this.toastCtrl.create({
            message: 'Time-In success',
            position: 'middle',
            closeButtonText: "Ok",
            showCloseButton: true,
            cssClass: 'green'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    AttendancePage.prototype.submitTimeOut = function () {
        var _this = this;
        // this.geo.getCurrentPosition().then( pos => {
        //   this.Latitude_Out = pos.coords.latitude;
        //   this.Longitude_Out = pos.coords.longitude;
        if (this.Longitude_In == "" || this.Longitude_In == '' || this.Longitude_In == null) {
            this.toast.show("Please turn on your location and make sure Latitude & Longitude got value", '50000', 'center').subscribe(function (toast) {
                console.log(toast);
            });
        }
        else {
            this.disabledOut = true;
            this.storage.get('token').then(function (val) {
                return _this.http.post('https://jmclicks.com/api/timeout?token=' + val.token, {
                    Latitude_Out: _this.Latitude_In,
                    Longitude_Out: _this.Longitude_In,
                    Time_Out: _this.startTime(),
                    Id: _this.Id
                }, httpOptions)
                    .subscribe(function (res) {
                    // this.navCtrl.pop();
                    _this.storage.set('timein', false);
                    _this.hideUI = false;
                    console.log(res);
                    _this.disabledOut = false;
                    _this.presentToastOut();
                    // this.toast.show(`Time-Out success`, '5000', 'center').subscribe(
                    //   toast => {
                    //     console.log(toast);
                    //   }
                    // );
                });
                // });
            }).catch(function (err) { return console.log(err); });
        }
    };
    AttendancePage.prototype.presentToastOut = function () {
        var toast = this.toastCtrl.create({
            message: 'Time-Out success',
            position: 'middle',
            closeButtonText: "Ok",
            showCloseButton: true,
            cssClass: 'green'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AttendancePage.prototype, "myInput", void 0);
    AttendancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-attendance',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/attendance/attendance.html"*/'<!--\n\nGenerated template for the AttendancePage page.\n\n\n\nSee http://ionicframework.com/docs/components/#navigation for more info on\n\nIonic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="secondary">\n\n    <ion-title>Attendance</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="ion-content">\n\n  <div class="content-detail">\n\n\n\n    <!-- Name: {{Name}}\n\n    <ion-label>\n\n    {{formattedDate}}\n\n    </ion-label> -->\n\n\n\n    <div class="ion-item-body">\n\n      <ion-item class="ion-item-item">\n\n        <h2 class="title">{{Name}}</h2>\n\n        <h4>{{formattedDate}} </h4>\n\n\n\n      </ion-item>\n\n    </div>\n\n\n\n    <br><br>\n\n\n\n    <div [hidden]="!hideUI">\n\n      <div>\n\n        <h2 class="title">Site Name: {{Site_Name_Display}}</h2>\n\n      </div>\n\n    </div>\n\n\n\n    <div class="box">\n\n      <!-- <ion-refresher (ionRefresh)="doRefresh($event)">\n\n      <ion-refresher-content>\n\n      pullingIcon="arrow-dropdown"\n\n      pullingText="Pull to refresh"\n\n      refreshingSpinner="circles"\n\n      refreshingText="Refreshing..."\n\n      </ion-refresher-content>\n\n      </ion-refresher> -->\n\n\n\n\n\n      <ion-item text-center color="primary" class="top-border">\n\n        Latitude: {{ Latitude_In }}<br>\n\n        Longitude: {{ Longitude_In }}\n\n      </ion-item>\n\n\n\n      <br>\n\n\n\n      <button ion-button class="button-color" type="button" (click)="doRefresh()">Refresh</button>\n\n\n\n      <br>\n\n      <form novalidate (ngSubmit)="submitTimeIn()" [formGroup]="signupform">\n\n\n\n      <!-- Check Type Dropdown -->\n\n      <div class="box-content">\n\n        <ion-item class="ion-item" [hidden]="hideUI">\n\n          <ion-label stacked color="primary"  class="required">Check In Type\n\n            <p class="error" *ngIf="signupform.get(\'Check_In_Type\').hasError(\'required\') && signupform.get(\'Check_In_Type\').touched">\n\n            Please select your check in type\n\n            </p>\n\n          </ion-label>\n\n          <ion-select [(ngModel)]="Check_In_Type" formControlName="Check_In_Type" [class.error1]="!signupform.controls.Check_In_Type.valid && signupform.controls.Check_In_Type.dirty">\n\n\n\n            <ion-option *ngFor="let type of types" value="{{type.Option}}">{{type.Option}}\n\n            </ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </div>\n\n\n\n      <!-- Project Dropdown -->\n\n      <div class="box-content">\n\n        <ion-item class="ion-item" [hidden]="hideUI">\n\n          <ion-label stacked color="primary"  class="required">Project\n\n            <p class="error" *ngIf="signupform.get(\'Department\').hasError(\'required\') && signupform.get(\'Department\').touched">\n\n            Please select your project\n\n            </p>\n\n          </ion-label>\n\n          <ion-select text-wrap [(ngModel)]="Department" formControlName="Department" [class.error1]="!signupform.controls.Department.valid && signupform.controls.Department.dirty">\n\n            <ion-option *ngFor="let depart of departs" value="{{depart.Id}}">{{depart.Project_Name}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </div>\n\n\n\n\n\n      <!-- Sitename textarea -->\n\n      <div class="box-content">\n\n        <ion-item class=ion-item  [hidden]="hideUI">\n\n          <ion-label stacked color="primary" class="required">Site Name</ion-label>\n\n          <ion-input type="text" [(ngModel)]="Site_Name" placeholder="State if not in the list" formControlName="Site_Name" [class.error1]="!signupform.controls.Site_Name.valid && signupform.controls.Site_Name.dirty"></ion-input>\n\n          <div class="error" *ngIf="signupform.get(\'Site_Name\').hasError(\'required\') && signupform.get(\'Site_Name\').touched">\n\n            Please insert your site name\n\n          </div>\n\n        </ion-item>\n\n      </div>\n\n\n\n      <!-- Time In Button -->\n\n      <button ion-button full  class="bottom-border" type="submit" [hidden]="hideUI" [disabled]="signupform.invalid || disabled">Time In</button>\n\n    </form>\n\n\n\n      <br>\n\n\n\n      <button ion-button full  class="bottom-border" type="submit" (click)="submitTimeOut()" [disabled]=\'disabledOut\'\n\n      [hidden]="!hideUI">Time out</button>\n\n\n\n    </div>\n\n  </div>\n\n  <style>\n\n    .required:after { content:" *"; color:red; }\n\n  </style>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/attendance/attendance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_location_accuracy__["a" /* LocationAccuracy */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */]])
    ], AttendancePage);
    return AttendancePage;
}());

//# sourceMappingURL=attendance.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimesheetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tsdetail_tsdetail__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_fullcalendar__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_toast__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};


/**
 * Generated class for the TimesheetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TimesheetPage = /** @class */ (function () {
    function TimesheetPage(navCtrl, alertCtrl, app, toast, http, storage, loadingCtrl, navParams, element) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.toast = toast;
        this.http = http;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.element = element;
        this.token = '';
        this.timesheet = '';
        this.tsdetailPage = __WEBPACK_IMPORTED_MODULE_4__tsdetail_tsdetail__["a" /* TsdetailPage */];
        var date = new Date();
        var firstDay = new Date(date.getFullYear(), date.getMonth(), 2);
        var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 1);
        this.Start_Date = firstDay.toISOString();
        console.log(this.Start_Date);
        this.End_Date = lastDay.toISOString();
        this.loadData();
    }
    TimesheetPage.prototype.ngOnInit = function () {
        this.calendarOptions = {
            header: {
                left: 'title',
                right: 'month,agendaFourDay,'
            },
            footer: {
                right: 'today prev,next',
            },
            views: {
                agendaFourDay: {
                    type: 'listYear',
                    buttonText: 'All'
                }
            },
            // theme:'jquery-ui',
            // height: 'parent',
            fixedWeekCount: false,
            defaultDate: Date(),
            // editable: true,
            allDay: true,
        };
    };
    TimesheetPage.prototype.loadData = function () {
        var _this = this;
        var data;
        // Or to get a key/value pair
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/holiday?token=' + val.token);
            data.subscribe(function (result) {
                _this.items = result;
            });
        });
        this.storage.get('token').then(function (val) {
            _this.http.get('https://jmclicks.com/api/gettimesheetcalendar?token=' + val.token).subscribe(function (result) {
                var arrEvent = [];
                for (var _i = 0, _a = result.calendar; _i < _a.length; _i++) {
                    var res = _a[_i];
                    if (res.Remarks.includes("Forgot to check-out")) {
                        arrEvent.push({
                            title: 'Forgot to check-out!',
                            start: new Date(res.start),
                            end: new Date(res.end),
                            allDay: true,
                            backgroundColor: "#F22613",
                            borderColor: "#F22613",
                        });
                    } /*else if (res.Check_In_Type === "On Leave") {
                      arrEvent.push(
                        {
                          title:   'Leave',
                          start: new Date(res.start),
                          end: new Date(res.end),
                          allDay: true,
                          backgroundColor: "#26A65B", //green
                          borderColor: "#26A65B", //green
                        }
                      )
                    }*/
                    else if (res.Time_In != "" || res.Time_Out != "") {
                        arrEvent.push({
                            title: 'OK!',
                            start: new Date(res.start),
                            end: new Date(res.end),
                            allDay: true,
                            backgroundColor: "#26A65B",
                            borderColor: "#26A65B",
                        });
                    }
                    // console.log(arrEvent);
                }
                ;
                for (var _b = 0, _c = result.leave; _b < _c.length; _b++) {
                    var res = _c[_b];
                    // if (res.Leave_Status.includes("Forgot to check-out"))
                    if (res.Leave_Status != null) {
                        if (res.Leave_Status.includes("Pending")) {
                            arrEvent.push({
                                title: res.Leave_Type,
                                start: new Date(res.start),
                                end: new Date(res.end),
                                allDay: true,
                                backgroundColor: "#fed330",
                                borderColor: "#fed330",
                            });
                        }
                        else if (res.Leave_Status.includes("Approved")) {
                            arrEvent.push({
                                title: res.Leave_Type,
                                start: new Date(res.start),
                                end: new Date(res.end),
                                allDay: true,
                                backgroundColor: "#78e08f",
                                borderColor: "#78e08f",
                            });
                        }
                        else if (res.Leave_Status.includes("Rejected")) {
                            arrEvent.push({
                                title: res.Leave_Type,
                                start: new Date(res.start),
                                end: new Date(res.end),
                                allDay: true,
                                backgroundColor: "#ff0000",
                                borderColor: "#ff0000",
                            });
                        }
                        else if (res.Leave_Status.includes("Cancelled")) {
                            arrEvent.push({
                                title: res.Leave_Type,
                                start: new Date(res.start),
                                end: new Date(res.end),
                                allDay: true,
                                backgroundColor: "#607D8B",
                                borderColor: "#607D8B",
                            });
                        }
                    }
                }
                ;
                for (var _d = 0, _e = result.holiday; _d < _e.length; _d++) {
                    var res = _e[_d];
                    if (res.Holiday != "") {
                        arrEvent.push({
                            title: res.Holiday,
                            start: new Date(res.startD),
                            end: new Date(res.endD),
                            allDay: true,
                        });
                    }
                }
                _this.ucCalendar.fullCalendar('addEventSource', arrEvent);
            });
        });
        this.storage.get('token').then(function (val) {
            _this.http.get('https://jmclicks.com/api/holidaytimesheetcalendar?token=' + val.token).subscribe(function (result) {
                var arrEvent = [];
                for (var _i = 0, _a = result.leave; _i < _a.length; _i++) {
                    var res = _a[_i];
                    // if(res.Status.includes("Approved")) {
                    //   arrEvent.push(
                    //     {
                    //       title:   res.Leave_Type,
                    //       start: new Date(res.start),
                    //       end: new Date(res.end),
                    //       allDay: true,
                    //       backgroundColor: "#26A65B", //green
                    //       borderColor: "#26A65B", //green
                    //     }
                    //   )
                    // }
                    // else if(res.Status.includes("Pending")) {
                    //   arrEvent.push(
                    //     {
                    //       title:   res.Leave_Type,
                    //       start: new Date(res.start),
                    //       end: new Date(res.end),
                    //       allDay: true,
                    //       backgroundColor: "#eed330", //yellow
                    //       borderColor: "#eed330", //yellow
                    //     }
                    //   )
                    // }
                    // else if(res.Status.includes("Rejected")) {
                    //   arrEvent.push(
                    //     {
                    //       title:   res.Leave_Type,
                    //       start: new Date(res.start),
                    //       end: new Date(res.end),
                    //       allDay: true,
                    //       backgroundColor: "#F3122E", //red
                    //       borderColor: "#F3122E", //red
                    //     }
                    //   )
                    // }
                    if (res.Status != "") {
                        arrEvent.push({
                            title: res.Leave_Type,
                            start: new Date(res.start),
                            end: new Date(res.end),
                            allDay: true,
                            backgroundColor: "#A7A4A4",
                            borderColor: "#A7A4A4",
                        });
                    }
                }
                ;
                for (var _b = 0, _c = result.holiday; _b < _c.length; _b++) {
                    var res = _c[_b];
                    if (res.Holiday != "") {
                        arrEvent.push({
                            title: res.Holiday,
                            start: new Date(res.startD),
                            end: new Date(res.endD),
                            allDay: true,
                        });
                    }
                }
                _this.ucCalendar.fullCalendar('addEventSource', arrEvent);
            });
        });
    };
    TimesheetPage.prototype.myFunction = function (date) {
        var monthNames = [
            "Jan", "Feb", "Mar",
            "Apr", "May", "Jun", "Jul",
            "Aug", "Sep", "Oct",
            "Nov", "Dec"
        ];
        var day = date.substring(8, 10);
        var monthIndex = parseInt(date.substring(5, 7)) - 1;
        var year = date.substring(0, 4);
        return day + '-' + monthNames[monthIndex] + '-' + year;
    };
    TimesheetPage.prototype.submitClaim = function () {
        if (this.Start_Date > this.End_Date) {
            this.toast.show("Please insert the correct date", '30000', 'center').subscribe(function (toast) {
                console.log(toast);
            });
        }
        else {
            this.navCtrl.push(this.tsdetailPage, {
                Start_Date: this.myFunction(this.Start_Date),
                End_Date: this.myFunction(this.End_Date)
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5_ng_fullcalendar__["a" /* CalendarComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ng_fullcalendar__["a" /* CalendarComponent */])
    ], TimesheetPage.prototype, "ucCalendar", void 0);
    TimesheetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-timesheet',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/timesheet/timesheet.html"*/'<!--\n  Generated template for the TimesheetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>Timesheet</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="ion-content">\n\n  <!-- <div class="box">\n    <div>\n\n    </div>\n\n  </div>  -->\n\n  <div class="body-timesheet">\n\n    <div class="box">\n      <p class="p">Timesheet Summary View</p>\n      <ion-item class="ion-item">\n        <div *ngIf="calendarOptions">\n          <ng-fullcalendar #ucCalendar [options]="calendarOptions"></ng-fullcalendar>\n      </div>\n      </ion-item>\n    </div>\n\n    <ion-item class="ion-item">\n      <ion-label stacked color="primary">Start Date</ion-label>\n      <ion-datetime pickerFormat="DD MMM YYYY" displayFormat="DD MMM YYYY" max="2100" placeholder="choose start date" [(ngModel)]="Start_Date">\n      </ion-datetime>\n    </ion-item>\n\n    <ion-item class="ion-item">\n      <ion-label stacked color="primary">End Date</ion-label>\n      <ion-datetime pickerFormat="DD MMM YYYY" displayFormat="DD MMM YYYY" max="2100" placeholder="choose end date" [(ngModel)]="End_Date">\n      </ion-datetime>\n    </ion-item>\n\n  </div>\n  <button ion-button  style="width: 95%;" (click)="submitClaim()">View timesheet record</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/timesheet/timesheet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], TimesheetPage);
    return TimesheetPage;
}());

//# sourceMappingURL=timesheet.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TsdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
/**
 * Generated class for the TsdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TsdetailPage = /** @class */ (function () {
    function TsdetailPage(navCtrl, app, http, storage, navParams) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.http = http;
        this.storage = storage;
        this.navParams = navParams;
        this.token = '';
        this.loadData();
        this.Id = this.navParams.get('Id');
        this.Start_Date = this.navParams.get('Start_Date');
        this.Status = this.navParams.get('Status');
        this.Time_In = this.navParams.get('Time_In');
        this.Time_Out = this.navParams.get('Time_Out');
        this.Check_In_Type = this.navParams.get('Check_In_Type');
        this.No_of_Days = this.navParams.get('No_of_Days');
        this.Site_Name = this.navParams.get('Site_Name');
        this.Project_Name = this.navParams.get('Project_Name');
        this.Approver = this.navParams.get('Approver');
        console.log(this.Project_Name);
        this.LeaveId = this.navParams.get('Id');
        this.leave = { LeaveId: this.LeaveId, Project_Name: this.Project_Name };
    }
    TsdetailPage.prototype.myFunction = function (date) {
        var d = new Date(date);
        var weekday = new Array(7);
        weekday[0] = "Sun";
        weekday[1] = "Mon";
        weekday[2] = "Tues";
        weekday[3] = "Wed";
        weekday[4] = "Thur";
        weekday[5] = "Fri";
        weekday[6] = "Sat";
        return weekday[d.getDay()];
    };
    TsdetailPage.prototype.loadData = function () {
        var _this = this;
        this.storage.get('token').then(function (val) {
            return _this.http.post('https://jmclicks.com/api/mytimesheet?token=' + val.token, {
                Start_Date: _this.navParams.get('Start_Date'),
                End_Date: _this.navParams.get('End_Date')
            }, httpOptions)
                .subscribe(function (res) {
                _this.items = res;
                console.log(res);
            });
        });
    };
    TsdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tsdetail',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/tsdetail/tsdetail.html"*/'<!--\n  Generated template for the TsdetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="primary">\n      <ion-title>Timesheet Details</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding class="ion-content">\n    <ion-card *ngFor="let item of items;">\n      <ion-card-header color="primary">\n          {{item.Date}} ({{ myFunction(item.Date) }})\n      </ion-card-header>\n      <ion-card-content color="primary">\n        Time In: {{item.Time_In}}  <br>        \n        Time Out: {{item.Time_Out}} <br>\n        Status  : {{item.Status}}<br>\n        Check In Type: {{item.Check_In_Type}}<br>\n        Site  : {{item.Site_Name}}<br>\n        Project Name: {{item.Project_Name}}<br>\n        Approver: {{item.Approver}}<br>\n      </ion-card-content>\n    </ion-card>\n  \n  </ion-content>\n  \n\n\n  '/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/tsdetail/tsdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], TsdetailPage);
    return TsdetailPage;
}());

//# sourceMappingURL=tsdetail.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HolidayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_fullcalendar__ = __webpack_require__(176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { AuthProvider } from './../../providers/auth/auth';


/**
 * Generated class for the HolidayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HolidayPage = /** @class */ (function () {
    function HolidayPage(navCtrl, navParams, http, 
        // private auth: AuthProvider,
        storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.token = '';
        this.loadData();
    }
    HolidayPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HolidayPage');
    };
    HolidayPage.prototype.ngOnInit = function () {
        this.calendarOptions = {
            header: {
                left: 'title',
                right: 'month,agendaFourDay,agendaMonth'
            },
            footer: {
                right: 'today prev,next',
            },
            views: {
                agendaFourDay: {
                    type: 'listYear',
                    buttonText: 'Year'
                },
                agendaMonth: {
                    type: 'listMonth',
                    buttonText: 'Month'
                }
            },
            // theme:'jquery-ui',
            // height: 'parent',
            fixedWeekCount: false,
            defaultDate: Date(),
            // editable: true,
            allDay: true,
        };
    };
    HolidayPage.prototype.myFunction = function (date) {
        var d = new Date(date);
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thurday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        return weekday[d.getDay()];
        // document.getElementById("demo").innerHTML = n;
    };
    HolidayPage.prototype.loadData = function () {
        var _this = this;
        var data;
        // Or to get a key/value pair
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/holiday?token=' + val.token);
            data.subscribe(function (result) {
                _this.items = result;
            });
        });
        this.storage.get('token').then(function (val) {
            _this.http.get('https://jmclicks.com/api/holidaytimesheetcalendar?token=' + val.token).subscribe(function (result) {
                var arrEvent = [];
                for (var _i = 0, _a = result.leave; _i < _a.length; _i++) {
                    var res = _a[_i];
                    // if(res.Status.includes("Approved")) {
                    //   arrEvent.push(
                    //     {
                    //       title:   res.Leave_Type,
                    //       start: new Date(res.start),
                    //       end: new Date(res.end),
                    //       allDay: true,
                    //       backgroundColor: "#26A65B", //green
                    //       borderColor: "#26A65B", //green
                    //     }
                    //   )
                    // }
                    // else if(res.Status.includes("Pending")) {
                    //   arrEvent.push(
                    //     {
                    //       title:   res.Leave_Type,
                    //       start: new Date(res.start),
                    //       end: new Date(res.end),
                    //       allDay: true,
                    //       backgroundColor: "#eed330", //yellow
                    //       borderColor: "#eed330", //yellow
                    //     }
                    //   )
                    // }
                    // else if(res.Status.includes("Rejected")) {
                    //   arrEvent.push(
                    //     {
                    //       title:   res.Leave_Type,
                    //       start: new Date(res.start),
                    //       end: new Date(res.end),
                    //       allDay: true,
                    //       backgroundColor: "#F3122E", //red
                    //       borderColor: "#F3122E", //red
                    //     }
                    //   )
                    // }
                    if (res.Status != "") {
                        arrEvent.push({
                            title: res.Leave_Type,
                            start: new Date(res.start),
                            end: new Date(res.end),
                            allDay: true,
                            backgroundColor: "#A7A4A4",
                            borderColor: "#A7A4A4",
                        });
                    }
                }
                ;
                for (var _b = 0, _c = result.holiday; _b < _c.length; _b++) {
                    var res = _c[_b];
                    if (res.Holiday != "") {
                        arrEvent.push({
                            title: res.Holiday,
                            start: new Date(res.startD),
                            end: new Date(res.endD),
                            allDay: true,
                        });
                    }
                }
                _this.ucCalendar.fullCalendar('addEventSource', arrEvent);
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ng_fullcalendar__["a" /* CalendarComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ng_fullcalendar__["a" /* CalendarComponent */])
    ], HolidayPage.prototype, "ucCalendar", void 0);
    HolidayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-holiday',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/holiday/holiday.html"*/'\n<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>Holiday</ion-title>\n  </ion-navbar>\n</ion-header>\n  \n<ion-content class="ion-content">\n\n  <div class="box">\n    <p class="p">Calendar</p>\n    <ion-item class="ion-item">\n      <div *ngIf="calendarOptions">\n        <ng-fullcalendar #ucCalendar [options]="calendarOptions"></ng-fullcalendar>\n    </div>\n    </ion-item>\n  </div>\n\n  <ion-item *ngFor="let item of items; let i = index;">\n    <ion-row>\n      <ion-col date>\n          {{item.Start_Date}} <p class="p">{{ myFunction(item.Start_Date) }}</p> - <br>\n          {{item.End_Date}} <p class="p">{{ myFunction(item.End_Date) }}</p>\n      </ion-col>\n      <!-- <ion-col date>\n        {{item.End_Date}}<br>\n        <p class="p">{{ myFunction(item.End_Date) }} </p> \n    </ion-col> -->\n      <ion-col event>\n        <div text-wrap>\n          <p class="a">{{item.Holiday}}</p>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-item>  \n</ion-content>\n'/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/holiday/holiday.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], HolidayPage);
    return HolidayPage;
}());

//# sourceMappingURL=holiday.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__siteadvance_siteadvance__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__myadvancestatus_myadvancestatus__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__adminadvancestatus_adminadvancestatus__ = __webpack_require__(535);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};



/**
 * Generated class for the AdvancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdvancePage = /** @class */ (function () {
    function AdvancePage(navCtrl, navParams, storage, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        this.pendingAdvanceBadgeCount = 0;
        this.allmyAdvanceBadgeCount = 0;
    }
    AdvancePage.prototype.siteadvance = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__siteadvance_siteadvance__["a" /* SiteadvancePage */]);
    };
    AdvancePage.prototype.mystatus = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__myadvancestatus_myadvancestatus__["a" /* MyadvancestatusPage */]);
    };
    AdvancePage.prototype.adminstatus = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__adminadvancestatus_adminadvancestatus__["a" /* AdminadvancestatusPage */]);
    };
    AdvancePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdvancePage');
    };
    AdvancePage.prototype.ionViewDidEnter = function () {
        this.loadData();
    };
    AdvancePage.prototype.loadData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('token').then(function (val) {
                            _this.http.get('https://jmclicks.com/api/notifications/myadvanceall?token=' + val.token).subscribe(function (result) {
                                _this.allmyAdvanceBadgeCount = result.badge_count;
                            });
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.storage.get('token').then(function (val) {
                                _this.http.get('https://jmclicks.com/api/notifications/advancepending?token=' + val.token).subscribe(function (result) {
                                    _this.pendingAdvanceBadgeCount = result.badge_count;
                                });
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdvancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-advance',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/advance/advance.html"*/'\n<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>Advance</ion-title>\n  </ion-navbar>\n</ion-header>\n  \n<ion-content class="ion-content">\n\n  <section class = "home-container">\n    <p class="p"> My Application<br></p>\n\n    <ion-list>\n      <ion-item (click)=\'siteadvance()\'>\n        <button class="round-button button1" >\n          <img src="assets/img/calendar (2).png" height="30px" width="30px">\n        </button>\n        Site Advance\n      </ion-item>\n    </ion-list>\n\n    <p class="p">Advance Status</p>\n    <ion-list>\n      <ion-item (click)=\'mystatus()\'>\n        <button class="round-button button6">\n          <img src="assets/img/myapproval (2).png" width="30px" height="30px">\n        </button>\n        <ion-badge color="danger" *ngIf="allmyAdvanceBadgeCount > 0" item-end>{{ allmyAdvanceBadgeCount }}</ion-badge>\n        My Advance Status\n      </ion-item>\n      <ion-item (click)=\'adminstatus()\'>\n        <button class="round-button button6">\n          <img src="assets/img/admin (1).png" width="30px" height="30px">\n        </button>\n        <ion-badge color="danger" *ngIf="pendingAdvanceBadgeCount > 0" item-end>{{ pendingAdvanceBadgeCount }}</ion-badge>\n          Admin Advance Status\n      </ion-item>\n    </ion-list>\n\n  </section>\n\n</ion-content>\n  '/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/advance/advance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], AdvancePage);
    return AdvancePage;
}());

//# sourceMappingURL=advance.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export identityRevealedValidator */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteadvancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};

// import { formControlBinding } from '@angular/forms/src/directives/ng_model';
/**
 * Generated class for the SiteadvancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
*/
var identityRevealedValidator = function (control) {
    var day_meal = control.get('day_meal');
    // const all_meal = control.get('all_meal');
    var day_acco = control.get('day_acco');
    // const all_acco = control.get('all_acco');
    var day_mile = control.get('day_mile');
    // const all_mile = control.get('all_mile');
    var day_parking = control.get('day_parking');
    // const all_parking = control.get('all_parking');
    var day_fare = control.get('day_fare');
    // const all_fare = control.get('all_fare');
    var day_other = control.get('day_other');
    // const all_other = control.get('all_other');
    var purchase = control.get('purchase');
    // const all_purchase = control.get('all_purchase');
    return (!day_meal.value || day_meal.value == 0) && (!day_acco.value || day_acco.value == 0) && (!day_mile.value || day_mile.value == 0) && (!day_parking.value || day_parking.value == 0) && (!day_fare.value || day_fare.value == 0) && (!day_other.value || day_other.value == 0) && (!purchase.value || purchase.value == 0) ? { 'identityRevealed': true } : null;
};
var SiteadvancePage = /** @class */ (function () {
    function SiteadvancePage(navCtrl, navParams, alertCtrl, domSanitizer, app, http, storage, toast, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.domSanitizer = domSanitizer;
        this.app = app;
        this.http = http;
        this.storage = storage;
        this.toast = toast;
        this.loadingCtrl = loadingCtrl;
        this.SiteId = '';
        this.Bank_Name = '';
        this.Reason = '';
        this.Department = '';
        this.Purpose = '';
        this.token = '';
        this.Name = '';
        this.Position = '';
        this.Number_Motorcycle = '';
        this.day_meal = '';
        this.all_meal = '';
        this.day_acco = '';
        this.all_acco = '';
        this.day_mile = '';
        this.all_mile = '';
        this.day_parking = '';
        this.all_parking = '';
        this.day_fare = '';
        this.all_fare = '';
        this.day_other = '';
        this.all_other = '';
        this.purchase = '';
        this.all_purchase = 0;
    }
    SiteadvancePage.prototype.ngOnInit = function () {
        this.signupform = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* FormGroup */]({
            Destination: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required]),
            Car_No: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required]),
            Bank_Name: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required]),
            Department: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required]),
            Start_Date: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required]),
            End_Date: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required]),
            Mode_Of_Transport: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required]),
            all_meal: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]('', []),
            day_meal: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]('', []),
            all_acco: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]('', []),
            day_acco: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]('', []),
            all_mile: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]('', []),
            day_mile: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]('', []),
            all_parking: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]('', []),
            day_parking: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]('', []),
            all_fare: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]('', []),
            day_fare: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]('', []),
            Purpose: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]('', []),
            all_other: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]('', []),
            day_other: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]('', []),
            purchase: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]('', []),
            all_purchase: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]('', [])
        }, { validators: identityRevealedValidator });
    };
    SiteadvancePage.prototype.ionViewWillEnter = function () {
        this.loadData();
        this.Name = this.navParams.get('Name');
    };
    SiteadvancePage.prototype.myFunction = function (date) {
        var d = new Date(date);
        var monthNames = [
            "Jan", "Feb", "Mar",
            "Apr", "May", "Jun", "Jul",
            "Aug", "Sep", "Oct",
            "Nov", "Dec"
        ];
        var day = ('0' + d.getDate()).slice(-2);
        var monthIndex = d.getMonth();
        var year = d.getFullYear();
        return day + '-' + monthNames[monthIndex] + '-' + year;
    };
    SiteadvancePage.prototype.loadData = function () {
        var _this = this;
        var data;
        // Name & Position
        this.storage.get('user').then(function (val) {
            _this.userImage = val.Web_Path;
            _this.Name = val.Name;
            _this.Position = val.Position;
        });
        // Bank Accounts
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/bankaccount?token=' + val.token);
            data.subscribe(function (result) {
                console.log(result);
                var banks = new Array();
                banks.push({ Bank_Name: result.me.Bank_Name, Bank_Account_No: result.me.Bank_Account_No });
                _this.Position = result.me.Position;
                _this.banks = banks;
                var modes = new Array();
                for (var _i = 0, _a = result.options; _i < _a.length; _i++) {
                    var res = _a[_i];
                    if (res.Field == 'Mode_Of_Transport') {
                        modes.push(res);
                    }
                }
                _this.modes = modes;
            });
        });
        // Department
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/getprojectsdepart?token=' + val.token);
            data.subscribe(function (result) {
                console.log(result);
                _this.departs = result;
            });
        });
        // // Transport
        // this.storage.get('token').then((val) => {
        //   data = this.http.get('https://jmclicks.com/api/transport?token=' + val.token);
        //   data.subscribe(result => {
        //     console.log(result);
        //     let modes = new Array();
        //       for (let res of result) {
        //         if(res.Field == 'Mode_Of_Transport') {
        //           modes.push(res);
        //         }
        //       }
        //       this.modes = modes;
        //   })
        // });
    };
    SiteadvancePage.prototype.totalMeal = function () {
        var meal = Number.parseFloat(this.day_meal) * Number.parseFloat(this.all_meal);
        return Number.isNaN(Number(meal.toFixed(2))) ? 0.00 : meal.toFixed(2);
    };
    SiteadvancePage.prototype.totalAcco = function () {
        var acco = Number.parseFloat(this.day_acco) * Number.parseFloat(this.all_acco);
        return Number.isNaN(Number(acco.toFixed(2))) ? 0.00 : acco.toFixed(2);
    };
    SiteadvancePage.prototype.totalMile = function () {
        var mile = Number.parseFloat(this.day_mile) * Number.parseFloat(this.all_mile);
        return Number.isNaN(Number(mile.toFixed(2))) ? 0.00 : mile.toFixed(2);
    };
    SiteadvancePage.prototype.totalParking = function () {
        var parking = Number.parseFloat(this.day_parking) * Number.parseFloat(this.all_parking);
        return Number.isNaN(Number(parking.toFixed(2))) ? 0.00 : parking.toFixed(2);
    };
    SiteadvancePage.prototype.totalFare = function () {
        var fare = Number.parseFloat(this.day_fare) * Number.parseFloat(this.all_fare);
        return Number.isNaN(Number(fare.toFixed(2))) ? 0.00 : fare.toFixed(2);
    };
    SiteadvancePage.prototype.totalOther = function () {
        var other = Number.parseFloat(this.day_other) * Number.parseFloat(this.all_other);
        return Number.isNaN(Number(other.toFixed(2))) ? 0.00 : other.toFixed(2);
    };
    SiteadvancePage.prototype.totalAdvance = function () {
        var advance = Number(this.totalMeal()) + Number(this.totalAcco()) + Number(this.totalMile()) + Number(this.totalParking()) + Number(this.totalFare()) + Number(this.totalOther()) + Number(this.all_purchase);
        return advance.toFixed(2);
    };
    SiteadvancePage.prototype.submitClaim = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Submitting ...'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 2000);
        this.storage.get('token').then(function (val) {
            return _this.http.post('https://jmclicks.com/api/myadvanceapply?token=' + val.token + "&Start_Date=" + _this.myFunction(_this.Start_Date) + "&End_Date=" + _this.myFunction(_this.End_Date), {
                ProjectId: _this.Department,
                Bank_Account_No: _this.Bank_Name,
                SiteId: _this.SiteId,
                Purpose: _this.Purpose,
                Purchase: _this.purchase,
                // Start_Date: this.Start_Date + this.myFunction,
                // End_Date: this.End_Date + this.myFunction,
                Destination: _this.Destination,
                Mode_Of_Transport: _this.Mode_Of_Transport,
                Car_No: _this.Car_No,
                Sum1: _this.totalMeal(),
                Sum2: _this.totalAcco(),
                Sum3: _this.totalMile(),
                Sum4: _this.totalParking(),
                Sum5: _this.totalFare(),
                Sum6: _this.totalOther(),
                Sum7: _this.all_purchase,
                Total_Requested: _this.totalAdvance(),
                Meal_Days: _this.day_meal,
                Meal_Per_Day: _this.all_meal,
                Accomodation_Days: _this.day_acco,
                Accomodation_Per_Day: _this.all_acco,
                Mileage_Days: _this.day_mile,
                Mileage_Per_Day: _this.all_mile,
                Parking_Days: _this.day_parking,
                Parking_Per_Day: _this.all_parking,
                Ticket_Days: _this.day_fare,
                Ticket_Per_Day: _this.all_fare,
                Other_Days: _this.day_other,
                Other_Per_Day: _this.all_other,
            }, httpOptions)
                .subscribe(function (res) {
                _this.navCtrl.pop();
                console.log(res);
                _this.toast.show('New Site Advance created', '5000', 'center').subscribe(function (toast) {
                    console.log(toast);
                });
            });
        });
    };
    SiteadvancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-siteadvance',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/siteadvance/siteadvance.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>Advance Form</ion-title>\n  </ion-navbar>\n\n</ion-header>\n  \n  \n<ion-content  class="ion-content">\n  \n  <h3>Staff Details</h3>\n  <ion-list>\n\n    <form novalidate (ngSubmit)="submitClaim()" [formGroup]="signupform">\n\n      <ion-item>\n        <ion-label stacked color="primary">Name</ion-label>\n        <ion-label>{{Name}}</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked color="primary" class="required">Bank Account</ion-label>\n        <ion-select placeholder="please select" [(ngModel)]="Bank_Name" formControlName="Bank_Name" [class.error1]="!signupform.controls.Bank_Name.valid && signupform.controls.Bank_Name.dirty">\n          <ion-option *ngFor="let bank of banks" value="{{bank.Bank_Name}} - {{bank.Bank_Account_No}} ">{{bank.Bank_Name}} - {{bank.Bank_Account_No}} </ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item no-lines *ngIf="( signupform.get(\'Bank_Name\').hasError(\'required\') ) && signupform.get(\'Bank_Name\').touched">\n        <div class="error" *ngIf="signupform.get(\'Bank_Name\').hasError(\'required\') && signupform.get(\'Bank_Name\').touched">\n          Please select your bank account\n        </div>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked color="primary" class="required">Department</ion-label>\n        <ion-select placeholder="please select" [(ngModel)]="Department" formControlName="Department" [class.error1]="!signupform.controls.Department.valid && signupform.controls.Department.dirty">\n          <ion-option *ngFor="let depart of departs" value="{{depart.Id}}">{{depart.Project_Name}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item no-lines *ngIf="( signupform.get(\'Department\').hasError(\'required\') ) && signupform.get(\'Department\').touched">\n        <div class="error" *ngIf="signupform.get(\'Department\').hasError(\'required\') && signupform.get(\'Department\').touched">\n          Please select your department\n        </div>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked color="primary">Position</ion-label>\n        <ion-label>{{Position? Position: \'-\'}}</ion-label>\n      </ion-item>\n\n      <h3>Travelling Details</h3>\n\n      <ion-item>\n        <ion-label stacked color="primary" class="required">Destination</ion-label>\n        <ion-input type="text" [(ngModel)]="Destination" formControlName="Destination" [class.error1]="!signupform.controls.Destination.valid && signupform.controls.Destination.dirty"> </ion-input>\n      </ion-item>\n      <ion-item no-lines *ngIf="( signupform.get(\'Destination\').hasError(\'required\') ) && signupform.get(\'Destination\').touched">\n        <div class="error" *ngIf="signupform.get(\'Destination\').hasError(\'required\') && signupform.get(\'Destination\').touched">\n          Please input your Destination\n        </div>\n      </ion-item>\n \n      <ion-item>\n        <ion-label stacked color="primary" class="required">Start Date</ion-label>\n        <ion-datetime [max]="maxDateString"\n          pickerFormat="DD MMM YYYY"  [(ngModel)]="Start_Date"  max="2200"\n          displayFormat="DD MM YYYY" placeholder="Choose start date" formControlName="Start_Date" [class.error1]="!signupform.controls.Start_Date.valid && signupform.controls.Start_Date.dirty">\n        </ion-datetime>\n      </ion-item>\n      <ion-item no-lines *ngIf="( signupform.get(\'Start_Date\').hasError(\'required\') ) && signupform.get(\'Start_Date\').touched">\n        <div class="error" *ngIf="signupform.get(\'Start_Date\').hasError(\'required\') && signupform.get(\'Start_Date\').touched">\n          Please pick your start date\n        </div>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label stacked color="primary" class="required">End Date</ion-label>\n        <ion-datetime [max]="maxDateString"\n          pickerFormat="DD MMM YYYY"  [(ngModel)]="End_Date"  max="2200"\n          displayFormat="DD MM YYYY" placeholder="Choose end date" formControlName="End_Date" [class.error1]="!signupform.controls.End_Date.valid && signupform.controls.End_Date.dirty">\n        </ion-datetime>\n      </ion-item>\n      <ion-item no-lines *ngIf="( signupform.get(\'End_Date\').hasError(\'required\') ) && signupform.get(\'End_Date\').touched">\n        <div class="error" *ngIf="signupform.get(\'End_Date\').hasError(\'required\') && signupform.get(\'End_Date\').touched">\n          Please pick your end date\n        </div>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked color="primary" class="required">Mode Of Transport</ion-label>\n        <ion-select placeholder="please select" [(ngModel)]="Mode_Of_Transport"  formControlName="Mode_Of_Transport" [class.error1]="!signupform.controls.Mode_Of_Transport.valid && signupform.controls.Mode_Of_Transport.dirty">\n          <ion-option *ngFor="let mode of modes" value="{{mode.Option}}">{{mode.Option}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item no-lines *ngIf="( signupform.get(\'Mode_Of_Transport\').hasError(\'required\') ) && signupform.get(\'Mode_Of_Transport\').touched">\n        <div class="error" *ngIf="signupform.get(\'Mode_Of_Transport\').hasError(\'required\') && signupform.get(\'Mode_Of_Transport\').touched">\n          Please select your mode of transport\n        </div>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked color="primary" class="required">Car Plate No:</ion-label>\n        <ion-input type="text" [(ngModel)]="Car_No"  formControlName="Car_No" [class.error1]="!signupform.controls.Car_No.valid && signupform.controls.Car_No.dirty"> </ion-input>\n      </ion-item>\n      <ion-item no-lines *ngIf="( signupform.get(\'Car_No\').hasError(\'required\') ) && signupform.get(\'Car_No\').touched">\n        <div class="error" *ngIf="signupform.get(\'Car_No\').hasError(\'required\') && signupform.get(\'Car_No\').touched">\n          Please input your car plate number\n        </div>\n      </ion-item>\n    <!-- </form>\n  </ion-list> -->\n      \n      <h3>Advance Required</h3>\n\n      <ion-grid>\n\n        <ion-row>\n          <ion-col type col-6></ion-col>\n          <ion-col days col-2>No of Days</ion-col>\n          <ion-col allowance-title col-2>Allowance per Day</ion-col>\n          <ion-col total col-2>Total (MYR)</ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col type col-6>Meal Allowance\n\n            <ion-item no-lines *ngIf="signupform.errors?.identityRevealed  && signupform.get(\'day_meal\').touched">\n              <textarea readonly class="error" *ngIf="signupform.errors?.identityRevealed && signupform.get(\'day_meal\').touched">Please input your meal day\n              </textarea>\n            </ion-item>\n\n            <ion-item no-lines *ngIf=" signupform.errors?.identityRevealed && signupform.get(\'all_meal\').touched">\n              <textarea readonly class="error" *ngIf="signupform.errors?.identityRevealed  && signupform.get(\'all_meal\').touched">Please input your meal allowance per day\n              </textarea>\n            </ion-item>\n\n          </ion-col>\n          <ion-col days col-2>\n            <ion-input type="number" placeholder="0" [(ngModel)]="day_meal" value=" " formControlName="day_meal" [class.error1]="!signupform.controls.day_meal.valid && signupform.controls.day_meal.dirty"></ion-input>\n          </ion-col>\n          <ion-col allowance col-2>\n            <ion-input type="number" placeholder="0" [(ngModel)]="all_meal" value=" "  formControlName="all_meal" [class.error1]="!signupform.controls.all_meal.valid && signupform.controls.all_meal.dirty"></ion-input>\n          \n          </ion-col>\n          <!-- <ion-col days col-2>\n            <ion-input type="number" placeholder="0" [(ngModel)]="day_meal" value="0"></ion-input>\n          </ion-col>\n          <ion-col allowance col-2>\n            <ion-input type="number" placeholder="0" [(ngModel)]="all_meal" value="0.00"></ion-input>\n          </ion-col> -->\n          <ion-col total col-2>\n            <ion-label text-wrap type="number" placeholder="0" value="0.00">{{ totalMeal() }}</ion-label>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col type col-6>Accodommation/Hotel\n\n            <ion-item no-lines *ngIf="signupform.errors?.identityRevealed  && signupform.get(\'day_acco\').touched">\n              <textarea readonly class="error" *ngIf="signupform.errors?.identityRevealed  && signupform.get(\'day_acco\').touched">Please input your accodommation/hotel day\n              </textarea>\n            </ion-item>\n\n            <ion-item no-lines *ngIf="( signupform.get(\'all_acco\').hasError(\'required\') ) && signupform.get(\'all_acco\').touched">\n              <div class="error" *ngIf="signupform.get(\'all_acco\').hasError(\'required\') && signupform.get(\'all_acco\').touched">Please input your accodommation/hotel allowance per day\n              </div>\n            </ion-item>\n\n          </ion-col>\n          <ion-col days col-2>\n            <ion-input type="number" placeholder="0" [(ngModel)]="day_acco" value=" " formControlName="day_acco" [class.error1]="!signupform.controls.day_acco.valid && signupform.controls.day_acco.dirty"></ion-input>\n          </ion-col>\n          <ion-col allowance col-2>\n            <ion-input type="number" placeholder="0" [(ngModel)]="all_acco" value=" " formControlName="all_acco" [class.error1]="!signupform.controls.all_acco.valid && signupform.controls.all_acco.dirty"></ion-input>\n          </ion-col>\n          <!-- <ion-col days col-2>\n            <ion-input type="number" placeholder="0" [(ngModel)]="day_acco" value="0"></ion-input>\n          </ion-col>\n          <ion-col allowance col-2>\n            <ion-input type="number" placeholder="0" [(ngModel)]="all_acco" value="0"></ion-input>\n          </ion-col> -->\n          <ion-col total col-2>\n            <ion-label text-wrap type="number" placeholder="0" value="0.00">{{ totalAcco() }}</ion-label>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col type col-6>Mileage/Petrol\n\n            <ion-item no-lines *ngIf="signupform.errors?.identityRevealed && signupform.get(\'day_mile\').touched">\n              <textarea readonly class="error" *ngIf="signupform.errors?.identityRevealed && signupform.get(\'day_meal\').touched">Please input your mile day\n              </textarea>\n            </ion-item>\n\n            <ion-item no-lines *ngIf="( signupform.get(\'all_mile\').hasError(\'required\') ) && signupform.get(\'all_mile\').touched">\n                <textarea readonly class="error" *ngIf="signupform.get(\'all_mile\').hasError(\'required\') && signupform.get(\'all_mile\').touched">Please input your mile allowance per day\n                </textarea>\n              </ion-item>\n\n          </ion-col>\n          <ion-col days col-2>\n            <ion-input type="number" placeholder="0" [(ngModel)]="day_mile" value=" " formControlName="day_mile" [class.error1]="!signupform.controls.day_mile.valid && signupform.controls.day_mile.dirty"></ion-input>\n          </ion-col>\n          <ion-col allowance col-2>\n            <ion-input type="number" placeholder="0" [(ngModel)]="all_mile" value=" " formControlName="all_mile" [class.error1]="!signupform.controls.all_mile.valid && signupform.controls.all_mile.dirty"></ion-input>\n          </ion-col>\n          <!-- <ion-col days col-2>\n            <ion-input type="number" placeholder="0" [(ngModel)]="day_mile"></ion-input>\n          </ion-col>\n          <ion-col allowance col-2>\n            <ion-input type="number" placeholder="0" [(ngModel)]="all_mile"></ion-input>\n          </ion-col> -->\n          <ion-col total col-2>\n            <ion-label text-wrap type="number" placeholder="0" value="0.00">{{ totalMile() }}</ion-label>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col type col-6>Parking/Tolls\n\n            <ion-item no-lines *ngIf="signupform.errors?.identityRevealed && signupform.get(\'day_parking\').touched">\n              <textarea readonly class="error" *ngIf="signupform.errors?.identityRevealed && signupform.get(\'day_parking\').touched">Please input your parking day\n              </textarea>\n            </ion-item>\n\n            <ion-item no-lines *ngIf="( signupform.get(\'all_parking\').hasError(\'required\') ) && signupform.get(\'all_parking\').touched">\n              <textarea readonly class="error" *ngIf="signupform.get(\'all_parking\').hasError(\'required\') && signupform.get(\'all_parking\').touched">Please input your parking allowance per day\n              </textarea>\n            </ion-item>\n\n          </ion-col>\n          <ion-col days col-2>\n            <ion-input type="number" placeholder="0" [(ngModel)]="day_parking" value=" " formControlName="day_parking" [class.error1]="!signupform.controls.day_parking.valid && signupform.controls.day_parking.dirty"></ion-input>\n          </ion-col>\n          <ion-col allowance col-2>\n            <ion-input type="number" placeholder="0" [(ngModel)]="all_parking" value=" " formControlName="all_parking" [class.error1]="!signupform.controls.all_parking.valid && signupform.controls.all_parking.dirty"></ion-input>\n          </ion-col>\n          <!-- <ion-col days col-2>\n            <ion-input type="number" placeholder="0" [(ngModel)]="day_parking"></ion-input>\n          </ion-col>\n          <ion-col allowance col-2>\n            <ion-input type="number" placeholder="0" [(ngModel)]="all_parking"></ion-input>\n          </ion-col> -->\n          <ion-col total col-2>\n            <ion-label text-wrap type="number" placeholder="0" value="0.00">{{ totalParking() }}</ion-label>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col type col-6>Fare/Ticket\n\n            <ion-item no-lines *ngIf="signupform.errors?.identityRevealed && signupform.get(\'day_fare\').touched">\n              <textarea readonly class="error" *ngIf="signupform.errors?.identityRevealed && signupform.get(\'day_fare\').touched">Please input your fare day\n              </textarea>\n            </ion-item>\n\n            <ion-item no-lines *ngIf="( signupform.get(\'all_fare\').hasError(\'required\') ) && signupform.get(\'all_fare\').touched">\n              <textarea readonly class="error" *ngIf="signupform.get(\'all_fare\').hasError(\'required\') && signupform.get(\'all_fare\').touched">Please input your fare allowance per day\n              </textarea>\n            </ion-item>\n\n          </ion-col> \n          <ion-col days col-2>\n            <ion-input type="number" placeholder="0" [(ngModel)]="day_fare" value=" " formControlName="day_fare" [class.error1]="!signupform.controls.day_fare.valid && signupform.controls.day_fare.dirty"></ion-input>\n          </ion-col>\n          <ion-col allowance col-2>\n            <ion-input type="number" placeholder="0" [(ngModel)]="all_fare" value=" " formControlName="all_fare" [class.error1]="!signupform.controls.all_fare.valid && signupform.controls.all_fare.dirty"></ion-input>\n          </ion-col>\n          <!-- <ion-col days col-2>\n            <ion-input type="number" placeholder="0" [(ngModel)]="day_fare"></ion-input>\n          </ion-col>\n          <ion-col allowance col-2>\n            <ion-input type="number" placeholder="0" [(ngModel)]="all_fare"></ion-input>\n          </ion-col> -->\n          <ion-col total col-2>\n            <ion-label text-wrap type="number" placeholder="0" value="0.00">{{ totalFare() }}</ion-label>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col type col-6>Other Purpose\n\n            <ion-item no-lines *ngIf="signupform.errors?.identityRevealed && signupform.get(\'day_other\').touched">\n              <textarea readonly class="error" *ngIf="signupform.errors?.identityRevealed && signupform.get(\'day_other\').touched">Please input your other purpose day\n              </textarea>\n            </ion-item>\n\n            <ion-item no-lines *ngIf="( signupform.get(\'all_other\').hasError(\'required\') ) && signupform.get(\'all_other\').touched">\n              <textarea readonly class="error" *ngIf="signupform.get(\'all_other\').hasError(\'required\') && signupform.get(\'all_other\').touched">Please input your other purpose allowance per day\n              </textarea>\n            </ion-item>\n\n          </ion-col>\n          <ion-col days col-2>\n            <ion-input type="number" placeholder="0" [(ngModel)]="day_other"  formControlName="day_other" [class.error1]="!signupform.controls.day_other.valid && signupform.controls.day_other.dirty"></ion-input>\n          </ion-col>\n          <ion-col allowance col-2>\n            <ion-input type="number" placeholder="0" [(ngModel)]="all_other" value=" " formControlName="all_other" [class.error1]="!signupform.controls.all_other.valid && signupform.controls.all_other.dirty"></ion-input>\n          </ion-col>\n          <!-- <ion-col days col-2>\n            <ion-input type="number" placeholder="0" [(ngModel)]="day_other"></ion-input>\n          </ion-col>\n          <ion-col allowance col-2>\n            <ion-input type="number" placeholder="0" [(ngModel)]="all_other"></ion-input>\n          </ion-col> -->\n          <ion-col total col-2>\n            <ion-label text-wrap type="number" placeholder="0" value="0.00">{{ totalOther() }}</ion-label>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col allowance col-10>\n            <ion-input type="text" placeholder="State your other purpose..." [(ngModel)]="Purpose"  formControlName="Purpose" [class.error1]="!signupform.controls.Purpose.valid && signupform.controls.Purpose.dirty">\n            </ion-input>\n            <!-- <ion-input type="text" placeholder="Other Purpose..." [(ngModel)]="Purpose">\n            </ion-input> -->\n            <ion-item no-lines *ngIf="( signupform.get(\'Purpose\').hasError(\'required\') ) && signupform.get(\'Purpose\').touched">\n              <textarea readonly class="error" *ngIf="signupform.get(\'Purpose\').hasError(\'required\') && signupform.get(\'Purpose\').touched">Please state your purpose\n              </textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col allowance col-10>\n            <ion-input text-wrap type="text" placeholder="Purchase" [(ngModel)]="purchase" formControlName="purchase" [class.error1]="!signupform.controls.purchase.valid && signupform.controls.purchase.dirty">\n            </ion-input>\n            <!-- <ion-input type="text" placeholder="Purchase" [(ngModel)]="purchase">\n            </ion-input> -->\n            <ion-item no-lines *ngIf="signupform.errors?.identityRevealed && signupform.get(\'purchase\').touched">\n              <textarea readonly class="error" *ngIf="signupform.errors?.identityRevealed && signupform.get(\'purchase\').touched">Please state your purchase\n              </textarea>\n            </ion-item>\n\n            <ion-item no-lines *ngIf="( signupform.get(\'all_purchase\').hasError(\'required\') ) && signupform.get(\'all_purchase\').touched">\n              <textarea readonly class="error" *ngIf="signupform.get(\'all_purchase\').hasError(\'required\') && signupform.get(\'all_purchase\').touched">Please insert your purchase amount\n              </textarea>\n            </ion-item>\n            \n          </ion-col>\n          <ion-col total col-2>\n            <ion-input type="number" placeholder="0"  [(ngModel)]="all_purchase" formControlName="all_purchase" [class.error1]="!signupform.controls.all_purchase.valid && signupform.controls.all_purchase.dirty"></ion-input>\n            <!-- <ion-input type="number" placeholder="    0" [(ngModel)]="all_purchase"></ion-input> -->\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col total-advance col-10>Total Advanced Request</ion-col>\n          <ion-col total col-2>\n            <ion-label text-wrap type="number" placeholder="0" value="0.00"> {{ totalAdvance() }}</ion-label>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n      \n      <button ion-button block color="primary" type="submit" [disabled]="signupform.invalid">\n        Submit \n      </button>\n    </form>\n  </ion-list>\n\n\n  <style>\n    .required:after { content:" *"; color:red; }\n  </style>\n\n</ion-content>\n\n<!-- <ion-footer>\n  <button ion-button block color="primary" type="submit" [disabled]="signupform.invalid">Submit</button>\n</ion-footer> -->\n'/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/siteadvance/siteadvance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* LoadingController */]])
    ], SiteadvancePage);
    return SiteadvancePage;
}());

//# sourceMappingURL=siteadvance.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyadvancestatusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__myapproveadvance_myapproveadvance__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__myrejectadvance_myrejectadvance__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mypendingadvance_mypendingadvance__ = __webpack_require__(533);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};



/**
 * Generated class for the MyadvancestatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
*/
var MyadvancestatusPage = /** @class */ (function () {
    function MyadvancestatusPage(navCtrl, navParams, storage, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        this.tab1 = __WEBPACK_IMPORTED_MODULE_6__mypendingadvance_mypendingadvance__["a" /* MypendingadvancePage */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_4__myapproveadvance_myapproveadvance__["a" /* MyapproveadvancePage */];
        this.tab3 = __WEBPACK_IMPORTED_MODULE_5__myrejectadvance_myrejectadvance__["a" /* MyrejectadvancePage */];
        this.approvedAdvanceBadgeCount = 0;
        this.rejectedAdvanceBadgeCount = 0;
    }
    MyadvancestatusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyadvancestatusPage');
    };
    MyadvancestatusPage.prototype.ionViewDidEnter = function () {
        this.loadData();
    };
    MyadvancestatusPage.prototype.loadData = function () {
        var _this = this;
        this.storage.get('token').then(function (val) {
            _this.http.get('https://jmclicks.com/api/notifications/advanceapproved?token=' + val.token).subscribe(function (result) {
                _this.approvedAdvanceBadgeCount = result.badge_count > 0 ? result.badge_count : null;
            });
        });
        this.storage.get('token').then(function (val) {
            _this.http.get('https://jmclicks.com/api/notifications/advancerejected?token=' + val.token).subscribe(function (result) {
                _this.rejectedAdvanceBadgeCount = result.badge_count > 0 ? result.badge_count : null;
            });
        });
    };
    MyadvancestatusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myadvancestatus',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/myadvancestatus/myadvancestatus.html"*/'\n<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>My Advance Status</ion-title>\n  </ion-navbar>\n\n</ion-header>\n  \n  \n<ion-content>\n  <ion-tabs tabsPlacement= \'top\'>\n    <ion-tab [root]="tab1" tabTitle="Pending" tabsHideOnSubPages="true"></ion-tab>\n    <ion-tab [root]="tab2" tabTitle="Approved" tabsHideOnSubPages="true" [tabBadge]="approvedAdvanceBadgeCount"></ion-tab>\n    <ion-tab [root]="tab3" tabTitle="Rejected" tabsHideOnSubPages="true" [tabBadge]="rejectedAdvanceBadgeCount"></ion-tab>\n  </ion-tabs>\n</ion-content>\n  '/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/myadvancestatus/myadvancestatus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], MyadvancestatusPage);
    return MyadvancestatusPage;
}());

//# sourceMappingURL=myadvancestatus.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyapproveadvancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__myapprovedetail_myapprovedetail__ = __webpack_require__(530);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the MyapproveadvancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyapproveadvancePage = /** @class */ (function () {
    function MyapproveadvancePage(navCtrl, navParams, http, app, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.app = app;
        this.storage = storage;
        this.token = '';
        this.notifications = [];
        this.myapprovedetail = __WEBPACK_IMPORTED_MODULE_4__myapprovedetail_myapprovedetail__["a" /* MyapprovedetailPage */];
    }
    MyapproveadvancePage.prototype.gotoPage = function (item) {
        var nav = this.app.getRootNav();
        nav.push(this.myapprovedetail, item);
    };
    MyapproveadvancePage.prototype.ionViewWillEnter = function () {
        this.loadData();
    };
    MyapproveadvancePage.prototype.loadData = function () {
        var _this = this;
        var data;
        // Or to get a key/value pair
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/getmyadvance?token=' + val.token);
            data.subscribe(function (result) {
                console.log(result);
                _this.items = [];
                for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                    var res = result_1[_i];
                    if (res.Status != null && res.Status.indexOf("Approved") >= 0) {
                        _this.items.push(res);
                    }
                }
            });
            _this.storage.get('token').then(function (val) {
                _this.http.get('https://jmclicks.com/api/notifications/advanceapproved?token=' + val.token).subscribe(function (result) {
                    var that = _this;
                    result.notifications.map(function (value) {
                        that.notifications[value.TargetId] = value;
                    });
                    console.log(_this.notifications);
                });
            });
        });
    };
    MyapproveadvancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myapproveadvance',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/myapproveadvance/myapproveadvance.html"*/'<!--\n  Generated template for the LeavependingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content class="ion-content">\n\n  <ion-item *ngFor="let item of items;" (click)="gotoPage(item)">\n    <ion-avatar item-start width="20px" height="20px" class="ion-avatar">\n      <img src="assets/img/leave status (2).png"  width="20px" height="20px">\n    </ion-avatar>\n    <p style="color:rgb(72, 48, 95)" ALIGN=RIGHT ><b>{{ notifications[item.Id] ? \'New \': \'\'}}</b></p>\n\n    <div text-wrap class="detail">\n      <h2>{{item.Project_Name}}</h2>\n      <p class="p-detail">\n        {{item.Start_Date}}\n      <br>\n      RM {{item.Total_Requested}}\n      <br>\n      Approver : {{item.Approver}}\n      </p>\n    </div>\n    <p class="p">{{item.Status}}</p>\n  </ion-item>\n  \n</ion-content>\n    '/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/myapproveadvance/myapproveadvance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], MyapproveadvancePage);
    return MyapproveadvancePage;
}());

//# sourceMappingURL=myapproveadvance.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyapprovedetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
/**
 * Generated class for the MyapprovedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
*/
var MyapprovedetailPage = /** @class */ (function () {
    function MyapprovedetailPage(navCtrl, navParams, camera, alertCtrl, domSanitizer, app, http, storage, toast, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.domSanitizer = domSanitizer;
        this.app = app;
        this.http = http;
        this.storage = storage;
        this.toast = toast;
        this.loadingCtrl = loadingCtrl;
        this.Leave_Type = '';
        this.Leave_Term = '';
        this.Start_Date = '';
        this.End_Date = '';
        this.Reason = '';
        this.Department = '';
        this.Date = '';
        this.Approver = '';
        this.advancedetails = [];
        this.advance = {};
        this.user = {};
        this.token = '';
        this.advanceid = this.navParams.get('Id');
        console.log("advanceid", this.advanceid);
    }
    MyapprovedetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyapprovedetailPage');
    };
    MyapprovedetailPage.prototype.ionViewWillEnter = function () {
        this.loadData();
    };
    MyapprovedetailPage.prototype.setApproverOptions = function (value) {
        var arrApps = new Array();
        var projectName = '';
        for (var _i = 0, _a = this.departs; _i < _a.length; _i++) {
            var depart = _a[_i];
            if (depart.Id == value) {
                projectName = depart.Project_Name;
                break;
            }
        }
        for (var _b = 0, _c = this.apps; _b < _c.length; _b++) {
            var app = _c[_b];
            if (app.Project_Name == projectName) {
                arrApps.push(app);
            }
        }
        this.approverOptions = arrApps;
    };
    MyapprovedetailPage.prototype.loadData = function () {
        var _this = this;
        var data;
        // Leave_Type
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/myadvancedetail/' + _this.advanceid + '?token=' + val.token);
            data.subscribe(function (result) {
                console.log(result.advance);
                _this.advance = result.advance[0];
                _this.advancedetails = result.advancedetails;
                _this.user = result.me;
                console.log(_this.user);
            });
            _this.http.post('https://jmclicks.com/api/notifications/updateadvanceapproved?token=' + val.token, { TargetId: _this.advanceid }).subscribe(function (result) {
                console.log(result);
            });
        });
    };
    MyapprovedetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myapprovedetail',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/myapprovedetail/myapprovedetail.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title> My Advance Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content  class="ion-content">\n  <h3>Staff Details</h3>\n  <ion-list>\n\n    <ion-item>\n      <ion-label stacked color="primary">Name</ion-label>\n      <ion-label>{{ user.Name ? user.Name : \' - \' }}</ion-label>\n    </ion-item>\n\n    <!-- <ion-item>\n      <ion-label stacked color="primary">Bank Name</ion-label>\n      <ion-input type="text" readonly value=""> </ion-input>\n    </ion-item> -->\n\n    <ion-item>\n      <ion-label stacked color="primary">Bank Account</ion-label>\n      <ion-label>{{ advance.Bank_Account_No ? advance.Bank_Account_No : \' - \' }}</ion-label>\n    </ion-item>\n\n  <ion-item>\n    <ion-label stacked color="primary">Department</ion-label>\n    <ion-label>{{ advance.Project_Name ? advance.Project_Name : \' - \' }}</ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked color="primary">Position</ion-label>\n    <ion-label>{{ advance.Position ? advance.Position : \' - \' }}</ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked color="primary">Approver</ion-label>\n    <ion-label>{{ advance.Approver ? advance.Approver : \' - \' }}</ion-label>\n  </ion-item>\n\n<h3>Travelling Details</h3>\n<ion-item>\n    <ion-label stacked color="primary">Destination</ion-label>\n    <ion-label>{{ advance.Destination ? advance.Destination : \' - \' }}</ion-label>\n  </ion-item>\n\n  <ion-item>\n      <ion-label stacked color="primary">Start Date</ion-label>\n      <ion-label>{{ advance.Start_Date ? advance.Start_Date : \' - \' }}</ion-label>\n\n      </ion-item>\n  \n      <ion-item>\n        <ion-label stacked color="primary">End Date</ion-label>\n        <ion-label>{{ advance.End_Date ? advance.End_Date : \' - \' }}</ion-label>\n\n        </ion-item>\n\n  <ion-item>\n    <ion-label stacked color="primary">Mode Of Transport</ion-label>\n    <ion-label>{{ advance.Mode_Of_Transport ? advance.Mode_Of_Transport : \' - \' }}</ion-label>\n\n  </ion-item>\n\n  <ion-item>\n      <ion-label stacked color="primary">Car Plate No:</ion-label>\n      <ion-label>{{ advance.Car_No ? advance.Car_No : \' - \' }}</ion-label>\n    </ion-item>\n\n  </ion-list>\n\n\n<h3>Advance Required</h3>\n<ion-grid>\n\n      <ion-row>\n        <ion-col total-advance col-9></ion-col>\n        <ion-col total col-3>Amount (MYR)</ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col total-advance col-9>Total</ion-col>\n        <ion-col col-3>\n          <ion-label type="number" value="" readonly>{{ advance.Total_Requested }}</ion-label>\n        </ion-col>\n      </ion-row>\n\n\n       <ion-row>\n        <ion-col total-advance col-9>Total Advanced Requested</ion-col>\n        <ion-col col-3>\n          <ion-label type="number" value="" readonly>{{ advance.Total_Requested }}</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col total-advance col-9>Total Advanced Approved</ion-col>\n        <ion-col col-3>\n          <ion-label type="number" value="" readonly>{{ advance.Total_Approved }}</ion-label>\n        </ion-col>\n      </ion-row>\n</ion-grid>\n\n</ion-content>\n<!-- <ion-footer>\n    <button ion-button block>Submit</button>\n\n</ion-footer> -->\n'/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/myapprovedetail/myapprovedetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* LoadingController */]])
    ], MyapprovedetailPage);
    return MyapprovedetailPage;
}());

//# sourceMappingURL=myapprovedetail.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyrejectadvancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__myrejectdetail_myrejectdetail__ = __webpack_require__(532);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the MyrejectadvancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyrejectadvancePage = /** @class */ (function () {
    function MyrejectadvancePage(navCtrl, navParams, http, app, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.app = app;
        this.storage = storage;
        this.items = [];
        this.token = '';
        this.notifications = [];
        this.myrejectdetail = __WEBPACK_IMPORTED_MODULE_4__myrejectdetail_myrejectdetail__["a" /* MyrejectdetailPage */];
    }
    MyrejectadvancePage.prototype.goToDetail = function (item) {
        var nav = this.app.getRootNav();
        nav.push(this.myrejectdetail, item);
    };
    MyrejectadvancePage.prototype.ionViewWillEnter = function () {
        this.loadData();
    };
    MyrejectadvancePage.prototype.loadData = function () {
        var _this = this;
        var data;
        // Or to get a key/value pair
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/getmyadvance?token=' + val.token);
            data.subscribe(function (result) {
                console.log(result);
                _this.items = [];
                for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                    var res = result_1[_i];
                    if (res.Status != null && res.Status.indexOf("Rejected") >= 0) {
                        _this.items.push(res);
                    }
                }
            });
            _this.storage.get('token').then(function (val) {
                _this.http.get('https://jmclicks.com/api/notifications/advancerejected?token=' + val.token).subscribe(function (result) {
                    var that = _this;
                    result.notifications.map(function (value) {
                        that.notifications[value.TargetId] = value;
                    });
                    console.log(_this.notifications);
                });
            });
        });
    };
    MyrejectadvancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myrejectadvance',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/myrejectadvance/myrejectadvance.html"*/'<!--\n  Generated template for the LeavependingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content class="ion-content">\n  <div *ngIf="items && items.length < 1">\n    <p class="none">No record found</p>\n  </div>\n  <ion-item *ngFor="let item of items;" (click)="goToDetail(item)">\n    <ion-avatar item-start width="20px" height="20px" class="ion-avatar">\n      <img src="assets/img/leave-reject.png"  width="20px" height="20px">\n    </ion-avatar>\n    <p style="color:rgb(72, 48, 95)" ALIGN=RIGHT ><b>{{ notifications[item.Id] ? \'New \': \'\'}}</b></p>\n\n    <div text-wrap class="detail">\n      <h2>{{item.Project_Name}}</h2>\n      <p class="p-detail">\n        {{item.Start_Date}}\n      <br>\n      RM {{item.Total_Requested}}\n      <br>\n      Approver : {{item.Approver}}\n      </p>\n    </div>\n    <p class="p">{{item.Status}}</p>\n  </ion-item>\n  \n</ion-content>\n  '/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/myrejectadvance/myrejectadvance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], MyrejectadvancePage);
    return MyrejectadvancePage;
}());

//# sourceMappingURL=myrejectadvance.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyrejectdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
/**
 * Generated class for the MyrejectdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
*/
var MyrejectdetailPage = /** @class */ (function () {
    function MyrejectdetailPage(navCtrl, navParams, camera, alertCtrl, domSanitizer, app, http, storage, toast, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.domSanitizer = domSanitizer;
        this.app = app;
        this.http = http;
        this.storage = storage;
        this.toast = toast;
        this.loadingCtrl = loadingCtrl;
        this.Leave_Type = '';
        this.Leave_Term = '';
        this.Start_Date = '';
        this.End_Date = '';
        this.Reason = '';
        this.Department = '';
        this.Date = '';
        this.Approver = '';
        this.advancedetails = [];
        this.advance = {};
        this.user = {};
        this.token = '';
        this.advanceid = this.navParams.get('Id');
        console.log("advanceid", this.advanceid);
    }
    MyrejectdetailPage.prototype.ionViewWillEnter = function () {
        this.loadData();
    };
    MyrejectdetailPage.prototype.setApproverOptions = function (value) {
        var arrApps = new Array();
        var projectName = '';
        for (var _i = 0, _a = this.departs; _i < _a.length; _i++) {
            var depart = _a[_i];
            if (depart.Id == value) {
                projectName = depart.Project_Name;
                break;
            }
        }
        for (var _b = 0, _c = this.apps; _b < _c.length; _b++) {
            var app = _c[_b];
            if (app.Project_Name == projectName) {
                arrApps.push(app);
            }
        }
        this.approverOptions = arrApps;
    };
    MyrejectdetailPage.prototype.loadData = function () {
        var _this = this;
        var data;
        // Leave_Type
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/myadvancedetail/' + _this.advanceid + '?token=' + val.token);
            data.subscribe(function (result) {
                console.log(result.advance);
                _this.advance = result.advance[0];
                _this.advancedetails = result.advancedetails;
                _this.user = result.me;
                console.log(_this.user);
            });
            _this.http.post('https://jmclicks.com/api/notifications/updateadvancerejected?token=' + val.token, { TargetId: _this.advanceid }).subscribe(function (result) {
                console.log(result);
            });
        });
    };
    MyrejectdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myrejectdetail',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/myrejectdetail/myrejectdetail.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n      <ion-title> My Advance Details</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content  class="ion-content">\n    <h3>Staff Details</h3>\n    <ion-list>\n  \n      <ion-item>\n        <ion-label stacked color="primary">Name</ion-label>\n        <ion-label>{{ user.Name ? user.Name : \' - \' }}</ion-label>\n      </ion-item>\n  \n      <!-- <ion-item>\n        <ion-label stacked color="primary">Bank Name</ion-label>\n        <ion-input type="text" readonly value=""> </ion-input>\n      </ion-item> -->\n  \n      <ion-item>\n        <ion-label stacked color="primary">Bank Account</ion-label>\n        <ion-label>{{ advance.Bank_Account_No ? advance.Bank_Account_No : \' - \' }}</ion-label>\n      </ion-item>\n  \n    <ion-item>\n      <ion-label stacked color="primary">Department</ion-label>\n      <ion-label>{{ advance.Project_Name ? advance.Project_Name : \' - \' }}</ion-label>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label stacked color="primary">Position</ion-label>\n      <ion-label>{{ advance.Position ? advance.Position : \' - \' }}</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked color="primary">Approver</ion-label>\n      <ion-label>{{ advance.Approver ? advance.Approver : \' - \' }}</ion-label>\n    </ion-item>\n  \n  <h3>Travelling Details</h3>\n  <ion-item>\n      <ion-label stacked color="primary">Destination</ion-label>\n      <ion-label>{{ advance.Destination ? advance.Destination : \' - \' }}</ion-label>\n    </ion-item>\n  \n    <ion-item>\n        <ion-label stacked color="primary">Start Date</ion-label>\n        <ion-label>{{ advance.Start_Date ? advance.Start_Date : \' - \' }}</ion-label>\n  \n        </ion-item>\n    \n        <ion-item>\n          <ion-label stacked color="primary">End Date</ion-label>\n          <ion-label>{{ advance.End_Date ? advance.End_Date : \' - \' }}</ion-label>\n  \n          </ion-item>\n  \n    <ion-item>\n      <ion-label stacked color="primary">Mode Of Transport</ion-label>\n      <ion-label>{{ advance.Mode_Of_Transport ? advance.Mode_Of_Transport : \' - \' }}</ion-label>\n  \n    </ion-item>\n  \n    <ion-item>\n        <ion-label stacked color="primary">Car Plate No:</ion-label>\n        <ion-label>{{ advance.Car_No ? advance.Car_No : \' - \' }}</ion-label>\n      </ion-item>\n  \n    </ion-list>\n  \n  \n  <h3>Advance Required</h3>\n  <ion-grid>\n  \n        <ion-row>\n          <ion-col total-advance col-9></ion-col>\n          <ion-col total col-3>Amount (MYR)</ion-col>\n        </ion-row>\n  \n        <ion-row>\n          <ion-col total-advance col-9>Total</ion-col>\n          <ion-col col-3>\n            <ion-label type="number" value="" readonly>{{ advance.Total_Requested }}</ion-label>\n          </ion-col>\n        </ion-row>\n  \n  \n         <ion-row>\n          <ion-col total-advance col-9>Total Advanced Requested</ion-col>\n          <ion-col col-3>\n            <ion-label type="number" value="" readonly>{{ advance.Total_Requested }}</ion-label>\n          </ion-col>\n        </ion-row>\n  \n        <ion-row>\n          <ion-col total-advance col-9>Total Advanced Approved</ion-col>\n          <ion-col col-3>\n            <ion-label type="number" value="" readonly>{{ advance.Total_Approved }}</ion-label>\n          </ion-col>\n        </ion-row>\n  </ion-grid>\n  \n  </ion-content>\n  <!-- <ion-footer>\n      <button ion-button block>Submit</button>\n  \n  </ion-footer> -->\n  '/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/myrejectdetail/myrejectdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* LoadingController */]])
    ], MyrejectdetailPage);
    return MyrejectdetailPage;
}());

//# sourceMappingURL=myrejectdetail.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MypendingadvancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mypendingdetail_mypendingdetail__ = __webpack_require__(534);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MypendingadvancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MypendingadvancePage = /** @class */ (function () {
    function MypendingadvancePage(navCtrl, navParams, app, http, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.http = http;
        this.storage = storage;
        this.items = [];
        this.token = '';
        this.mypendingdetail = __WEBPACK_IMPORTED_MODULE_4__mypendingdetail_mypendingdetail__["a" /* MypendingdetailPage */];
    }
    MypendingadvancePage.prototype.goToDetail = function (item) {
        var nav = this.app.getRootNav();
        nav.push(this.mypendingdetail, item);
    };
    MypendingadvancePage.prototype.ionViewWillEnter = function () {
        this.loadData();
    };
    MypendingadvancePage.prototype.loadData = function () {
        var _this = this;
        var data;
        // Or to get a key/value pair
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/getmyadvance?token=' + val.token);
            data.subscribe(function (result) {
                console.log(result);
                _this.items = [];
                for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                    var res = result_1[_i];
                    if (res.Status != null && res.Status.indexOf("Pending Approval") >= 0) {
                        _this.items.push(res);
                    }
                }
            });
        });
    };
    MypendingadvancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mypendingadvance',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/mypendingadvance/mypendingadvance.html"*/'<!--\n  Generated template for the LeavependingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content>\n  <div *ngIf="items && items.length < 1">\n    <p class="none">No record found</p>\n  </div>\n  <ion-item *ngFor="let item of items;" (click)="goToDetail(item)">\n    <ion-avatar item-start width="20px" height="20px" class="ion-avatar">\n      <img src="assets/img/leave status (2).png"  width="20px" height="20px">\n    </ion-avatar>\n    <div text-wrap class="detail">\n      <h2>{{item.Project_Name}}</h2>\n      <p class="p-detail">\n        {{item.Start_Date}}\n      <br>\n      RM {{item.Total_Requested}}\n      <br>\n      Approver : {{item.Approver}}\n      </p>\n    </div>\n    <p class="p">{{item.Status}}</p>\n  </ion-item>\n  \n</ion-content>\n  '/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/mypendingadvance/mypendingadvance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], MypendingadvancePage);
    return MypendingadvancePage;
}());

//# sourceMappingURL=mypendingadvance.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MypendingdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
/**
 * Generated class for the MypendingdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MypendingdetailPage = /** @class */ (function () {
    function MypendingdetailPage(navCtrl, navParams, camera, alertCtrl, domSanitizer, app, http, storage, toast, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.domSanitizer = domSanitizer;
        this.app = app;
        this.http = http;
        this.storage = storage;
        this.toast = toast;
        this.loadingCtrl = loadingCtrl;
        this.Leave_Type = '';
        this.Leave_Term = '';
        this.Start_Date = '';
        this.End_Date = '';
        this.Reason = '';
        this.Department = '';
        this.Date = '';
        this.Approver = '';
        this.advancedetails = [];
        this.advance = {};
        this.user = {};
        this.token = '';
        this.advanceid = this.navParams.get('Id');
        console.log("advanceid", this.advanceid);
    }
    MypendingdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MypendingdetailPage');
    };
    MypendingdetailPage.prototype.ionViewWillEnter = function () {
        this.loadData();
    };
    MypendingdetailPage.prototype.setApproverOptions = function (value) {
        var arrApps = new Array();
        var projectName = '';
        for (var _i = 0, _a = this.departs; _i < _a.length; _i++) {
            var depart = _a[_i];
            if (depart.Id == value) {
                projectName = depart.Project_Name;
                break;
            }
        }
        for (var _b = 0, _c = this.apps; _b < _c.length; _b++) {
            var app = _c[_b];
            if (app.Project_Name == projectName) {
                arrApps.push(app);
            }
        }
        this.approverOptions = arrApps;
    };
    MypendingdetailPage.prototype.loadData = function () {
        var _this = this;
        var data;
        // Leave_Type
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/myadvancedetail/' + _this.advanceid + '?token=' + val.token);
            data.subscribe(function (result) {
                console.log(result.advance);
                _this.advance = result.advance[0];
                _this.advancedetails = result.advancedetails;
                _this.user = result.me;
                console.log(_this.user);
            });
        });
    };
    MypendingdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mypendingdetail',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/mypendingdetail/mypendingdetail.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title> My Advance Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content  class="ion-content">\n  <h3>Staff Details</h3>\n  <ion-list>\n\n    <ion-item>\n      <ion-label stacked color="primary">Name</ion-label>\n      <ion-label>{{ user.Name ? user.Name : \' - \' }}</ion-label>\n    </ion-item>\n\n    <!-- <ion-item>\n      <ion-label stacked color="primary">Bank Name</ion-label>\n      <ion-input type="text" readonly value=""> </ion-input>\n    </ion-item> -->\n\n    <ion-item>\n      <ion-label stacked color="primary">Bank Account</ion-label>\n      <ion-label>{{ advance.Bank_Account_No ? advance.Bank_Account_No : \' - \' }}</ion-label>\n    </ion-item>\n\n  <ion-item>\n    <ion-label stacked color="primary">Department</ion-label>\n    <ion-label>{{ advance.Project_Name ? advance.Project_Name : \' - \' }}</ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked color="primary">Position</ion-label>\n    <ion-label>{{ advance.Position ? advance.Position : \' - \' }}</ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked color="primary">Approver</ion-label>\n    <ion-label>{{ advance.Approver ? advance.Approver : \' - \' }}</ion-label>\n  </ion-item>\n\n<h3>Travelling Details</h3>\n<ion-item>\n    <ion-label stacked color="primary">Destination</ion-label>\n    <ion-label>{{ advance.Destination ? advance.Destination : \' - \' }}</ion-label>\n  </ion-item>\n\n  <ion-item>\n      <ion-label stacked color="primary">Start Date</ion-label>\n      <ion-label>{{ advance.Start_Date ? advance.Start_Date : \' - \' }}</ion-label>\n\n      </ion-item>\n  \n      <ion-item>\n        <ion-label stacked color="primary">End Date</ion-label>\n        <ion-label>{{ advance.End_Date ? advance.End_Date : \' - \' }}</ion-label>\n\n        </ion-item>\n\n  <ion-item>\n    <ion-label stacked color="primary">Mode Of Transport</ion-label>\n    <ion-label>{{ advance.Mode_Of_Transport ? advance.Mode_Of_Transport : \' - \' }}</ion-label>\n\n  </ion-item>\n\n  <ion-item>\n      <ion-label stacked color="primary">Car Plate No:</ion-label>\n      <ion-label>{{ advance.Car_No ? advance.Car_No : \' - \' }}</ion-label>\n    </ion-item>\n\n  </ion-list>\n\n\n<h3>Advance Required</h3>\n<ion-grid>\n\n      <ion-row>\n        <ion-col total-advance col-9></ion-col>\n        <ion-col total col-3>Amount (MYR)</ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col total-advance col-9>Total</ion-col>\n        <ion-col col-3>\n          <ion-label type="number" value="" readonly>{{ advance.Total_Requested }}</ion-label>\n        </ion-col>\n      </ion-row>\n\n\n       <ion-row>\n        <ion-col total-advance col-9>Total Advanced Requested</ion-col>\n        <ion-col col-3>\n          <ion-label type="number" value="" readonly>{{ advance.Total_Requested }}</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col total-advance col-9>Total Advanced Approved</ion-col>\n        <ion-col col-3>\n          <ion-label type="number" value="" readonly>{{ advance.Total_Approved }}</ion-label>\n        </ion-col>\n      </ion-row>\n</ion-grid>\n\n</ion-content>\n<!-- <ion-footer>\n    <button ion-button block>Submit</button>\n\n</ion-footer> -->\n'/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/mypendingdetail/mypendingdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* LoadingController */]])
    ], MypendingdetailPage);
    return MypendingdetailPage;
}());

//# sourceMappingURL=mypendingdetail.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminadvancestatusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__adminpendingadvance_adminpendingadvance__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__adminapproveadvance_adminapproveadvance__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__adminrejectadvance_adminrejectadvance__ = __webpack_require__(541);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};



/**
 * Generated class for the AdminadvancestatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminadvancestatusPage = /** @class */ (function () {
    function AdminadvancestatusPage(navCtrl, navParams, storage, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        this.tab1 = __WEBPACK_IMPORTED_MODULE_4__adminpendingadvance_adminpendingadvance__["a" /* AdminpendingadvancePage */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_5__adminapproveadvance_adminapproveadvance__["a" /* AdminapproveadvancePage */];
        this.tab3 = __WEBPACK_IMPORTED_MODULE_6__adminrejectadvance_adminrejectadvance__["a" /* AdminrejectadvancePage */];
        this.adminPendingAdvanceBadgeCount = 0;
    }
    AdminadvancestatusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminadvancestatusPage');
    };
    AdminadvancestatusPage.prototype.ionViewDidEnter = function () {
        this.loadData();
    };
    AdminadvancestatusPage.prototype.loadData = function () {
        var _this = this;
        this.storage.get('token').then(function (val) {
            _this.http.get('https://jmclicks.com/api/notifications/advancepending?token=' + val.token).subscribe(function (result) {
                _this.adminPendingAdvanceBadgeCount = result.badge_count > 0 ? result.badge_count : null;
            });
        });
    };
    AdminadvancestatusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adminadvancestatus',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/adminadvancestatus/adminadvancestatus.html"*/'\n<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>Admin Advance Status</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n  \n<ion-content>\n  <ion-tabs tabsPlacement= \'top\'>\n    <ion-tab [root]="tab1" tabTitle="Pending" tabsHideOnSubPages="true" [tabBadge]="adminPendingAdvanceBadgeCount"></ion-tab>\n    <ion-tab [root]="tab2" tabTitle="Approved" tabsHideOnSubPages="true"></ion-tab>\n    <ion-tab [root]="tab3" tabTitle="Rejected" tabsHideOnSubPages="true"></ion-tab>\n  </ion-tabs>\n</ion-content>\n  '/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/adminadvancestatus/adminadvancestatus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], AdminadvancestatusPage);
    return AdminadvancestatusPage;
}());

//# sourceMappingURL=adminadvancestatus.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminpendingadvancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_badge__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__adminpendingdetail_adminpendingdetail__ = __webpack_require__(537);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the AdminpendingadvancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminpendingadvancePage = /** @class */ (function () {
    function AdminpendingadvancePage(navCtrl, navParams, app, http, storage, badge, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.http = http;
        this.storage = storage;
        this.badge = badge;
        this.events = events;
        this.items = [];
        this.token = '';
        this.adminpendingdetail = __WEBPACK_IMPORTED_MODULE_5__adminpendingdetail_adminpendingdetail__["a" /* AdminpendingdetailPage */];
        this.notifications = [];
        events.subscribe('adminpendingadvance', function () {
            // user and time are the same arguments passed in `events.publish(user, time)`
            _this.loadData();
        });
    }
    AdminpendingadvancePage.prototype.gotoPage = function (item) {
        var nav = this.app.getRootNav();
        nav.push(this.adminpendingdetail, item);
    };
    AdminpendingadvancePage.prototype.ionViewWillEnter = function () {
        this.loadData();
    };
    AdminpendingadvancePage.prototype.loadData = function () {
        var _this = this;
        var data;
        // Or to get a key/value pair
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/advancemanagement?token=' + val.token);
            data.subscribe(function (result) {
                console.log(result);
                var r = result.advances;
                _this.items = [];
                for (var _i = 0, r_1 = r; _i < r_1.length; _i++) {
                    var res = r_1[_i];
                    if (res.Status.indexOf("Pending") >= 0) {
                        _this.items.push(res);
                    }
                }
            });
            _this.storage.get('token').then(function (val) {
                _this.http.get('https://jmclicks.com/api/notifications/advancepending?token=' + val.token).subscribe(function (result) {
                    var that = _this;
                    result.notifications.map(function (value) {
                        that.notifications[value.TargetId] = value;
                    });
                    console.log(_this.notifications);
                });
            });
        });
    };
    AdminpendingadvancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adminpendingadvance',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/adminpendingadvance/adminpendingadvance.html"*/'<!--\n  Generated template for the LeavependingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content class="ion-content">\n  <div *ngIf="items.length < 1">\n    <p class="none">No record found</p>\n  </div>\n  <ion-item *ngFor="let item of items;" (click)="gotoPage(item)">\n    <ion-avatar item-start width="20px" height="20px" class="ion-avatar">\n      <img src="assets/img/leave status (2).png"  width="20px" height="20px">\n    </ion-avatar>\n    <p style="color:blueviolet" ALIGN=RIGHT ><b>{{ notifications[item.Id] ? \'New \': \'\'}}</b></p>\n    <div text-wrap class="detail">\n      <h2>{{item.Project_Name}}</h2>\n      <p class="p-detail">\n        {{item.Start_Date}}\n      <br>\n        RM {{item.Total_Requested}}\n      </p>\n    </div>\n    <p class="p">{{item.Status}}</p>\n  </ion-item>\n\n</ion-content>\n  '/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/adminpendingadvance/adminpendingadvance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_badge__["a" /* Badge */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], AdminpendingadvancePage);
    return AdminpendingadvancePage;
}());

//# sourceMappingURL=adminpendingadvance.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminpendingdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__adminpendingadvanceredirect_adminpendingadvanceredirect__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};


/**
 * Generated class for the AdminpendingdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminpendingdetailPage = /** @class */ (function () {
    function AdminpendingdetailPage(navCtrl, navParams, camera, alertCtrl, domSanitizer, app, http, storage, toast, loadingCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.domSanitizer = domSanitizer;
        this.app = app;
        this.http = http;
        this.storage = storage;
        this.toast = toast;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.adminpendingadvanceredirect = __WEBPACK_IMPORTED_MODULE_7__adminpendingadvanceredirect_adminpendingadvanceredirect__["a" /* AdminpendingadvanceredirectPage */];
        this.Leave_Type = '';
        this.Leave_Term = '';
        this.Start_Date = '';
        this.End_Date = '';
        this.Reason = '';
        this.Department = '';
        this.Approver = '';
        this.advancedetails = [];
        this.advance = {};
        this.user = {};
        this.token = '';
        this.advanceid = this.navParams.get('Id');
        console.log("advanceid", this.advanceid);
        this.Project_Name = this.navParams.get('Project_Name');
        this.AdvanceId = this.navParams.get('AdvanceId');
        this.AdvanceId = { AdvanceId: this.AdvanceId, Project_Name: this.Project_Name };
    }
    AdminpendingdetailPage.prototype.ngOnInit = function () {
        this.signupform = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormGroup */]({
            Total_Approved: new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_8__angular_forms__["h" /* Validators */].required]),
        });
    };
    AdminpendingdetailPage.prototype.ionViewWillEnter = function () {
        this.loadData();
    };
    AdminpendingdetailPage.prototype.setApproverOptions = function (value) {
        var arrApps = new Array();
        var projectName = '';
        for (var _i = 0, _a = this.departs; _i < _a.length; _i++) {
            var depart = _a[_i];
            if (depart.Id == value) {
                projectName = depart.Project_Name;
                break;
            }
        }
        for (var _b = 0, _c = this.apps; _b < _c.length; _b++) {
            var app = _c[_b];
            if (app.Project_Name == projectName) {
                arrApps.push(app);
            }
        }
        this.approverOptions = arrApps;
    };
    AdminpendingdetailPage.prototype.loadData = function () {
        var _this = this;
        var data;
        // Leave_Type
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/myadvancedetail/' + _this.advanceid + '?token=' + val.token);
            data.subscribe(function (result) {
                console.log(result.advance);
                _this.advance = result.advance[0];
                _this.advancedetails = result.advancedetails;
                _this.user = result.me;
                console.log(_this.user);
            });
        });
    };
    AdminpendingdetailPage.prototype.approveAdvance = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Approve Advance',
            message: 'Are you sure want to approve this advance?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('No clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Yes clicked');
                        var loading = _this.loadingCtrl.create({
                            content: 'Submitting ...'
                        });
                        loading.present();
                        setTimeout(function () {
                            loading.dismiss();
                        }, 2000);
                        _this.storage.get('token').then(function (val) {
                            var status = 'Approved';
                            if (_this.mylevel) {
                                if (_this.mylevel.Level == "1st Approval") {
                                    status = "1st Approved";
                                }
                                if (_this.mylevel.Level == "2nd Approval") {
                                    status = "2nd Approved";
                                }
                                if (_this.mylevel.Level == "3rd Approval") {
                                    status = "3rd Approved";
                                }
                                if (_this.mylevel.Level == "4th Approval") {
                                    status = "4th Approved";
                                }
                                if (_this.mylevel.Level == "5th Approval") {
                                    status = "5th Approved";
                                }
                                if (_this.mylevel.Level == "Final Approval") {
                                    status = "Final Approved";
                                }
                            }
                            _this.http.post('https://jmclicks.com/api/advanceapprove?token=' + val.token, {
                                Total_Approved: _this.Total_Approved,
                                AdvanceId: _this.advanceid,
                                Status: status
                            }, httpOptions)
                                .subscribe(function (res) {
                                _this.events.publish('adminpendingadvance');
                                _this.navCtrl.pop();
                                console.log(res);
                                _this.toast.show("Advance Approved", '5000', 'center').subscribe(function (toast) {
                                    console.log(toast);
                                });
                            });
                            _this.http.post('https://jmclicks.com/api/notifications/updateadvancepending?token=' + val.token, { TargetId: _this.advanceid }).subscribe(function (result) {
                                console.log(result);
                            });
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    AdminpendingdetailPage.prototype.rejectAdvance = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Reject Advance',
            message: 'Are you sure want to reject this advance?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('No clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Yes clicked');
                        var loading = _this.loadingCtrl.create({
                            content: 'Submitting ...'
                        });
                        loading.present();
                        setTimeout(function () {
                            loading.dismiss();
                        }, 2000);
                        _this.storage.get('token').then(function (val) {
                            var status = 'Rejected';
                            if (_this.mylevel) {
                                if (_this.mylevel.Level == "1st Approval") {
                                    status = "1st Rejected";
                                }
                                if (_this.mylevel.Level == "2nd Approval") {
                                    status = "2nd Rejected";
                                }
                                if (_this.mylevel.Level == "3rd Approval") {
                                    status = "3rd Rejected";
                                }
                                if (_this.mylevel.Level == "4th Approval") {
                                    status = "4th Rejected";
                                }
                                if (_this.mylevel.Level == "5th Approval") {
                                    status = "5th Rejected";
                                }
                                if (_this.mylevel.Level == "Final Approval") {
                                    status = "Final Rejected";
                                }
                            }
                            _this.http.post('https://jmclicks.com/api/advancereject?token=' + val.token + '&AdvanceId=' + _this.advanceid, {
                                AdvanceId: _this.advanceid,
                                Status: status
                            }, httpOptions)
                                .subscribe(function (res) {
                                _this.events.publish('adminpendingadvance');
                                _this.navCtrl.pop();
                                console.log(res);
                                _this.toast.show("Advance Rejected", '5000', 'center').subscribe(function (toast) {
                                    console.log(toast);
                                });
                            });
                            _this.http.post('https://jmclicks.com/api/notifications/updateadvancepending?token=' + val.token, { TargetId: _this.advanceid }).subscribe(function (result) {
                                console.log(result);
                            });
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    AdminpendingdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adminpendingdetail',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/adminpendingdetail/adminpendingdetail.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n      <ion-title> My Advance Details</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content  class="ion-content">\n    <form novalidate (ngSubmit)="approveAdvance()" [formGroup]="signupform">\n\n    <h3>Staff Details</h3>\n    <ion-list>\n  \n      <ion-item>\n        <ion-label stacked color="primary">Name</ion-label>\n        <ion-label>{{ advance.Name ? advance.Name : \' - \' }}</ion-label>\n      </ion-item>\n  \n      <!-- <ion-item>\n        <ion-label stacked color="primary">Bank Name</ion-label>\n        <ion-input type="text" readonly value=""> </ion-input>\n      </ion-item> -->\n  \n      <ion-item>\n        <ion-label stacked color="primary">Bank Account</ion-label>\n        <ion-label>{{ advance.Bank_Account_No ? advance.Bank_Account_No : \' - \' }}</ion-label>\n      </ion-item>\n  \n    <ion-item>\n      <ion-label stacked color="primary">Department</ion-label>\n      <ion-label>{{ advance.Project_Name ? advance.Project_Name : \' - \' }}</ion-label>\n    </ion-item>\n  \n    <ion-item>\n        <ion-label stacked color="primary">Position</ion-label>\n        <ion-label>{{ advance.Position ? advance.Position : \' - \' }}</ion-label>\n      </ion-item>\n  \n  <h3>Travelling Details</h3>\n  <ion-item>\n      <ion-label stacked color="primary">Destination</ion-label>\n      <ion-label>{{ advance.Destination ? advance.Destination : \' - \' }}</ion-label>\n    </ion-item>\n  \n    <ion-item>\n        <ion-label stacked color="primary">Start Date</ion-label>\n        <ion-label>{{ advance.Start_Date ? advance.Start_Date : \' - \' }}</ion-label>\n  \n        </ion-item>\n    \n        <ion-item>\n          <ion-label stacked color="primary">End Date</ion-label>\n          <ion-label>{{ advance.End_Date ? advance.End_Date : \' - \' }}</ion-label>\n  \n          </ion-item>\n  \n    <ion-item>\n      <ion-label stacked color="primary">Mode Of Transport</ion-label>\n      <ion-label>{{ advance.Mode_Of_Transport ? advance.Mode_Of_Transport : \' - \' }}</ion-label>\n  \n    </ion-item>\n  \n    <ion-item>\n        <ion-label stacked color="primary">Car Plate No:</ion-label>\n        <ion-label>{{ advance.Car_No ? advance.Car_No : \' - \' }}</ion-label>\n      </ion-item>\n  \n    </ion-list>\n  \n  \n  <h3>Advance Required</h3>\n  <ion-grid>\n  \n        <ion-row>\n          <ion-col total-advance col-9></ion-col>\n          <ion-col total col-3>Amount (MYR)</ion-col>\n        </ion-row>\n  \n        <ion-row>\n          <ion-col total-advance col-9>Total</ion-col>\n          <ion-col col-3>\n            <ion-label type="number" value="" readonly>{{ advance.Total_Requested }}</ion-label>\n          </ion-col>\n        </ion-row>\n  \n  \n         <ion-row>\n          <ion-col total-advance col-9>Total Advanced Requested</ion-col>\n          <ion-col col-3>\n            <ion-label type="number" value="" readonly>{{ advance.Total_Requested }}</ion-label>\n          </ion-col>\n        </ion-row>\n  \n        <ion-row>\n          <ion-col total-advance col-9>Total Advanced Approved</ion-col>\n          <ion-col col-3>\n              <ion-input type="number" min="0" placeholder="0.00" [(ngModel)]="Total_Approved"  formControlName="Total_Approved" [class.error1]="!signupform.controls.Total_Approved.valid && signupform.controls.Total_Approved.dirty"></ion-input>\n          </ion-col>\n          <ion-item no-lines *ngIf="( signupform.get(\'Total_Approved\').hasError(\'required\') ) && signupform.get(\'Total_Approved\').touched">\n              <div class="error" *ngIf="signupform.get(\'Total_Approved\').hasError(\'required\') && signupform.get(\'Total_Approved\').touched">\n                  Please insert total approved\n              </div>\n          </ion-item>\n        </ion-row>\n  </ion-grid>\n  \n  <br>\n\n  <div class="row">\n      <div class="col">\n      <button ion-button full color="secondary" class="button-redirect" [navPush]="adminpendingadvanceredirect" [navParams]="advance">\n          Redirect\n      </button>\n      </div>\n      <div class="col">\n      <button ion-button full color="primary" type="submit" [disabled]="signupform.invalid">\n          Approve\n      </button>\n      </div>\n      <div class="col">\n          <button ion-button full color="danger" type="button" (click)="rejectAdvance()">\n          Reject Advance\n          </button>\n      </div>\n  </div>\n</form>\n\n</ion-content>\n<!-- <ion-footer>\n    <button ion-button block>Submit</button>\n\n</ion-footer> -->\n  '/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/adminpendingdetail/adminpendingdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], AdminpendingdetailPage);
    return AdminpendingdetailPage;
}());

//# sourceMappingURL=adminpendingdetail.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminpendingadvanceredirectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
var AdminpendingadvanceredirectPage = /** @class */ (function () {
    function AdminpendingadvanceredirectPage(navCtrl, app, http, storage, loadingCtrl, toast, navParams, events) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.http = http;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.toast = toast;
        this.navParams = navParams;
        this.events = events;
        this.token = '';
        this.Department = '';
        //this.loadData();
        this.Project_Name = this.navParams.get('Project_Name');
        // this.Approver = this.navParams.get('Approver');//
        this.Id = this.navParams.get('Id');
        this.LeaveId = this.navParams.get('LeaveId');
        this.advanceid = this.navParams.get('Id');
        this.AdvanceId = this.navParams.get('Id');
        console.log("advanceid", this.AdvanceId);
        // console.log(this.LeaveId);
    }
    AdminpendingadvanceredirectPage.prototype.ionViewWillEnter = function () {
        this.loadData();
    };
    AdminpendingadvanceredirectPage.prototype.ngOnInit = function () {
        this.signupform = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormGroup */]({
            Approver: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required]),
        });
    };
    AdminpendingadvanceredirectPage.prototype.loadData = function () {
        var _this = this;
        var data;
        // Or to get a key/value pair
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/getclaimsheet?token=' + val.token);
            data.subscribe(function (result) {
                _this.items = result;
            });
        });
        // Department
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/getprojects?token=' + val.token);
            data.subscribe(function (result) {
                console.log(result);
                _this.departs = result;
            });
        });
        // Approver
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/getapprover?token=' + val.token);
            data.subscribe(function (result) {
                console.log(result);
                _this.apps = result;
                //filter array
                var arrApps = [];
                for (var _i = 0, _a = _this.apps; _i < _a.length; _i++) {
                    var app = _a[_i];
                    if (app.Project_Name == _this.Project_Name) {
                        arrApps.push(app);
                    }
                }
                console.log(arrApps);
                _this.apps = arrApps;
            });
        });
    };
    AdminpendingadvanceredirectPage.prototype.redirectAdvance = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Redirecting ...'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 2000);
        this.storage.get('token').then(function (val) {
            return _this.http.post('https://jmclicks.com/api/advanceredirect?token=' + val.token, {
                Approver: _this.Approver,
                AdvanceId: _this.AdvanceId,
            }, httpOptions)
                .subscribe(function (res) {
                _this.http.post('https://jmclicks.com/api/notifications/updateadvancepending?token=' + val.token, { TargetId: _this.advanceid }).subscribe(function (result) {
                    console.log(result);
                });
                _this.events.publish('adminpendingadvance');
                _this.navCtrl.popTo(_this.navCtrl.getByIndex(_this.navCtrl.length() - 3));
                console.log(res);
                _this.toast.show("Redirect succesfull", '5000', 'center').subscribe(function (toast) {
                    console.log(toast);
                });
            });
        });
    };
    AdminpendingadvanceredirectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adminpendingadvanceredirect',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/adminpendingadvanceredirect/adminpendingadvanceredirect.html"*/'<ion-header>\n\n  <ion-navbar color="darkblue">\n\n        <ion-toolbar>\n\n            <ion-title>Advance Pending Redirect</ion-title>\n\n        </ion-toolbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <form novalidate (ngSubmit)="redirectAdvance()" [formGroup]="signupform">\n\n\n\n    <div class="div1">\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label>Approver:</ion-label>\n\n        <ion-select [(ngModel)]="Approver"  formControlName="Approver" [class.error1]="!signupform.controls.Approver.valid && signupform.controls.Approver.dirty">\n\n        <ion-option *ngFor="let app of apps" value="{{app.Id}}">{{app.Name}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item no-lines *ngIf="( signupform.get(\'Approver\').hasError(\'required\') ) && signupform.get(\'Approver\').touched">\n\n        <div class="error" *ngIf="signupform.get(\'Approver\').hasError(\'required\') && signupform.get(\'Approver\').touched">\n\n          Please select your Approver\n\n        </div>\n\n      </ion-item>\n\n    </ion-list>\n\n    </div>\n\n\n\n    <div class="center">\n\n      <button ion-button block color="primary" type="submit"  [disabled]="signupform.invalid">Submit</button>\n\n    </div>\n\n  </form>\n\n</ion-content>\n\n      '/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/adminpendingadvanceredirect/adminpendingadvanceredirect.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], AdminpendingadvanceredirectPage);
    return AdminpendingadvanceredirectPage;
}());

//# sourceMappingURL=adminpendingadvanceredirect.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminapproveadvancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_badge__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__adminapprovedetail_adminapprovedetail__ = __webpack_require__(540);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the AdminapproveadvancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminapproveadvancePage = /** @class */ (function () {
    function AdminapproveadvancePage(navCtrl, navParams, app, http, storage, badge) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.http = http;
        this.storage = storage;
        this.badge = badge;
        this.items = [];
        this.token = '';
        this.adminapprovedetail = __WEBPACK_IMPORTED_MODULE_5__adminapprovedetail_adminapprovedetail__["a" /* AdminapprovedetailPage */];
        this.notifications = [];
    }
    AdminapproveadvancePage.prototype.gotoPage = function (item) {
        var nav = this.app.getRootNav();
        nav.push(this.adminapprovedetail, item);
    };
    AdminapproveadvancePage.prototype.ionViewWillEnter = function () {
        this.loadData();
    };
    AdminapproveadvancePage.prototype.loadData = function () {
        var _this = this;
        var data;
        // Or to get a key/value pair
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/advancemanagement?token=' + val.token);
            data.subscribe(function (result) {
                console.log(result);
                var r = result.advances;
                _this.items = [];
                for (var _i = 0, r_1 = r; _i < r_1.length; _i++) {
                    var res = r_1[_i];
                    if (res.Status.indexOf("Approved") >= 0) {
                        _this.items.push(res);
                    }
                }
            });
            _this.storage.get('token').then(function (val) {
                _this.http.get('https://jmclicks.com/api/notifications/advancepending?token=' + val.token).subscribe(function (result) {
                    var that = _this;
                    result.notifications.map(function (value) {
                        that.notifications[value.TargetId] = value;
                    });
                    console.log(_this.notifications);
                });
            });
        });
    };
    AdminapproveadvancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adminapproveadvance',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/adminapproveadvance/adminapproveadvance.html"*/'<!--\n  Generated template for the LeavependingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content class="ion-content">\n  <div *ngIf="items.length < 1">\n    <p class="none">No record found</p>\n  </div>\n  <ion-item *ngFor="let item of items;" (click)="gotoPage(item)">\n    <ion-avatar item-start width="20px" height="20px" class="ion-avatar">\n      <img src="assets/img/leave-approve (2).png"  width="20px" height="20px">\n    </ion-avatar>\n    <p style="color:blueviolet" ALIGN=RIGHT ><b>{{ notifications[item.Id] ? \'New \': \'\'}}</b></p>\n\n    <div text-wrap class="detail">\n      <h2>{{item.Project_Name}}</h2>\n      <p class="p-detail">\n        {{item.Start_Date}}\n      <br>\n       RM {{item.Total_Requested}}\n      </p>\n    </div>\n    <p class="p">{{item.Status}}</p>\n  </ion-item>\n  \n</ion-content>\n  '/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/adminapproveadvance/adminapproveadvance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_badge__["a" /* Badge */]])
    ], AdminapproveadvancePage);
    return AdminapproveadvancePage;
}());

//# sourceMappingURL=adminapproveadvance.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminapprovedetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
/**
 * Generated class for the AdminpendingdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminapprovedetailPage = /** @class */ (function () {
    function AdminapprovedetailPage(navCtrl, navParams, camera, alertCtrl, domSanitizer, app, http, storage, toast, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.domSanitizer = domSanitizer;
        this.app = app;
        this.http = http;
        this.storage = storage;
        this.toast = toast;
        this.loadingCtrl = loadingCtrl;
        this.Leave_Type = '';
        this.Leave_Term = '';
        this.Start_Date = '';
        this.End_Date = '';
        this.Reason = '';
        this.Department = '';
        this.Approver = '';
        this.advancedetails = [];
        this.advance = {};
        this.user = {};
        this.token = '';
        this.advanceid = this.navParams.get('Id');
        console.log("advanceid", this.advanceid);
        this.Project_Name = this.navParams.get('Project_Name');
        this.AdvanceId = this.navParams.get('AdvanceId');
        this.AdvanceId = { AdvanceId: this.AdvanceId, Project_Name: this.Project_Name };
    }
    AdminapprovedetailPage.prototype.ionViewWillEnter = function () {
        this.loadData();
    };
    AdminapprovedetailPage.prototype.setApproverOptions = function (value) {
        var arrApps = new Array();
        var projectName = '';
        for (var _i = 0, _a = this.departs; _i < _a.length; _i++) {
            var depart = _a[_i];
            if (depart.Id == value) {
                projectName = depart.Project_Name;
                break;
            }
        }
        for (var _b = 0, _c = this.apps; _b < _c.length; _b++) {
            var app = _c[_b];
            if (app.Project_Name == projectName) {
                arrApps.push(app);
            }
        }
        this.approverOptions = arrApps;
    };
    AdminapprovedetailPage.prototype.loadData = function () {
        var _this = this;
        var data;
        // Leave_Type
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/myadvancedetail/' + _this.advanceid + '?token=' + val.token);
            data.subscribe(function (result) {
                console.log(result.advance);
                _this.advance = result.advance[0];
                _this.advancedetails = result.advancedetails;
                _this.user = result.me;
                console.log(_this.user);
            });
        });
    };
    AdminapprovedetailPage.prototype.approveAdvance = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Approve Advance',
            message: 'Are you sure want to approve this advance?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('No clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Yes clicked');
                        var loading = _this.loadingCtrl.create({
                            content: 'Submitting ...'
                        });
                        loading.present();
                        setTimeout(function () {
                            loading.dismiss();
                        }, 2000);
                        _this.storage.get('token').then(function (val) {
                            var status = 'Approved';
                            if (_this.mylevel) {
                                if (_this.mylevel.Level == "1st Approval") {
                                    status = "1st Approved";
                                }
                                if (_this.mylevel.Level == "2nd Approval") {
                                    status = "2nd Approved";
                                }
                                if (_this.mylevel.Level == "3rd Approval") {
                                    status = "3rd Approved";
                                }
                                if (_this.mylevel.Level == "4th Approval") {
                                    status = "4th Approved";
                                }
                                if (_this.mylevel.Level == "5th Approval") {
                                    status = "5th Approved";
                                }
                                if (_this.mylevel.Level == "Final Approval") {
                                    status = "Final Approved";
                                }
                            }
                            _this.http.post('https://jmclicks.com/api/advanceapprove?token=' + val.token, {
                                Total_Approved: _this.Total_Approved,
                                AdvanceId: _this.advanceid,
                                Status: status
                            }, httpOptions)
                                .subscribe(function (res) {
                                _this.navCtrl.pop();
                                console.log(res);
                                _this.toast.show("Advance Approved", '5000', 'center').subscribe(function (toast) {
                                    console.log(toast);
                                });
                            });
                            _this.http.post('https://jmclicks.com/api/notifications/updateadvancepending?token=' + val.token, { TargetId: _this.advanceid }).subscribe(function (result) {
                                console.log(result);
                            });
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    AdminapprovedetailPage.prototype.rejectAdvance = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Reject Advance',
            message: 'Are you sure want to reject this advance?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('No clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Yes clicked');
                        var loading = _this.loadingCtrl.create({
                            content: 'Submitting ...'
                        });
                        loading.present();
                        setTimeout(function () {
                            loading.dismiss();
                        }, 2000);
                        _this.storage.get('token').then(function (val) {
                            var status = 'Rejected';
                            if (_this.mylevel) {
                                if (_this.mylevel.Level == "1st Approval") {
                                    status = "1st Rejected";
                                }
                                if (_this.mylevel.Level == "2nd Approval") {
                                    status = "2nd Rejected";
                                }
                                if (_this.mylevel.Level == "3rd Approval") {
                                    status = "3rd Rejected";
                                }
                                if (_this.mylevel.Level == "4th Approval") {
                                    status = "4th Rejected";
                                }
                                if (_this.mylevel.Level == "5th Approval") {
                                    status = "5th Rejected";
                                }
                                if (_this.mylevel.Level == "Final Approval") {
                                    status = "Final Rejected";
                                }
                            }
                            _this.http.post('https://jmclicks.com/api/advancereject?token=' + val.token + '&AdvanceId=' + _this.advanceid, {
                                AdvanceId: _this.advanceid,
                                Status: status
                            }, httpOptions)
                                .subscribe(function (res) {
                                _this.navCtrl.pop();
                                console.log(res);
                                _this.toast.show("Advance Rejected", '5000', 'center').subscribe(function (toast) {
                                    console.log(toast);
                                });
                            });
                            _this.http.post('https://jmclicks.com/api/notifications/updateadvancerejected?token=' + val.token, { TargetId: _this.advanceid }).subscribe(function (result) {
                                console.log(result);
                            });
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    AdminapprovedetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adminapprovedetail',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/adminapprovedetail/adminapprovedetail.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n      <ion-title> My Advance Details</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content  class="ion-content">\n    <h3>Staff Details</h3>\n    <ion-list>\n  \n      <ion-item>\n        <ion-label stacked color="primary">Name</ion-label>\n        <ion-label>{{  advance.Name ? advance.Name : \' - \' }}</ion-label>\n      </ion-item>\n  \n      <!-- <ion-item>\n        <ion-label stacked color="primary">Bank Name</ion-label>\n        <ion-input type="text" readonly value=""> </ion-input>\n      </ion-item> -->\n  \n      <ion-item>\n        <ion-label stacked color="primary">Bank Account</ion-label>\n        <ion-label>{{ advance.Bank_Account_No ? advance.Bank_Account_No : \' - \' }}</ion-label>\n      </ion-item>\n  \n    <ion-item>\n      <ion-label stacked color="primary">Department</ion-label>\n      <ion-label>{{ advance.Project_Name ? advance.Project_Name : \' - \' }}</ion-label>\n    </ion-item>\n  \n    <ion-item>\n        <ion-label stacked color="primary">Position</ion-label>\n        <ion-label>{{ advance.Position ? advance.Position : \' - \' }}</ion-label>\n      </ion-item>\n  \n  <h3>Travelling Details</h3>\n  <ion-item>\n      <ion-label stacked color="primary">Destination</ion-label>\n      <ion-label>{{ advance.Destination ? advance.Destination : \' - \' }}</ion-label>\n    </ion-item>\n  \n    <ion-item>\n        <ion-label stacked color="primary">Start Date</ion-label>\n        <ion-label>{{ advance.Start_Date ? advance.Start_Date : \' - \' }}</ion-label>\n  \n        </ion-item>\n    \n        <ion-item>\n          <ion-label stacked color="primary">End Date</ion-label>\n          <ion-label>{{ advance.End_Date ? advance.End_Date : \' - \' }}</ion-label>\n  \n          </ion-item>\n  \n    <ion-item>\n      <ion-label stacked color="primary">Mode Of Transport</ion-label>\n      <ion-label>{{ advance.Mode_Of_Transport ? advance.Mode_Of_Transport : \' - \' }}</ion-label>\n  \n    </ion-item>\n  \n    <ion-item>\n        <ion-label stacked color="primary">Car Plate No:</ion-label>\n        <ion-label>{{ advance.Car_No ? advance.Car_No : \' - \' }}</ion-label>\n      </ion-item>\n  \n    </ion-list>\n  \n  \n  <h3>Advance Required</h3>\n  <ion-grid>\n  \n        <ion-row>\n          <ion-col total-advance col-9></ion-col>\n          <ion-col total col-3>Amount (MYR)</ion-col>\n        </ion-row>\n  \n        <ion-row>\n          <ion-col total-advance col-9>Total</ion-col>\n          <ion-col col-3>\n            <ion-label type="number" value="" readonly>{{ advance.Total_Requested }}</ion-label>\n          </ion-col>\n        </ion-row>\n  \n  \n         <ion-row>\n          <ion-col total-advance col-9>Total Advanced Requested</ion-col>\n          <ion-col col-3>\n            <ion-label type="number" value="" readonly>{{ advance.Total_Requested }}</ion-label>\n          </ion-col>\n        </ion-row>\n  \n        <ion-row>\n          <ion-col total-advance col-9>Total Advanced Approved</ion-col>\n          <ion-col col-3>\n            <ion-label type="number" value="" readonly>{{ advance.Total_Approved }}</ion-label>\n          </ion-col>\n        </ion-row>\n  </ion-grid>\n  \n  </ion-content>\n  <!-- <ion-footer>\n      <button ion-button block>Submit</button>\n  \n  </ion-footer> -->\n  '/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/adminapprovedetail/adminapprovedetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* LoadingController */]])
    ], AdminapprovedetailPage);
    return AdminapprovedetailPage;
}());

//# sourceMappingURL=adminapprovedetail.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminrejectadvancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__adminrejectdetail_adminrejectdetail__ = __webpack_require__(542);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AdminrejectadvancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminrejectadvancePage = /** @class */ (function () {
    function AdminrejectadvancePage(navCtrl, navParams, app, http, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.http = http;
        this.storage = storage;
        this.adminrejectdetail = __WEBPACK_IMPORTED_MODULE_4__adminrejectdetail_adminrejectdetail__["a" /* AdminrejectdetailPage */];
        this.items = [];
        this.token = '';
        this.notifications = [];
    }
    AdminrejectadvancePage.prototype.gotoPage = function (item) {
        var nav = this.app.getRootNav();
        nav.push(this.adminrejectdetail, item);
    };
    AdminrejectadvancePage.prototype.ionViewWillEnter = function () {
        this.loadData();
    };
    AdminrejectadvancePage.prototype.loadData = function () {
        var _this = this;
        var data;
        // Or to get a key/value pair
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/advancemanagement?token=' + val.token);
            data.subscribe(function (result) {
                console.log(result);
                var r = result.advances;
                _this.items = [];
                for (var _i = 0, r_1 = r; _i < r_1.length; _i++) {
                    var res = r_1[_i];
                    if (res.Status.indexOf("Rejected") >= 0) {
                        _this.items.push(res);
                    }
                }
            });
            // this.storage.get('token').then((val) => {
            //   this.http.get<{badge_count: any, notifications: any}>('http://localhost:8200/jmclicks/public/api/notifications/advancerejected?token=' + val.token).subscribe(result => {
            //     let that = this
            //     result.notifications.map(function(value) {
            //       that.notifications[value.TargetId] = value
            //     })
            //     console.log(this.notifications)
            //   })
            // });
        });
    };
    AdminrejectadvancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adminrejectadvance',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/adminrejectadvance/adminrejectadvance.html"*/'<!--\n  Generated template for the LeavependingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content class="ion-content">\n  <div *ngIf="items.length < 1">\n    <p class="none">No record found</p>\n  </div>\n  <ion-item *ngFor="let item of items;" (click)="gotoPage(item)">\n    <ion-avatar item-start width="20px" height="20px" class="ion-avatar">\n      <img src="assets/img/leave-reject.png"  width="20px" height="20px">\n    </ion-avatar>\n    <div text-wrap class="detail">\n      <h2>{{item.Project_Name}}</h2>\n      <p class="p-detail">\n        {{item.Start_Date}}\n      <br>\n        RM {{item.Total_Requested}}\n      </p>\n    </div>\n    <p class="p">{{item.Status}}</p>\n  </ion-item>\n  \n  \n  </ion-content>\n  '/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/adminrejectadvance/adminrejectadvance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], AdminrejectadvancePage);
    return AdminrejectadvancePage;
}());

//# sourceMappingURL=adminrejectadvance.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminrejectdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
/**
 * Generated class for the AdminpendingdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminrejectdetailPage = /** @class */ (function () {
    function AdminrejectdetailPage(navCtrl, navParams, camera, alertCtrl, domSanitizer, app, http, storage, toast, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.domSanitizer = domSanitizer;
        this.app = app;
        this.http = http;
        this.storage = storage;
        this.toast = toast;
        this.loadingCtrl = loadingCtrl;
        this.Leave_Type = '';
        this.Leave_Term = '';
        this.Start_Date = '';
        this.End_Date = '';
        this.Reason = '';
        this.Department = '';
        this.Approver = '';
        this.advancedetails = [];
        this.advance = {};
        this.user = {};
        this.token = '';
        this.advanceid = this.navParams.get('Id');
        console.log("advanceid", this.advanceid);
    }
    AdminrejectdetailPage.prototype.ionViewWillEnter = function () {
        this.loadData();
    };
    AdminrejectdetailPage.prototype.setApproverOptions = function (value) {
        var arrApps = new Array();
        var projectName = '';
        for (var _i = 0, _a = this.departs; _i < _a.length; _i++) {
            var depart = _a[_i];
            if (depart.Id == value) {
                projectName = depart.Project_Name;
                break;
            }
        }
        for (var _b = 0, _c = this.apps; _b < _c.length; _b++) {
            var app = _c[_b];
            if (app.Project_Name == projectName) {
                arrApps.push(app);
            }
        }
        this.approverOptions = arrApps;
    };
    AdminrejectdetailPage.prototype.loadData = function () {
        var _this = this;
        var data;
        // Leave_Type
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/myadvancedetail/' + _this.advanceid + '?token=' + val.token);
            data.subscribe(function (result) {
                console.log(result.advance);
                _this.advance = result.advance[0];
                _this.advancedetails = result.advancedetails;
                _this.user = result.me;
                console.log(_this.user);
            });
        });
    };
    AdminrejectdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adminrejectdetail',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/adminrejectdetail/adminrejectdetail.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n      <ion-title> My Advance Details</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content  class="ion-content">\n    <h3>Staff Details</h3>\n    <ion-list>\n  \n      <ion-item>\n        <ion-label stacked color="primary">Name</ion-label>\n        <ion-label>{{  advance.Name ? advance.Name : \' - \' }}</ion-label>\n      </ion-item>\n  \n      <!-- <ion-item>\n        <ion-label stacked color="primary">Bank Name</ion-label>\n        <ion-input type="text" readonly value=""> </ion-input>\n      </ion-item> -->\n  \n      <ion-item>\n        <ion-label stacked color="primary">Bank Account</ion-label>\n        <ion-label>{{ advance.Bank_Account_No ? advance.Bank_Account_No : \' - \' }}</ion-label>\n      </ion-item>\n  \n    <ion-item>\n      <ion-label stacked color="primary">Department</ion-label>\n      <ion-label>{{ advance.Project_Name ? advance.Project_Name : \' - \' }}</ion-label>\n    </ion-item>\n  \n    <ion-item>\n        <ion-label stacked color="primary">Position</ion-label>\n        <ion-label>{{ advance.Position ? advance.Position : \' - \' }}</ion-label>\n      </ion-item>\n  \n  <h3>Travelling Details</h3>\n  <ion-item>\n      <ion-label stacked color="primary">Destination</ion-label>\n      <ion-label>{{ advance.Destination ? advance.Destination : \' - \' }}</ion-label>\n    </ion-item>\n  \n    <ion-item>\n        <ion-label stacked color="primary">Start Date</ion-label>\n        <ion-label>{{ advance.Start_Date ? advance.Start_Date : \' - \' }}</ion-label>\n  \n        </ion-item>\n    \n        <ion-item>\n          <ion-label stacked color="primary">End Date</ion-label>\n          <ion-label>{{ advance.End_Date ? advance.End_Date : \' - \' }}</ion-label>\n  \n          </ion-item>\n  \n    <ion-item>\n      <ion-label stacked color="primary">Mode Of Transport</ion-label>\n      <ion-label>{{ advance.Mode_Of_Transport ? advance.Mode_Of_Transport : \' - \' }}</ion-label>\n  \n    </ion-item>\n  \n    <ion-item>\n        <ion-label stacked color="primary">Car Plate No:</ion-label>\n        <ion-label>{{ advance.Car_No ? advance.Car_No : \' - \' }}</ion-label>\n      </ion-item>\n  \n    </ion-list>\n  \n  \n  <h3>Advance Required</h3>\n  <ion-grid>\n  \n        <ion-row>\n          <ion-col total-advance col-9></ion-col>\n          <ion-col total col-3>Amount (MYR)</ion-col>\n        </ion-row>\n  \n        <ion-row>\n          <ion-col total-advance col-9>Total</ion-col>\n          <ion-col col-3>\n            <ion-label type="number" value="" readonly>{{ advance.Total_Requested }}</ion-label>\n          </ion-col>\n        </ion-row>\n  \n  \n         <ion-row>\n          <ion-col total-advance col-9>Total Advanced Requested</ion-col>\n          <ion-col col-3>\n            <ion-label type="number" value="" readonly>{{ advance.Total_Requested }}</ion-label>\n          </ion-col>\n        </ion-row>\n  \n        <ion-row>\n          <ion-col total-advance col-9>Total Advanced Approved</ion-col>\n          <ion-col col-3>\n            <ion-label type="number" value="" readonly>{{ advance.Total_Approved }}</ion-label>\n          </ion-col>\n        </ion-row>\n  </ion-grid>\n  \n  </ion-content>\n  <!-- <ion-footer>\n      <button ion-button block>Submit</button>\n  \n  </ion-footer> -->\n  '/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/adminrejectdetail/adminrejectdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* LoadingController */]])
    ], AdminrejectdetailPage);
    return AdminrejectdetailPage;
}());

//# sourceMappingURL=adminrejectdetail.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticeallPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_app_preferences__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_badge__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_app_version__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__notice_notice__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__noticecontractor_noticecontractor__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__noticeproject_noticeproject__ = __webpack_require__(548);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};



/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NoticeallPage = /** @class */ (function () {
    function NoticeallPage(navCtrl, navParams, storage, app, toast, loadingCtrl, http, appPreferences, badge, appVersion, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.app = app;
        this.toast = toast;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.appPreferences = appPreferences;
        this.badge = badge;
        this.appVersion = appVersion;
        this.alertCtrl = alertCtrl;
        this.splash = true;
        this.user = '';
        this.Name = '';
        this.Position = '';
        this.Player_Id = '';
        this.currentDate = new Date();
        this.getFormattedDate();
        this.allStaffBadgeCount = 0;
        this.allContractorBadgeCount = 0;
        this.allProjectBadgeCount = 0;
        this.loadData();
    }
    NoticeallPage.prototype.getFormattedDate = function () {
        var dateObj = new Date();
        var year = dateObj.getFullYear().toString();
        var month = dateObj.getMonth().toString();
        var date = dateObj.getDate().toString();
        var monthArray = ['January', 'February', 'March', 'April', 'May', 'Jun', 'July', 'August', 'September', 'October', 'November', 'Disember'];
        this.formattedDate = year + '-' + monthArray[month] + '-' + date;
    };
    NoticeallPage.prototype.onGoToNotice = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__notice_notice__["a" /* NoticePage */]);
    };
    NoticeallPage.prototype.onGoToNoticeContractor = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__noticecontractor_noticecontractor__["a" /* NoticecontractorPage */]);
    };
    NoticeallPage.prototype.onGoToNoticeProject = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__noticeproject_noticeproject__["a" /* NoticeprojectPage */]);
    };
    NoticeallPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () { return _this.splash = false; }, 4000);
    };
    NoticeallPage.prototype.isObject = function (variable) {
        return typeof variable === 'object';
    };
    NoticeallPage.prototype.loadData = function () {
        var _this = this;
        var data;
        // User
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/getuser?token=' + val.token);
            data.subscribe(function (result) {
                console.log(result);
                _this.user = result;
            });
        });
        this.storage.get('token').then(function (val) {
            _this.http.get('https://jmclicks.com/api/notifications/getnoticebadge?token=' + val.token).subscribe(function (result) {
                _this.allStaffBadgeCount = result.badge_count;
                // this.allContractorBadgeCount = result.badge_count;
                // this.allProjectBadgeCount = result.badge_count;
            });
        });
        this.storage.get('token').then(function (val) {
            _this.http.get('https://jmclicks.com/api/getcontractornoticebadge?token=' + val.token).subscribe(function (result) {
                // this.allStaffBadgeCount = result.badge_count;
                _this.allContractorBadgeCount = result.badge_count;
                // this.allProjectBadgeCount = result.badge_count;
            });
        });
        this.storage.get('token').then(function (val) {
            _this.http.get('https://jmclicks.com/api/getprojectnoticebadge?token=' + val.token).subscribe(function (result) {
                // this.allStaffBadgeCount = result.badge_count;
                // this.allContractorBadgeCount = result.badge_count;
                _this.allProjectBadgeCount = result.badge_count;
            });
        });
    };
    // badge icon count
    NoticeallPage.prototype.setBadges = function (badgeNumber) {
        return __awaiter(this, void 0, void 0, function () {
            var badges, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.badge.set(badgeNumber)];
                    case 1:
                        badges = _a.sent();
                        console.log(badges);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    NoticeallPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-noticeall',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/noticeall/noticeall.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="secondary">\n\n    <ion-title>All Notice</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header> \n\n<ion-content  class="ion-content">\n\n\n\n  <br>\n\n\n\n  <br>\n\n\n\n  <div style="text-align: center">\n\n    <div *ngIf="(isObject(user) && user.User_Type == \'Staff\')">\n\n      <div class = "col a">\n\n        <button  class="round-button-menu button1" (click)=\'onGoToNotice()\'>\n\n            <img src="assets/img/business_team.png" width="56" height="56">\n\n          </button>\n\n          <div class="test">\n\n            <ion-badge color="danger" *ngIf="allStaffBadgeCount > 0" float-right>{{ allStaffBadgeCount }}</ion-badge>\n\n          </div>\n\n        <div style="color:black">Staff</div>\n\n      </div>\n\n    </div>\n\n    <br>\n\n    <div class = "col a" *ngIf="(isObject(user) && user.User_Type == \'Contractor\')">\n\n      <button  class="round-button-menu button2" (click)=\'onGoToNoticeContractor()\'>\n\n          <img src="assets/img/contractor.png" width="56" height="56">\n\n        </button>\n\n        <div class="test">\n\n          <ion-badge color="danger" *ngIf="allContractorBadgeCount > 0" float-right>{{ allContractorBadgeCount }}</ion-badge>\n\n        </div>\n\n      <div style="color:black">Contractor</div>\n\n    </div>\n\n    <br>\n\n    <div class = "col a" *ngIf="(isObject(user) && user.User_Type == \'Staff\')">\n\n      <button  class="round-button-menu button3" (click)=\'onGoToNoticeProject()\'>\n\n        <img src="assets/img/project.png" width="56" height="56">\n\n      </button>\n\n      <div class="test">\n\n        <ion-badge color="danger" *ngIf="allProjectBadgeCount > 0" float-right>{{ allProjectBadgeCount }}</ion-badge>\n\n      </div>\n\n      <div style="color:black">Project/Department</div>\n\n    </div>\n\n\n\n    <!-- <br>\n\n\n\n    <button ion-button style="width: 50%; margin-top: 10pt" (click)="onGoToNotice()">General</button>\n\n    <br>\n\n    <button ion-button style="width: 50%; margin-top: 10pt" (click)="onGoToNotice()">Contractor</button>\n\n    <br>\n\n    <button ion-button style="width: 50%; margin-top: 10pt" (click)="onGoToNotice()">Project</button> -->\n\n\n\n  </div>\n\n  <br>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/noticeall/noticeall.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_app_preferences__["a" /* AppPreferences */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_badge__["a" /* Badge */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], NoticeallPage);
    return NoticeallPage;
}());

//# sourceMappingURL=noticeall.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_image_loader__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_document_viewer__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_opener__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__noticedetail_noticedetail__ = __webpack_require__(545);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};

/**
 * Generated class for the NoticePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NoticePage = /** @class */ (function () {
    function NoticePage(navCtrl, navParams, camera, domSanitizer, app, http, storage, ionicImageLoader, document, file, transfer, platform, alertCtrl, fileOpener) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.domSanitizer = domSanitizer;
        this.app = app;
        this.http = http;
        this.storage = storage;
        this.ionicImageLoader = ionicImageLoader;
        this.document = document;
        this.file = file;
        this.transfer = transfer;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.fileOpener = fileOpener;
        this.token = '';
        this.noticedetailpage = __WEBPACK_IMPORTED_MODULE_11__noticedetail_noticedetail__["a" /* NoticedetailPage */];
        this.notifications = [];
        this.loadData();
        this.Id = this.navParams.get('Id');
        this.Title = this.navParams.get('Title');
        this.Content = this.navParams.get('Content');
        this.Start_Date = this.navParams.get('Start_Date');
        this.End_Date = this.navParams.get('End_Date');
        this.Attachment = this.navParams.get('Attachment');
        this.Created_By = this.navParams.get('Created_By');
        this.FileName = this.navParams.get('FileName');
        this.noticeBadgeCount = 0;
    }
    NoticePage.prototype.noticedetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__noticedetail_noticedetail__["a" /* NoticedetailPage */]);
    };
    NoticePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NoticePage');
    };
    NoticePage.prototype.download = function (Attachment, FileName) {
        var _this = this;
        var path = 'null';
        if (this.platform.is('ios')) {
            path = this.file.externalDataDirectory;
        }
        else if (this.platform.is('android')) {
            path = this.file.externalRootDirectory + '/Download/';
        }
        // const transfer = this.transfer.create();
        var fileTransfer = this.transfer.create();
        fileTransfer.download('https://jmclicks.com/' + Attachment, path + FileName, true).then(function (entry) {
            var url = entry.toURL();
            // entry.file(function(data) {
            //    // get mime type
            //    var mime = data.type;
            // this.document.viewDocument(url, mime, {});
            var ext = Attachment.substr(Attachment.lastIndexOf('.') + 1).toUpperCase();
            var mime = '';
            if (ext == 'PDF') {
                mime = 'application/pdf';
            }
            else if (ext == 'DOC') {
                mime = 'application/msword';
            }
            else if (ext == 'DOCX') {
                mime = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
            }
            else if (ext == 'XLS') {
                mime = 'application/vnd.ms-excel';
            }
            else if (ext == 'XLSX') {
                mime = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
            }
            else if (ext == 'PPT') {
                mime = 'application/vnd.ms-powerpoint';
            }
            else if (ext == 'PPTX') {
                mime = ' application/vnd.openxmlformats-officedocument.presentationml.presentation';
            }
            else {
                mime = 'application/pdf';
            }
            _this.fileOpener.open(url, mime)
                .then(function () { return console.log('File is opened'); })
                .catch(function (e) {
                var alert = _this.alertCtrl.create({
                    title: 'Low battery',
                    subTitle: 'error',
                    buttons: ['Dismiss']
                });
                alert.present();
            });
        }, function (error) {
            console.log(error);
            var alert = _this.alertCtrl.create({
                title: 'Low battery',
                subTitle: error,
                buttons: ['Dismiss']
            });
            alert.present();
        });
    };
    NoticePage.prototype.loadData = function () {
        var _this = this;
        var data;
        // Or to get a key/value pair
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/getnotice?token=' + val.token);
            data.subscribe(function (result) {
                _this.items = result;
            });
        });
        this.storage.get('token').then(function (val) {
            _this.http.get('https://jmclicks.com/api/notifications/getnoticebadge?token=' + val.token).subscribe(function (result) {
                var that = _this;
                result.notifications.map(function (value) {
                    that.notifications[value.TargetId] = value;
                });
                console.log(_this.notifications);
            });
        });
    };
    NoticePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notice',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/notice/notice.html"*/'<!--\n  Generated template for the NoticePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>General Notice</ion-title>\n  </ion-navbar>\n\n</ion-header>  \n  \n<ion-content class="ion-content background">\n  <ion-list >\n    <ion-col *ngFor="let item of items;">\n      <ion-grid [navPush]="noticedetailpage" [navParams]="item">\n        <ion-item>\n          <p style="color:blueviolet" ALIGN=RIGHT ><b>{{ notifications[item.Id] ? \'New \': \'\'}}</b></p>\n          <ion-avatar item-start class="ion-avatar">\n            <ion-icon ios="ios-megaphone" md="md-megaphone" style="zoom:2.0;"></ion-icon>\n          </ion-avatar>\n          <div class="date">\n            <!-- <p>{{item.End_Date}}</p> -->\n          </div>\n          <div text-wrap>\n            <h2>{{item.Title}}</h2>\n          </div>\n        </ion-item>\n      </ion-grid>\n    </ion-col>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/notice/notice.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_image_loader__["a" /* IonicImageLoader */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_document_viewer__["a" /* DocumentViewer */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_opener__["a" /* FileOpener */]])
    ], NoticePage);
    return NoticePage;
}());

//# sourceMappingURL=notice.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticedetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_image_loader__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_document_viewer__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_opener__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
/**
 * Generated class for the NoticedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NoticedetailPage = /** @class */ (function () {
    function NoticedetailPage(navCtrl, navParams, camera, domSanitizer, app, http, storage, ionicImageLoader, document, file, transfer, platform, alertCtrl, fileOpener) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.domSanitizer = domSanitizer;
        this.app = app;
        this.http = http;
        this.storage = storage;
        this.ionicImageLoader = ionicImageLoader;
        this.document = document;
        this.file = file;
        this.transfer = transfer;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.fileOpener = fileOpener;
        this.token = '';
        this.loadData();
        this.Id = this.navParams.get('Id');
        this.Title = this.navParams.get('Title');
        this.Content = this.navParams.get('Content');
        this.Start_Date = this.navParams.get('Start_Date');
        this.End_Date = this.navParams.get('End_Date');
        this.Attachment = this.navParams.get('Attachment');
        this.FileName = this.navParams.get('FileName');
        this.created_at = this.navParams.get('created_at');
    }
    NoticedetailPage.prototype.download = function (Attachment, FileName) {
        var _this = this;
        var path = 'null';
        if (this.platform.is('ios')) {
            path = this.file.externalDataDirectory;
        }
        else if (this.platform.is('android')) {
            path = this.file.externalRootDirectory + '/Download/';
        }
        // const transfer = this.transfer.create();
        var fileTransfer = this.transfer.create();
        fileTransfer.download('https://jmclicks.com/' + Attachment, path + FileName, true).then(function (entry) {
            var url = entry.toURL();
            // entry.file(function(data) {
            //    // get mime type
            //    var mime = data.type;
            // this.document.viewDocument(url, mime, {});
            var ext = Attachment.substr(Attachment.lastIndexOf('.') + 1).toUpperCase();
            var mime = '';
            if (ext == 'PDF') {
                mime = 'application/pdf';
            }
            else if (ext == 'DOC') {
                mime = 'application/msword';
            }
            else if (ext == 'DOCX') {
                mime = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
            }
            else if (ext == 'XLS') {
                mime = 'application/vnd.ms-excel';
            }
            else if (ext == 'XLSX') {
                mime = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
            }
            else if (ext == 'PPT') {
                mime = 'application/vnd.ms-powerpoint';
            }
            else if (ext == 'PPTX') {
                mime = ' application/vnd.openxmlformats-officedocument.presentationml.presentation';
            }
            else {
                mime = 'application/pdf';
            }
            _this.fileOpener.open(decodeURIComponent(url), mime)
                .then(function () { return console.log('File is opened'); })
                .catch(function (e) {
                var alert = _this.alertCtrl.create({
                    title: 'Low battery',
                    subTitle: 'error',
                    buttons: ['Dismiss']
                });
                alert.present();
            });
            // })
        }, function (error) {
            console.log(error);
            var alert = _this.alertCtrl.create({
                title: 'Low battery',
                subTitle: error,
                buttons: ['Dismiss']
            });
            alert.present();
        });
    };
    NoticedetailPage.prototype.loadData = function () {
        var _this = this;
        var data;
        // Or to get a key/value pair
        this.storage.get('token').then(function (val) {
            // data = this.http.get('http://localhost:8200/jmclicks/public/api/getnotice?token=' + val.token );
            // data.subscribe(result => {
            //   this.items = result;
            // })
            _this.http.post('https://jmclicks.com/api/notifications/updatenoticebadge?token=' + val.token, { TargetId: _this.Id }).subscribe(function (result) {
                console.log(result);
            });
        });
    };
    NoticedetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-noticedetail',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/noticedetail/noticedetail.html"*/'\n<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>Notice detail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n  \n<ion-content padding class="ion-content">\n  <div class="notice-body">\n    <div class="date" hidden>\n      <p>{{Start_Date}}</p>\n      <p>{{created_at}}</p>\n    </div>\n\n    <div class="title-notice">\n      <br>\n      <h1>{{Title}}</h1>\n    </div>\n\n    <div class="notice-content">\n      <div class="text">\n        <pre>{{Content}}</pre>\n      </div>\n\n      <div *ngIf="Attachment !== null">\n        <div  *ngFor="let file of Attachment.split(\'|\'); let i = index">\n          <img ng-reflect-src *ngIf="file.substr(file.lastIndexOf(\'.\') + 1).toUpperCase() == \'PNG\' || file.substr(file.lastIndexOf(\'.\') + 1).toUpperCase() == \'JPG\' || file.substr(file.lastIndexOf(\'.\') + 1).toUpperCase() == \'JPEG\'; else elseBlock" [src]="\'https://jmclicks.com/\' + file" onError="src = \'assets/imgs/blank.png\'" imageViewer>\n            \n          <!-- <ng-template #elseBlock><button ion-button block (click)="download(file, FileName.split(\'|\')[i])">{{FileName.split(\'|\')[i]}} [Download]</button><br>\n          </ng-template> -->\n        </div>\n      </div>\n    </div>\n\n  </div>\n</ion-content>\n  '/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/noticedetail/noticedetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_image_loader__["a" /* IonicImageLoader */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_document_viewer__["a" /* DocumentViewer */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_opener__["a" /* FileOpener */]])
    ], NoticedetailPage);
    return NoticedetailPage;
}());

//# sourceMappingURL=noticedetail.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticecontractorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_image_loader__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_document_viewer__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_opener__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__noticecontractordetail_noticecontractordetail__ = __webpack_require__(547);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};

/**
 * Generated class for the NoticePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NoticecontractorPage = /** @class */ (function () {
    function NoticecontractorPage(navCtrl, navParams, camera, domSanitizer, app, http, storage, ionicImageLoader, document, file, transfer, platform, alertCtrl, fileOpener) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.domSanitizer = domSanitizer;
        this.app = app;
        this.http = http;
        this.storage = storage;
        this.ionicImageLoader = ionicImageLoader;
        this.document = document;
        this.file = file;
        this.transfer = transfer;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.fileOpener = fileOpener;
        this.token = '';
        this.noticedetailpage = __WEBPACK_IMPORTED_MODULE_11__noticecontractordetail_noticecontractordetail__["a" /* NoticecontractordetailPage */];
        this.notifications = [];
        this.loadData();
        this.Id = this.navParams.get('Id');
        this.Title = this.navParams.get('Title');
        this.Content = this.navParams.get('Content');
        this.Start_Date = this.navParams.get('Start_Date');
        this.End_Date = this.navParams.get('End_Date');
        this.Attachment = this.navParams.get('Attachment');
        this.Created_By = this.navParams.get('Created_By');
        this.FileName = this.navParams.get('FileName');
    }
    NoticecontractorPage.prototype.noticedetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__noticecontractordetail_noticecontractordetail__["a" /* NoticecontractordetailPage */]);
    };
    NoticecontractorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NoticePage');
    };
    NoticecontractorPage.prototype.download = function (Attachment, FileName) {
        var _this = this;
        var path = 'null';
        if (this.platform.is('ios')) {
            path = this.file.externalDataDirectory;
        }
        else if (this.platform.is('android')) {
            path = this.file.externalRootDirectory + '/Download/';
        }
        // const transfer = this.transfer.create();
        var fileTransfer = this.transfer.create();
        fileTransfer.download('https://jmclicks.com/' + Attachment, path + FileName, true).then(function (entry) {
            var url = entry.toURL();
            // entry.file(function(data) {
            //    // get mime type
            //    var mime = data.type;
            // this.document.viewDocument(url, mime, {});
            var ext = Attachment.substr(Attachment.lastIndexOf('.') + 1).toUpperCase();
            var mime = '';
            if (ext == 'PDF') {
                mime = 'application/pdf';
            }
            else if (ext == 'DOC') {
                mime = 'application/msword';
            }
            else if (ext == 'DOCX') {
                mime = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
            }
            else if (ext == 'XLS') {
                mime = 'application/vnd.ms-excel';
            }
            else if (ext == 'XLSX') {
                mime = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
            }
            else if (ext == 'PPT') {
                mime = 'application/vnd.ms-powerpoint';
            }
            else if (ext == 'PPTX') {
                mime = ' application/vnd.openxmlformats-officedocument.presentationml.presentation';
            }
            else {
                mime = 'application/pdf';
            }
            _this.fileOpener.open(url, mime)
                .then(function () { return console.log('File is opened'); })
                .catch(function (e) {
                var alert = _this.alertCtrl.create({
                    title: 'Low battery',
                    subTitle: 'error',
                    buttons: ['Dismiss']
                });
                alert.present();
            });
        }, function (error) {
            console.log(error);
            var alert = _this.alertCtrl.create({
                title: 'Low battery',
                subTitle: error,
                buttons: ['Dismiss']
            });
            alert.present();
        });
    };
    NoticecontractorPage.prototype.loadData = function () {
        var _this = this;
        var data;
        // Or to get a key/value pair
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/getcontractornotice?token=' + val.token);
            data.subscribe(function (result) {
                _this.items = result;
            });
        });
        this.storage.get('token').then(function (val) {
            _this.http.get('https://jmclicks.com/api/notifications/getcontractornoticebadge?token=' + val.token).subscribe(function (result) {
                var that = _this;
                result.notifications.map(function (value) {
                    that.notifications[value.TargetId] = value;
                });
                console.log(_this.notifications);
            });
        });
    };
    NoticecontractorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-noticecontractor',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/noticecontractor/noticecontractor.html"*/'<!--\n\n  Generated template for the NoticePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="secondary">\n\n    <ion-title>Contractor Notice</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>  \n\n  \n\n<ion-content class="ion-content background">\n\n  <ion-list >\n\n    <ion-col *ngFor="let item of items;">\n\n      <ion-grid [navPush]="noticedetailpage" [navParams]="item">\n\n        <ion-item>\n\n          <p style="color:blueviolet" ALIGN=RIGHT ><b>{{ notifications[item.Id] ? \'New \': \'\'}}</b></p>\n\n          <ion-avatar item-start class="ion-avatar">\n\n            <ion-icon ios="ios-megaphone" md="md-megaphone" style="zoom:2.0;"></ion-icon>\n\n          </ion-avatar>\n\n          <div class="date">\n\n            <!-- <p>{{item.End_Date}}</p> -->\n\n          </div>\n\n          <div text-wrap>\n\n            <h2>{{item.Title}}</h2>\n\n          </div>\n\n        </ion-item>\n\n      </ion-grid>\n\n    </ion-col>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/noticecontractor/noticecontractor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_image_loader__["a" /* IonicImageLoader */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_document_viewer__["a" /* DocumentViewer */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_opener__["a" /* FileOpener */]])
    ], NoticecontractorPage);
    return NoticecontractorPage;
}());

//# sourceMappingURL=noticecontractor.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticecontractordetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_image_loader__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_document_viewer__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_opener__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
/**
 * Generated class for the NoticedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NoticecontractordetailPage = /** @class */ (function () {
    function NoticecontractordetailPage(navCtrl, navParams, camera, domSanitizer, app, http, storage, ionicImageLoader, document, file, transfer, platform, alertCtrl, fileOpener) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.domSanitizer = domSanitizer;
        this.app = app;
        this.http = http;
        this.storage = storage;
        this.ionicImageLoader = ionicImageLoader;
        this.document = document;
        this.file = file;
        this.transfer = transfer;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.fileOpener = fileOpener;
        this.token = '';
        this.loadData();
        this.Id = this.navParams.get('Id');
        this.Title = this.navParams.get('Title');
        this.Content = this.navParams.get('Content');
        this.Start_Date = this.navParams.get('Start_Date');
        this.End_Date = this.navParams.get('End_Date');
        this.Attachment = this.navParams.get('Attachment');
        this.Created_By = this.navParams.get('Created_By');
        this.FileName = this.navParams.get('FileName');
        this.created_at = this.navParams.get('created_at');
    }
    NoticecontractordetailPage.prototype.download = function (Attachment, FileName) {
        var _this = this;
        var path = 'null';
        if (this.platform.is('ios')) {
            path = this.file.externalDataDirectory;
        }
        else if (this.platform.is('android')) {
            path = this.file.externalRootDirectory + '/Download/';
        }
        // const transfer = this.transfer.create();
        var fileTransfer = this.transfer.create();
        fileTransfer.download('https://jmclicks.com/' + Attachment, path + FileName, true).then(function (entry) {
            var url = entry.toURL();
            // entry.file(function(data) {
            //    // get mime type
            //    var mime = data.type;
            // this.document.viewDocument(url, mime, {});
            var ext = Attachment.substr(Attachment.lastIndexOf('.') + 1).toUpperCase();
            var mime = '';
            if (ext == 'PDF') {
                mime = 'application/pdf';
            }
            else if (ext == 'DOC') {
                mime = 'application/msword';
            }
            else if (ext == 'DOCX') {
                mime = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
            }
            else if (ext == 'XLS') {
                mime = 'application/vnd.ms-excel';
            }
            else if (ext == 'XLSX') {
                mime = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
            }
            else if (ext == 'PPT') {
                mime = 'application/vnd.ms-powerpoint';
            }
            else if (ext == 'PPTX') {
                mime = ' application/vnd.openxmlformats-officedocument.presentationml.presentation';
            }
            else {
                mime = 'application/pdf';
            }
            _this.fileOpener.open(url, mime)
                .then(function () { return console.log('File is opened'); })
                .catch(function (e) {
                var alert = _this.alertCtrl.create({
                    title: 'Low battery',
                    subTitle: 'error',
                    buttons: ['Dismiss']
                });
                alert.present();
            });
            // })
        }, function (error) {
            console.log(error);
            var alert = _this.alertCtrl.create({
                title: 'Low battery',
                subTitle: error,
                buttons: ['Dismiss']
            });
            alert.present();
        });
    };
    NoticecontractordetailPage.prototype.loadData = function () {
        var _this = this;
        var data;
        // Or to get a key/value pair
        this.storage.get('token').then(function (val) {
            // data = this.http.get('http://localhost:8200/jmclicks/public/api/getnotice?token=' + val.token );
            // data.subscribe(result => {
            //   this.items = result;
            // })
            _this.http.post('https://jmclicks.com/api/notifications/updatecontractornoticebadge?token=' + val.token, { TargetId: _this.Id }).subscribe(function (result) {
                console.log(result);
            });
        });
    };
    NoticecontractordetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-noticecontractordetail',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/noticecontractordetail/noticecontractordetail.html"*/'\n\n<ion-header>\n\n  <ion-navbar color="secondary">\n\n    <ion-title>Contractor Notice Detail</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n  \n\n<ion-content padding class="ion-content">\n\n  <div class="notice-body">\n\n    <div class="date">\n\n      <p>{{Start_Date}}</p>\n\n      <p>{{created_at}}</p>\n\n      <p>submitted by: {{Created_By}}</p>\n\n    </div>\n\n\n\n    <div class="title-notice">\n\n      <br>\n\n      <h1>{{Title}}</h1>\n\n    </div>\n\n\n\n    <div class="notice-content">\n\n      \n\n      <pre text-justify>{{Content}}</pre>\n\n\n\n      <div *ngIf="Attachment !== null">\n\n        <div  *ngFor="let file of Attachment.split(\'|\'); let i = index">\n\n          <img *ngIf="file.substr(file.lastIndexOf(\'.\') + 1).toUpperCase() == \'PNG\' || file.substr(file.lastIndexOf(\'.\') + 1).toUpperCase() == \'JPG\' || file.substr(file.lastIndexOf(\'.\') + 1).toUpperCase() == \'JPEG\'; else elseBlock" [src]="\'http://localhost:8200/jmclicks/public/\' + file" imageViewer>\n\n            \n\n              \n\n          <!-- <ng-template #elseBlock><button ion-button block (click)="download(file, FileName.split(\'|\')[i])">{{FileName.split(\'|\')[i]}} [Download]</button><br>\n\n          </ng-template> -->\n\n        </div>\n\n      </div>\n\n    </div>\n\n\n\n  </div>\n\n</ion-content>\n\n  '/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/noticecontractordetail/noticecontractordetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_image_loader__["a" /* IonicImageLoader */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_document_viewer__["a" /* DocumentViewer */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_opener__["a" /* FileOpener */]])
    ], NoticecontractordetailPage);
    return NoticecontractordetailPage;
}());

//# sourceMappingURL=noticecontractordetail.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticeprojectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_image_loader__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_document_viewer__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_opener__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__noticeprojectdetail_noticeprojectdetail__ = __webpack_require__(549);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};

/**
 * Generated class for the NoticePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NoticeprojectPage = /** @class */ (function () {
    function NoticeprojectPage(navCtrl, navParams, camera, domSanitizer, app, http, storage, ionicImageLoader, document, file, transfer, platform, alertCtrl, fileOpener) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.domSanitizer = domSanitizer;
        this.app = app;
        this.http = http;
        this.storage = storage;
        this.ionicImageLoader = ionicImageLoader;
        this.document = document;
        this.file = file;
        this.transfer = transfer;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.fileOpener = fileOpener;
        this.token = '';
        this.noticedetailpage = __WEBPACK_IMPORTED_MODULE_11__noticeprojectdetail_noticeprojectdetail__["a" /* NoticeprojectdetailPage */];
        this.notifications = [];
        this.loadData();
        this.Id = this.navParams.get('Id');
        this.Title = this.navParams.get('Title');
        this.Content = this.navParams.get('Content');
        this.Start_Date = this.navParams.get('Start_Date');
        this.End_Date = this.navParams.get('End_Date');
        this.Attachment = this.navParams.get('Attachment');
        this.Created_By = this.navParams.get('Created_By');
        this.FileName = this.navParams.get('FileName');
    }
    NoticeprojectPage.prototype.noticedetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__noticeprojectdetail_noticeprojectdetail__["a" /* NoticeprojectdetailPage */]);
    };
    NoticeprojectPage.prototype.ionViewDidLoad = function () {
        console.log(' NoticeprojectdetailPage');
    };
    NoticeprojectPage.prototype.download = function (Attachment, FileName) {
        var _this = this;
        var path = 'null';
        if (this.platform.is('ios')) {
            path = this.file.externalDataDirectory;
        }
        else if (this.platform.is('android')) {
            path = this.file.externalRootDirectory + '/Download/';
        }
        // const transfer = this.transfer.create();
        var fileTransfer = this.transfer.create();
        fileTransfer.download('https://jmclicks.com/' + Attachment, path + FileName, true).then(function (entry) {
            var url = entry.toURL();
            // entry.file(function(data) {
            //    // get mime type
            //    var mime = data.type;
            // this.document.viewDocument(url, mime, {});
            var ext = Attachment.substr(Attachment.lastIndexOf('.') + 1).toUpperCase();
            var mime = '';
            if (ext == 'PDF') {
                mime = 'application/pdf';
            }
            else if (ext == 'DOC') {
                mime = 'application/msword';
            }
            else if (ext == 'DOCX') {
                mime = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
            }
            else if (ext == 'XLS') {
                mime = 'application/vnd.ms-excel';
            }
            else if (ext == 'XLSX') {
                mime = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
            }
            else if (ext == 'PPT') {
                mime = 'application/vnd.ms-powerpoint';
            }
            else if (ext == 'PPTX') {
                mime = ' application/vnd.openxmlformats-officedocument.presentationml.presentation';
            }
            else {
                mime = 'application/pdf';
            }
            _this.fileOpener.open(url, mime)
                .then(function () { return console.log('File is opened'); })
                .catch(function (e) {
                var alert = _this.alertCtrl.create({
                    title: 'Low battery',
                    subTitle: 'error',
                    buttons: ['Dismiss']
                });
                alert.present();
            });
        }, function (error) {
            console.log(error);
            var alert = _this.alertCtrl.create({
                title: 'Low battery',
                subTitle: error,
                buttons: ['Dismiss']
            });
            alert.present();
        });
    };
    NoticeprojectPage.prototype.loadData = function () {
        var _this = this;
        var data;
        // Or to get a key/value pair
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/getprojectnotice?token=' + val.token);
            data.subscribe(function (result) {
                _this.items = result;
            });
        });
        this.storage.get('token').then(function (val) {
            _this.http.get('https://jmclicks.com/api/notifications/getprojectnoticebadge?token=' + val.token).subscribe(function (result) {
                var that = _this;
                result.notifications.map(function (value) {
                    that.notifications[value.TargetId] = value;
                });
                console.log(_this.notifications);
            });
        });
    };
    NoticeprojectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-noticeproject',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/noticeproject/noticeproject.html"*/'<!--\n\n  Generated template for the NoticePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="secondary">\n\n    <ion-title>Project Notice</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>  \n\n  \n\n<ion-content class="ion-content background">\n\n  <ion-list >\n\n    <ion-col *ngFor="let item of items;">\n\n      <ion-grid [navPush]="noticedetailpage" [navParams]="item">\n\n        <ion-item>\n\n          <p style="color:blueviolet" ALIGN=RIGHT ><b>{{ notifications[item.Id] ? \'New \': \'\'}}</b></p>\n\n          <ion-avatar item-start class="ion-avatar">\n\n            <ion-icon ios="ios-megaphone" md="md-megaphone" style="zoom:2.0;"></ion-icon>\n\n          </ion-avatar>\n\n          <div class="date">\n\n            <!-- <p>{{item.End_Date}}</p> -->\n\n          </div>\n\n          <div text-wrap>\n\n            <h2>{{item.Title}}</h2>\n\n          </div>\n\n        </ion-item>\n\n      </ion-grid>\n\n    </ion-col>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/noticeproject/noticeproject.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_image_loader__["a" /* IonicImageLoader */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_document_viewer__["a" /* DocumentViewer */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_opener__["a" /* FileOpener */]])
    ], NoticeprojectPage);
    return NoticeprojectPage;
}());

//# sourceMappingURL=noticeproject.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticeprojectdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_image_loader__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_document_viewer__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_opener__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
/**
 * Generated class for the NoticedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NoticeprojectdetailPage = /** @class */ (function () {
    function NoticeprojectdetailPage(navCtrl, navParams, camera, domSanitizer, app, http, storage, ionicImageLoader, document, file, transfer, platform, alertCtrl, fileOpener) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.domSanitizer = domSanitizer;
        this.app = app;
        this.http = http;
        this.storage = storage;
        this.ionicImageLoader = ionicImageLoader;
        this.document = document;
        this.file = file;
        this.transfer = transfer;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.fileOpener = fileOpener;
        this.token = '';
        this.loadData();
        this.Id = this.navParams.get('Id');
        this.Title = this.navParams.get('Title');
        this.Content = this.navParams.get('Content');
        this.Start_Date = this.navParams.get('Start_Date');
        this.End_Date = this.navParams.get('End_Date');
        this.Attachment = this.navParams.get('Attachment');
        this.Created_By = this.navParams.get('Created_By');
        this.FileName = this.navParams.get('FileName');
        this.created_at = this.navParams.get('created_at');
    }
    NoticeprojectdetailPage.prototype.download = function (Attachment, FileName) {
        var _this = this;
        var path = 'null';
        if (this.platform.is('ios')) {
            path = this.file.externalDataDirectory;
        }
        else if (this.platform.is('android')) {
            path = this.file.externalRootDirectory + '/Download/';
        }
        // const transfer = this.transfer.create();
        var fileTransfer = this.transfer.create();
        fileTransfer.download('https://jmclicks.com/' + Attachment, path + FileName, true).then(function (entry) {
            var url = entry.toURL();
            // entry.file(function(data) {
            //    // get mime type
            //    var mime = data.type;
            // this.document.viewDocument(url, mime, {});
            var ext = Attachment.substr(Attachment.lastIndexOf('.') + 1).toUpperCase();
            var mime = '';
            if (ext == 'PDF') {
                mime = 'application/pdf';
            }
            else if (ext == 'DOC') {
                mime = 'application/msword';
            }
            else if (ext == 'DOCX') {
                mime = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
            }
            else if (ext == 'XLS') {
                mime = 'application/vnd.ms-excel';
            }
            else if (ext == 'XLSX') {
                mime = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
            }
            else if (ext == 'PPT') {
                mime = 'application/vnd.ms-powerpoint';
            }
            else if (ext == 'PPTX') {
                mime = ' application/vnd.openxmlformats-officedocument.presentationml.presentation';
            }
            else {
                mime = 'application/pdf';
            }
            _this.fileOpener.open(url, mime)
                .then(function () { return console.log('File is opened'); })
                .catch(function (e) {
                var alert = _this.alertCtrl.create({
                    title: 'Low battery',
                    subTitle: 'error',
                    buttons: ['Dismiss']
                });
                alert.present();
            });
            // })
        }, function (error) {
            console.log(error);
            var alert = _this.alertCtrl.create({
                title: 'Low battery',
                subTitle: error,
                buttons: ['Dismiss']
            });
            alert.present();
        });
    };
    NoticeprojectdetailPage.prototype.loadData = function () {
        var _this = this;
        var data;
        // Or to get a key/value pair
        this.storage.get('token').then(function (val) {
            // data = this.http.get('http://localhost:8200/jmclicks/public/api/getnotice?token=' + val.token );
            // data.subscribe(result => {
            //   this.items = result;
            // })
            _this.http.post('https://jmclicks.com/api/notifications/updateprojectnoticebadge?token=' + val.token, { TargetId: _this.Id }).subscribe(function (result) {
                console.log(result);
            });
        });
    };
    NoticeprojectdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-noticeprojectdetail',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/noticeprojectdetail/noticeprojectdetail.html"*/'\n\n<ion-header>\n\n  <ion-navbar color="secondary">\n\n    <ion-title>Project Notice Detail</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n  \n\n<ion-content padding class="ion-content">\n\n  <div class="notice-body">\n\n    <div class="date">\n\n      <p>{{Start_Date}}</p>\n\n      <p>{{created_at}}</p>\n\n    </div>\n\n\n\n    <div class="title-notice">\n\n      <br>\n\n      <h1>{{Title}}</h1>\n\n    </div>\n\n\n\n    <div class="notice-content">\n\n      \n\n      <pre text-justify>{{Content}}</pre>\n\n\n\n      <div *ngIf="Attachment !== null">\n\n        <div  *ngFor="let file of Attachment.split(\'|\'); let i = index">\n\n          <img ng-reflect-src *ngIf="file.substr(file.lastIndexOf(\'.\') + 1).toUpperCase() == \'PNG\' || file.substr(file.lastIndexOf(\'.\') + 1).toUpperCase() == \'JPG\' || file.substr(file.lastIndexOf(\'.\') + 1).toUpperCase() == \'JPEG\'; else elseBlock" [src]="\'https://jmclicks.com/\' + file" onError="src = \'assets/imgs/blank.png\'" imageViewer>\n\n            \n\n              \n\n          <!-- <ng-template #elseBlock><button ion-button block (click)="download(file, FileName.split(\'|\')[i])">{{FileName.split(\'|\')[i]}} [Download]</button><br>\n\n          </ng-template> -->\n\n        </div>\n\n      </div>\n\n    </div>\n\n\n\n  </div>\n\n</ion-content>\n\n  '/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/noticeprojectdetail/noticeprojectdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_image_loader__["a" /* IonicImageLoader */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_document_viewer__["a" /* DocumentViewer */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_opener__["a" /* FileOpener */]])
    ], NoticeprojectdetailPage);
    return NoticeprojectdetailPage;
}());

//# sourceMappingURL=noticeprojectdetail.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_nav_params__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__taskassign_taskassign__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mytask_mytask__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__taskall_taskall__ = __webpack_require__(555);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};






/**
 * Generated class for the TaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TaskPage = /** @class */ (function () {
    function TaskPage(navCtrl, navParams, storage, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        this.token = '';
        this.jobBadge = 0;
    }
    ;
    TaskPage.prototype.assign = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__taskassign_taskassign__["a" /* TaskAssignPage */]);
    };
    TaskPage.prototype.myTask = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__mytask_mytask__["a" /* MyTaskPage */]);
    };
    TaskPage.prototype.allTask = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__taskall_taskall__["a" /* TaskallPage */]);
    };
    TaskPage.prototype.loadData = function () {
        var _this = this;
        this.storage.get('token').then(function (val) {
            _this.http.get('https://jmclicks.com/api/notifications/getTaskBadge?token=' + val.token).subscribe(function (result) {
                _this.jobBadge = result.badge_count;
            });
        });
    };
    TaskPage.prototype.ionViewDidEnter = function () {
        this.loadData();
    };
    TaskPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-task',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/task/task.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>Task</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="ion-content">\n  <section class="home-container">\n    <ion-list>\n\n      <ion-item (click)=\'assign()\'>\n        <button class="round-button button6" >\n          <img src="assets/img/admin (1).png" height="30px" width="30px">\n        </button>\n        Assign Task\n      </ion-item>\n\n      <ion-item (click)=\'myTask()\'>\n        <button class="round-button button6" >\n          <img src="assets/img/myapproval (2).png" height="30px" width="30px">\n        </button>\n        <ion-badge color="danger" *ngIf="jobBadge > 0" item-end>{{ jobBadge }}</ion-badge>\n        My Task\n      </ion-item>\n\n      <ion-item (click)=\'allTask()\'>\n        <button class="round-button button6" >\n          <img src="assets/img/alltask2.png" height="30px" width="30px">\n        </button>\n        <!-- <ion-badge color="danger" *ngIf="jobBadge > 0" item-end>{{ jobBadge }}</ion-badge> -->\n        All Task Assign\n      </ion-item>\n\n    </ion-list>\n  </section>\n</ion-content>\n'/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/task/task.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_nav_params__["a" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TaskPage);
    return TaskPage;
}());

//# sourceMappingURL=task.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskAssignPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TaskAssignPage = /** @class */ (function () {
    function TaskAssignPage(storage, alertCtrl, http, loadingCtrl, toast, navCtrl) {
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.Site_Name = '';
        this.Due_Date = '';
        this.PIC_Type = '';
        this.Staff = [];
        this.Staff_Name = '';
        this.Remarks = '';
        this.StaffOptions = [];
    }
    TaskAssignPage.prototype.ngOnInit = function () {
        this.signupform = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormGroup */]({
            Site_Name: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required]),
            Due_Date: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required]),
            PIC_Type: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required]),
            Staff_Name: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required]),
            Project_Name: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required]),
            Remarks: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required]),
        });
    };
    TaskAssignPage.prototype.ionViewWillEnter = function () {
        this.loadData();
    };
    TaskAssignPage.prototype.setStaff = function (value) {
        var staffArr = new Array();
        for (var _i = 0, _a = this.Staff; _i < _a.length; _i++) {
            var s = _a[_i];
            if (s.User_Type == value)
                staffArr.push(s);
        }
        this.StaffOptions = staffArr;
    };
    TaskAssignPage.prototype.filterPorts = function (StaffOptions, text) {
        return StaffOptions.filter(function (StaffOptions) {
            if (StaffOptions.Name.toLowerCase().indexOf(text) !== -1)
                return StaffOptions.Name;
            console.log(StaffOptions.Name);
        }).map(function (obj) {
            return obj.Name;
        });
    };
    TaskAssignPage.prototype.searchStaff = function (event) {
        var text = event.text.trim().toLowerCase();
        event.component.startSearch();
        if (text.length < 3) {
            event.component.items = [];
            event.component.endSearch();
            return;
        }
        if (!text) {
            event.component.items = [];
            event.component.endSearch();
            return;
        }
        event.component.items = this.filterPorts(this.StaffOptions, text);
        console.log(event.component.items);
        event.component.endSearch();
    };
    TaskAssignPage.prototype.loadData = function () {
        var _this = this;
        var data;
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/getProject?token=' + val.token);
            data.subscribe(function (result) {
                _this.project = result;
            });
        });
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/getstaff?token=' + val.token);
            data.subscribe(function (result) {
                console.log(result);
                _this.Staff = result;
            });
        });
    };
    TaskAssignPage.prototype.submitTask = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Submitting task",
            spinner: 'crescent'
        });
        this.storage.get('token').then(function (val) {
            loading.present();
            _this.http.post('https://jmclicks.com/api/createTask?token=' + val.token, {
                Project_Name: _this.Project_Name,
                Site_Name: _this.Site_Name,
                Due_Date: _this.Due_Date,
                Staff_Name: _this.Staff_Name,
                Remarks: _this.Remarks,
                pic: _this.PIC_Type
            }, {})
                .finally(function () {
                loading.dismiss();
            })
                .subscribe(function (result) {
                _this.navCtrl.pop();
                if (result == 1) {
                    _this.toast.show("Task submitted", '5000', 'center').subscribe(function (toast) {
                    });
                }
            });
        });
    };
    TaskAssignPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-taskassign',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/taskassign/taskassign.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>Assign Task</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n  <ion-content  class="ion-content">\n    <ion-list>\n      <form novalidate (ngSubmit)="submitTask()" [formGroup]="signupform">\n      <ion-item>\n        <ion-label stacked color="primary" class="required">Project Name</ion-label>\n        <ion-select placeholder="Please select" [(ngModel)]="Project_Name" formControlName="Project_Name" [class.error1]="!signupform.controls.Project_Name.valid && signupform.controls.Project_Name.dirty">\n          <ion-option *ngFor="let p of project" value="{{p.Id}}">{{p.Project_Name}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item no-lines *ngIf="( signupform.get(\'Project_Name\').hasError(\'required\') ) && signupform.get(\'Project_Name\').touched">\n        <div class="error" *ngIf="signupform.get(\'Project_Name\').hasError(\'required\') && signupform.get(\'Project_Name\').touched">\n          Please select project name\n        </div>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked color="primary" class="required">Site Name</ion-label>\n        <ion-input placeholder="Enter Site Name" [(ngModel)]="Site_Name" formControlName="Site_Name" [class.error1]="!signupform.controls.Site_Name.valid && signupform.controls.Site_Name.dirty"></ion-input>\n      </ion-item>\n\n      <ion-item no-lines *ngIf="( signupform.get(\'Site_Name\').hasError(\'required\') ) && signupform.get(\'Site_Name\').touched">\n        <div class="error" *ngIf="signupform.get(\'Site_Name\').hasError(\'required\') && signupform.get(\'Site_Name\').touched">\n          Please type site name.\n        </div>\n      </ion-item>\n\n      <ion-item>\n          <ion-label stacked color="primary" class="required">Due Date</ion-label>\n            <ion-datetime\n            pickerFormat="DD MMM YYYY" [(ngModel)]="Due_Date"\n            displayFormat="DD MM YYYY" placeholder="Choose Due date" max="2200" formControlName="Due_Date" [class.error1]="!signupform.controls.Due_Date.valid && signupform.controls.Due_Date.dirty">\n            </ion-datetime>\n          </ion-item>\n          <ion-item no-lines *ngIf="( signupform.get(\'Due_Date\').hasError(\'required\') ) && signupform.get(\'Due_Date\').touched">\n            <div class="error" *ngIf="signupform.get(\'Due_Date\').hasError(\'required\') && signupform.get(\'Due_Date\').touched">\n              Please select your due date\n            </div>\n          </ion-item>\n\n     <ion-item>\n        <ion-label stacked color="primary" class="required">PIC Type</ion-label>\n        <ion-select placeholder="Please select" (ngModelChange)="setStaff($event)" [(ngModel)]="PIC_Type" formControlName="PIC_Type" [class.error1]="!signupform.controls.PIC_Type.valid && signupform.controls.PIC_Type.dirty">\n            <ion-option value="Staff">Staff</ion-option>\n            <ion-option value="Contractor">Contractor</ion-option>\n        </ion-select>\n     </ion-item>\n\n     <ion-item no-lines *ngIf="( signupform.get(\'PIC_Type\').hasError(\'required\') ) && signupform.get(\'PIC_Type\').touched">\n        <div class="error" *ngIf="signupform.get(\'PIC_Type\').hasError(\'required\') && signupform.get(\'PIC_Type\').touched">\n          Please select pic type\n        </div>\n      </ion-item>\n\n      <ion-item >\n        <ion-label color="primary" stacked  class="required">Staff</ion-label>\n        <ionic-selectable item-content placeholder="Please select"  [(ngModel)]="Staff_Name" [items]="StaffOptions" formControlName="Staff_Name" [canSearch]="true" [canClear]="false" (onSearch)="searchStaff($event)" [class.error1]="!signupform.controls.Staff_Name.valid && signupform.controls.Staff_Name.dirty">\n            <!-- <ion-option *ngFor="let staff of StaffOptions" value="{{staff.Name}}">{{staff.Name}}</ion-option> -->\n        </ionic-selectable>\n      </ion-item>\n\n      <ion-item no-lines *ngIf="( signupform.get(\'Staff_Name\').hasError(\'required\') ) && signupform.get(\'Staff_Name\').touched">\n        <div class="error" *ngIf="signupform.get(\'Staff_Name\').hasError(\'required\') && signupform.get(\'Staff_Name\').touched">\n          Please select Staff\n        </div>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="primary" stacked class="required">Remarks</ion-label>\n        <ion-textarea placeholder="Enter your remarks here..."[(ngModel)]="Remarks" formControlName="Remarks" ></ion-textarea>\n      </ion-item>\n\n        <br><br>\n\n        <button ion-button block color="primary" type="submit" [disabled]="signupform.invalid">Submit</button>\n\n      </form>\n\n      <style>\n        .required:after { content:" *"; color:red; }\n      </style>\n    </ion-list>\n  </ion-content>\n'/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/taskassign/taskassign.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["s" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["u" /* NavController */]])
    ], TaskAssignPage);
    return TaskAssignPage;
}());

//# sourceMappingURL=taskassign.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTaskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__taskopen_taskopen__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__taskclose_taskclose__ = __webpack_require__(554);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyTaskPage = /** @class */ (function () {
    function MyTaskPage(http, storage) {
        this.http = http;
        this.storage = storage;
        this.task = '';
        this.tab1 = __WEBPACK_IMPORTED_MODULE_3__taskopen_taskopen__["a" /* TaskOpenPage */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_4__taskclose_taskclose__["a" /* TaskClosePage */];
        this.open = 0;
        this.close = 0;
        this.loadData();
    }
    MyTaskPage.prototype.loadData = function () {
        var _this = this;
        this.storage.get('token').then(function (val) {
            _this.http.get('https://jmclicks.com/api/notifications/getTask?token=' + val.token, { params: { type: "Open" } }).subscribe(function (result) {
                _this.open = result.badge_count > 0 ? result.badge_count : null;
            });
            _this.http.get('https://jmclicks.com/api/notifications/getTask?token=' + val.token, { params: { type: "Close" } }).subscribe(function (result) {
                _this.close = result.badge_count > 0 ? result.badge_count : null;
            });
        });
    };
    MyTaskPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-mytask',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/mytask/mytask.html"*/'<ion-header>\n\n    <ion-navbar color="secondary">\n      <ion-title>My Task</ion-title>\n    </ion-navbar>\n\n  </ion-header>\n\n  <ion-content>\n    <ion-tabs tabsPlacement= \'top\'>\n      <ion-tab [root]="tab1"  [tabBadge]="open" tabTitle="Open" tabsHideOnSubPages="true"></ion-tab>\n      <ion-tab [root]="tab2"  [tabBadge]="close" tabTitle="Close" tabsHideOnSubPages="true" ></ion-tab>\n    </ion-tabs>\n  </ion-content>\n'/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/mytask/mytask.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */]])
    ], MyTaskPage);
    return MyTaskPage;
}());

//# sourceMappingURL=mytask.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskOpenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__taskdetail_taskdetail__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TaskOpenPage = /** @class */ (function () {
    function TaskOpenPage(storage, http, app) {
        this.storage = storage;
        this.http = http;
        this.app = app;
        this.task = '';
        this.notifications = [];
    }
    TaskOpenPage.prototype.loadData = function () {
        var _this = this;
        var data;
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/gettask?token=' + val.token);
            data.subscribe(function (result) {
                _this.task = result;
            });
            _this.http.get('https://jmclicks.com/api/notifications/getTask?token=' + val.token, { params: { type: "Open" } }).subscribe(function (result) {
                var t = _this;
                result.notifications.map(function (value) {
                    t.notifications[value.TargetId] = value;
                });
            });
        });
    };
    TaskOpenPage.prototype.gotoPage = function (item) {
        var nav = this.app.getRootNav();
        nav.push(__WEBPACK_IMPORTED_MODULE_4__taskdetail_taskdetail__["a" /* TaskDetailPage */], item);
    };
    TaskOpenPage.prototype.ionViewWillEnter = function () {
        this.loadData();
    };
    TaskOpenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-taskopen',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/taskopen/taskopen.html"*/'\n\n  <ion-content>\n    <div *ngIf="task && task.length < 1">\n      <p class="none">No record found</p>\n    </div>\n    <ion-item  *ngFor="let t of task" (click)="gotoPage(t)">\n      <ion-avatar item-start width="20px" height="20px" class="ion-avatar">\n        <img src="assets/img/leave status (2).png"  width="20px" height="20px">\n      </ion-avatar>\n      <p style="color:blueviolet" ALIGN=RIGHT ><b>{{ notifications[t.Id] ? \'New \': \'\'}}</b></p>\n      <h3>Project Name : {{t.Project_Name}}</h3>\n      <p>Site Name: {{t.Site_Name}}</p>\n      <p>Due Date: {{t.Due_Date}}</p>\n      <p>Assigned By: {{t.Created_By}}</p>\n      <p>Assigned Date: {{t.created_at}}</p>\n    </ion-item>\n\n  </ion-content>\n\n'/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/taskopen/taskopen.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* App */]])
    ], TaskOpenPage);
    return TaskOpenPage;
}());

//# sourceMappingURL=taskopen.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskClosePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__taskdetail_taskdetail__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var TaskClosePage = /** @class */ (function () {
    function TaskClosePage(storage, http, app) {
        this.storage = storage;
        this.http = http;
        this.app = app;
        this.notifications = [];
    }
    TaskClosePage.prototype.loadData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('token').then(function (val) {
                            data = _this.http.get('https://jmclicks.com/api/gettaskclose?token=' + val.token);
                            data.subscribe(function (result) {
                                _this.task = result;
                            });
                            _this.http.get('https://jmclicks.com/api/notifications/getTask?token=' + val.token, { params: { type: "Close" } }).subscribe(function (result) {
                                var t = _this;
                                result.notifications.map(function (value) {
                                    t.notifications[value.TargetId] = value;
                                });
                            });
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskClosePage.prototype.gotoPage = function (item) {
        var nav = this.app.getRootNav();
        nav.push(__WEBPACK_IMPORTED_MODULE_4__taskdetail_taskdetail__["a" /* TaskDetailPage */], item);
    };
    TaskClosePage.prototype.ionViewWillEnter = function () {
        this.loadData();
    };
    TaskClosePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-taskclose',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/taskclose/taskclose.html"*/'\n\n  <ion-content>\n      <div *ngIf="task && task.length < 1">\n        <p class="none">No record found</p>\n      </div>\n      <ion-item  *ngFor="let t of task" (click)="gotoPage(t)">\n        <ion-avatar item-start width="20px" height="20px" class="ion-avatar">\n          <img src="assets/img/leave status (2).png"  width="20px" height="20px">\n        </ion-avatar>\n        <p style="color:blueviolet" ALIGN=RIGHT ><b>{{ notifications[t.Id] ? \'New \': \'\'}}</b></p>\n        <h3>Project Name : {{t.Project_Name}}</h3>\n        <p>Site Name: {{t.Site_Name}}</p>\n        <p>Due Date: {{t.Due_Date}}</p>\n        <p>Assigned By: {{t.Created_By}}</p>\n        <p>Assigned Date: {{t.created_at}}</p>\n        <p>Completed Date: {{t.Completed_Date}}</p>\n      </ion-item>\n\n    </ion-content>\n\n'/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/taskclose/taskclose.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* App */]])
    ], TaskClosePage);
    return TaskClosePage;
}());

//# sourceMappingURL=taskclose.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskallPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__taskdetail_taskdetail__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TaskallPage = /** @class */ (function () {
    function TaskallPage(storage, http, app) {
        this.storage = storage;
        this.http = http;
        this.app = app;
        this.task = '';
        this.notifications = [];
    }
    TaskallPage.prototype.loadData = function () {
        var _this = this;
        var data;
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/getAllTask?token=' + val.token);
            data.subscribe(function (result) {
                _this.task = result;
            });
            // this.http.get<{badge_count: any, notifications: any}>('https://jmclicks.com/api/notifications/getTask?token=' + val.token,{params:{type:"Open"}}).subscribe(result => {
            //   let t = this;
            //   result.notifications.map(function (value) {
            //     t.notifications[value.TargetId] = value
            //   })
            // })
        });
    };
    TaskallPage.prototype.gotoPage = function (item) {
        var nav = this.app.getRootNav();
        nav.push(__WEBPACK_IMPORTED_MODULE_4__taskdetail_taskdetail__["a" /* TaskDetailPage */], item);
    };
    TaskallPage.prototype.ionViewWillEnter = function () {
        this.loadData();
    };
    TaskallPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-taskall',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/taskall/taskall.html"*/'\n\n<ion-header>\n\n  <ion-navbar color="secondary">\n\n    <ion-title>All Task Assign</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div *ngIf="task && task.length < 1">\n\n    <p class="none">No record found</p>\n\n  </div>\n\n  <ion-item  *ngFor="let t of task">\n\n    <!-- <ion-avatar item-start width="20px" height="20px" class="ion-avatar">\n\n      <img src="assets/img/leave status (2).png"  width="20px" height="20px">\n\n    </ion-avatar> -->\n\n    <!-- <p style="color:blueviolet" ALIGN=RIGHT ><b>{{ notifications[t.Id] ? \'New \': \'\'}}</b></p> -->\n\n    <p>Staff: {{t.Staff}}</p>\n\n    <p>Site Name: {{t.Site_Name}}</p>\n\n    <p>Assigned Date: {{t.created_at}}</p>\n\n    <p>Due Date: {{t.Due_Date}}</p>\n\n    <p>Completed Date: {{t.Completed_Date}}</p>\n\n    <p>Remarks: {{t.Remarks}}</p>\n\n    <p>Status: {{t.Status}}</p>\n\n  </ion-item>\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/taskall/taskall.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* App */]])
    ], TaskallPage);
    return TaskallPage;
}());

//# sourceMappingURL=taskall.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyJobPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_controller__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newjob_newjob__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alljob_alljob__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyJobPage = /** @class */ (function () {
    function MyJobPage(navCtrl, storage, http) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.http = http;
        this.newBadge = 0;
        this.jobBadge = 0;
    }
    MyJobPage.prototype.newjob = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__newjob_newjob__["a" /* NewJobPage */]);
    };
    MyJobPage.prototype.job = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__alljob_alljob__["a" /* AllJobPage */]);
    };
    MyJobPage.prototype.loadData = function () {
        var _this = this;
        this.storage.get('token').then(function (val) {
            _this.http.get('https://jmclicks.com/api/notifications/getNewJob?token=' + val.token).subscribe(function (result) {
                _this.newBadge = result.badge_count;
            });
            _this.http.get('https://jmclicks.com/api/notifications/getJobBadge?token=' + val.token).subscribe(function (result) {
                _this.jobBadge = result.badge_count;
            });
        });
    };
    MyJobPage.prototype.ionViewDidEnter = function () {
        this.loadData();
    };
    MyJobPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myjob',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/myjob/myjob.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>Job</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="ion-content">\n  <section class="home-container">\n    <ion-list>\n\n      <ion-item (click)=\'newjob()\'>\n        <button class="round-button button6" >\n          <img src="assets/img/admin (1).png" height="30px" width="30px">\n        </button>\n        <ion-badge color="danger" *ngIf="newBadge > 0" item-end>{{ newBadge }}</ion-badge>\n        New Job\n      </ion-item>\n\n      <ion-item (click)=\'job()\'>\n        <button class="round-button button6" >\n          <img src="assets/img/myapproval (2).png" height="30px" width="30px">\n        </button>\n        <ion-badge color="danger" *ngIf="jobBadge > 0" item-end>{{ jobBadge }}</ion-badge>\n\n        My Job\n      </ion-item>\n\n    </ion-list>\n  </section>\n</ion-content>\n'/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/myjob/myjob.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_controller__["a" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]])
    ], MyJobPage);
    return MyJobPage;
}());

//# sourceMappingURL=myjob.js.map

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewJobPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_nav_params__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__newjobmodal_newjobmodal__ = __webpack_require__(558);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};



/**
 * Generated class for the MyleavePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewJobPage = /** @class */ (function () {
    function NewJobPage(navCtrl, navParams, storage, http, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.notifications = [];
    }
    NewJobPage.prototype.loadData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('token').then(function (val) {
                            data = _this.http.get("https://jmclicks.com/api/myjob/newjob?token=" + val.token);
                            data.subscribe(function (result) {
                                _this.job = result;
                            });
                        })];
                    case 1:
                        _a.sent();
                        this.storage.get('token').then(function (val) {
                            _this.http.get('https://jmclicks.com/api/notifications/getNewJob?token=' + val.token).subscribe(function (result) {
                                var t = _this;
                                result.notifications.map(function (value) {
                                    t.notifications[value.TargetId] = value;
                                });
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    NewJobPage.prototype.popup = function (d) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var modal;
            return __generator(this, function (_a) {
                modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__newjobmodal_newjobmodal__["a" /* NewJobModalPage */], { data: d });
                modal.present();
                modal.onWillDismiss(function (data) {
                    _this.loadData();
                });
                return [2 /*return*/];
            });
        });
    };
    NewJobPage.prototype.ionViewDidEnter = function () {
        this.loadData();
    };
    NewJobPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newjob',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/newjob/newjob.html"*/'\n<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>New Job</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf="job && job.length < 1">\n    <p class="none">No record found</p>\n  </div>\n  <ion-item  *ngFor="let j of job" (click)="popup(j)">\n    <ion-avatar item-start width="20px" height="20px" class="ion-avatar">\n      <img src="assets/img/leave status (2).png"  width="20px" height="20px">\n    </ion-avatar>\n    <p style="color:blueviolet" ALIGN=RIGHT ><b>{{ notifications[j.Id] ? \'New \': \'\'}}</b></p>\n    <h3>PR NO: {{j.pr_no}}</h3>\n    <p>Project Name: {{j.Project_Name}}</p>\n    <p>Region: {{j.region}}</p>\n    <p>Created By: {{j.createdBy}}</p>\n    <p>Created At: {{j.created_at}}</p>\n  </ion-item>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/newjob/newjob.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_nav_params__["a" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["t" /* ModalController */]])
    ], NewJobPage);
    return NewJobPage;
}());

//# sourceMappingURL=newjob.js.map

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewJobModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_params__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_view_controller__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_toast__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular_platform_platform__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_transfer__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_opener__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var NewJobModalPage = /** @class */ (function () {
    function NewJobModalPage(navParam, view, storage, loadingCtrl, http, toast, file, platform, fileOpener, alertCtrl, transfer, toastCtrl) {
        this.navParam = navParam;
        this.view = view;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.toast = toast;
        this.file = file;
        this.platform = platform;
        this.fileOpener = fileOpener;
        this.alertCtrl = alertCtrl;
        this.transfer = transfer;
        this.toastCtrl = toastCtrl;
        this.data = this.navParam.get('data');
        this.pr = this.data.pr_no;
        this.project = this.data.Project_Name;
        this.region = this.data.region;
        this.id = this.data.Id;
        this.payment_term = this.data.Payment_Terms;
        this.by = this.data.createdBy;
    }
    NewJobModalPage.prototype.loadData = function () {
        var _this = this;
        this.storage.get('token').then(function (val) {
            _this.http.post('https://jmclicks.com/api/notifications/updateNewJob?token=' + val.token, { TargetId: _this.id }).subscribe(function (result) {
            });
        });
    };
    NewJobModalPage.prototype.ionViewDidEnter = function () {
        this.loadData();
    };
    NewJobModalPage.prototype.rejectJob = function (reason) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Rejecting job",
            spinner: 'crescent'
        });
        this.storage.get('token').then(function (val) {
            loading.present();
            _this.http.post('https://jmclicks.com/api/myjob/rejectJob?token=' + val.token, {
                id: _this.id,
                reason: reason
            }, {})
                .finally(function () {
                loading.dismiss();
            })
                .subscribe(function (result) {
                if (result == 1) {
                    _this.view.dismiss();
                    _this.toast.show("Job rejected", '5000', 'center').subscribe(function (toast) {
                    });
                }
            });
        });
    };
    NewJobModalPage.prototype.acceptJob = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Accepting job",
            spinner: 'crescent'
        });
        this.storage.get('token').then(function (val) {
            loading.present();
            _this.http.post('https://jmclicks.com/api/myjob/acceptJob?token=' + val.token, {
                id: _this.id
            }, {})
                .finally(function () {
                loading.dismiss();
            })
                .subscribe(function (result) {
                if (result == 1) {
                    _this.view.dismiss();
                    _this.toast.show("Job accepted", '5000', 'center').subscribe(function (toast) {
                    });
                }
            });
        });
    };
    NewJobModalPage.prototype.accept = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Comfirmation",
            message: "Are you sure you want to accept this job?",
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: "Accept",
                    handler: function () {
                        _this.acceptJob();
                    }
                }
            ]
        });
        alert.present();
    };
    NewJobModalPage.prototype.reject = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: "Reject",
            message: "Enter reason",
            inputs: [
                {
                    name: 'reason',
                    placeholder: 'Enter reason'
                },
            ],
            buttons: [
                {
                    text: 'Reject', handler: function (data) {
                        if (data.reason == "") {
                            _this.error();
                            return false;
                        }
                        else {
                            _this.rejectJob(data.reason);
                            return true;
                        }
                    }
                },
                { text: 'Cancel', role: 'cancel' },
            ]
        });
        prompt.present();
    };
    NewJobModalPage.prototype.error = function () {
        var toast = this.toastCtrl.create({
            message: "Please enter reason",
            duration: 2000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    NewJobModalPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    NewJobModalPage.prototype.pdf = function () {
        var _this = this;
        var path = 'null';
        if (this.platform.is('ios')) {
            path = this.file.externalDataDirectory;
        }
        else if (this.platform.is('android')) {
            path = this.file.externalRootDirectory + '/Download/';
        }
        this.storage.get('token').then(function (val) {
            var fileTransfer = _this.transfer.create();
            fileTransfer.download('https://jmclicks.com/api/myjob/pdf?token=' + val.token + '&id=' + _this.id, path + 'pdf', true).then(function (entry) {
                var url = entry.toURL();
                var mime = '';
                mime = 'application/pdf';
                _this.fileOpener.open(url, mime)
                    .then(function () { return console.log('File is opened'); })
                    .catch(function (e) {
                    var alert = _this.alertCtrl.create({
                        title: 'Error',
                        subTitle: 'error',
                        buttons: ['Dismiss']
                    });
                    alert.present();
                });
            }, function (error) {
                console.log(error);
                var alert = _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: error,
                    buttons: ['Dismiss']
                });
                alert.present();
            });
        });
    };
    NewJobModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-newjobmodal',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/newjobmodal/newjobmodal.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Details\n    </ion-title>\n    <ion-buttons end>\n      <button color=\'secondary\' ion-button (click)=\'closeModal()\'>Close</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n\n  <ion-item>\n    <p style="color:blueviolet" ALIGN=RIGHT ><b></b></p>\n    <h3>PR NO : {{ pr }} </h3>\n    <p>Project Name : {{project}}</p>\n    <p>Region : {{region}}</p>\n    <p></p>\n  </ion-item>\n\n  <ion-item>\n    <div class="row">\n      <div class="col"></div>\n      <div class="col">\n        <button ion-button block color=\'primary\' (click)=\'accept()\'>Accept</button>\n      </div>\n      <div class="col"></div>\n    </div>\n  </ion-item>\n  <ion-item>\n    <button ion-button block color="primary" (click)="pdf()">View</button>\n  </ion-item>\n  <ion-item>\n    <button ion-button block color="primary" (click)="reject()">Reject</button>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/newjobmodal/newjobmodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_params__["a" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_view_controller__["a" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["s" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular_platform_platform__["a" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_opener__["a" /* FileOpener */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["y" /* ToastController */]])
    ], NewJobModalPage);
    return NewJobModalPage;
}());

//# sourceMappingURL=newjobmodal.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllJobPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jobprogress_jobprogress__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jobkiv_jobkiv__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jobcomplete_jobcomplete__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__jobrejected_jobrejected__ = __webpack_require__(563);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AllJobPage = /** @class */ (function () {
    function AllJobPage(storage, http) {
        this.storage = storage;
        this.http = http;
        this.tab1 = __WEBPACK_IMPORTED_MODULE_1__jobprogress_jobprogress__["a" /* JobProgressPage */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_2__jobkiv_jobkiv__["a" /* JobKivPage */];
        this.tab3 = __WEBPACK_IMPORTED_MODULE_3__jobcomplete_jobcomplete__["a" /* JobCompletePage */];
        this.tab4 = __WEBPACK_IMPORTED_MODULE_6__jobrejected_jobrejected__["a" /* JobRejectedPage */];
        this.progressBadge = 0;
        this.kivBadge = 0;
        this.completeBadge = 0;
        this.rejectedBadge = 0;
    }
    AllJobPage.prototype.ionViewWillEnter = function () {
        this.loadData();
    };
    AllJobPage.prototype.loadData = function () {
        var _this = this;
        this.storage.get('token').then(function (val) {
            _this.http.get('https://jmclicks.com/api/notifications/getJob?token=' + val.token, { params: { type: "Job In-Progress" } }).subscribe(function (result) {
                _this.progressBadge = result.badge_count > 0 ? result.badge_count : null;
            });
            _this.http.get('https://jmclicks.com/api/notifications/getJob?token=' + val.token, { params: { type: "Job KIV" } }).subscribe(function (result) {
                _this.kivBadge = result.badge_count > 0 ? result.badge_count : null;
            });
            _this.http.get('https://jmclicks.com/api/notifications/getJob?token=' + val.token, { params: { type: "Job Complete" } }).subscribe(function (result) {
                _this.completeBadge = result.badge_count > 0 ? result.badge_count : null;
            });
            _this.http.get('https://jmclicks.com/api/notifications/getJob?token=' + val.token, { params: { type: "Job Rejected" } }).subscribe(function (result) {
                _this.rejectedBadge = result.badge_count > 0 ? result.badge_count : null;
            });
        });
    };
    AllJobPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-alljob',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/alljob/alljob.html"*/'<ion-header>\n\n    <ion-navbar color="secondary">\n      <ion-title>My Job</ion-title>\n    </ion-navbar>\n\n  </ion-header>\n\n  <ion-content>\n    <ion-tabs tabsPlacement= \'top\'>\n      <ion-tab [root]="tab1" [tabBadge]="progressBadge" tabTitle="In-Progress" tabsHideOnSubPages="true"></ion-tab>\n      <ion-tab [root]="tab2" [tabBadge]="kivBadge" tabTitle="KIV" tabsHideOnSubPages="true" ></ion-tab>\n      <ion-tab [root]="tab3" [tabBadge]="completeBadge" tabTitle="Completed" tabsHideOnSubPages="true" ></ion-tab>\n      <ion-tab [root]="tab4" [tabBadge]="rejectedBadge" tabTitle="Rejected" tabsHideOnSubPages="true" ></ion-tab>\n    </ion-tabs>\n  </ion-content>\n'/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/alljob/alljob.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]])
    ], AllJobPage);
    return AllJobPage;
}());

//# sourceMappingURL=alljob.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobProgressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jobdetails_jobdetails__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JobProgressPage = /** @class */ (function () {
    function JobProgressPage(http, storage, app) {
        this.http = http;
        this.storage = storage;
        this.app = app;
        this.notifications = [];
    }
    JobProgressPage.prototype.loaddata = function () {
        var _this = this;
        this.storage.get('token').then(function (val) {
            _this.http.get('https://jmclicks.com/api/myjob/getMyJob?token=' + val.token, {
                params: {
                    status: 'In-Progress'
                }
            }).subscribe(function (result) {
                _this.job = result;
            });
            _this.http.get('https://jmclicks.com/api/notifications/getJob?token=' + val.token, { params: { type: "Job In-Progress" } }).subscribe(function (result) {
                var t = _this;
                result.notifications.map(function (value) {
                    t.notifications[value.TargetId] = value;
                });
            });
        });
    };
    JobProgressPage.prototype.details = function (d) {
        var nav = this.app.getRootNav();
        nav.push(__WEBPACK_IMPORTED_MODULE_3__jobdetails_jobdetails__["a" /* JobDetailsPage */], d);
    };
    JobProgressPage.prototype.ionViewWillEnter = function () {
        this.loaddata();
    };
    JobProgressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jobprogress',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/jobprogress/jobprogress.html"*/'<ion-content>\n    <div *ngIf="job && job.length < 1">\n      <p class="none">No record found</p>\n    </div>\n    <ion-item  *ngFor="let j of job" (click)="details(j)">\n      <ion-avatar item-start width="20px" height="20px" class="ion-avatar">\n        <img src="assets/img/leave status (2).png"  width="20px" height="20px">\n      </ion-avatar>\n      <p style="color:blueviolet" ALIGN=RIGHT ><b>{{ notifications[j.Id] ? \'New \': \'\'}}</b></p>\n      <h3>PR NO: {{j.pr_no}}</h3>\n      <p>Project Name: {{j.Project_Name}}</p>\n      <p>Created By: {{j.requestorName}}</p>\n      <p>Created At: {{j.created_at}}</p>\n    </ion-item>\n\n  </ion-content>\n'/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/jobprogress/jobprogress.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* App */]])
    ], JobProgressPage);
    return JobProgressPage;
}());

//# sourceMappingURL=jobprogress.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobKivPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jobdetails_jobdetails__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JobKivPage = /** @class */ (function () {
    function JobKivPage(http, storage, app) {
        this.http = http;
        this.storage = storage;
        this.app = app;
        this.notifications = [];
    }
    JobKivPage.prototype.loaddata = function () {
        var _this = this;
        this.storage.get('token').then(function (val) {
            _this.http.get('https://jmclicks.com/api/myjob/getMyJob?token=' + val.token, {
                params: {
                    status: 'KIV'
                }
            }).subscribe(function (result) {
                _this.job = result;
            });
            _this.http.get('https://jmclicks.com/api/notifications/getJob?token=' + val.token, { params: { type: "Job KIV" } }).subscribe(function (result) {
                var t = _this;
                result.notifications.map(function (value) {
                    t.notifications[value.TargetId] = value;
                });
            });
        });
    };
    JobKivPage.prototype.details = function (d) {
        var nav = this.app.getRootNav();
        nav.push(__WEBPACK_IMPORTED_MODULE_3__jobdetails_jobdetails__["a" /* JobDetailsPage */], d);
    };
    JobKivPage.prototype.ionViewWillEnter = function () {
        this.loaddata();
    };
    JobKivPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jobkiv',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/jobkiv/jobkiv.html"*/'<ion-content>\n  <div *ngIf="job && job.length < 1">\n    <p class="none">No record found</p>\n  </div>\n  <ion-item  *ngFor="let j of job" (click)="details(j)">\n    <ion-avatar item-start width="20px" height="20px" class="ion-avatar">\n      <img src="assets/img/leave status (2).png"  width="20px" height="20px">\n    </ion-avatar>\n    <p style="color:blueviolet" ALIGN=RIGHT ><b>{{ notifications[j.Id] ? \'New \': \'\'}}</b></p>\n    <h3>PR NO: {{j.pr_no}}</h3>\n    <p>Project Name: {{j.Project_Name}}</p>\n    <p>Created By: {{j.requestorName}}</p>\n    <p>Created At: {{j.created_at}}</p>\n\n  </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/jobkiv/jobkiv.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* App */]])
    ], JobKivPage);
    return JobKivPage;
}());

//# sourceMappingURL=jobkiv.js.map

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobCompletePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jobdetails_jobdetails__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JobCompletePage = /** @class */ (function () {
    function JobCompletePage(http, storage, app) {
        this.http = http;
        this.storage = storage;
        this.app = app;
        this.notifications = [];
    }
    JobCompletePage.prototype.loaddata = function () {
        var _this = this;
        this.storage.get('token').then(function (val) {
            _this.http.get('https://jmclicks.com/api/myjob/getMyJob?token=' + val.token, {
                params: {
                    status: 'Complete'
                }
            }).subscribe(function (result) {
                _this.job = result;
            });
            _this.http.get('https://jmclicks.com/api/notifications/getJob?token=' + val.token, { params: { type: "Job Complete" } }).subscribe(function (result) {
                var t = _this;
                result.notifications.map(function (value) {
                    t.notifications[value.TargetId] = value;
                });
            });
        });
    };
    JobCompletePage.prototype.details = function (d) {
        var nav = this.app.getRootNav();
        nav.push(__WEBPACK_IMPORTED_MODULE_3__jobdetails_jobdetails__["a" /* JobDetailsPage */], d);
    };
    JobCompletePage.prototype.ionViewWillEnter = function () {
        this.loaddata();
    };
    JobCompletePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jobcomplete',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/jobcomplete/jobcomplete.html"*/'<ion-content>\n  <div *ngIf="job && job.length < 1">\n    <p class="none">No record found</p>\n  </div>\n  <ion-item  *ngFor="let j of job" (click)="details(j)">\n    <ion-avatar item-start width="20px" height="20px" class="ion-avatar">\n      <img src="assets/img/leave status (2).png"  width="20px" height="20px">\n    </ion-avatar>\n    <p style="color:blueviolet" ALIGN=RIGHT ><b>{{ notifications[j.Id] ? \'New \': \'\'}}</b></p>\n    <h3>PR NO: {{j.pr_no}}</h3>\n    <p>Project Name: {{j.Project_Name}}</p>\n    <p>Created By: {{j.requestorName}}</p>\n    <p>Created At: {{j.created_at}}</p>\n  </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/jobcomplete/jobcomplete.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* App */]])
    ], JobCompletePage);
    return JobCompletePage;
}());

//# sourceMappingURL=jobcomplete.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobRejectedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jobdetails_jobdetails__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JobRejectedPage = /** @class */ (function () {
    function JobRejectedPage(http, storage, app) {
        this.http = http;
        this.storage = storage;
        this.app = app;
        this.notifications = [];
    }
    JobRejectedPage.prototype.loaddata = function () {
        var _this = this;
        this.storage.get('token').then(function (val) {
            _this.http.get('https://jmclicks.com/api/myjob/getMyJob?token=' + val.token, {
                params: {
                    status: 'Rejected'
                }
            }).subscribe(function (result) {
                _this.job = result;
            });
            _this.http.get('https://jmclicks.com/api/notifications/getJob?token=' + val.token, { params: { type: "Job Rejected" } }).subscribe(function (result) {
                var t = _this;
                result.notifications.map(function (value) {
                    t.notifications[value.TargetId] = value;
                });
            });
        });
    };
    JobRejectedPage.prototype.details = function (d) {
        var nav = this.app.getRootNav();
        nav.push(__WEBPACK_IMPORTED_MODULE_3__jobdetails_jobdetails__["a" /* JobDetailsPage */], d);
    };
    JobRejectedPage.prototype.ionViewWillEnter = function () {
        this.loaddata();
    };
    JobRejectedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jobrejected',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/jobrejected/jobrejected.html"*/'<ion-content>\n  <div *ngIf="job && job.length < 1">\n    <p class="none">No record found</p>\n  </div>\n  <ion-item  *ngFor="let j of job" (click)="details(j)">\n    <ion-avatar item-start width="20px" height="20px" class="ion-avatar">\n      <img src="assets/img/leave status (2).png"  width="20px" height="20px">\n    </ion-avatar>\n    <p style="color:blueviolet" ALIGN=RIGHT ><b>{{ notifications[j.Id] ? \'New \': \'\'}}</b></p>\n    <h3>PR NO: {{j.pr_no}}</h3>\n    <p>Project Name: {{j.Project_Name}}</p>\n    <p>Created By: {{j.requestorName}}</p>\n    <p>Created At: {{j.created_at}}</p>\n  </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/jobrejected/jobrejected.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* App */]])
    ], JobRejectedPage);
    return JobRejectedPage;
}());

//# sourceMappingURL=jobrejected.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_image_loader__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_document_viewer__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_opener__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__scheduledetails_scheduledetails__ = __webpack_require__(565);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};

/**
 * Generated class for the NoticePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SchedulesPage = /** @class */ (function () {
    function SchedulesPage(navCtrl, navParams, camera, domSanitizer, app, http, storage, ionicImageLoader, document, file, transfer, platform, alertCtrl, fileOpener) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.domSanitizer = domSanitizer;
        this.app = app;
        this.http = http;
        this.storage = storage;
        this.ionicImageLoader = ionicImageLoader;
        this.document = document;
        this.file = file;
        this.transfer = transfer;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.fileOpener = fileOpener;
        this.token = '';
        this.scheduledetailspage = __WEBPACK_IMPORTED_MODULE_11__scheduledetails_scheduledetails__["a" /* ScheduledetailsPage */];
        this.notifications = [];
        this.loadData();
        this.Id = this.navParams.get('Id');
        this.Assigned_By = this.navParams.get('Assigned_By');
        this.Event = this.navParams.get('Event');
        this.Start_Date = this.navParams.get('Start_Date');
        this.End_Date = this.navParams.get('End_Date');
        this.Venue = this.navParams.get('Venue');
        this.Time = this.navParams.get('Time');
        this.Remark = this.navParams.get('Remarks');
        this.noticeBadgeCount = 0;
    }
    // scheduledetailspage(){
    //   this.navCtrl.push(ScheduledetailsPage);
    // }
    SchedulesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NoticePage');
    };
    SchedulesPage.prototype.download = function (Attachment, FileName) {
        var _this = this;
        var path = 'null';
        if (this.platform.is('ios')) {
            path = this.file.externalDataDirectory;
        }
        else if (this.platform.is('android')) {
            path = this.file.externalRootDirectory + '/Download/';
        }
        // const transfer = this.transfer.create();
        var fileTransfer = this.transfer.create();
        fileTransfer.download('https://jmclicks.com/' + Attachment, path + FileName, true).then(function (entry) {
            var url = entry.toURL();
            // entry.file(function(data) {
            //    // get mime type
            //    var mime = data.type;
            // this.document.viewDocument(url, mime, {});
            var ext = Attachment.substr(Attachment.lastIndexOf('.') + 1).toUpperCase();
            var mime = '';
            if (ext == 'PDF') {
                mime = 'application/pdf';
            }
            else if (ext == 'DOC') {
                mime = 'application/msword';
            }
            else if (ext == 'DOCX') {
                mime = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
            }
            else if (ext == 'XLS') {
                mime = 'application/vnd.ms-excel';
            }
            else if (ext == 'XLSX') {
                mime = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
            }
            else if (ext == 'PPT') {
                mime = 'application/vnd.ms-powerpoint';
            }
            else if (ext == 'PPTX') {
                mime = ' application/vnd.openxmlformats-officedocument.presentationml.presentation';
            }
            else {
                mime = 'application/pdf';
            }
            _this.fileOpener.open(url, mime)
                .then(function () { return console.log('File is opened'); })
                .catch(function (e) {
                var alert = _this.alertCtrl.create({
                    title: 'Low battery',
                    subTitle: 'error',
                    buttons: ['Dismiss']
                });
                alert.present();
            });
        }, function (error) {
            console.log(error);
            var alert = _this.alertCtrl.create({
                title: 'Low battery',
                subTitle: error,
                buttons: ['Dismiss']
            });
            alert.present();
        });
    };
    SchedulesPage.prototype.loadData = function () {
        var _this = this;
        var data;
        // Or to get a key/value pair
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/getschedules?token=' + val.token);
            data.subscribe(function (result) {
                _this.items = result;
            });
        });
        this.storage.get('token').then(function (val) {
            _this.http.get('https://jmclicks.com/api/notifications/getnoticebadge?token=' + val.token).subscribe(function (result) {
                var that = _this;
                result.notifications.map(function (value) {
                    that.notifications[value.TargetId] = value;
                });
                console.log(_this.notifications);
            });
        });
    };
    SchedulesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-schedules',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/schedules/schedules.html"*/'<!--\n\n  Generated template for the NoticePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="secondary">\n\n      <ion-title>Schedules</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>  \n\n    \n\n  <ion-content class="ion-content background">\n\n    <ion-list >\n\n      <ion-col *ngFor="let item of items;">\n\n        <ion-grid [navPush]="scheduledetailspage" [navParams]="item">\n\n          <ion-item>\n\n            <p style="color:blueviolet" ALIGN=RIGHT ><b>{{ notifications[item.Id] ? \'New \': \'\'}}</b></p>\n\n            <!-- <ion-avatar item-start class="ion-avatar">\n\n              <ion-icon ios="ios-megaphone" md="md-megaphone" style="zoom:2.0;"></ion-icon>\n\n            </ion-avatar> -->\n\n            <div class="date">\n\n              <p>{{item.Start_Date}}</p>\n\n            </div>\n\n            <div text-wrap>\n\n              <h2>{{item.Event}}</h2>\n\n            </div>\n\n          </ion-item>\n\n        </ion-grid>\n\n      </ion-col>\n\n    </ion-list>\n\n  </ion-content>\n\n  '/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/schedules/schedules.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_image_loader__["a" /* IonicImageLoader */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_document_viewer__["a" /* DocumentViewer */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_opener__["a" /* FileOpener */]])
    ], SchedulesPage);
    return SchedulesPage;
}());

//# sourceMappingURL=schedules.js.map

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduledetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_image_loader__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_document_viewer__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_opener__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
/**
 * Generated class for the NoticedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ScheduledetailsPage = /** @class */ (function () {
    function ScheduledetailsPage(navCtrl, navParams, camera, domSanitizer, app, http, storage, ionicImageLoader, document, file, transfer, platform, alertCtrl, fileOpener) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.domSanitizer = domSanitizer;
        this.app = app;
        this.http = http;
        this.storage = storage;
        this.ionicImageLoader = ionicImageLoader;
        this.document = document;
        this.file = file;
        this.transfer = transfer;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.fileOpener = fileOpener;
        this.token = '';
        this.loadData();
        this.Id = this.navParams.get('Id');
        this.Assigned_By = this.navParams.get('Assigned_By');
        this.Event = this.navParams.get('Event');
        this.Start_Date = this.navParams.get('Start_Date');
        this.End_Date = this.navParams.get('End_Date');
        this.Venue = this.navParams.get('Venue');
        this.Time = this.navParams.get('Time');
        this.Remarks = this.navParams.get('Remarks');
    }
    ScheduledetailsPage.prototype.download = function (Attachment, FileName) {
        var _this = this;
        var path = 'null';
        if (this.platform.is('ios')) {
            path = this.file.externalDataDirectory;
        }
        else if (this.platform.is('android')) {
            path = this.file.externalRootDirectory + '/Download/';
        }
        // const transfer = this.transfer.create();
        var fileTransfer = this.transfer.create();
        fileTransfer.download('https://jmclicks.com/' + Attachment, path + FileName, true).then(function (entry) {
            var url = entry.toURL();
            // entry.file(function(data) {
            //    // get mime type
            //    var mime = data.type;
            // this.document.viewDocument(url, mime, {});
            var ext = Attachment.substr(Attachment.lastIndexOf('.') + 1).toUpperCase();
            var mime = '';
            if (ext == 'PDF') {
                mime = 'application/pdf';
            }
            else if (ext == 'DOC') {
                mime = 'application/msword';
            }
            else if (ext == 'DOCX') {
                mime = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
            }
            else if (ext == 'XLS') {
                mime = 'application/vnd.ms-excel';
            }
            else if (ext == 'XLSX') {
                mime = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
            }
            else if (ext == 'PPT') {
                mime = 'application/vnd.ms-powerpoint';
            }
            else if (ext == 'PPTX') {
                mime = ' application/vnd.openxmlformats-officedocument.presentationml.presentation';
            }
            else {
                mime = 'application/pdf';
            }
            _this.fileOpener.open(decodeURIComponent(url), mime)
                .then(function () { return console.log('File is opened'); })
                .catch(function (e) {
                var alert = _this.alertCtrl.create({
                    title: 'Low battery',
                    subTitle: 'error',
                    buttons: ['Dismiss']
                });
                alert.present();
            });
            // })
        }, function (error) {
            console.log(error);
            var alert = _this.alertCtrl.create({
                title: 'Low battery',
                subTitle: error,
                buttons: ['Dismiss']
            });
            alert.present();
        });
    };
    ScheduledetailsPage.prototype.loadData = function () {
        var _this = this;
        var data;
        // Or to get a key/value pair
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/getnotice?token=' + val.token);
            data.subscribe(function (result) {
                _this.items = result;
            });
            _this.http.post('https://jmclicks.com/api/notifications/updatenoticebadge?token=' + val.token, { TargetId: _this.Id }).subscribe(function (result) {
                console.log(result);
            });
        });
    };
    ScheduledetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-scheduledetails',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/scheduledetails/scheduledetails.html"*/'\n\n<ion-header>\n\n  <ion-navbar color="secondary">\n\n    <ion-title>Schedules detail</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n  \n\n<ion-content padding class="ion-content">\n\n  <div class="notice-body">\n\n\n\n    <div class="title-notice">\n\n      <br>\n\n      <h1>{{Event}}</h1>\n\n    </div>\n\n\n\n    <br>\n\n\n\n    <div class="date" >\n\n      <p>Date: {{Start_Date}}</p>\n\n      <p>Time: {{Time}}</p>\n\n      <p>Venue: {{Venue}}</p>\n\n      <p>Details: {{Remarks}}</p>\n\n    </div>\n\n\n\n    <div class="notice-content">\n\n      <div class="text">\n\n        <pre>{{Content}}</pre>\n\n      </div>\n\n    </div>\n\n\n\n  </div>\n\n</ion-content>\n\n  '/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/scheduledetails/scheduledetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_image_loader__["a" /* IonicImageLoader */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_document_viewer__["a" /* DocumentViewer */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_opener__["a" /* FileOpener */]])
    ], ScheduledetailsPage);
    return ScheduledetailsPage;
}());

//# sourceMappingURL=scheduledetails.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_image_loader__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_document_viewer__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_opener__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__assetonhand_assetonhand__ = __webpack_require__(567);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};

/**
 * Generated class for the NoticePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AssetPage = /** @class */ (function () {
    function AssetPage(navCtrl, navParams, camera, domSanitizer, app, http, storage, ionicImageLoader, document, file, transfer, platform, alertCtrl, fileOpener) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.domSanitizer = domSanitizer;
        this.app = app;
        this.http = http;
        this.storage = storage;
        this.ionicImageLoader = ionicImageLoader;
        this.document = document;
        this.file = file;
        this.transfer = transfer;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.fileOpener = fileOpener;
        this.token = '';
        this.assetonhandpage = __WEBPACK_IMPORTED_MODULE_11__assetonhand_assetonhand__["a" /* AssetonhandPage */];
        this.notifications = [];
        this.Id = this.navParams.get('Id');
        this.Title = this.navParams.get('Title');
        this.Content = this.navParams.get('Content');
        this.Start_Date = this.navParams.get('Start_Date');
        this.End_Date = this.navParams.get('End_Date');
        this.Attachment = this.navParams.get('Attachment');
        this.Created_By = this.navParams.get('Created_By');
        this.FileName = this.navParams.get('FileName');
        this.noticeBadgeCount = 0;
    }
    AssetPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewDidLoad AssetonhandPage');
        this.loadData();
    };
    AssetPage.prototype.download = function (Attachment, FileName) {
        var _this = this;
        var path = 'null';
        if (this.platform.is('ios')) {
            path = this.file.externalDataDirectory;
        }
        else if (this.platform.is('android')) {
            path = this.file.externalRootDirectory + '/Download/';
        }
        // const transfer = this.transfer.create();
        var fileTransfer = this.transfer.create();
        fileTransfer.download('https://jmclicks.com/' + Attachment, path + FileName, true).then(function (entry) {
            var url = entry.toURL();
            // entry.file(function(data) {
            //    // get mime type
            //    var mime = data.type;
            // this.document.viewDocument(url, mime, {});
            var ext = Attachment.substr(Attachment.lastIndexOf('.') + 1).toUpperCase();
            var mime = '';
            if (ext == 'PDF') {
                mime = 'application/pdf';
            }
            else if (ext == 'DOC') {
                mime = 'application/msword';
            }
            else if (ext == 'DOCX') {
                mime = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
            }
            else if (ext == 'XLS') {
                mime = 'application/vnd.ms-excel';
            }
            else if (ext == 'XLSX') {
                mime = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
            }
            else if (ext == 'PPT') {
                mime = 'application/vnd.ms-powerpoint';
            }
            else if (ext == 'PPTX') {
                mime = ' application/vnd.openxmlformats-officedocument.presentationml.presentation';
            }
            else {
                mime = 'application/pdf';
            }
            _this.fileOpener.open(url, mime)
                .then(function () { return console.log('File is opened'); })
                .catch(function (e) {
                var alert = _this.alertCtrl.create({
                    title: 'Low battery',
                    subTitle: 'error',
                    buttons: ['Dismiss']
                });
                alert.present();
            });
        }, function (error) {
            console.log(error);
            var alert = _this.alertCtrl.create({
                title: 'Low battery',
                subTitle: error,
                buttons: ['Dismiss']
            });
            alert.present();
        });
    };
    AssetPage.prototype.loadData = function () {
        var _this = this;
        var data;
        // Or to get a key/value pair
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/assetonhand?token=' + val.token);
            data.subscribe(function (result) {
                _this.items = result;
            });
        });
        this.storage.get('token').then(function (val) {
            _this.http.get('https://jmclicks.com/api/notifications/getnoticebadge?token=' + val.token).subscribe(function (result) {
                var that = _this;
                result.notifications.map(function (value) {
                    that.notifications[value.TargetId] = value;
                });
                console.log(_this.notifications);
            });
        });
    };
    AssetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-asset',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/asset/asset.html"*/'<!--\n\n  Generated template for the NoticePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="secondary">\n\n    <ion-title>Assets on hand</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>  \n\n  \n\n<ion-content class="ion-content background">\n\n  <ion-list >\n\n    <ion-col *ngFor="let item of items;">\n\n      <ion-grid [navPush]="assetonhandpage" [navParams]="item">\n\n        <ion-item>\n\n          <p style="color:blueviolet" ALIGN=RIGHT ><b>{{ notifications[item.Id] ? \'New \': \'\'}}</b></p>\n\n          <ion-avatar item-start class="ion-avatar">\n\n            <ion-icon ios="ios-megaphone" md="md-megaphone" style="zoom:2.0;"></ion-icon>\n\n          </ion-avatar>\n\n          <div class="date">\n\n            <!-- <p>{{item.End_Date}}</p> -->\n\n          </div>\n\n          <div text-wrap>\n\n            <h2>Taken Date: {{item.Date}}</h2>\n\n            <h2>Asset Type: {{item.Type}}</h2>\n\n          </div>\n\n        </ion-item>\n\n      </ion-grid>\n\n    </ion-col>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/asset/asset.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_image_loader__["a" /* IonicImageLoader */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_document_viewer__["a" /* DocumentViewer */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_opener__["a" /* FileOpener */]])
    ], AssetPage);
    return AssetPage;
}());

//# sourceMappingURL=asset.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssetonhandPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_image_loader__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_document_viewer__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_opener__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__assethistory_assethistory__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__assettransfer_assettransfer__ = __webpack_require__(569);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
/**
 * Generated class for the NoticedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AssetonhandPage = /** @class */ (function () {
    function AssetonhandPage(navCtrl, navParams, camera, domSanitizer, app, http, storage, ionicImageLoader, document, file, transfer, platform, alertCtrl, fileOpener) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.domSanitizer = domSanitizer;
        this.app = app;
        this.http = http;
        this.storage = storage;
        this.ionicImageLoader = ionicImageLoader;
        this.document = document;
        this.file = file;
        this.transfer = transfer;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.fileOpener = fileOpener;
        this.assethistory = __WEBPACK_IMPORTED_MODULE_11__assethistory_assethistory__["a" /* AssethistoryPage */];
        this.assettransfer = __WEBPACK_IMPORTED_MODULE_12__assettransfer_assettransfer__["a" /* AssettransferPage */];
        this.token = '';
        this.TrackingId = '';
        this.asset = '';
        this.transferstaff = '';
        this.loadData();
        this.Id = this.navParams.get('Id');
        this.Label = this.navParams.get('Label');
        this.Type = this.navParams.get('Type');
        this.Serial_No = this.navParams.get('Serial_No');
        this.IMEI = this.navParams.get('IMEI');
        this.Model_No = this.navParams.get('Model_No');
        this.Car_No = this.navParams.get('Car_No');
        this.Color = this.navParams.get('Color');
        this.Date = this.navParams.get('Date');
        this.Transfer_To = this.navParams.get('Transfer_To');
        this.Transfer_Date_Time = this.navParams.get('Transfer_Date_Time');
        this.Remarks = this.navParams.get('Remarks');
        this.AssetId = this.navParams.get('AssetId');
        this.TrackingId = this.navParams.get('TrackingId');
        this.asset = { AssetId: this.AssetId };
        this.transferstaff = { AssetId: this.AssetId, Id: this.Id, TrackingId: this.TrackingId };
        console.log(this.Id);
        console.log(this.AssetId);
        console.log(this.TrackingId);
    }
    AssetonhandPage.prototype.loadData = function () {
        var data;
        // Or to get a key/value pair
        this.storage.get('token').then(function (val) {
            // data = this.http.get('http://localhost:8200/jmclicks/public/api/getnotice?token=' + val.token );
            // data.subscribe(result => {
            //   this.items = result;
            // })
            // this.http.post('https://jmclicks.com/api/notifications/updatenoticebadge?token='    + val.token, {TargetId: this.Id}).subscribe(result => {
            //   console.log(result)
            // })
        });
    };
    AssetonhandPage.prototype.Transfer = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__assettransfer_assettransfer__["a" /* AssettransferPage */]);
    };
    AssetonhandPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-assetonhand',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/assetonhand/assetonhand.html"*/'\n\n<ion-header>\n\n  <ion-navbar color="secondary">\n\n    <ion-title>Asset on hand detail</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n  \n\n<ion-content padding class="ion-content">\n\n  <div class="notice-body">\n\n    <div class="date" hidden>\n\n      <p>{{Start_Date}}</p>\n\n      <p>{{created_at}}</p>\n\n      <p>submitted by: {{Created_By}}</p>\n\n    </div>\n\n\n\n    <div class="title-notice">\n\n      <br>\n\n      <h1>{{Title}}</h1>\n\n    </div>\n\n\n\n    <div class="notice-content">\n\n      <ion-card class="text" text-wrap>\n\n        <pre>Label: {{Label}}</pre>\n\n        <p>Type: {{Type}} </p>\n\n        <p>Serial No: {{Serial_No}} </p>\n\n        <p>IMEI: {{EMEI}} </p>\n\n        <p>Model No: {{Model_No}} </p>\n\n        <p>Car No: {{Car_No}} </p>\n\n        <p>Color: {{Color}}</p>\n\n        <p>Taken Date: {{Date}}</p>\n\n        <p>Transfer To: {{Transfer_To}}</p>\n\n        <p>Transfer Date Time: {{Transfer_Date_Time}}</p>\n\n        <p>Remarks: {{Remarks}}</p>\n\n      </ion-card>\n\n    </div>\n\n\n\n  </div>\n\n\n\n  <br>\n\n  <button full ion-button type="button" [navPush]="assethistory" [navParams]="asset">History</button>\n\n  <button full ion-button type="button" [navPush]="assettransfer" [navParams]="transferstaff">Transfer</button>\n\n</ion-content>\n\n  '/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/assetonhand/assetonhand.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_image_loader__["a" /* IonicImageLoader */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_document_viewer__["a" /* DocumentViewer */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_opener__["a" /* FileOpener */]])
    ], AssetonhandPage);
    return AssetonhandPage;
}());

//# sourceMappingURL=assetonhand.js.map

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssethistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
/**
 * Generated class for the TsdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AssethistoryPage = /** @class */ (function () {
    function AssethistoryPage(navCtrl, app, http, storage, navParams) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.http = http;
        this.storage = storage;
        this.navParams = navParams;
        this.token = '';
        this.AssetId = '';
        this.loadData();
        // this.Id = this.navParams.get('Id');
        this.Start_Date = this.navParams.get('Start_Date');
        this.Status = this.navParams.get('Status');
        this.Time_In = this.navParams.get('Time_In');
        this.Time_Out = this.navParams.get('Time_Out');
        this.Check_In_Type = this.navParams.get('Check_In_Type');
        this.No_of_Days = this.navParams.get('No_of_Days');
        this.Site_Name = this.navParams.get('Site_Name');
        this.Project_Name = this.navParams.get('Project_Name');
        this.Approver = this.navParams.get('Approver');
        console.log(this.Project_Name);
        // this.LeaveId = this.navParams.get('Id');
        this.AssetId = this.navParams.get('AssetId');
        this.Holder = this.navParams.get('Holder');
        console.log(this.AssetId);
        // console.log(this.Id)
    }
    AssethistoryPage.prototype.myFunction = function (date) {
        var d = new Date(date);
        var weekday = new Array(7);
        weekday[0] = "Sun";
        weekday[1] = "Mon";
        weekday[2] = "Tues";
        weekday[3] = "Wed";
        weekday[4] = "Thur";
        weekday[5] = "Fri";
        weekday[6] = "Sat";
        return weekday[d.getDay()];
    };
    AssethistoryPage.prototype.loadData = function () {
        var _this = this;
        var data;
        // Or to get a key/value pair
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/assethistory?token=' + val.token + '&AssetId=' + _this.AssetId);
            data.subscribe(function (result) {
                _this.items = result;
            });
            //   this.http.post('https://jmclicks.com/api/notifications/updatenoticebadge?token='    + val.token, {TargetId: this.Id}).subscribe(result => {
            //     console.log(result)
            //   })
        });
    };
    AssethistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-assethistory',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/assethistory/assethistory.html"*/'<!--\n\n  Generated template for the TsdetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Item History</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="ion-content">\n\n\n\n  <ion-card *ngFor="let item of items;">\n\n\n\n    <ion-card-header color="primary">\n\n        {{item.Date}} ({{ myFunction(item.Date) }})\n\n    </ion-card-header>\n\n\n\n    <ion-card-content color="primary">\n\n      Project Name: {{item.ProjectId}}<br>        \n\n      Holder: {{item.Name}} <br>\n\n      Transfer To: {{item.TransferName}}<br>\n\n      Car No: {{item.Car_No}}<br>\n\n      Status: {{item.Status}}<br>\n\n    </ion-card-content>\n\n\n\n  </ion-card>\n\n\n\n</ion-content>\n\n\n\n\n\n\n\n'/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/assethistory/assethistory.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], AssethistoryPage);
    return AssethistoryPage;
}());

//# sourceMappingURL=assethistory.js.map

/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssettransferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
var AssettransferPage = /** @class */ (function () {
    function AssettransferPage(navCtrl, app, http, storage, loadingCtrl, toast, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.http = http;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.token = '';
        this.Department = '';
        this.Approver = '';
        this.Staff = '';
        this.AssetId = '';
        this.TrackingId = '';
        this.Staff_Name = '';
        this.StaffOptions = [];
        this.PIC_Type = '';
        //this.loadData();
        this.Project_Name = this.navParams.get('Project_Name');
        this.Approver = this.navParams.get('Approver');
        this.Id = this.navParams.get('Id');
        this.LeaveId = this.navParams.get('LeaveId');
        this.AssetId = this.navParams.get('AssetId');
        this.TrackingId = this.navParams.get('TrackingId');
        console.log(this.Id);
        console.log(this.TrackingId);
    }
    AssettransferPage.prototype.ngOnInit = function () {
        this.signupform = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormGroup */]({
            // Department: new FormControl('',[Validators.required]),
            // Staff: new FormControl('', [Validators.required]),
            Staff_Name: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required]),
            PIC_Type: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required]),
        });
    };
    AssettransferPage.prototype.ionViewWillEnter = function () {
        this.loadData();
    };
    AssettransferPage.prototype.setStaff = function (value) {
        var staffArr = new Array();
        for (var _i = 0, _a = this.Staff; _i < _a.length; _i++) {
            var s = _a[_i];
            if (s.User_Type == value)
                staffArr.push(s);
        }
        this.StaffOptions = staffArr;
    };
    AssettransferPage.prototype.filterPorts = function (StaffOptions, text) {
        return StaffOptions.filter(function (StaffOptions) {
            if (StaffOptions.Name.toLowerCase().indexOf(text) !== -1)
                return StaffOptions.Name;
            console.log(StaffOptions.Name);
        }).map(function (obj) {
            return obj.Name;
        });
    };
    AssettransferPage.prototype.searchStaff = function (event) {
        var text = event.text.trim().toLowerCase();
        event.component.startSearch();
        if (text.length < 1) {
            event.component.items = [];
            event.component.endSearch();
            return;
        }
        if (!text) {
            event.component.items = [];
            event.component.endSearch();
            return;
        }
        event.component.items = this.filterPorts(this.StaffOptions, text);
        console.log(event.component.items);
        event.component.endSearch();
    };
    AssettransferPage.prototype.loadData = function () {
        var _this = this;
        var data;
        // Or to get a key/value pair
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/assetuser?token=' + val.token);
            data.subscribe(function (result) {
                _this.items = result;
            });
        });
        this.storage.get('token').then(function (val) {
            data = _this.http.get('https://jmclicks.com/api/getstaffasset?token=' + val.token);
            data.subscribe(function (result) {
                console.log(result);
                _this.Staff = result;
            });
        });
    };
    AssettransferPage.prototype.transferstaff = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Transfer to Staff ?',
            message: 'Are you sure want to transfer ?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('No clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Yes clicked');
                        _this.storage.get('token').then(function (val) {
                            _this.http.post('https://jmclicks.com/api/assettransfer?token=' + val.token, {
                                Name: _this.Staff_Name,
                                TrackingId: _this.TrackingId
                            }, httpOptions)
                                .subscribe(function (res) {
                                console.log(_this.Staff);
                                console.log(_this.TrackingId);
                                _this.navCtrl.popTo(_this.navCtrl.getByIndex(_this.navCtrl.length() - 3));
                                console.log(res);
                                _this.toast.show('Redirect succesfull', '5000', 'center').subscribe(function (toast) {
                                    console.log(toast);
                                });
                            });
                            // this.http.post('http://192.168.0.88:8000/jmclicks/public/api/notifications/updateleavepending?token=' + val.token, {TargetId: this.LeaveId}).subscribe(result => {
                            //   console.log(result)
                            // })
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    AssettransferPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-assettransfer',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/assettransfer/assettransfer.html"*/'<ion-header>\n\n  <ion-navbar color="darkblue">\n\n        <ion-toolbar>\n\n            <ion-title>Asset Transfer</ion-title>\n\n        </ion-toolbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n  \n\n<ion-content  class="ion-content">      \n\n  <form novalidate (ngSubmit)="transferstaff()" [formGroup]="signupform">\n\n\n\n    <ion-item>\n\n      <ion-label stacked color="primary" class="required">PIC Type</ion-label>\n\n      <ion-select placeholder="Please select" (ngModelChange)="setStaff($event)" \n\n      [(ngModel)]="PIC_Type" formControlName="PIC_Type" \n\n      [class.error1]="!signupform.controls.PIC_Type.valid && signupform.controls.PIC_Type.dirty">\n\n          <ion-option value="Staff" >Staff</ion-option>\n\n      </ion-select>\n\n   </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label stacked color="primary">Transfer to [Staff]</ion-label>\n\n      <P class="error" *ngIf="signupform.get(\'Staff_Name\').hasError(\'required\') && signupform.get(\'Staff_Name\').touched">\n\n        Please select your staff\n\n        </P>\n\n      <ionic-selectable item-content placeholder="Please select"  [(ngModel)]="Staff_Name" \n\n      [items]="StaffOptions" formControlName="Staff_Name" [canSearch]="true" [canClear]="false" \n\n      (onSearch)="searchStaff($event)"\n\n      [class.error1]="!signupform.controls.Staff_Name.valid && signupform.controls.Staff_Name.dirty">\n\n      <!-- <ion-option *ngFor="let item of items" value="{{item.Id}}">{{item.Name}}</ion-option> -->\n\n    </ionic-selectable>\n\n    </ion-item>\n\n\n\n    <br><br>\n\n\n\n    <button ion-button full item-right class="doc-button" [disabled]="signupform.invalid">Submit</button>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/assettransfer/assettransfer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], AssettransferPage);
    return AssettransferPage;
}());

//# sourceMappingURL=assettransfer.js.map

/***/ }),

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(575);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_image_loader__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_page_transitions__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_document_viewer__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_photo_viewer__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_http__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_auth_auth__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_toast__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_file_opener__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_location_accuracy__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_onesignal__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_app_preferences__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_base64__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_image_picker__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_badge__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ionic_img_viewer__ = __webpack_require__(901);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ng_fullcalendar__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_android_permissions__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_app_version__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_file_chooser__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_file_path__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ionic_selectable__ = __webpack_require__(911);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__app_component__ = __webpack_require__(912);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_login_login__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_home_home__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_notice_notice__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_noticedetail_noticedetail__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_leave_leave__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_leave_modal_leave_modal__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_myleave_myleave__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_leavestatus_leavestatus__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_leavepending_leavepending__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_leavereject_leavereject__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_leaveapprove_leaveapprove__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_leavecancel_leavecancel__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_leavependingdetail_leavependingdetail__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_leaveapprovedetail_leaveapprovedetail__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_leaverejectdetail_leaverejectdetail__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_leavecanceldetail_leavecanceldetail__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_myapproval_myapproval__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_attendance_attendance__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_timesheet_timesheet__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_tsdetail_tsdetail__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_holiday_holiday__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_advance_advance__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_siteadvance_siteadvance__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_mypendingadvance_mypendingadvance__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_myapproveadvance_myapproveadvance__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_myrejectadvance_myrejectadvance__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pages_adminpendingadvance_adminpendingadvance__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_adminapproveadvance_adminapproveadvance__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pages_adminrejectadvance_adminrejectadvance__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__pages_myadvancestatus_myadvancestatus__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_adminadvancestatus_adminadvancestatus__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__pages_mypendingdetail_mypendingdetail__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__pages_leavependingredirect_leavependingredirect__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__pages_leavebalance_leavebalance__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__pages_myapprovedetail_myapprovedetail__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__pages_myrejectdetail_myrejectdetail__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__pages_adminpendingdetail_adminpendingdetail__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__pages_adminapprovedetail_adminapprovedetail__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__pages_adminrejectdetail_adminrejectdetail__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__pages_myapprovaldetail_myapprovaldetail__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__pages_myapprovalredirect_myapprovalredirect__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__pages_adminpendingadvanceredirect_adminpendingadvanceredirect__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__pages_noticeall_noticeall__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__pages_noticecontractor_noticecontractor__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__pages_noticeproject_noticeproject__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__pages_noticecontractordetail_noticecontractordetail__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__pages_noticeprojectdetail_noticeprojectdetail__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__pages_task_task__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__pages_taskassign_taskassign__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__pages_mytask_mytask__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__pages_taskdetail_taskdetail__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__pages_taskopen_taskopen__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__pages_taskclose_taskclose__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__pages_taskall_taskall__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__pages_myjob_myjob__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__pages_newjob_newjob__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89__pages_newjobmodal_newjobmodal__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90__pages_alljob_alljob__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_91__pages_jobprogress_jobprogress__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_92__pages_jobdetails_jobdetails__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_93__pages_jobkiv_jobkiv__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_94__pages_jobcomplete_jobcomplete__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_95__pages_jobrejected_jobrejected__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_96__pages_schedules_schedules__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_97__pages_scheduledetails_scheduledetails__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_98__pages_asset_asset__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_99__pages_assetonhand_assetonhand__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_100__pages_assethistory_assethistory__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_101__pages_assettransfer_assettransfer__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_102__ionic_native_device__ = __webpack_require__(504);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







































































































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_32__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_34__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_notice_notice__["a" /* NoticePage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_noticedetail_noticedetail__["a" /* NoticedetailPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_leave_leave__["a" /* LeavePage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_leave_modal_leave_modal__["a" /* LeaveModalPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_myleave_myleave__["a" /* MyleavePage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_leavestatus_leavestatus__["a" /* LeavestatusPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_leavepending_leavepending__["a" /* LeavependingPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_leavereject_leavereject__["a" /* LeaverejectPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_leaveapprove_leaveapprove__["a" /* LeaveapprovePage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_leavecancel_leavecancel__["a" /* LeavecancelPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_leavependingdetail_leavependingdetail__["a" /* LeavependingdetailPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_leaveapprovedetail_leaveapprovedetail__["a" /* LeaveapprovedetailPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_leaverejectdetail_leaverejectdetail__["a" /* LeaverejectdetailPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_leavecanceldetail_leavecanceldetail__["a" /* LeavecanceldetailPage */],
                __WEBPACK_IMPORTED_MODULE_66__pages_leavebalance_leavebalance__["a" /* LeavebalancePage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_myapproval_myapproval__["a" /* MyapprovalPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_attendance_attendance__["a" /* AttendancePage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_timesheet_timesheet__["a" /* TimesheetPage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_tsdetail_tsdetail__["a" /* TsdetailPage */],
                __WEBPACK_IMPORTED_MODULE_53__pages_holiday_holiday__["a" /* HolidayPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_advance_advance__["a" /* AdvancePage */],
                __WEBPACK_IMPORTED_MODULE_55__pages_siteadvance_siteadvance__["a" /* SiteadvancePage */],
                __WEBPACK_IMPORTED_MODULE_62__pages_myadvancestatus_myadvancestatus__["a" /* MyadvancestatusPage */],
                __WEBPACK_IMPORTED_MODULE_63__pages_adminadvancestatus_adminadvancestatus__["a" /* AdminadvancestatusPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_mypendingadvance_mypendingadvance__["a" /* MypendingadvancePage */],
                __WEBPACK_IMPORTED_MODULE_57__pages_myapproveadvance_myapproveadvance__["a" /* MyapproveadvancePage */],
                __WEBPACK_IMPORTED_MODULE_58__pages_myrejectadvance_myrejectadvance__["a" /* MyrejectadvancePage */],
                __WEBPACK_IMPORTED_MODULE_59__pages_adminpendingadvance_adminpendingadvance__["a" /* AdminpendingadvancePage */],
                __WEBPACK_IMPORTED_MODULE_60__pages_adminapproveadvance_adminapproveadvance__["a" /* AdminapproveadvancePage */],
                __WEBPACK_IMPORTED_MODULE_61__pages_adminrejectadvance_adminrejectadvance__["a" /* AdminrejectadvancePage */],
                __WEBPACK_IMPORTED_MODULE_64__pages_mypendingdetail_mypendingdetail__["a" /* MypendingdetailPage */],
                __WEBPACK_IMPORTED_MODULE_67__pages_myapprovedetail_myapprovedetail__["a" /* MyapprovedetailPage */],
                __WEBPACK_IMPORTED_MODULE_68__pages_myrejectdetail_myrejectdetail__["a" /* MyrejectdetailPage */],
                __WEBPACK_IMPORTED_MODULE_69__pages_adminpendingdetail_adminpendingdetail__["a" /* AdminpendingdetailPage */],
                __WEBPACK_IMPORTED_MODULE_70__pages_adminapprovedetail_adminapprovedetail__["a" /* AdminapprovedetailPage */],
                __WEBPACK_IMPORTED_MODULE_71__pages_adminrejectdetail_adminrejectdetail__["a" /* AdminrejectdetailPage */],
                __WEBPACK_IMPORTED_MODULE_72__pages_myapprovaldetail_myapprovaldetail__["a" /* MyapprovaldetailPage */],
                __WEBPACK_IMPORTED_MODULE_65__pages_leavependingredirect_leavependingredirect__["a" /* LeavePendingRedirectPage */],
                __WEBPACK_IMPORTED_MODULE_73__pages_myapprovalredirect_myapprovalredirect__["a" /* MyApprovalRedirectPage */],
                __WEBPACK_IMPORTED_MODULE_74__pages_adminpendingadvanceredirect_adminpendingadvanceredirect__["a" /* AdminpendingadvanceredirectPage */],
                __WEBPACK_IMPORTED_MODULE_75__pages_noticeall_noticeall__["a" /* NoticeallPage */],
                __WEBPACK_IMPORTED_MODULE_76__pages_noticecontractor_noticecontractor__["a" /* NoticecontractorPage */],
                __WEBPACK_IMPORTED_MODULE_77__pages_noticeproject_noticeproject__["a" /* NoticeprojectPage */],
                __WEBPACK_IMPORTED_MODULE_78__pages_noticecontractordetail_noticecontractordetail__["a" /* NoticecontractordetailPage */],
                __WEBPACK_IMPORTED_MODULE_79__pages_noticeprojectdetail_noticeprojectdetail__["a" /* NoticeprojectdetailPage */],
                __WEBPACK_IMPORTED_MODULE_80__pages_task_task__["a" /* TaskPage */],
                __WEBPACK_IMPORTED_MODULE_81__pages_taskassign_taskassign__["a" /* TaskAssignPage */],
                __WEBPACK_IMPORTED_MODULE_82__pages_mytask_mytask__["a" /* MyTaskPage */],
                __WEBPACK_IMPORTED_MODULE_83__pages_taskdetail_taskdetail__["a" /* TaskDetailPage */],
                __WEBPACK_IMPORTED_MODULE_84__pages_taskopen_taskopen__["a" /* TaskOpenPage */],
                __WEBPACK_IMPORTED_MODULE_85__pages_taskclose_taskclose__["a" /* TaskClosePage */],
                __WEBPACK_IMPORTED_MODULE_87__pages_myjob_myjob__["a" /* MyJobPage */],
                __WEBPACK_IMPORTED_MODULE_88__pages_newjob_newjob__["a" /* NewJobPage */],
                __WEBPACK_IMPORTED_MODULE_89__pages_newjobmodal_newjobmodal__["a" /* NewJobModalPage */],
                __WEBPACK_IMPORTED_MODULE_90__pages_alljob_alljob__["a" /* AllJobPage */],
                __WEBPACK_IMPORTED_MODULE_91__pages_jobprogress_jobprogress__["a" /* JobProgressPage */],
                __WEBPACK_IMPORTED_MODULE_92__pages_jobdetails_jobdetails__["a" /* JobDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_93__pages_jobkiv_jobkiv__["a" /* JobKivPage */],
                __WEBPACK_IMPORTED_MODULE_94__pages_jobcomplete_jobcomplete__["a" /* JobCompletePage */],
                __WEBPACK_IMPORTED_MODULE_95__pages_jobrejected_jobrejected__["a" /* JobRejectedPage */],
                __WEBPACK_IMPORTED_MODULE_86__pages_taskall_taskall__["a" /* TaskallPage */],
                __WEBPACK_IMPORTED_MODULE_96__pages_schedules_schedules__["a" /* SchedulesPage */],
                __WEBPACK_IMPORTED_MODULE_97__pages_scheduledetails_scheduledetails__["a" /* ScheduledetailsPage */],
                __WEBPACK_IMPORTED_MODULE_98__pages_asset_asset__["a" /* AssetPage */],
                __WEBPACK_IMPORTED_MODULE_99__pages_assetonhand_assetonhand__["a" /* AssetonhandPage */],
                __WEBPACK_IMPORTED_MODULE_100__pages_assethistory_assethistory__["a" /* AssethistoryPage */],
                __WEBPACK_IMPORTED_MODULE_101__pages_assettransfer_assettransfer__["a" /* AssettransferPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_32__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_ionic_image_loader__["a" /* IonicImageLoader */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_25_ionic_img_viewer__["a" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_26_ng_fullcalendar__["b" /* FullCalendarModule */],
                __WEBPACK_IMPORTED_MODULE_31_ionic_selectable__["a" /* IonicSelectableModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_32__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_34__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_notice_notice__["a" /* NoticePage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_noticedetail_noticedetail__["a" /* NoticedetailPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_leave_leave__["a" /* LeavePage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_leave_modal_leave_modal__["a" /* LeaveModalPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_myleave_myleave__["a" /* MyleavePage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_leavestatus_leavestatus__["a" /* LeavestatusPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_leavepending_leavepending__["a" /* LeavependingPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_leaveapprove_leaveapprove__["a" /* LeaveapprovePage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_leavereject_leavereject__["a" /* LeaverejectPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_leavecancel_leavecancel__["a" /* LeavecancelPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_leavependingdetail_leavependingdetail__["a" /* LeavependingdetailPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_leaveapprovedetail_leaveapprovedetail__["a" /* LeaveapprovedetailPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_leaverejectdetail_leaverejectdetail__["a" /* LeaverejectdetailPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_leavecanceldetail_leavecanceldetail__["a" /* LeavecanceldetailPage */],
                __WEBPACK_IMPORTED_MODULE_66__pages_leavebalance_leavebalance__["a" /* LeavebalancePage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_myapproval_myapproval__["a" /* MyapprovalPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_attendance_attendance__["a" /* AttendancePage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_timesheet_timesheet__["a" /* TimesheetPage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_tsdetail_tsdetail__["a" /* TsdetailPage */],
                __WEBPACK_IMPORTED_MODULE_53__pages_holiday_holiday__["a" /* HolidayPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_advance_advance__["a" /* AdvancePage */],
                __WEBPACK_IMPORTED_MODULE_55__pages_siteadvance_siteadvance__["a" /* SiteadvancePage */],
                __WEBPACK_IMPORTED_MODULE_62__pages_myadvancestatus_myadvancestatus__["a" /* MyadvancestatusPage */],
                __WEBPACK_IMPORTED_MODULE_63__pages_adminadvancestatus_adminadvancestatus__["a" /* AdminadvancestatusPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_mypendingadvance_mypendingadvance__["a" /* MypendingadvancePage */],
                __WEBPACK_IMPORTED_MODULE_57__pages_myapproveadvance_myapproveadvance__["a" /* MyapproveadvancePage */],
                __WEBPACK_IMPORTED_MODULE_58__pages_myrejectadvance_myrejectadvance__["a" /* MyrejectadvancePage */],
                __WEBPACK_IMPORTED_MODULE_59__pages_adminpendingadvance_adminpendingadvance__["a" /* AdminpendingadvancePage */],
                __WEBPACK_IMPORTED_MODULE_60__pages_adminapproveadvance_adminapproveadvance__["a" /* AdminapproveadvancePage */],
                __WEBPACK_IMPORTED_MODULE_61__pages_adminrejectadvance_adminrejectadvance__["a" /* AdminrejectadvancePage */],
                __WEBPACK_IMPORTED_MODULE_64__pages_mypendingdetail_mypendingdetail__["a" /* MypendingdetailPage */],
                __WEBPACK_IMPORTED_MODULE_67__pages_myapprovedetail_myapprovedetail__["a" /* MyapprovedetailPage */],
                __WEBPACK_IMPORTED_MODULE_68__pages_myrejectdetail_myrejectdetail__["a" /* MyrejectdetailPage */],
                __WEBPACK_IMPORTED_MODULE_69__pages_adminpendingdetail_adminpendingdetail__["a" /* AdminpendingdetailPage */],
                __WEBPACK_IMPORTED_MODULE_70__pages_adminapprovedetail_adminapprovedetail__["a" /* AdminapprovedetailPage */],
                __WEBPACK_IMPORTED_MODULE_71__pages_adminrejectdetail_adminrejectdetail__["a" /* AdminrejectdetailPage */],
                __WEBPACK_IMPORTED_MODULE_72__pages_myapprovaldetail_myapprovaldetail__["a" /* MyapprovaldetailPage */],
                __WEBPACK_IMPORTED_MODULE_65__pages_leavependingredirect_leavependingredirect__["a" /* LeavePendingRedirectPage */],
                __WEBPACK_IMPORTED_MODULE_73__pages_myapprovalredirect_myapprovalredirect__["a" /* MyApprovalRedirectPage */],
                __WEBPACK_IMPORTED_MODULE_74__pages_adminpendingadvanceredirect_adminpendingadvanceredirect__["a" /* AdminpendingadvanceredirectPage */],
                __WEBPACK_IMPORTED_MODULE_75__pages_noticeall_noticeall__["a" /* NoticeallPage */],
                __WEBPACK_IMPORTED_MODULE_76__pages_noticecontractor_noticecontractor__["a" /* NoticecontractorPage */],
                __WEBPACK_IMPORTED_MODULE_77__pages_noticeproject_noticeproject__["a" /* NoticeprojectPage */],
                __WEBPACK_IMPORTED_MODULE_78__pages_noticecontractordetail_noticecontractordetail__["a" /* NoticecontractordetailPage */],
                __WEBPACK_IMPORTED_MODULE_79__pages_noticeprojectdetail_noticeprojectdetail__["a" /* NoticeprojectdetailPage */],
                __WEBPACK_IMPORTED_MODULE_80__pages_task_task__["a" /* TaskPage */],
                __WEBPACK_IMPORTED_MODULE_81__pages_taskassign_taskassign__["a" /* TaskAssignPage */],
                __WEBPACK_IMPORTED_MODULE_82__pages_mytask_mytask__["a" /* MyTaskPage */],
                __WEBPACK_IMPORTED_MODULE_83__pages_taskdetail_taskdetail__["a" /* TaskDetailPage */],
                __WEBPACK_IMPORTED_MODULE_84__pages_taskopen_taskopen__["a" /* TaskOpenPage */],
                __WEBPACK_IMPORTED_MODULE_85__pages_taskclose_taskclose__["a" /* TaskClosePage */],
                __WEBPACK_IMPORTED_MODULE_87__pages_myjob_myjob__["a" /* MyJobPage */],
                __WEBPACK_IMPORTED_MODULE_88__pages_newjob_newjob__["a" /* NewJobPage */],
                __WEBPACK_IMPORTED_MODULE_89__pages_newjobmodal_newjobmodal__["a" /* NewJobModalPage */],
                __WEBPACK_IMPORTED_MODULE_90__pages_alljob_alljob__["a" /* AllJobPage */],
                __WEBPACK_IMPORTED_MODULE_91__pages_jobprogress_jobprogress__["a" /* JobProgressPage */],
                __WEBPACK_IMPORTED_MODULE_92__pages_jobdetails_jobdetails__["a" /* JobDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_93__pages_jobkiv_jobkiv__["a" /* JobKivPage */],
                __WEBPACK_IMPORTED_MODULE_94__pages_jobcomplete_jobcomplete__["a" /* JobCompletePage */],
                __WEBPACK_IMPORTED_MODULE_95__pages_jobrejected_jobrejected__["a" /* JobRejectedPage */],
                __WEBPACK_IMPORTED_MODULE_86__pages_taskall_taskall__["a" /* TaskallPage */],
                __WEBPACK_IMPORTED_MODULE_96__pages_schedules_schedules__["a" /* SchedulesPage */],
                __WEBPACK_IMPORTED_MODULE_97__pages_scheduledetails_scheduledetails__["a" /* ScheduledetailsPage */],
                __WEBPACK_IMPORTED_MODULE_98__pages_asset_asset__["a" /* AssetPage */],
                __WEBPACK_IMPORTED_MODULE_99__pages_assetonhand_assetonhand__["a" /* AssetonhandPage */],
                __WEBPACK_IMPORTED_MODULE_100__pages_assethistory_assethistory__["a" /* AssethistoryPage */],
                __WEBPACK_IMPORTED_MODULE_101__pages_assettransfer_assettransfer__["a" /* AssettransferPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_16__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_toast__["a" /* Toast */],
                // GooglePlus,
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_document_viewer__["a" /* DocumentViewer */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_photo_viewer__["a" /* PhotoViewer */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_file_opener__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_location_accuracy__["a" /* LocationAccuracy */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_app_preferences__["a" /* AppPreferences */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_base64__["a" /* Base64 */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_badge__["a" /* Badge */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_android_permissions__["a" /* AndroidPermissions */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_app_version__["a" /* AppVersion */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_file_chooser__["a" /* FileChooser */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_31_ionic_selectable__["a" /* IonicSelectableModule */],
                __WEBPACK_IMPORTED_MODULE_102__ionic_native_device__["a" /* Device */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    google: {
        webClientId: "8076749073-mknj6gcj4qhk4kvvghnci714pn2obgpd.apps.googleusercontent.com",
        hostedDomain: "siswa.uthm.edu.my"
    },
    auth: {
        codeLoginUrl: "http://172.20.10.4:8000/api/auth/students/login",
        credentialsLoginUrl: "https://jmclicks.com/api/login",
        lecturersInviteUrl: "http://172.20.10.4:8000/api/auth/lecturers/invite",
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_params__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_base64__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_image_picker__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_path__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_chooser__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_operators__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ionic_angular_navigation_nav_controller__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_toast__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

















var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
var JobDetailsPage = /** @class */ (function () {
    function JobDetailsPage(navParam, actCtrl, camera, base64, domSanitizer, alertCtrl, imagePicker, fileChooser, filePath, file, storage, loadingCtrl, http, navCtrl, toast) {
        this.navParam = navParam;
        this.actCtrl = actCtrl;
        this.camera = camera;
        this.base64 = base64;
        this.domSanitizer = domSanitizer;
        this.alertCtrl = alertCtrl;
        this.imagePicker = imagePicker;
        this.fileChooser = fileChooser;
        this.filePath = filePath;
        this.file = file;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.countNum = 0;
        this.taskFile = [];
        this.taskFileView = [];
        this.invoicePath = [];
        this.pr = this.navParam.get('pr_no');
        this.project = this.navParam.get('Project_Name');
        this.region = this.navParam.get('region');
        this.payment_term = this.navParam.get('payment_terms');
        this.id = this.navParam.get('Id');
        this.status = this.navParam.get('status');
        this.oriStatus = this.navParam.get('status');
        this.jobId = this.navParam.get('jobId');
    }
    JobDetailsPage.prototype.loadData = function () {
        var _this = this;
        this.storage.get('token').then(function (val) {
            _this.http.post('https://jmclicks.com/api/notifications/updateJob?token=' + val.token, { TargetId: _this.id, status: _this.oriStatus }).subscribe(function (result) {
            });
        });
    };
    JobDetailsPage.prototype.ionViewDidEnter = function () {
        this.loadData();
    };
    JobDetailsPage.prototype.readfile = function () {
        var _this = this;
        this.fileChooser.open()
            .then(function (uri) {
            _this.invoicePath = [];
            _this.invoice = uri;
            _this.filePath.resolveNativePath(uri).then(function (file) {
                var filePath = file;
                if (filePath) {
                    _this.base64.encodeFile(filePath).then(function (base64File) {
                        var name = _this.invoice.substr(_this.invoice.lastIndexOf('/') + 1);
                        _this.invoicePath.push({
                            path: _this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + base64File.substring(base64File.indexOf(',') + 1)),
                            name: name,
                            ext: name.substr(name.lastIndexOf('.') + 1)
                        });
                    }), function (err) {
                        console.log(err);
                    };
                }
            });
        })
            .catch(function (e) { console.log(e); });
    };
    JobDetailsPage.prototype.ngOnInit = function () {
        this.signupform = new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormGroup */]({
            status: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */]('', []),
        });
    };
    JobDetailsPage.prototype.selectImage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var act;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actCtrl.create({
                            title: "Select Image Source",
                            buttons: [{
                                    text: "Select file",
                                    handler: function () {
                                        _this.readfile();
                                    }
                                }, {
                                    text: "Use Camera",
                                    handler: function () {
                                        _this.TakePic();
                                    }
                                }, {
                                    text: "Load from gallery",
                                    handler: function () {
                                        _this.getImage();
                                    }
                                }, {
                                    text: "Cancel",
                                    role: "cancel"
                                }
                            ]
                        })];
                    case 1:
                        act = _a.sent();
                        return [4 /*yield*/, act.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    JobDetailsPage.prototype.deleteInvoice = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.invoice = null;
                this.invoicePath = [];
                return [2 /*return*/];
            });
        });
    };
    JobDetailsPage.prototype.deleteTask = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var filter;
            return __generator(this, function (_a) {
                filter = this.taskFile.filter(function (tsk) { return tsk.id != id; });
                this.taskFile = filter;
                filter = this.taskFileView.filter(function (tsk) { return tsk.id != id; });
                this.taskFileView = filter;
                return [2 /*return*/];
            });
        });
    };
    JobDetailsPage.prototype.TakePic = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            quality: 70,
                            destinationType: this.camera.DestinationType.FILE_URI,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE
                        };
                        return [4 /*yield*/, this.camera.getPicture(options).then(function (imageData) {
                                // this.images.push({
                                //   id:this.countNum,
                                //   path: imageData
                                // })
                                _this.invoicePath = [];
                                _this.invoice = imageData;
                                _this.base64.encodeFile(imageData).then(function (base64File) {
                                    _this.invoicePath.push({
                                        ext: 'jpg',
                                        path: _this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + base64File.substring(base64File.indexOf(',') + 1))
                                    });
                                    // this.countNum++;
                                }, function (err) {
                                    console.log(err);
                                });
                            }, function (err) {
                                _this.displayErrorAlert(err);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    JobDetailsPage.prototype.displayErrorAlert = function (err) {
        console.log(err);
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Error while trying to capture picture',
            buttons: ['OK']
        });
        alert.present();
    };
    JobDetailsPage.prototype.getImage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            // quality: 70,
                            // outputType: 0,
                            maximumImagesCount: 1
                        };
                        return [4 /*yield*/, this.imagePicker.hasReadPermission().then(function (res) {
                                if (res) {
                                    _this.imagePicker.getPictures(options).then(function (results) {
                                        _this.invoicePath = [];
                                        for (var i = 0; i < results.length; i++) {
                                            // this.images.push({
                                            //   id:this.countNum,
                                            //   path:results[i]})
                                            _this.invoice = results[i];
                                            _this.base64.encodeFile(results[i]).then(function (base64File) {
                                                _this.invoicePath.push({
                                                    ext: 'img',
                                                    path: _this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + base64File.substring(base64File.indexOf(',') + 1))
                                                });
                                            }, function (err) {
                                                console.log(err);
                                            });
                                        }
                                    }, function (err) { });
                                }
                                else {
                                    _this.imagePicker.requestReadPermission().then(function (res) {
                                        _this.imagePicker.getPictures(options).then(function (results) {
                                            _this.invoicePath = [];
                                            for (var i = 0; i < results.length; i++) {
                                                // this.images.push({
                                                //   id:this.countNum,
                                                //   path:results[i]})
                                                _this.invoice = results[i];
                                                _this.base64.encodeFile(results[i]).then(function (base64File) {
                                                    _this.invoicePath.push({
                                                        ext: 'img',
                                                        path: _this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + base64File.substring(base64File.indexOf(',') + 1))
                                                    });
                                                    _this.countNum++;
                                                }, function (err) {
                                                    console.log(err);
                                                });
                                            }
                                        }, function (err) { });
                                    });
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    JobDetailsPage.prototype.updateStatus = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var temp, i, loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        temp = [];
                        console.log(this.jobId);
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.taskFile.length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, temp.push({
                                name: 'task',
                                path: this.taskFile[i].path
                            })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        if (!(this.invoice != "" && this.invoice != null && this.invoice.length != 0)) return [3 /*break*/, 6];
                        return [4 /*yield*/, temp.push({
                                name: "invoice",
                                path: this.invoice
                            })];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6:
                        loading = this.loadingCtrl.create({
                            content: "Updating task",
                            spinner: 'crescent'
                        });
                        this.storage.get('token').then(function (val) {
                            loading.present();
                            var p = new Promise(function (resolveReady) {
                                var defs = [];
                                _this.formData = new FormData();
                                temp.forEach(function (i) {
                                    var self = _this;
                                    var def = new Promise(function (resolve) {
                                        _this.file.resolveLocalFilesystemUrl(i.path)
                                            .then(function (entry) {
                                            entry.file(function (file) {
                                                var reader = new FileReader();
                                                reader.onloadend = function (e) {
                                                    var imgBlob = new Blob([this.result], { type: file.type });
                                                    if (i.name == "invoice")
                                                        self.formData.append('invoice', imgBlob, file.name);
                                                    else
                                                        self.formData.append('attachment[]', imgBlob, file.name);
                                                    resolve(i.path);
                                                };
                                                reader.readAsArrayBuffer(file);
                                            }, function (e) {
                                                console.log('error getting file', e);
                                            });
                                        }, function (err) {
                                            console.log("Put error message here", JSON.stringify(err));
                                        });
                                    });
                                    defs.push(def);
                                });
                                Promise.all(defs).then(function (res) {
                                    _this.formData.append('Status', _this.status);
                                    _this.formData.append('Id', _this.id);
                                    _this.formData.append('oriStatus', _this.oriStatus);
                                    _this.formData.append('jobId', _this.jobId);
                                    resolveReady();
                                });
                            });
                            p.then(function () {
                                return _this.http.post('https://jmclicks.com/api/myjob/updateStatus?token=' + val.token, _this.formData, {})
                                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators__["catchError"])(_this.handleError))
                                    .finally(function () {
                                    loading.dismiss();
                                })
                                    .subscribe(function (res) {
                                    console.log(res);
                                    if (res == 1) {
                                        console.log(JSON.stringify(res));
                                        _this.toast.show("Job updated", '5000', 'center').subscribe(function (toast) {
                                            console.log(toast);
                                            _this.navCtrl.pop();
                                        });
                                    }
                                    else {
                                        var obj = res;
                                        console.log(obj);
                                        var errormessage = "";
                                        for (var item in obj) {
                                            errormessage = obj[item];
                                            console.log(errormessage);
                                        }
                                        _this.toast.show(errormessage[0], '5000', 'center').subscribe(function (toast) {
                                            console.log(toast);
                                        });
                                    }
                                });
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    JobDetailsPage.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
            return __WEBPACK_IMPORTED_MODULE_14_rxjs__["Observable"].throw('An error occurred:' + error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + JSON.stringify(error) + ", " +
                ("body was: " + JSON.stringify(error)));
            if (error.status == 422) {
                return __WEBPACK_IMPORTED_MODULE_14_rxjs__["Observable"].throw('Invalid username or password');
            }
            return __WEBPACK_IMPORTED_MODULE_14_rxjs__["Observable"].throw('An error occured. Try again later');
        }
    };
    ;
    JobDetailsPage.prototype.getTaskImage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            quality: 70,
                            outputType: 0,
                            maximumImagesCount: 1
                        };
                        return [4 /*yield*/, this.imagePicker.hasReadPermission().then(function (res) {
                                if (res) {
                                    _this.imagePicker.getPictures({}).then(function (results) {
                                        for (var i = 0; i < results.length; i++) {
                                            _this.taskFile.push({
                                                id: _this.countNum,
                                                path: results[i]
                                            });
                                            _this.base64.encodeFile(results[i]).then(function (base64File) {
                                                _this.taskFileView.push({
                                                    id: _this.countNum,
                                                    ext: 'img',
                                                    path: _this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + base64File.substring(base64File.indexOf(',') + 1))
                                                });
                                                _this.countNum++;
                                            }, function (err) {
                                                console.log(err);
                                            });
                                        }
                                    }, function (err) { });
                                }
                                else {
                                    _this.imagePicker.requestReadPermission().then(function (res) {
                                        _this.imagePicker.getPictures({}).then(function (results) {
                                            for (var i = 0; i < results.length; i++) {
                                                _this.taskFile.push({
                                                    id: _this.countNum,
                                                    path: results[i]
                                                });
                                                _this.base64.encodeFile(results[i]).then(function (base64File) {
                                                    _this.taskFileView.push({
                                                        id: _this.countNum,
                                                        ext: 'img',
                                                        path: _this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + base64File.substring(base64File.indexOf(',') + 1))
                                                    });
                                                    _this.countNum++;
                                                }, function (err) {
                                                    console.log(err);
                                                });
                                            }
                                        }, function (err) { });
                                    });
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    JobDetailsPage.prototype.TakeTaskPic = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            quality: 70,
                            destinationType: this.camera.DestinationType.FILE_URI,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE
                        };
                        return [4 /*yield*/, this.camera.getPicture(options).then(function (imageData) {
                                _this.taskFile.push({
                                    id: _this.countNum,
                                    path: imageData
                                });
                                _this.base64.encodeFile(imageData).then(function (base64File) {
                                    _this.taskFileView.push({
                                        id: _this.countNum,
                                        ext: 'jpg',
                                        path: _this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + base64File.substring(base64File.indexOf(',') + 1))
                                    });
                                    _this.countNum++;
                                }, function (err) {
                                    console.log(err);
                                });
                            }, function (err) {
                                _this.displayErrorAlert(err);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    JobDetailsPage.prototype.selectTask = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var act;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actCtrl.create({
                            title: "Select",
                            buttons: [{
                                    text: "Select file",
                                    handler: function () {
                                        _this.readTaskfile();
                                    }
                                }, {
                                    text: "Use Camera",
                                    handler: function () {
                                        _this.TakeTaskPic();
                                    }
                                }, {
                                    text: "Load from gallery",
                                    handler: function () {
                                        _this.getTaskImage();
                                    }
                                }, {
                                    text: "Cancel",
                                    role: "cancel"
                                }
                            ]
                        })];
                    case 1:
                        act = _a.sent();
                        return [4 /*yield*/, act.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    JobDetailsPage.prototype.readTaskfile = function () {
        var _this = this;
        this.fileChooser.open()
            .then(function (uri) {
            var temp = uri;
            _this.taskFile.push({
                id: _this.countNum,
                path: uri,
            });
            _this.filePath.resolveNativePath(uri).then(function (file) {
                var filePath = file;
                if (filePath) {
                    _this.base64.encodeFile(filePath).then(function (base64File) {
                        var name = temp.substr(temp.lastIndexOf('/') + 1);
                        _this.taskFileView.push({
                            id: _this.countNum,
                            path: _this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + base64File.substring(base64File.indexOf(',') + 1)),
                            name: name,
                            ext: name.substr(name.lastIndexOf('.') + 1)
                        });
                        _this.countNum++;
                    }), function (err) {
                        console.log(err);
                    };
                }
            });
        })
            .catch(function (e) { console.log(e); });
    };
    JobDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jobdetails',template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/jobdetails/jobdetails.html"*/'\n<ion-header>\n\n    <ion-navbar color="secondary">\n      <ion-title>Job</ion-title>\n    </ion-navbar>\n\n  </ion-header>\n\n\n  <ion-content padding>\n\n    <h1 text-center>{{Start_Date}}</h1>\n\n    <ion-item>\n      <ion-label stacked color="primary">PR NO</ion-label>\n      <ion-input    value="{{pr}}" disabled="true" ></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked color="primary">Project Name</ion-label>\n      <ion-input    value="{{project}}" disabled="true" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked color="primary">Region</ion-label>\n      <ion-input  value="{{region}}" disabled="true" ></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked color="primary">Payment Terms</ion-label>\n      <ion-input  value="{{payment_term}}" disabled="true" ></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf=\'oriStatus == "Rejected"\'>\n      <ion-label stacked color="primary">Status</ion-label>\n      <ion-input  value="{{oriStatus}}" disabled="true" ></ion-input>\n    </ion-item>\n    <form novalidate (ngSubmit)="updateStatus()" [formGroup]="signupform" *ngIf=\'oriStatus != "Rejected"\'>\n      <ion-item>\n        <ion-label stacked color="primary">Status</ion-label>\n        <ion-select  [(ngModel)]="status" formControlName="status">\n          <ion-option value="In-Progress">In-Progress</ion-option>\n          <ion-option value="KIV">KIV</ion-option>\n          <ion-option value="Complete">Complete</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>Invoice</ion-item>\n\n      <ion-item *ngIf="invoicePath && invoicePath.length > 0">\n        <ion-thumbnail slot="start" *ngIf="invoicePath[0].ext != \'pdf\'">\n            <img [src]="invoicePath[0].path" width="30px" height="30px">\n        </ion-thumbnail>\n        <span *ngIf="invoicePath[0].ext == \'pdf\'">{{invoicePath[0].name}}</span>\n        <ion-icon slot="icon-only"  name="trash" (click)="deleteInvoice()"></ion-icon>\n      </ion-item>\n\n      <button ion-button icon-right type="button" full (click)="selectImage()">\n      <ion-icon name="camera"></ion-icon> Upload Invoice</button>\n\n        <ion-item>\n          Task:\n        </ion-item>\n\n        <ion-item *ngFor="let t of taskFileView;">\n          <ion-thumbnail slot="start" *ngIf="t.ext != \'pdf\'">\n              <img [src]="t.path" width="30px" height="30px">\n          </ion-thumbnail>\n          <span *ngIf="t.ext == \'pdf\'">{{t.name}}</span>\n          <ion-icon slot="icon-only"  name="trash" (click)="deleteTask(t.id)"></ion-icon>\n        </ion-item>\n\n        <button ion-button icon-right type="button" full (click)="selectTask()">\n        <ion-icon name="camera"></ion-icon> Upload Document</button>\n        <button ion-button block color="primary" type="submit" [disabled]="signupform.invalid">Update</button>\n\n      </form>\n  </ion-content>\n'/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/pages/jobdetails/jobdetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_params__["a" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_base64__["a" /* Base64 */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_chooser__["a" /* FileChooser */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_15_ionic_angular_navigation_nav_controller__["a" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_toast__["a" /* Toast */]])
    ], JobDetailsPage);
    return JobDetailsPage;
}());

//# sourceMappingURL=jobdetails.js.map

/***/ }),

/***/ 910:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 377,
	"./af.js": 377,
	"./ar": 378,
	"./ar-dz": 379,
	"./ar-dz.js": 379,
	"./ar-kw": 380,
	"./ar-kw.js": 380,
	"./ar-ly": 381,
	"./ar-ly.js": 381,
	"./ar-ma": 382,
	"./ar-ma.js": 382,
	"./ar-sa": 383,
	"./ar-sa.js": 383,
	"./ar-tn": 384,
	"./ar-tn.js": 384,
	"./ar.js": 378,
	"./az": 385,
	"./az.js": 385,
	"./be": 386,
	"./be.js": 386,
	"./bg": 387,
	"./bg.js": 387,
	"./bm": 388,
	"./bm.js": 388,
	"./bn": 389,
	"./bn.js": 389,
	"./bo": 390,
	"./bo.js": 390,
	"./br": 391,
	"./br.js": 391,
	"./bs": 392,
	"./bs.js": 392,
	"./ca": 393,
	"./ca.js": 393,
	"./cs": 394,
	"./cs.js": 394,
	"./cv": 395,
	"./cv.js": 395,
	"./cy": 396,
	"./cy.js": 396,
	"./da": 397,
	"./da.js": 397,
	"./de": 398,
	"./de-at": 399,
	"./de-at.js": 399,
	"./de-ch": 400,
	"./de-ch.js": 400,
	"./de.js": 398,
	"./dv": 401,
	"./dv.js": 401,
	"./el": 402,
	"./el.js": 402,
	"./en-au": 403,
	"./en-au.js": 403,
	"./en-ca": 404,
	"./en-ca.js": 404,
	"./en-gb": 405,
	"./en-gb.js": 405,
	"./en-ie": 406,
	"./en-ie.js": 406,
	"./en-il": 407,
	"./en-il.js": 407,
	"./en-nz": 408,
	"./en-nz.js": 408,
	"./eo": 409,
	"./eo.js": 409,
	"./es": 410,
	"./es-do": 411,
	"./es-do.js": 411,
	"./es-us": 412,
	"./es-us.js": 412,
	"./es.js": 410,
	"./et": 413,
	"./et.js": 413,
	"./eu": 414,
	"./eu.js": 414,
	"./fa": 415,
	"./fa.js": 415,
	"./fi": 416,
	"./fi.js": 416,
	"./fo": 417,
	"./fo.js": 417,
	"./fr": 418,
	"./fr-ca": 419,
	"./fr-ca.js": 419,
	"./fr-ch": 420,
	"./fr-ch.js": 420,
	"./fr.js": 418,
	"./fy": 421,
	"./fy.js": 421,
	"./gd": 422,
	"./gd.js": 422,
	"./gl": 423,
	"./gl.js": 423,
	"./gom-latn": 424,
	"./gom-latn.js": 424,
	"./gu": 425,
	"./gu.js": 425,
	"./he": 426,
	"./he.js": 426,
	"./hi": 427,
	"./hi.js": 427,
	"./hr": 428,
	"./hr.js": 428,
	"./hu": 429,
	"./hu.js": 429,
	"./hy-am": 430,
	"./hy-am.js": 430,
	"./id": 431,
	"./id.js": 431,
	"./is": 432,
	"./is.js": 432,
	"./it": 433,
	"./it.js": 433,
	"./ja": 434,
	"./ja.js": 434,
	"./jv": 435,
	"./jv.js": 435,
	"./ka": 436,
	"./ka.js": 436,
	"./kk": 437,
	"./kk.js": 437,
	"./km": 438,
	"./km.js": 438,
	"./kn": 439,
	"./kn.js": 439,
	"./ko": 440,
	"./ko.js": 440,
	"./ku": 441,
	"./ku.js": 441,
	"./ky": 442,
	"./ky.js": 442,
	"./lb": 443,
	"./lb.js": 443,
	"./lo": 444,
	"./lo.js": 444,
	"./lt": 445,
	"./lt.js": 445,
	"./lv": 446,
	"./lv.js": 446,
	"./me": 447,
	"./me.js": 447,
	"./mi": 448,
	"./mi.js": 448,
	"./mk": 449,
	"./mk.js": 449,
	"./ml": 450,
	"./ml.js": 450,
	"./mn": 451,
	"./mn.js": 451,
	"./mr": 452,
	"./mr.js": 452,
	"./ms": 453,
	"./ms-my": 454,
	"./ms-my.js": 454,
	"./ms.js": 453,
	"./mt": 455,
	"./mt.js": 455,
	"./my": 456,
	"./my.js": 456,
	"./nb": 457,
	"./nb.js": 457,
	"./ne": 458,
	"./ne.js": 458,
	"./nl": 459,
	"./nl-be": 460,
	"./nl-be.js": 460,
	"./nl.js": 459,
	"./nn": 461,
	"./nn.js": 461,
	"./pa-in": 462,
	"./pa-in.js": 462,
	"./pl": 463,
	"./pl.js": 463,
	"./pt": 464,
	"./pt-br": 465,
	"./pt-br.js": 465,
	"./pt.js": 464,
	"./ro": 466,
	"./ro.js": 466,
	"./ru": 467,
	"./ru.js": 467,
	"./sd": 468,
	"./sd.js": 468,
	"./se": 469,
	"./se.js": 469,
	"./si": 470,
	"./si.js": 470,
	"./sk": 471,
	"./sk.js": 471,
	"./sl": 472,
	"./sl.js": 472,
	"./sq": 473,
	"./sq.js": 473,
	"./sr": 474,
	"./sr-cyrl": 475,
	"./sr-cyrl.js": 475,
	"./sr.js": 474,
	"./ss": 476,
	"./ss.js": 476,
	"./sv": 477,
	"./sv.js": 477,
	"./sw": 478,
	"./sw.js": 478,
	"./ta": 479,
	"./ta.js": 479,
	"./te": 480,
	"./te.js": 480,
	"./tet": 481,
	"./tet.js": 481,
	"./tg": 482,
	"./tg.js": 482,
	"./th": 483,
	"./th.js": 483,
	"./tl-ph": 484,
	"./tl-ph.js": 484,
	"./tlh": 485,
	"./tlh.js": 485,
	"./tr": 486,
	"./tr.js": 486,
	"./tzl": 487,
	"./tzl.js": 487,
	"./tzm": 488,
	"./tzm-latn": 489,
	"./tzm-latn.js": 489,
	"./tzm.js": 488,
	"./ug-cn": 490,
	"./ug-cn.js": 490,
	"./uk": 491,
	"./uk.js": 491,
	"./ur": 492,
	"./ur.js": 492,
	"./uz": 493,
	"./uz-latn": 494,
	"./uz-latn.js": 494,
	"./uz.js": 493,
	"./vi": 495,
	"./vi.js": 495,
	"./x-pseudo": 496,
	"./x-pseudo.js": 496,
	"./yo": 497,
	"./yo.js": 497,
	"./zh-cn": 498,
	"./zh-cn.js": 498,
	"./zh-hk": 499,
	"./zh-hk.js": 499,
	"./zh-tw": 500,
	"./zh-tw.js": 500
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 910;

/***/ }),

/***/ 912:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_app_preferences__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_location_accuracy__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_android_permissions__ = __webpack_require__(501);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import { AlertController } from 'ionic-angular';




var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    })
};
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, storage, splashScreen, oneSignal, 
        // private alertCtrl: AlertController,    
        http, appPreferences, locationAccuracy, androidPermissions) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.storage = storage;
        this.splashScreen = splashScreen;
        this.oneSignal = oneSignal;
        this.http = http;
        this.appPreferences = appPreferences;
        this.locationAccuracy = locationAccuracy;
        this.androidPermissions = androidPermissions;
        this.platformReady();
        this.enableLocation();
    }
    MyApp.prototype.platformReady = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.storage.get('token').then(function (val) {
                if (val && val.token) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
                }
            });
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            // OneSignal Code start:
            // Enable to debug issues:
            // window["plugins"].OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
            _this.androidPermissions.requestPermissions([
                _this.androidPermissions.PERMISSION.CAMERA,
                // this.androidPermissions.PERMISSION.CALL_PHONE, 
                // this.androidPermissions.PERMISSION.GET_ACCOUNTS, 
                _this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE,
                _this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE
            ]);
            // check if in browser or on device before running OneSignal Code
            if (_this.platform.is('core') || _this.platform.is('mobileweb')) {
                console.log("Platform is core or is mobile web");
            }
            else {
                var notificationOpenedCallback = function (jsonData) {
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
        this.oneSignal.getIds().then(function (id) {
            _this.appPreferences.store('os', 'id', id.userId);
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
    };
    MyApp.prototype.enableLocation = function () {
        var _this = this;
        return this.locationAccuracy.canRequest().then(function (canRequest) {
            if (canRequest) {
                // the accuracy option will be ignored by iOS
                _this.locationAccuracy.request(_this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function () { return alert('Location information is on'); }, function (error) { return alert('Location information is turn off'); });
            }
        });
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/mohamadazam/Ionic/jmclick-amri/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/mohamadazam/Ionic/jmclick-amri/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_app_preferences__["a" /* AppPreferences */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_location_accuracy__["a" /* LocationAccuracy */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_android_permissions__["a" /* AndroidPermissions */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[570]);
//# sourceMappingURL=main.js.map