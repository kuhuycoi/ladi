import { Directive, Input, HostListener, Inject } from '@angular/core';
import { ModalImageComponent } from '../components/edit-area/modal-image/modal-image.component';
import { MatDialog } from '@angular/material';
declare var $: any;
@Directive({
  selector: '[appOpenModalImage]'
})
export class OpenModalImageDirective {
  constructor(public dialog: MatDialog) { }

  @HostListener('click') onClick() {
    const dialogRef = this.dialog.open(ModalImageComponent, {
      height: '100%',
      width: '100%',
    });
  }
}
