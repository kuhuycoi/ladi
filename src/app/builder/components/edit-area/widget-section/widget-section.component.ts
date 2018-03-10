import { Component, OnInit, AfterContentInit, ElementRef, ViewChild, style, Input, OnChanges } from '@angular/core';
import { SectionActionService } from '../../../services/section-action.service';
import { WidgetSection } from '../../../interfaces/widget-section';
import { ComponentActionService } from '../../../services/component-action.service';
import { ComponentUI } from '../../../classes/component-ui';
import * as componentType from '../../../common/component-type';
declare var $: any;

@Component({
  selector: 'app-section',
  templateUrl: './widget-section.component.html',
  styleUrls: ['./widget-section.component.css']
})
export class WidgetSectionComponent implements AfterContentInit {
  @Input('section') section: WidgetSection;
  private componentUI: ComponentUI;
  constructor(private sectionActionService: SectionActionService, private elementRef: ElementRef,
    private componentActionService: ComponentActionService) {
  }
  // ngOnInit() {
  //     // this.sectionActionService.sectionElementRefs.push(this.elementRef);
  // }
  // ngOnChanges() {
  //   this.section = this.sectionActionService.getSectionById(this.sectionId);
  // }
  ngAfterContentInit() {
    this.sectionActionService.sectionElementRefs.push(this.elementRef);
    this.componentUI = new ComponentUI($(this.elementRef.nativeElement));
    this.componentUI.resizeDirection = [componentType.S_RESIZE];
    this.componentUI.initResize();
  }
}
