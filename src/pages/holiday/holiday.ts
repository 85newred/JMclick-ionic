import { Component,OnInit,ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import { AuthProvider } from './../../providers/auth/auth';
import { Storage } from '@ionic/storage';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
/**
 * Generated class for the HolidayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-holiday',
  templateUrl: 'holiday.html',
})

export class HolidayPage implements OnInit{
  public items:any;
  private token: string = '';
  calendarOptions: any;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    // private auth: AuthProvider,
    private storage: Storage)
    {
      this.loadData();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HolidayPage');
  }

  ngOnInit(){
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
        agendaMonth:{
          type: 'listMonth',
          buttonText: 'Month'
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

  myFunction(date) {
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
}

  loadData(){

    let data:Observable<any>;

    // Or to get a key/value pair
    this.storage.get('token').then((val) => {
        data = this.http.get('https://jmclicks.com/api/holiday?token=' + val.token);
        data.subscribe(result => {
          this.items = result;
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



}
