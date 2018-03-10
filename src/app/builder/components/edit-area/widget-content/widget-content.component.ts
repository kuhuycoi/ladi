import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'div[app-type="content"]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./widget-content.component.css']
})
export class WidgetContentComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
  }

}
