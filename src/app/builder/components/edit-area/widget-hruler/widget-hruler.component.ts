import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild, HostListener } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-widget-hruler',
  templateUrl: './widget-hruler.component.html',
  styleUrls: ['./widget-hruler.component.css']
})
export class WidgetHRulerComponent implements AfterViewChecked {
  @ViewChild('hNumbers') hNumbers: ElementRef;

  constructor(private elementRef: ElementRef) { }

  ngAfterViewChecked() {
    const hHeight = this.elementRef.nativeElement.offsetHeight;
    this.hNumbers.nativeElement.innerHTML = '';
    for (let i = 0; i <= hHeight - 100; i += 100) {
      this.hNumbers.nativeElement.innerHTML += '<div class="number">' + i + '</div>';
    }
  }
}
