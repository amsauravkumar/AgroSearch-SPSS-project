import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;
declare var TweenMax,TweenLite : any;

@Component({
  selector: 'app-nocontent',
  templateUrl: './nocontent.component.html',
  styleUrls: ['./nocontent.component.css']
})
export class NocontentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // TweenLite.to('app-footer', 0.1,{});
    // TweenLite.to('app-hammenu', 0.1,{opacity:0});
    $(window).scrollTop(0);
    $("app-footer").hide();
    $("app-hammenu").hide();
  }

}
