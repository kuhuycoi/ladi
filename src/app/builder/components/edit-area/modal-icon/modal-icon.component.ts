import { Subject } from 'rxjs/Subject';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalActionService } from './../../../services/modal-action.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal-icon',
  templateUrl: './modal-icon.component.html',
  styleUrls: ['./modal-icon.component.css']
})
export class ModalIconComponent implements OnInit {

  @ViewChild('managerIcon') content: any;
  constructor(private modalActionService: ModalActionService, private ngbModal: NgbModal) {
    const popup: Subject<any> = new Subject<any>();
    popup.subscribe((val) => {
      if (val === 'open') {
        this.ngbModal.open(this.content, { size: 'lg' });
      }
    });
    modalActionService.popups['managerIcon'] = popup;
  }

  ngOnInit() {
  }

}
