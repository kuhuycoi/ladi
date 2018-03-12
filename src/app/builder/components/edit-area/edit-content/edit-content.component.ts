import { Component, ElementRef, OnInit } from '@angular/core';
import { SectionActionService } from '../../../services/section-action.service';
import { FontActionService } from '../../../services/font-action.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Url } from 'url';
declare var $: any;

@Component({
  selector: 'app-edit-content',
  templateUrl: './edit-content.component.html',
  styleUrls: ['./edit-content.component.scss']
})
export class EditContentComponent implements OnInit {
  constructor(private sectionActionService: SectionActionService, private sanitizer: DomSanitizer,
    private fService: FontActionService, private elementRef: ElementRef) {
  }
  fontUrl() {
    let fontUrl = 'https://fonts.googleapis.com/css?family=';
    this.fService.fonts.forEach((font, index) => {
      fontUrl += index ? '|' + font.href : font.href;
    });
    fontUrl += '&amp;subset=latin-ext,vietnamese';
    return this.sanitizer.bypassSecurityTrustResourceUrl(fontUrl);
  }
  ngOnInit() {
    this.elementRef.nativeElement.style.height =
      document.querySelector('body').offsetHeight - 123 + 'px';
  }
}
