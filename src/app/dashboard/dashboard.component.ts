import { Component, OnInit } from '@angular/core';
declare var TweenLite,TweenMax : any;
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(window).scrollTop(0);
    TweenLite.to('.load', 2,{height:0});
    var $rows = $('.start-hidden');
    $rows.hide();
  }

}
