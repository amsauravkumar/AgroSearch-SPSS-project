import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;
declare var TweenMax,TweenLite,Power4,Bounce : any;
@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var $rows = $('.card');
    
    $('#search').keyup(function() {
      $rows.hide();
      $('.search-hide').hide();
      
      var alphabeticallyOrderedDivs = $rows.sort(function (a, b) {
        return $(a).find("h4").text() > $(b).find("h4").text();
      });
      $("#container").html(alphabeticallyOrderedDivs);

      var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
    
      $rows.show().filter(function() {
        var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
        return !~text.indexOf(val);
      }).hide();

      if( !val ) {
        $('.start-hidden').hide();
        $('.search-hide').show();
      }
    });
  }
}
