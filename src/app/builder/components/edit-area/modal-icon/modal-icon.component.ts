import { Subject } from 'rxjs/Subject';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal-icon',
  templateUrl: './modal-icon.component.html',
  styleUrls: ['./modal-icon.component.css']
})
export class ModalIconComponent implements OnInit {

  @ViewChild('managerIcon') content: any;
  constructor(private ngbModal: NgbModal) {
  }

  ngOnInit() {
  }

}
