import { Component, OnInit, HostListener, ElementRef, AfterViewInit, OnChanges } from '@angular/core';
import { ComponentActionService } from '../../../services/component-action.service';
import { WidgetComponent } from '../../../interfaces/widget-component';

@Component({
  selector: 'app-settingbar',
  templateUrl: './settingbar.component.html',
  styleUrls: ['./settingbar.component.css']
})
export class SettingbarComponent implements OnInit, OnChanges {
  get selectedComponent(): WidgetComponent {
    return this.cService.selectedComponent;
  }
  constructor(private cService: ComponentActionService, private elementRef: ElementRef) {
  }

  ngOnInit() {
  }
  ngOnChanges() {
    console.log(this.selectedComponent.contentStyle['font-size']);
  }

  @HostListener('click', ['$event', '$event.target'])
  click(event: MouseEvent, target) {
    event.preventDefault();
    event.stopPropagation();
  }

}
