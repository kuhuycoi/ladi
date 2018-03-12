import { Component, OnInit, HostListener, ElementRef, AfterViewInit, OnChanges } from '@angular/core';
import { ComponentActionService } from '../../../services/component-action.service';
import { WidgetComponent } from '../../../interfaces/widget-component';
import { WidgetElementComponent } from '../../edit-area/widget-element/widget-element.component';

@Component({
  selector: 'app-settingbar',
  templateUrl: './settingbar.component.html',
  styleUrls: ['./settingbar.component.css']
})
export class SettingbarComponent implements OnInit {
  constructor(private cService: ComponentActionService, private elementRef: ElementRef) {
  }

  ngOnInit() {
  }

  @HostListener('click', ['$event', '$event.target'])
  click(event: MouseEvent, target) {
    event.preventDefault();
    event.stopPropagation();
  }

}
