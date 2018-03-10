import { ModalActionService } from './../services/modal-action.service';
import { Directive, Input, HostListener, Inject } from '@angular/core';
declare var $: any;
@Directive({
  selector: '[appOpenModal]'
})
export class OpenModalDirective {
  @Input('appOpenModal') appOpenModal: string;

  constructor(@Inject(ModalActionService) private modalActionService: ModalActionService) { }

  @HostListener('click') onClick() {
    this.modalActionService.popups[this.appOpenModal].next('open');
  }
}
