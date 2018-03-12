import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild, HostListener } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-widget-vruler',
  templateUrl: './widget-vruler.component.html',
  styleUrls: ['./widget-vruler.component.css']
})
export class WidgetVRulerComponent implements AfterViewChecked {
  // @ViewChild('vRuler') vRuler: ElementRef;
  @ViewChild('vNumbers') vNumbers: ElementRef;

  constructor(private elementRef: ElementRef) { }

  ngAfterViewChecked() {
    const vWidth = this.elementRef.nativeElement.offsetWidth;
    this.vNumbers.nativeElement.innerHTML = '';
    for (let i = 0; i < vWidth - 100; i += 100) {
      this.vNumbers.nativeElement.innerHTML += '<div class="number">' + i + '</div>';
    }
  }
}
