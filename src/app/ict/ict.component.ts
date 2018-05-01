import { Component, OnInit } from '@angular/core';
declare var TweenLite : any;
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-ict',
  templateUrl: './ict.component.html',
  styleUrls: ['./ict.component.css']
})
export class IctComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(window).scrollTop(0);
    TweenLite.to('.load', 2,{height:0});
  }

}
