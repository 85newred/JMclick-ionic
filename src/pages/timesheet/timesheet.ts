import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { App, LoadingController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { TsdetailPage } from '../tsdetail/tsdetail';
const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
}
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { Toast } from '@ionic-native/toast';

/**
 * Generated class for the TimesheetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-timesheet',
  templateUrl: 'timesheet.html',
})

export class TimesheetPage implements OnInit {

  items: any;
  token: string = '';
  Start_Date: any;
  End_Date: any;
  timesheet: any='';
  tsdetailPage = TsdetailPage;

  calendarOptions: any;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public app: App,
    private toast: Toast,
    public http: HttpClient,
    private storage: Storage,
    public loadingCtrl: LoadingController,
    public navParams: NavParams,
    private element:ElementRef
  )
  {
    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 2);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    this.Start_Date = firstDay.toISOString();
    console.log(this.Start_Date)
    this.End_Date = lastDay.toISOString();
    this.loadData();
  }



  ngOnInit(){
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
      fixedWeekCount : false,
      defaultDate: Date(),
      // editable: true,
      allDay : true,

      // eventLimit: true, // allow "more" link when too many events
      //   events: []
    };
  }

  loadData() {

    let data:Observable<any>;

    // Or to get a key/value pair
    this.storage.get('token').then((val) => {
        data = this.http.get('https://jmclicks.com/api/holiday?token=' + val.token);
        data.subscribe(result => {
          this.items = result;
        })
    });

    this.storage.get('token').then((val) => {
      this.http.get<any>('https://jmclicks.com/api/gettimesheetcalendar?token=' + val.token).subscribe(result => {
        var arrEvent = [];
        for (let res of result.calendar) {
          if (res.Remarks.includes("Forgot to check-out")) {
            arrEvent.push(
              {
                title:   'Forgot to check-out!',
                start: new Date(res.start),
                end: new Date(res.end),
                allDay: true,
                backgroundColor: "#F22613", //red
                borderColor: "#F22613", //red
              }
            )
          }/*else if (res.Check_In_Type === "On Leave") {
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
            arrEvent.push(
              {
                title:   'OK!',
                start: new Date(res.start),
                end: new Date(res.end),
                allDay: true,
                backgroundColor: "#26A65B", //green
                borderColor: "#26A65B", //green
              }
            )
          }

         // console.log(arrEvent);

        };
        for (let res of result.leave)
        {
         // if (res.Leave_Status.includes("Forgot to check-out"))
          if (res.Leave_Status != null)
          {
            if (res.Leave_Status.includes("Pending")) {
              arrEvent.push(
                {
                  title: res.Leave_Type ,
                  start: new Date(res.start),
                  end: new Date(res.end),
                  allDay: true,
                  backgroundColor: "#fed330",
                  borderColor: "#fed330",
                });
            }
            else if (res.Leave_Status.includes("Approved")) {
              arrEvent.push(
                {
                  title: res.Leave_Type ,
                  start: new Date(res.start),
                  end: new Date(res.end),
                  allDay: true,
                  backgroundColor: "#78e08f",
                  borderColor: "#78e08f",
                });
            }
            else if (res.Leave_Status.includes("Rejected")) {
              arrEvent.push(
                {
                  title: res.Leave_Type ,
                  start: new Date(res.start),
                  end: new Date(res.end),
                  allDay: true,
                  backgroundColor: "#ff0000",
                  borderColor: "#ff0000",
                });
            }
            else if (res.Leave_Status.includes("Cancelled")) {
              arrEvent.push(
                {
                  title: res.Leave_Type ,
                  start: new Date(res.start),
                  end: new Date(res.end),
                  allDay: true,
                  backgroundColor: "#607D8B",
                  borderColor: "#607D8B",
                });
            }
          }
        };
        for (let res of result.holiday) {
          if(res.Holiday !=""){
            arrEvent.push(
              {
                title: res.Holiday,
                start: new Date(res.startD),
                end: new Date(res.endD),
                allDay: true,

              }
            )
          }
        }
        this.ucCalendar.fullCalendar( 'addEventSource', arrEvent);
      })

  });
  this.storage.get('token').then((val) => {
    this.http.get<any>('https://jmclicks.com/api/holidaytimesheetcalendar?token=' + val.token).subscribe(result => {
      var arrEvent = [];
      for (let res of result.leave) {
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
        if(res.Status !="") {
          arrEvent.push(
            {
              title:   res.Leave_Type,
              start: new Date(res.start),
              end: new Date(res.end),
              allDay: true,
              backgroundColor: "#A7A4A4", //grey
              borderColor: "#A7A4A4", //grey
            }
          )
        }


      };
      for (let res of result.holiday) {
        if(res.Holiday !=""){
          arrEvent.push(
            {
              title: res.Holiday,
              start: new Date(res.startD),
              end: new Date(res.endD),
              allDay: true,

            }
          )
        }
      }
      this.ucCalendar.fullCalendar( 'addEventSource', arrEvent);
    })

});
  }

  myFunction(date) {

    var monthNames = [
      "Jan", "Feb", "Mar",
      "Apr", "May", "Jun", "Jul",
      "Aug", "Sep", "Oct",
      "Nov", "Dec"
    ];

    var day = date.substring(8,10);
    var monthIndex = parseInt(date.substring(5,7))-1;
    var year = date.substring(0,4);

    return day + '-' + monthNames[monthIndex] + '-' + year;

  }

  submitClaim() {
    if(this.Start_Date > this.End_Date){
      this.toast.show(`Please insert the correct date`, '30000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
    )} else{
      this.navCtrl.push(this.tsdetailPage, {
      Start_Date: this.myFunction(this.Start_Date),
      End_Date: this.myFunction(this.End_Date)
      });
    }
  }

}
