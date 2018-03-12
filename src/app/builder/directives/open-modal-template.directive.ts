import { Directive, Input, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalSectionTemplateComponent } from '../components/edit-area/modal-section-template/modal-section-template.component';
import { WidgetSection } from '../interfaces/widget-section';

@Directive({
  selector: '[appOpenModalTemplate]'
})
export class OpenModalTemplateDirective {
  @Input('sectionId') sectionId: number;
  constructor(private dialog: MatDialog) { }
  @HostListener('click') onClick() {
    const dialogRef = this.dialog.open(ModalSectionTemplateComponent, {
      height: '800px',
      width: '1060',
      data: { sectionId: this.sectionId }
    });
  }

}
