import { Subject } from 'rxjs/Subject';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  private images = [
    { fileName: 'girls-1', url: '/assets/img/uploads/girls-1.jpg' },
    { fileName: 'girls-2', url: '/assets/img/uploads/girls-2.jpg' },
    { fileName: 'girls-3', url: '/assets/img/uploads/girls-3.jpg' },
    { fileName: 'music-1', url: '/assets/img/uploads/music-1.jpg' },
    { fileName: 'music-2', url: '/assets/img/uploads/music-2.jpg' },
    { fileName: 'music-3', url: '/assets/img/uploads/music-3.jpg' },
    { fileName: 'music-4', url: '/assets/img/uploads/music-4.jpg' },
    { fileName: 'music-5', url: '/assets/img/uploads/music-5.jpg' },
    { fileName: 'nature-1', url: '/assets/img/uploads/nature-1.jpg' },
    { fileName: 'nature-2', url: '/assets/img/uploads/nature-2.jpg' },
    { fileName: 'nature-3', url: '/assets/img/uploads/nature-3.jpg' },
    { fileName: 'nature-4', url: '/assets/img/uploads/nature-4.jpg' },
    { fileName: 'nature-5', url: '/assets/img/uploads/nature-5.jpg' },
    { fileName: 'nature-6', url: '/assets/img/uploads/nature-6.jpg' },
    { fileName: 'nature-7', url: '/assets/img/uploads/nature-7.jpg' },
    { fileName: 'space-1', url: '/assets/img/uploads/space-1.jpg' },
    { fileName: 'space-2', url: '/assets/img/uploads/space-2.jpg' }
];
  @ViewChild('managerImage') content: any;
  constructor(private uploadFileService: UploadFileService) {
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
