import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild, HostListener, Output } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-widget-vruler',
  templateUrl: './widget-vruler.component.html',
  styleUrls: ['./widget-vruler.component.css']
})
export class WidgetVRulerComponent implements AfterViewChecked {
  @ViewChild('vNumbers') vNumbers: ElementRef;
  private snapLines = [];

  constructor(private elementRef: ElementRef) { }

  ngAfterViewChecked() {
    const elm = this.elementRef.nativeElement as HTMLElement;
    const vruler = elm.querySelector('#v-ruler') as HTMLElement;
    const vWidth = vruler.offsetWidth;
    this.vNumbers.nativeElement.innerHTML = '';
    for (let i = 0; i < vWidth - 100; i += 100) {
      this.vNumbers.nativeElement.innerHTML += '<div class="number">' + i + '</div>';
    }
  }
  @HostListener('click', ['$event'])
  attachResizeElement(event: MouseEvent) {
    if (this.snapLines.indexOf(event.clientX) < 0) {
      this.snapLines.push(event.clientX);
    }
  }
}
