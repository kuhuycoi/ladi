import { ComponentActionService } from './../services/component-action.service';
import { SectionActionService } from './../services/section-action.service';
import { Directive, Inject, HostListener, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { Rect } from '../interfaces/rect';
import { Dimension } from '../interfaces/dimension';
import { Offset } from '../interfaces/offset';
import { WidgetComponent } from '../interfaces/widget-component';

@Directive({
  selector: '[appAddComponent]'
})
export class AddComponentDirective {
  @Input('appAddComponent') appAddComponent: string;
  constructor(@Inject(ComponentActionService) private componentActionService: ComponentActionService,
    @Inject(SectionActionService) private sectionActionService: SectionActionService) {
  }

  @HostListener('click')
  onClick() {
    const mostVisible = this.sectionActionService.mostVisible;
    const mostElementId = mostVisible.nativeElement.dataset.id;
    const componentId: string = this.componentActionService.addComponent(this.appAddComponent, mostElementId);
  }
}
