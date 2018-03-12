import { Component, OnInit, ElementRef, Input, HostListener, AfterContentInit, AfterViewChecked, AfterContentChecked } from '@angular/core';
import { Rect } from '../../../interfaces/rect';
import { WidgetComponent } from '../../../interfaces/widget-component';
import * as componentType from '../../../common/component-type';
import { ComponentActionService } from '../../../services/component-action.service';
import { Offset } from '../../../interfaces/offset';
import { Dimension } from '../../../interfaces/dimension';
import { ComponentUI } from '../../../classes/component-ui';
import { X_RESIZE } from '../../../common/component-type';
import { element } from 'protractor';
import { SectionActionService } from '../../../services/section-action.service';
import { WidgetSectionComponent } from '../widget-section/widget-section.component';
declare var $: any;

@Component({
  selector: 'app-element',
  templateUrl: `./widget-element.component.html`,
  styleUrls: ['./widget-element.component.css']
})
export class WidgetElementComponent implements OnInit {
  private componentType = componentType;
  @Input('component') component: WidgetComponent;
  @Input('parent') parent: WidgetSectionComponent;
  private resize;
  public componentUI: ComponentUI;
  public isAttachEdit = false;

  constructor(public elementRef: ElementRef, private componentActionService: ComponentActionService,
    private sectionActionService: SectionActionService) {
  }
  ngOnInit() {
    const $this = this;
    const cService = this.componentActionService;
    const sService = this.sectionActionService;
    const parentElm = this.parent.elementRef.nativeElement;
    const elm: HTMLElement = this.elementRef.nativeElement;
    this.componentUI = new ComponentUI($(this.elementRef.nativeElement));
    this.componentUI.onDragStop = function (position) {
      const selectedId = elm.dataset.id;
      const offset = { top: elm.offsetTop, left: elm.offsetLeft };
      if (offset.top > parentElm.offsetHeight || offset.top < 0) {
        for (const sectionRef of sService.sectionElementRefs) {
          if (offset.top + parentElm.offsetTop < sectionRef.nativeElement.offsetTop + sectionRef.nativeElement.offsetHeight
            && offset.top + parentElm.offsetTop >= sectionRef.nativeElement.offsetTop) {
            $this.component.rect.offset = {
              top: position.top + parentElm.offsetTop - sectionRef.nativeElement.offsetTop,
              left: position.left
            };
            cService.moveComponentToSection(selectedId, sectionRef.nativeElement.dataset.id);
            sService.movedComponent = true;
            break;
          }
        }
      } else {
        $this.component.rect.offset = position;
      }
    };
    this.componentUI.onResizeStop = function (size) {
      $this.component.rect.dimension = size;
    };
    this.componentUI.initDrag();
    this.componentUI.resizeDirection = componentType.RESIZE_DIRECTIONS[this.component.type] || componentType.X_RESIZE;
    this.componentUI.initResize();
    if (!sService.movedComponent) {
      this.componentUI.disableDrag();
      this.componentUI.disableResize();
    }
    sService.movedComponent = false;
  }
  @HostListener('click', ['$event'])
  attachResizeElement(target: Event) {
    if (!this.isAttachEdit) {
      this.componentUI.enableDrag();
      this.componentUI.enableResize();
    }
    this.componentActionService.selectedComponent = this.component;
  }
  @HostListener('document:click', ['$event.target'])
  clickedOutside(target) {
    if (!this.elementRef.nativeElement.contains(target)) {
      this.componentUI.disableDrag();
      this.componentUI.disableResize();
      if (this.isAttachEdit) {
        const conentElm = this.elementRef.nativeElement.querySelector('.widget-content') as HTMLElement;
        conentElm.removeAttribute('contenteditable');
        this.isAttachEdit = false;
        this.component.content = conentElm.innerHTML;
      }
      // this.componentActionService.selectedComponent = null;
    }
  }
}
