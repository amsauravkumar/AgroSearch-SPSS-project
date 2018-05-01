import { Component, OnInit } from '@angular/core';
declare var TweenLite : any;
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(window).scrollTop(0);
    TweenLite.to('.load', 2,{height:0});
  }

}
