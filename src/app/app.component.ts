import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  ngOnInit(){
   // $('.delay-1').delay(1000).fadeIn(1000);
  
  }
  

}
