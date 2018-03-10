import { Subject } from 'rxjs/Subject';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalActionService } from './../../../services/modal-action.service';
import { Component, AfterViewInit, OnInit, ViewChild, Inject } from '@angular/core';
import { UploadFileService } from '../../../services/upload-file.service';
import { Subscribable } from 'rxjs/Observable';

@Component({
  selector: 'app-modal-image',
  templateUrl: './modal-image.component.html',
  styleUrls: ['./modal-image.component.css'],
})
export class ModalImageComponent implements OnInit {
  private isDragOver = false;
  private images = [{ fileName: 'post_1', url: '/assets/builder/img/blog/post_1.jpg' },
  { fileName: 'post_2', url: '/assets/builder/img/blog/post_2.jpg' }];
  @ViewChild('managerImage') content: any;
  constructor(private uploadFileService: UploadFileService, private modalActionService: ModalActionService, private ngbModal: NgbModal) {
    const popup: Subject<any> = new Subject<any>();
    popup.subscribe((val) => {
      if (val === 'open') {
        this.ngbModal.open(this.content, { size: 'lg' });
      }
    });
    modalActionService.popups['managerImage'] = popup;
  }
  ngOnInit() {
  }

  onDrag(event: any) {
    this.preventDefault(event);
  }

  onDrop(event: any) {
    this.preventDefault(event);
    const droppedFiles = event.dataTransfer.files;
    const formData = new FormData();
    formData.append('action', 'uploadImages');
    Object.keys(droppedFiles).forEach(key =>
      formData.append(`file`, droppedFiles[key], droppedFiles[key]['name'])
    );
    console.log(formData);
    this.uploadFileService.uploadFiles(formData);
  }

  dragStart(event: any) {
    this.preventDefault(event);
  }

  dragOver(event: any) {
    this.preventDefault(event);
    this.isDragOver = true;
  }

  dragEnter(event: any) {
    this.preventDefault(event);
    this.isDragOver = true;
  }

  dragLeave(event: any) {
    this.preventDefault(event);
    this.isDragOver = false;
  }

  dragEnd($event: any) {
    this.preventDefault(event);
    this.isDragOver = false;
  }

  preventDefault(event: any) {
    event.preventDefault();
    event.stopPropagation();
  }
}
