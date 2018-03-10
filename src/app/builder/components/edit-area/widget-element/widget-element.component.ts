import { Component, OnInit, ElementRef, Input, ViewChild, HostListener, AfterContentInit } from '@angular/core';
import { Rect } from '../../../interfaces/rect';
import { WidgetComponent } from '../../../interfaces/widget-component';
import * as componentType from '../../../common/component-type';
import { ComponentActionService } from '../../../services/component-action.service';
import { Offset } from '../../../interfaces/offset';
import { Dimension } from '../../../interfaces/dimension';
import { ComponentUI } from '../../../classes/component-ui';
declare var $: any;

@Component({
  selector: 'app-element',
  templateUrl: `./widget-element.component.html`,
  styleUrls: ['./widget-element.component.css']
})
export class WidgetElementComponent implements OnInit {
  private componentType = componentType;
  private isAttached = false;
  @Input('component') component: WidgetComponent;
  private resize;
  private componentUI: ComponentUI;
  constructor(private elementRef: ElementRef, private componentActionService: ComponentActionService) {
  }
  ngOnInit() {
    // if (this.componentActionService.selectedRef) {
    //   this.componentActionService.selectedRef.nativeElement.classList = '';
    //   this.isAttached = true;
    //   this.componentActionService.selectedRef = this.elementRef;
    //   this.componentActionService.selectedRef.nativeElement.classList.add('attach-resize');
    // }
  }
  @HostListener('click', ['$event'])
  attachResizeElement($event: Event) {
    $event.preventDefault();
    $event.stopPropagation();
    const cService = this.componentActionService;
    const selectedRef = this.componentActionService.selectedRef;
    if (selectedRef) {
      if ($(selectedRef.nativeElement).draggable('instance')) {
        $(selectedRef.nativeElement).draggable('destroy');
      }
      if ($(selectedRef.nativeElement).resizable('instance')) {
        $(selectedRef.nativeElement).resizable('destroy');
      }
    }
    if (this.elementRef !== this.componentActionService.selectedRef) {
      this.componentActionService.selectedRef = this.elementRef;
    }
    this.componentUI = new ComponentUI($(this.elementRef.nativeElement));
    this.componentUI.onDragStop = function (position) {
      cService.updateComponentOffset(cService.selectedRef.nativeElement.dataset.id, position);
    };
    this.componentUI.initDrag();
    this.componentUI.resizeDirection = componentType.RESIZE_DIRECTIONS[this.component.type];
    this.componentUI.initResize();
  }
  @HostListener('document:click', ['$event'])
  clickedOutside($event) {
    // $(this.elementRef.nativeElement).resizable('destroy');
    const selectedRef: ElementRef = this.componentActionService.selectedRef;
    this.componentActionService.selectedRef = null;
    if (selectedRef) {
      if ($(selectedRef.nativeElement).draggable('instance')) {
        $(selectedRef.nativeElement).draggable('destroy');
      }
      if ($(selectedRef.nativeElement).resizable('instance')) {
        $(selectedRef.nativeElement).resizable('destroy');
      }
    }
    if (this.isAttached) {
      // const selectedElm: HTMLElement = selectedRef.nativeElement;
      // const elm: HTMLElement = this.componentActionService.selectedRef.nativeElement;
      // if (elm.classList.contains('attach-edit')) {
      //   const contentElm = elm.querySelector('.widget-content');
      //   if (contentElm) {
      //     this.componentActionService.updateComponentContent(elm.dataset.id, contentElm.innerHTML);
      //     contentElm.removeAttribute('contenteditable');
      //     this.componentActionService.updateComponentDimention(elm.dataset.id, { 'height': selectedElm.offsetHeight });
      //     (selectedElm.querySelector('.widget-element') as HTMLElement).style.removeProperty('min-height');
      //   }
      // }
      // elm.className = '';
    }
  }
}
