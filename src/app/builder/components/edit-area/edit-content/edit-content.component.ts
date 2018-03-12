import { Component, ElementRef, OnInit } from '@angular/core';
import { SectionActionService } from '../../../services/section-action.service';
declare var $: any;

@Component({
  selector: 'app-edit-content',
  templateUrl: './edit-content.component.html',
  styleUrls: ['./edit-content.component.scss']
})
export class EditContentComponent implements OnInit {
  constructor(private sectionActionService: SectionActionService, private elementRef: ElementRef) {
  }
  ngOnInit() {
    this.elementRef.nativeElement.style.height =
      document.querySelector('body').offsetHeight - 123 + 'px';
  }
}
