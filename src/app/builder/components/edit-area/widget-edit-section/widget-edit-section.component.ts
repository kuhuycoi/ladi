import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { SectionActionService } from '../../../services/section-action.service';
import { WidgetSectionComponent } from '../widget-section/widget-section.component';
declare var $: any;

@Component({
  selector: 'app-widget-edit-section',
  templateUrl: './widget-edit-section.component.html',
  styleUrls: ['./widget-edit-section.component.scss']
})
export class WidgetEditSectionComponent implements OnInit {
  @Input('parent') parent: WidgetSectionComponent;
  constructor(public elementRef: ElementRef, private sectionActionService: SectionActionService) { }

  ngOnInit() {
  }
  cloneSection(event: Event) {
    this.sectionActionService.cloneSectionByid(this.parent.section.id);
  }
  moveSection(event: Event, direction: number) {
    this.sectionActionService.moveSectionByid(this.parent.section, direction);
  }
  deleteSection(event: Event) {
    this.sectionActionService.deleteSection(this.parent.section);
  }

}
