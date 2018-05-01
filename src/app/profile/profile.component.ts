import { Component, OnInit } from '@angular/core';
declare var TweenLite : any;
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(window).scrollTop(0);
    TweenLite.to('.load', 2,{height:0});
  }

}
