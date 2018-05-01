import { Component, OnInit } from '@angular/core';
declare var TweenLite,TweenMax : any;
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-scheme',
  templateUrl: './scheme.component.html',
  styleUrls: ['./scheme.component.css']
})
export class SchemeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(window).scrollTop(0);
    TweenLite.to('.load', 2,{height:0});
  }

}
