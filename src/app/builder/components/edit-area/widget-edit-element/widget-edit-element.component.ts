import { Component, OnInit, Input } from '@angular/core';
import { ComponentActionService } from '../../../services/component-action.service';
import { WidgetElementComponent } from '../widget-element/widget-element.component';

@Component({
  selector: 'app-widget-edit-element',
  templateUrl: './widget-edit-element.component.html',
  styleUrls: ['./widget-edit-element.component.css']
})
export class WidgetEditElementComponent implements OnInit {
  @Input('parent') parent: WidgetElementComponent;

  constructor(private componentActionService: ComponentActionService) { }

  ngOnInit() {
  }
  deleteComponent(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    const selectedId: string = this.parent.component.id;
    this.componentActionService.deleteComponentById(selectedId);
    this.componentActionService.selectedRef = null;
    document.querySelector('.tooltip').remove();
  }

  cloneComponent(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    const selectedId: string = this.parent.component.id;
    this.componentActionService.cloneComponentByid(selectedId);
  }
  enableEdit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    const parentRef = this.parent.elementRef;
    const parentElm: HTMLElement = parentRef.nativeElement;
    parentElm.style.minHeight = parentElm.offsetHeight + 'px';
    parentElm.style.removeProperty('height');
    this.parent.componentUI.disableDrag();
    const contentElm = (parentElm.querySelector('.widget-content') as HTMLElement);
    this.parent.isAttachEdit = true;
    contentElm.setAttribute('contenteditable', 'true');
    if (contentElm) {
      const textNode = contentElm.childNodes[0];
      const startIndex = 0;
      const endIndex = contentElm.innerHTML.length;
      const range = document.createRange();
      range.selectNodeContents(contentElm);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }

}
