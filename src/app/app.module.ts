import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from "@angular/common/http";
import { IonicStorageModule } from '@ionic/storage';
import { IonicImageLoader } from 'ionic-image-loader';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';
import { HTTP } from '@ionic-native/http';
import { AuthProvider } from '../providers/auth/auth';
import { Toast } from "@ionic-native/toast";
import { FileOpener } from '@ionic-native/file-opener';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { OneSignal } from '@ionic-native/onesignal';
import { AppPreferences } from '@ionic-native/app-preferences';
import { Base64 } from '@ionic-native/base64';
import { ImagePicker } from '@ionic-native/image-picker';
import { Badge } from '@ionic-native/badge';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { FullCalendarModule } from 'ng-fullcalendar';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { AppVersion } from '@ionic-native/app-version';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { IonicSelectableModule } from 'ionic-selectable';


import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { NoticePage } from '../pages/notice/notice';
import { NoticedetailPage } from '../pages/noticedetail/noticedetail';

import { LeavePage } from '../pages/leave/leave';
import { LeaveModalPage } from '../pages/leave-modal/leave-modal';
import { MyleavePage } from '../pages/myleave/myleave';
import { LeavestatusPage } from '../pages/leavestatus/leavestatus';
import { LeavependingPage } from '../pages/leavepending/leavepending';
import { LeaverejectPage } from '../pages/leavereject/leavereject';
import { LeaveapprovePage } from '../pages/leaveapprove/leaveapprove';
import { LeavecancelPage } from '../pages/leavecancel/leavecancel';
import { LeavependingdetailPage } from '../pages/leavependingdetail/leavependingdetail';
import { LeaveapprovedetailPage } from '../pages/leaveapprovedetail/leaveapprovedetail';
import { LeaverejectdetailPage } from '../pages/leaverejectdetail/leaverejectdetail';
import { LeavecanceldetailPage } from '../pages/leavecanceldetail/leavecanceldetail';
import { MyapprovalPage } from '../pages/myapproval/myapproval';
import { AttendancePage } from '../pages/attendance/attendance';
import { TimesheetPage } from '../pages/timesheet/timesheet';
import { TsdetailPage } from '../pages/tsdetail/tsdetail';
import { HolidayPage } from '../pages/holiday/holiday';
import { AdvancePage } from '../pages/advance/advance';
import { SiteadvancePage } from '../pages/siteadvance/siteadvance';
import { MypendingadvancePage } from '../pages/mypendingadvance/mypendingadvance';
import { MyapproveadvancePage } from '../pages/myapproveadvance/myapproveadvance';
import { MyrejectadvancePage } from '../pages/myrejectadvance/myrejectadvance';
import { AdminpendingadvancePage } from '../pages/adminpendingadvance/adminpendingadvance';
import { AdminapproveadvancePage } from '../pages/adminapproveadvance/adminapproveadvance';
import { AdminrejectadvancePage } from '../pages/adminrejectadvance/adminrejectadvance';
import { MyadvancestatusPage } from '../pages/myadvancestatus/myadvancestatus';
import { AdminadvancestatusPage } from '../pages/adminadvancestatus/adminadvancestatus';
import { MypendingdetailPage } from '../pages/mypendingdetail/mypendingdetail';
import { LeavePendingRedirectPage } from '../pages/leavependingredirect/leavependingredirect';
import { LeavebalancePage } from '../pages/leavebalance/leavebalance';

import { MyapprovedetailPage } from '../pages/myapprovedetail/myapprovedetail';
import { MyrejectdetailPage } from '../pages/myrejectdetail/myrejectdetail';
import { AdminpendingdetailPage } from '../pages/adminpendingdetail/adminpendingdetail';
import { AdminapprovedetailPage } from '../pages/adminapprovedetail/adminapprovedetail';
import { AdminrejectdetailPage } from '../pages/adminrejectdetail/adminrejectdetail';
import { MyapprovaldetailPage } from '../pages/myapprovaldetail/myapprovaldetail';
import { MyApprovalRedirectPage } from '../pages/myapprovalredirect/myapprovalredirect';

import { AdminpendingadvanceredirectPage } from '../pages/adminpendingadvanceredirect/adminpendingadvanceredirect';
import { NoticeallPage } from '../pages/noticeall/noticeall';
import { NoticecontractorPage } from '../pages/noticecontractor/noticecontractor';
import { NoticeprojectPage } from '../pages/noticeproject/noticeproject';
import { NoticecontractordetailPage } from '../pages/noticecontractordetail/noticecontractordetail';
import { NoticeprojectdetailPage } from '../pages/noticeprojectdetail/noticeprojectdetail';

import { TaskPage } from '../pages/task/task';
import { TaskAssignPage } from '../pages/taskassign/taskassign';
import { MyTaskPage } from '../pages/mytask/mytask';
import { TaskDetailPage } from '../pages/taskdetail/taskdetail';
import { TaskOpenPage } from '../pages/taskopen/taskopen';
import { TaskClosePage } from '../pages/taskclose/taskclose';
import { TaskallPage } from '../pages/taskall/taskall';

import { MyJobPage } from '../pages/myjob/myjob';
import { NewJobPage } from '../pages/newjob/newjob';
import { NewJobModalPage } from '../pages/newjobmodal/newjobmodal';
import { AllJobPage } from '../pages/alljob/alljob';
import { JobProgressPage } from '../pages/jobprogress/jobprogress';
import { JobDetailsPage } from '../pages/jobdetails/jobdetails';
import { JobKivPage } from '../pages/jobkiv/jobkiv';
import { JobCompletePage } from '../pages/jobcomplete/jobcomplete';
import { JobRejectedPage } from '../pages/jobrejected/jobrejected';

