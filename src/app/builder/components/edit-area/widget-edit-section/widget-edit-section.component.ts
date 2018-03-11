import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { WidgetSection } from '../../../interfaces/widget-section';
declare var $: any;

@Component({
  selector: 'app-widget-edit-section',
  templateUrl: './widget-edit-section.component.html',
  styleUrls: ['./widget-edit-section.component.scss']
})
export class WidgetEditSectionComponent implements OnInit {
  @Input('parent') parent: WidgetSection;
  constructor(public elementRef: ElementRef) { }

  ngOnInit() {
  }

}
