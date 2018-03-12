import { Component, OnInit, AfterContentInit, ElementRef, ViewChild, style, Input, OnChanges, AfterContentChecked } from '@angular/core';
import { SectionActionService } from '../../../services/section-action.service';
import { WidgetSection } from '../../../interfaces/widget-section';
import { ComponentActionService } from '../../../services/component-action.service';
import { ComponentUI } from '../../../classes/component-ui';
import * as componentType from '../../../common/component-type';
import { WidgetEditSectionComponent } from '../widget-edit-section/widget-edit-section.component';
declare var $: any;

@Component({
  selector: 'app-section',
  templateUrl: './widget-section.component.html',
  styleUrls: ['./widget-section.component.css']
})
export class WidgetSectionComponent implements OnInit {
  @Input('section') section: WidgetSection;
  private componentUI: ComponentUI;
  constructor(private sectionActionService: SectionActionService, public elementRef: ElementRef) {
  }
  ngOnInit() {
    this.sectionActionService.sectionElementRefs.push(this.elementRef);
    this.componentUI = new ComponentUI($(this.elementRef.nativeElement));
    this.componentUI.resizeDirection = [componentType.S_RESIZE];
    this.componentUI.autoHide = true;
    const $this = this;
    const sService = this.sectionActionService;
    this.componentUI.onResizeStop = function (size) {
      $this.section.rect.dimension = size;
    };
    this.componentUI.initResize();
  }
}
