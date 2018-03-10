import { Component, ElementRef, HostListener } from '@angular/core';
import { SectionActionService } from '../../../services/section-action.service';
declare var $: any;

@Component({
  selector: 'app-edit-content',
  templateUrl: './edit-content.component.html',
  styleUrls: ['./edit-content.component.scss']
})
export class EditContentComponent {
  constructor(private sectionActionService: SectionActionService, private elementRef: ElementRef) {
  }
}
