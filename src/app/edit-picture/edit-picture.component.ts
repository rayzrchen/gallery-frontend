import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-picture',
  templateUrl: './edit-picture.component.html',
  styleUrls: ['./edit-picture.component.css']
})
export class EditPictureComponent implements OnInit {

  galleryId?: string;
  pictureId?: string;
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.galleryId = this.activatedRoute.snapshot.params['gallery-id'];
    this.pictureId = this.activatedRoute.snapshot.params['picture-id'];
  }



}
