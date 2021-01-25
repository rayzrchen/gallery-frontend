import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import {Gallery, GalleryService} from '../_services/gallery.service';
import {Picture, PictureService} from '../_services/picture.service';

@Component({
  selector: 'app-view-picture',
  templateUrl: './view-picture.component.html',
  styleUrls: ['./view-picture.component.css']
})
export class ViewPictureComponent implements OnInit {

  currentGallery?: Gallery;
  pictures: Picture[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private galleryService: GalleryService,
    private pictureService: PictureService,
  ) {
  }


  ngOnInit(): void {
    const galleryId = this.activatedRoute.snapshot.params['gallery-id'];
    this.galleryService.getOne(galleryId)
      .subscribe(
        resp => this.currentGallery = resp
      );

    this.pictureService.getAll(galleryId)
      .subscribe(
        resp => this.pictures = resp
      );

  }

}
