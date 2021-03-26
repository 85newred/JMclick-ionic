import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams , Slides} from 'ionic-angular';

import { JobProgressPage } from "../jobprogress/jobprogress";
import { JobKivPage } from "../jobkiv/jobkiv";
import { JobCompletePage } from "../jobcomplete/jobcomplete";
import { Storage } from '@ionic/storage';
import { HttpClient } from "@angular/common/http";
import { JobRejectedPage } from '../jobrejected/jobrejected';
import { JobDetailsPage } from "../jobdetails/jobdetails";
import { App } from 'ionic-angular';
@Component({
  selector: 'page-alljob',
  templateUrl: 'alljob.html',
})
export class AllJobPage{
  @ViewChild('slider') slider: Slides;
  @ViewChild("segments") segments;
  page: any;
  @ViewChild(Slides) private slides: Slides;

  tab1: any;
  tab2: any;
  tab3: any;
  tab4: any;
  progressBadge: any;
  kivBadge: any;
  completeBadge: any;
  rejectedBadge: any;

  start:any;
  end:any;
  tab1Params:any;
  tab2Params:any;
  tab3Params:any;
  tab4Params:any;

  job: any;
  job2: any
  job3: any;
  joball:any;
  jobnew:any;
  jobopen:any;
  jobclose:any;

  notifications: any = [];
  constructor(
    private storage: Storage,
    private http:HttpClient,
    public navCtrl: NavController, 
    private app:App,
    public navParams: NavParams
  ) {
    this.tab1 = JobProgressPage;
    this.tab2 = JobKivPage;
    this.tab3 = JobCompletePage;
    this.tab4 = JobRejectedPage;
    this.progressBadge = 0;
    this.kivBadge = 0;
    this.completeBadge = 0;
    this.rejectedBadge = 0;
    this.start = this.navParams.get('Start_Date')
    this.end = this.navParams.get('End_Date')
    this.tab1Params = {start:this.start,end:this.end};
    this.tab2Params = {start:this.start,end:this.end};
    this.tab3Params = {start:this.start,end:this.end};
    this.tab4Params = {start:this.start,end:this.end};
    console.log(this.tab1Params)
  }
  ionViewDidEnter() {
    console.log('alljob')
    this.loadData();
    this.slideChanged();

  }
  selectedTab(index) {
    this.slider.slideTo(index);
    console.log("selectedTab",index)
  }


  // On slide changed
  slideChanged() {
    let currentIndex = this.slider.getActiveIndex();
    let slides_count = this.segments.nativeElement.childElementCount;

    this.page = currentIndex.toString();
    if(this.page >= slides_count)
      this.page = (slides_count-1).toString();

    console.log("slides_count",slides_count)
    console.log("this.page",this.page)
    this.centerScroll();
  }

  // Center current scroll
  centerScroll(){
    if(!this.segments || !this.segments.nativeElement)
      return;

    let sizeLeft = this.sizeLeft();
    let sizeCurrent = this.segments.nativeElement.children[this.page].clientWidth;
    let result = sizeLeft - (window.innerWidth / 2) + (sizeCurrent/2) ;

    result = (result > 0) ? result : 0;
    this.smoothScrollTo(result);
  }

  // Get size start to current
  sizeLeft(){
    let size = 0;
    for(let i = 0; i < this.page; i++){
      size+= this.segments.nativeElement.children[i].clientWidth;
    }
    return size;
  }

  // Easing function
  easeInOutQuart(time, from, distance, duration) {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  }

