import { Component, OnInit, Input } from '@angular/core';
import { WidgetComponent } from '../../../../interfaces/widget-component';
import { ComponentActionService } from '../../../../services/component-action.service';
import { WidgetElementComponent } from '../../widget-element/widget-element.component';
import { Dimension } from '../../../../interfaces/dimension';
import { FontActionService } from '../../../../services/font-action.service';
import { element } from 'protractor';

@Component({
  selector: 'app-panel-character',
  templateUrl: './panel-character.component.html',
  styleUrls: ['./panel-character.component.scss']
})
export class PanelCharacterComponent implements OnInit {
  private element = this.cService.selectedComponent;
  private component: WidgetComponent = this.element.component;
  constructor(private cService: ComponentActionService, private fService: FontActionService) {
  }

  ngOnInit() {
    console.log(this.component.contentStyle['font-family']);
  }
  fontSizeChange(value) {
    const elm = this.element.elementRef.nativeElement as HTMLElement;
    this.component.contentStyle['font-size'] = value + 'px';
  }
}
