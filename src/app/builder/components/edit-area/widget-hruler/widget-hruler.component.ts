import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild, HostListener } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-widget-hruler',
  templateUrl: './widget-hruler.component.html',
  styleUrls: ['./widget-hruler.component.css']
})
export class WidgetHRulerComponent implements AfterViewChecked {
  @ViewChild('hNumbers') hNumbers: ElementRef;
  private snapLines = [];

  constructor(private elementRef: ElementRef) { }

  ngAfterViewChecked() {
    const elm = this.elementRef.nativeElement as HTMLElement;
    const hruler = elm.querySelector('#h-ruler') as HTMLElement;
    const hHeight = hruler.offsetHeight;
    this.hNumbers.nativeElement.innerHTML = '';
    for (let i = 0; i <= hHeight - 100; i += 100) {
      this.hNumbers.nativeElement.innerHTML += '<div class="number">' + i + '</div>';
    }
  }
  @HostListener('click', ['$event'])
  attachResizeElement(event: MouseEvent) {
    if (this.snapLines.indexOf(event.clientY - 150) < 0) {
      this.snapLines.push(event.clientY - (document.querySelector('#header') as HTMLElement).offsetHeight);
    }
  }
}
