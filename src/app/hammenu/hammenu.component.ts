import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-hammenu',
  templateUrl: './hammenu.component.html',
  styleUrls: ['./hammenu.component.css']
})
export class HammenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $(document).delegate('.open', 'click', function(event){
          $(this).addClass('oppenned');
          event.stopPropagation();
      })
      $(document).delegate('body', 'click', function(event) {
          $('.open').removeClass('oppenned');
      })
      $(document).delegate('.cls', 'click', function(event){
          $('.open').removeClass('oppenned');
          event.stopPropagation();
      });
  });
  }

}
