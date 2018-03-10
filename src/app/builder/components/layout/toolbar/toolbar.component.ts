import { Component, OnInit } from '@angular/core';
import * as componentType from '../../../common/component-type';
import { SectionActionService } from '../../../services/section-action.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  private componentType = componentType;
  private sectionRefs;
  constructor(private sectionActionService: SectionActionService) { }

  ngOnInit() {
    this.sectionRefs = this.sectionActionService.sectionElementRefs;
  }

  scrollToSection($event: Event, section: HTMLElement) {
    $event.preventDefault();
    window.scrollTo(0, section.offsetTop);
  }

}