  // Animate scroll
  smoothScrollTo(endX){
    let startTime = new Date().getTime();
    let startX = this.segments.nativeElement.scrollLeft;
    let distanceX = endX - startX;
    let duration = 400;

    let timer = setInterval(() => {
      var time = new Date().getTime() - startTime;
      var newX = this.easeInOutQuart(time, startX, distanceX, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      this.segments.nativeElement.scrollLeft = newX;
    }, 1000 / 60); // 60 fps
  }
  public ngOnInit() {
    // this.slides.effect = 'coverflow';
    // this.slides.centeredSlides = false;
    this.slides.slidesPerView = 1;
    this.slides.spaceBetween = 0;
    
    this.slides.coverflow = {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: false,
    }
  }
  loadData() {
    this.storage.get('token').then((val) => {
      this.http.get<{badge_count: any}>('https://jmclicks.com/api/notifications/getJob?token=' + val.token,{params:{type:"Job In-Progress"}}).subscribe(result => {
        this.progressBadge = result.badge_count > 0 ? result.badge_count : null;
      })
      this.http.get<{badge_count: any}>('https://jmclicks.com/api/notifications/getJob?token=' + val.token,{params:{type:"Job KIV"}}).subscribe(result => {
        this.kivBadge = result.badge_count > 0 ? result.badge_count : null;
      })
      this.http.get<{badge_count: any}>('https://jmclicks.com/api/notifications/getJob?token=' + val.token,{params:{type:"Job Complete"}}).subscribe(result => {
        this.completeBadge = result.badge_count > 0 ? result.badge_count : null;
      })
      this.http.get<{badge_count: any}>('https://jmclicks.com/api/notifications/getJob?token=' + val.token,{params:{type:"Job Rejected"}}).subscribe(result => {
        this.rejectedBadge = result.badge_count > 0 ? result.badge_count : null;
      })
    });

    this.storage.get('token').then((val)=>{
      this.http.get('https://jmclicks.com/api/myjob/getMyJob?token=' + val.token,{
        params:{
          status:'All',
          Start_Date:this.start,
          End_Date:this.end
        }
      }).subscribe(result=>{
        this.joball = result;
      })

      this.http.get<{badge_count: any, notifications: any}>('https://jmclicks.com/api/notifications/getJob?token=' + val.token,{params:{type:"Job In-Progress"}}).subscribe(result => {
        let t = this;
        result.notifications.map(function (value) {
          t.notifications[value.TargetId] = value
        })
      })
    })

    this.storage.get('token').then((val)=>{
      this.http.get('https://jmclicks.com/api/myjob/getMyJob?token=' + val.token,{
        params:{
          status:'In-Progress',
          Start_Date:this.start,
          End_Date:this.end
        }
      }).subscribe(result=>{
        this.job = result;
      })

      this.http.get<{badge_count: any, notifications: any}>('https://jmclicks.com/api/notifications/getJob?token=' + val.token,{params:{type:"Job In-Progress"}}).subscribe(result => {
        let t = this;
        result.notifications.map(function (value) {
          t.notifications[value.TargetId] = value
        })
      })
    })

    this.storage.get('token').then((val)=>{
      this.http.get('https://jmclicks.com/api/myjob/getMyJob?token=' + val.token,{
        params:{
          status:'KIV',
          Start_Date:this.start,
          End_Date:this.end
        }
      }).subscribe(result=>{
        this.job2 = result;
      })

      this.http.get<{badge_count: any, notifications: any}>('https://jmclicks.com/api/notifications/getJob?token=' + val.token,{params:{type:"Job KIV"}}).subscribe(result => {
        let t = this;
        result.notifications.map(function (value) {
          t.notifications[value.TargetId] = value
        })
      })
    })

    this.storage.get('token').then((val)=>{
      this.http.get('https://jmclicks.com/api/myjob/getMyJob?token=' + val.token,{
        params:{
          status:'Complete',
          Start_Date:this.start,
          End_Date:this.end
        }
      }).subscribe(result=>{
        this.job3 = result;
      })

      this.http.get<{badge_count: any, notifications: any}>('https://jmclicks.com/api/notifications/getJob?token=' + val.token,{params:{type:"Job Complete"}}).subscribe(result => {
        let t = this;
        result.notifications.map(function (value) {
          t.notifications[value.TargetId] = value
        })
      })
    })

    this.storage.get('token').then((val)=>{
      this.http.get('https://jmclicks.com/api/myjob/getMyJob?token=' + val.token,{
        params:{
          status:'ISDP Open',
          Start_Date:this.start,
          End_Date:this.end
        }
      }).subscribe(result=>{
        this.jobopen = result;
      })

      this.http.get<{badge_count: any, notifications: any}>('https://jmclicks.com/api/notifications/getJob?token=' + val.token,{params:{type:"Job ISDP Open"}}).subscribe(result => {
        let t = this;
        result.notifications.map(function (value) {
          t.notifications[value.TargetId] = value
        })
      })
    })

    this.storage.get('token').then((val)=>{
      this.http.get('https://jmclicks.com/api/myjob/getMyJob?token=' + val.token,{
        params:{
          status:'ISDP Close',
          Start_Date:this.start,
          End_Date:this.end
        }
      }).subscribe(result=>{
        this.jobclose = result;
      })

      this.http.get<{badge_count: any, notifications: any}>('https://jmclicks.com/api/notifications/getJob?token=' + val.token,{params:{type:"Job ISDP Close"}}).subscribe(result => {
        let t = this;
        result.notifications.map(function (value) {
          t.notifications[value.TargetId] = value
        })
      })
    })

  }

  details(d){
    let nav = this.app.getRootNav();
    nav.push(JobDetailsPage, d)
  }
  onCancel(ev) {
    // Reset the field
    console.log('reset')
    ev.target.value = '';
    this.loadData();
  }

  
  getList0(ev: any) {
    // this.loadData();
    console.log(ev.target.value);
    // this.gen();

    let serVal = ev.target.value;

    if (serVal && serVal.trim() != '') {
      this.joball = this.joball.filter((item) => {
        return ((item.Company_Name.toLowerCase().indexOf(serVal.toLowerCase()) > -1 )
        // || item.acceptedName.toLowerCase().indexOf(serVal.toLowerCase()) > -1
        // || item.payment_terms.toLowerCase().indexOf(serVal.toLowerCase()) > -1
        || (item.pr_no.toLowerCase().indexOf(serVal.toLowerCase()) > -1 )
        || (item.Site_ID && item.Site_ID.toLowerCase().indexOf(serVal.toLowerCase()) > -1)
        || (item.Site_Name && item.Site_Name.toLowerCase().indexOf(serVal.toLowerCase()) > -1)
        );
      })
    }else {
      this.onCancel(ev);
    }
  }

  getList1(ev: any) {
    // this.loadData();
    console.log(ev.target.value);
    // this.gen();

    let serVal = ev.target.value;
    if (serVal && serVal.trim() != '') {
      this.job = this.job.filter((item) => {
        return (item.Company_Name.toLowerCase().indexOf(serVal.toLowerCase()) > -1 
        || item.acceptedName.toLowerCase().indexOf(serVal.toLowerCase()) > -1
        || item.payment_terms.toLowerCase().indexOf(serVal.toLowerCase()) > -1
        || item.pr_no.toLowerCase().indexOf(serVal.toLowerCase()) > -1
        );
      })
    }else {
      this.onCancel(ev);
    }
  }

  getList2(ev: any) {
    // this.loadData();
    console.log(ev.target.value);
    // this.gen();

    let serVal = ev.target.value;
    
    if (serVal && serVal.trim() != '') {
      this.job2 = this.job2.filter((item) => {
        return (item.Company_Name.toLowerCase().indexOf(serVal.toLowerCase()) > -1 
        || item.acceptedName.toLowerCase().indexOf(serVal.toLowerCase()) > -1
        || item.payment_terms.toLowerCase().indexOf(serVal.toLowerCase()) > -1
        || item.pr_no.toLowerCase().indexOf(serVal.toLowerCase()) > -1
        );
      })
    }else {
      this.onCancel(ev);
    }
  }

  getList3(ev: any) {
    // this.loadData();
    console.log(ev.target.value);
    // this.gen();

    let serVal = ev.target.value;

    if (serVal && serVal.trim() != '') {
      this.job3 = this.job3.filter((item) => {
        return (item.Company_Name.toLowerCase().indexOf(serVal.toLowerCase()) > -1 
        || item.acceptedName.toLowerCase().indexOf(serVal.toLowerCase()) > -1
        || item.payment_terms.toLowerCase().indexOf(serVal.toLowerCase()) > -1
        || item.pr_no.toLowerCase().indexOf(serVal.toLowerCase()) > -1
        );
      })
    }else {
      this.onCancel(ev);
    }
  }

  getList4(ev: any) {
    // this.loadData();
    console.log(ev.target.value);
    // this.gen();

    let serVal = ev.target.value;
    
    if (serVal && serVal.trim() != '') {
      this.jobopen = this.jobopen.filter((item) => {
        return (item.Company_Name.toLowerCase().indexOf(serVal.toLowerCase()) > -1 
        || item.acceptedName.toLowerCase().indexOf(serVal.toLowerCase()) > -1
        || item.payment_terms.toLowerCase().indexOf(serVal.toLowerCase()) > -1
        || item.pr_no.toLowerCase().indexOf(serVal.toLowerCase()) > -1
        );
      })
    }else {
      this.onCancel(ev);
    }
  }

  getList5(ev: any) {
    // this.loadData();
    console.log(ev.target.value);
    // this.gen();
    let serVal = ev.target.value;
  
    if (serVal && serVal.trim() != '') {
      this.jobclose = this.jobclose.filter((item) => {
        return (item.Company_Name.toLowerCase().indexOf(serVal.toLowerCase()) > -1 
        || item.acceptedName.toLowerCase().indexOf(serVal.toLowerCase()) > -1
        || item.payment_terms.toLowerCase().indexOf(serVal.toLowerCase()) > -1
        || item.pr_no.toLowerCase().indexOf(serVal.toLowerCase()) > -1
        );
      })
    }else {
      this.onCancel(ev);
    }
  }


  
}
