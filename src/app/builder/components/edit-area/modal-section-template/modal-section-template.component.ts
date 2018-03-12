import { Component, OnInit, Input, Inject } from '@angular/core';
import { SectionActionService } from '../../../services/section-action.service';
import { WidgetSection } from '../../../interfaces/widget-section';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modal-section-template',
  templateUrl: './modal-section-template.component.html',
  styleUrls: ['./modal-section-template.component.scss']
})
export class ModalSectionTemplateComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private sectionActionService: SectionActionService) {
  }

  ngOnInit() {
  }

  addSection(event: Event, section: WidgetSection) {
    const sectionId = this.data.sectionId ? this.data.sectionId : this.sectionActionService.mostVisible.nativeElement.dataset.id;
    this.sectionActionService.addSection(sectionId, section);
  }
}
