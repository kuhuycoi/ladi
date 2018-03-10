import { Component, OnInit, ElementRef } from '@angular/core';
import { ComponentActionService } from '../../../services/component-action.service';

@Component({
  selector: 'app-widget-edit-handle',
  templateUrl: './widget-edit-handle.component.html',
  styleUrls: ['./widget-edit-handle.component.css']
})
export class WidgetEditHandleComponent implements OnInit {

  constructor(private componentActionService: ComponentActionService) { }

  ngOnInit() {
  }
   deleteComponent() {
    const selectedRef: ElementRef = this.componentActionService.selectedRef;
    const selectedElement: HTMLElement = this.componentActionService.selectedRef.nativeElement;
    const selectedId: string = selectedElement.dataset.id;
    this.componentActionService.deleteComponentById(selectedId);
    this.componentActionService.selectedRef = null;
    document.querySelector('.tooltip').remove();
  }

  cloneComponent() {
    const selectedRef: ElementRef = this.componentActionService.selectedRef;
    const selectedElement: HTMLElement = this.componentActionService.selectedRef.nativeElement;
    const selectedId: string = selectedElement.dataset.id;
    this.componentActionService.cloneComponentByid(selectedId);
  }
  enableEdit() {
    const selectedRef: ElementRef = this.componentActionService.selectedRef;
    const selectedElm: HTMLElement = selectedRef.nativeElement;
    (selectedElm.querySelector('.widget-element') as HTMLElement).style.minHeight = selectedElm.offsetHeight + 'px';
    selectedElm.style.removeProperty('height');
    this.componentActionService.selectedRef.nativeElement.classList.add('attach-edit');
    selectedElm.querySelector('.widget-content').setAttribute('contenteditable', 'true');
    const conentElm = selectedElm.querySelector('.widget-content');
    if (conentElm) {
      const textNode = conentElm.childNodes[0];
      const startIndex = 0;
      const endIndex = conentElm.innerHTML.length;
      const range = document.createRange();
      range.selectNodeContents(conentElm);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }

}