import { SchedulesPage } from '../pages/schedules/schedules';
import { ScheduledetailsPage } from '../pages/scheduledetails/scheduledetails';

import { AssetPage } from '../pages/asset/asset';
import { AssetonhandPage } from '../pages/assetonhand/assetonhand';
import { AssethistoryPage } from '../pages/assethistory/assethistory';
import { AssettransferPage } from '../pages/assettransfer/assettransfer';
import { Device } from '@ionic-native/device';
import {TaskdatePage} from '../pages/taskdate/taskdate';
import { MyjobdatePage } from '../pages/myjobdate/myjobdate';

import { AssetreportPage } from '../pages/assetreport/assetreport';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    NoticePage,
    NoticedetailPage,
    LeavePage,
    LeaveModalPage,
    MyleavePage,
    LeavestatusPage,
    LeavependingPage,
    LeaverejectPage,
    LeaveapprovePage,
    LeavecancelPage,
    LeavependingdetailPage,
    LeaveapprovedetailPage,
    LeaverejectdetailPage,
    LeavecanceldetailPage,
    LeavebalancePage,
    MyapprovalPage,
    AttendancePage,
    TimesheetPage,
    TsdetailPage,
    HolidayPage,
    AdvancePage,
    SiteadvancePage,
    MyadvancestatusPage,
    AdminadvancestatusPage,
    MypendingadvancePage,
    MyapproveadvancePage,
    MyrejectadvancePage,
    AdminpendingadvancePage,
    AdminapproveadvancePage,
    AdminrejectadvancePage,
    MypendingdetailPage,
    MyapprovedetailPage,
    MyrejectdetailPage,
    AdminpendingdetailPage,
    AdminapprovedetailPage,
    AdminrejectdetailPage,
    MyapprovaldetailPage,
    LeavePendingRedirectPage,
    MyApprovalRedirectPage,
    AdminpendingadvanceredirectPage,
    NoticeallPage,
    NoticecontractorPage,
    NoticeprojectPage,
    NoticecontractordetailPage,
    NoticeprojectdetailPage,
    TaskPage,
    TaskAssignPage,
    MyTaskPage,
    TaskDetailPage,
    TaskOpenPage,
    TaskClosePage,
    MyJobPage,
    NewJobPage,
    NewJobModalPage,
    AllJobPage,
    JobProgressPage,
    JobDetailsPage,
    JobKivPage,
    JobCompletePage,
    JobRejectedPage,
    TaskallPage,
    SchedulesPage,
    ScheduledetailsPage,
    AssetPage,
    AssetonhandPage,
    AssethistoryPage,
    AssettransferPage,
    TaskdatePage,
    MyjobdatePage,
    AssetreportPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    IonicImageLoader.forRoot(),
    IonicImageViewerModule,
    FullCalendarModule,
    IonicSelectableModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    NoticePage,
    NoticedetailPage,
    LeavePage,
    LeaveModalPage,
    MyleavePage,
    LeavestatusPage,
    LeavependingPage,
    LeaveapprovePage,
    LeaverejectPage,
    LeavecancelPage,
    LeavependingdetailPage,
    LeaveapprovedetailPage,
    LeaverejectdetailPage,
    LeavecanceldetailPage,
    LeavebalancePage,
    MyapprovalPage,
    AttendancePage,
    TimesheetPage,
    TsdetailPage,
    HolidayPage,
    AdvancePage,
    SiteadvancePage,
    MyadvancestatusPage,
    AdminadvancestatusPage,
    MypendingadvancePage,
    MyapproveadvancePage,
    MyrejectadvancePage,
    AdminpendingadvancePage,
    AdminapproveadvancePage,
    AdminrejectadvancePage,
    MypendingdetailPage,
    MyapprovedetailPage,
    MyrejectdetailPage,
    AdminpendingdetailPage,
    AdminapprovedetailPage,
    AdminrejectdetailPage,
    MyapprovaldetailPage,
    LeavePendingRedirectPage,
    MyApprovalRedirectPage,
    AdminpendingadvanceredirectPage,
    NoticeallPage,
    NoticecontractorPage,
    NoticeprojectPage,
    NoticecontractordetailPage,
    NoticeprojectdetailPage,
    TaskPage,
    TaskAssignPage,
    MyTaskPage,
    TaskDetailPage,
    TaskOpenPage,
    TaskClosePage,
    MyJobPage,
    NewJobPage,
    NewJobModalPage,
    AllJobPage,
    JobProgressPage,
    JobDetailsPage,
    JobKivPage,
    JobCompletePage,
    JobRejectedPage,
    TaskallPage,
    SchedulesPage,
    ScheduledetailsPage,
    AssetPage,
    AssetonhandPage,
    AssethistoryPage,
    AssettransferPage,
    TaskdatePage,
    MyjobdatePage,
    AssetreportPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    AuthProvider,
    Toast,
    // GooglePlus,
    NativePageTransitions,
    File,
    DocumentViewer,
    FileTransfer,
    PhotoViewer,
    FileOpener,
    LocationAccuracy,
    OneSignal,
    AppPreferences,
    HTTP,
    Base64,
    ImagePicker,
    Badge,
    AndroidPermissions,
    AppVersion,
    FileChooser,
    FilePath,
    IonicSelectableModule,
    Device,
  ]
})
export class AppModule {}
