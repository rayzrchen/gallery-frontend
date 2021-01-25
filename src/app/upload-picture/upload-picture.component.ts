import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PictureService} from '../_services/picture.service';

@Component({
  selector: 'app-upload-picture',
  templateUrl: './upload-picture.component.html',
  styleUrls: ['./upload-picture.component.css']
})
export class UploadPictureComponent implements OnInit {

  fileToUpload?: File = null;
  galleryId?: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pictureService: PictureService,
  ) {
  }

  ngOnInit(): void {
    this.galleryId = this.activatedRoute.snapshot.params['gallery-id'];
  }

  handleFileInput(eventTarget: EventTarget): void {
    this.fileToUpload = (eventTarget as any).files.item(0);
  }

  uploadFileToActivity(): void {
    this.pictureService.upload(this.galleryId, this.fileToUpload)
      .subscribe(data => {
        alert('upload successful');
      }, error => {
        console.error(error);
      });
  }
}
